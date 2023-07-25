#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#


import json
import logging
import os
from pathlib import Path
from typing import List, Mapping, Optional

import dagger
import docker
import pytest
import yaml
from airbyte_protocol.models import AirbyteMessage, ConfiguredAirbyteCatalog, OrchestratorType
from airbyte_protocol.models import Type as AirbyteMessageType
from connector_acceptance_test.utils import SecretDict
from pydantic import ValidationError


class ConnectorRunner:
    def __init__(
        self,
        image_name: str,
        dagger_client: dagger.Client,
        connector_configuration_path: Optional[Path] = None,
        custom_environment_variables: Optional[Mapping] = {},
    ):
        self._check_connector_under_test()
        self.image_name = image_name
        self.dagger_client = dagger_client
        self._connector_configuration_path = connector_configuration_path
        self._custom_environment_variables = custom_environment_variables
        connector_image_tarball_path = self._get_connector_image_tarball_path()
        self._connector_under_test_container = self._get_connector_container(connector_image_tarball_path)

    async def call_spec(self, raise_container_error=False) -> List[AirbyteMessage]:
        return await self._run(["spec"], raise_container_error)

    async def call_check(self, config: SecretDict, raise_container_error: bool = False) -> List[AirbyteMessage]:
        return await self._run(["check", "--config", "/data/tap_config.json"], raise_container_error, config=config)

    async def call_discover(self, config: SecretDict, raise_container_error: bool = False) -> List[AirbyteMessage]:
        return await self._run(["discover", "--config", "/data/tap_config.json"], raise_container_error, config=config)

    async def call_read(
        self, config: SecretDict, catalog: ConfiguredAirbyteCatalog, raise_container_error: bool = False
    ) -> List[AirbyteMessage]:
        return await self._run(
            ["read", "--config", "/data/tap_config.json", "--catalog", "/data/catalog.json"],
            raise_container_error,
            config=config,
            catalog=catalog,
        )

    async def call_read_with_state(
        self, config: SecretDict, catalog: ConfiguredAirbyteCatalog, state: dict, raise_container_error: bool = False
    ) -> List[AirbyteMessage]:
        return await self._run(
            ["read", "--config", "/data/tap_config.json", "--catalog", "/data/catalog.json", "--state", "/data/state.json"],
            raise_container_error,
            config=config,
            catalog=catalog,
            state=state,
        )

    async def get_container_env_variable_value(self, name: str) -> str:
        return await self._connector_under_test_container.env_variable(name)

    async def get_container_label(self, label: str):
        return await self._connector_under_test_container.label(label)

    async def get_container_entrypoint(self):
        entrypoint = await self._connector_under_test_container.entrypoint()
        return " ".join(entrypoint)

    def _get_connector_image_tarball_path(self) -> Optional[Path]:
        if "RUN_IN_AIRBYTE_CI" not in os.environ and not self.image_name.endswith(":dev"):
            return None
        if "RUN_IN_AIRBYTE_CI" in os.environ:
            connector_under_test_image_tar_path = Path("/cat/connector_under_test_image.tar")
        elif self.image_name.endswith(":dev"):
            connector_under_test_image_tar_path = Path("/tmp/connector_under_test_image.tar")
            self._export_local_connector_image_to_tarball(self.image_name, connector_under_test_image_tar_path)
        assert connector_under_test_image_tar_path.exists(), "Connector image tarball does not exist"
        return connector_under_test_image_tar_path

    def _export_local_connector_image_to_tarball(self, local_image_name: str, tarball_path: Path):
        docker_client = docker.from_env()
        try:
            image = docker_client.images.get(local_image_name)
        except docker.errors.ImageNotFound:
            pytest.fail(f"Image {local_image_name} not found, please make sure to build or pull it before running the tests")
        with open(tarball_path, "wb") as f:
            for chunk in image.save(named=True):
                f.write(chunk)
        return tarball_path

    def _get_connector_container_from_tarball(self, tarball_path: Path) -> dagger.Container:
        container_under_test_tar_file = (
            self.dagger_client.host().directory(str(tarball_path.parent), include=tarball_path.name).file(tarball_path.name)
        )
        return self.dagger_client.container().import_(container_under_test_tar_file)

    def _get_connector_container(self, connector_image_tarball_path: Optional[Path]) -> dagger.Container:
        if connector_image_tarball_path is not None:
            container = self._get_connector_container_from_tarball(connector_image_tarball_path)
        else:
            # Try to pull the image from DockerHub
            container = self.dagger_client.container().from_(self.image_name)
        # Client might pass a cachebuster env var to force recreation of the container
        # We pass this env var to the container to ensure the cache is busted
        if cachebuster_value := os.environ.get("CACHEBUSTER"):
            container = container.with_env_variable("CACHEBUSTER", cachebuster_value)
        for key, value in self._custom_environment_variables.items():
            container = container.with_env_variable(key, str(value))
        return container

    async def _run(
        self, airbyte_command: List[str], raise_container_error: bool, config=None, catalog=None, state=None
    ) -> List[AirbyteMessage]:
        container = self._connector_under_test_container
        if config:
            container = container.with_new_file("/data/tap_config.json", json.dumps(dict(config)))
        if state:
            container = container.with_new_file("/data/state.json", json.dumps(state))
        if catalog:
            container = container.with_new_file("/data/catalog.json", catalog.json())
        try:
            container = container.with_exec(airbyte_command)
            output = await container.stdout()
        except dagger.QueryError as e:
            if raise_container_error:
                raise e
            else:
                if isinstance(e, dagger.ExecError):
                    output = e.stdout + e.stderr
                else:
                    output = str(e)
        return self.parse_airbyte_messages_from_command_output(output)

    def parse_airbyte_messages_from_command_output(self, command_output: str) -> List[AirbyteMessage]:
        airbyte_messages = []
        for line in command_output.splitlines():
            try:
                airbyte_message = AirbyteMessage.parse_raw(line)
                if airbyte_message.type is AirbyteMessageType.CONTROL and airbyte_message.control.type is OrchestratorType.CONNECTOR_CONFIG:
                    self._persist_new_configuration(airbyte_message.control.connectorConfig.config, int(airbyte_message.control.emitted_at))
                airbyte_messages.append(airbyte_message)
            except ValidationError as exc:
                logging.warning("Unable to parse connector's output %s, error: %s", line, exc)
        return airbyte_messages

    def _persist_new_configuration(self, new_configuration: dict, configuration_emitted_at: int) -> Optional[Path]:
        """Store new configuration values to an updated_configurations subdir under the original configuration path.
        N.B. The new configuration will not be stored if no configuration path was passed to the ConnectorRunner.
        Args:
            new_configuration (dict): The updated configuration
            configuration_emitted_at (int): Timestamp at which the configuration was emitted (ms)

        Returns:
            Optional[Path]: The updated configuration path if it was persisted.
        """
        if self._connector_configuration_path is None:
            logging.warning("No configuration path was passed to the ConnectorRunner. The new configuration was not persisted")
            return None

        with open(self._connector_configuration_path) as old_configuration_file:
            old_configuration = json.load(old_configuration_file)

        if new_configuration != old_configuration:
            file_prefix = self._connector_configuration_path.stem.split("|")[0]
            if "/updated_configurations/" not in str(self._connector_configuration_path):
                Path(self._connector_configuration_path.parent / "updated_configurations").mkdir(exist_ok=True)
                new_configuration_file_path = Path(
                    f"{self._connector_configuration_path.parent}/updated_configurations/{file_prefix}|{configuration_emitted_at}{self._connector_configuration_path.suffix}"
                )
            else:
                new_configuration_file_path = Path(
                    f"{self._connector_configuration_path.parent}/{file_prefix}|{configuration_emitted_at}{self._connector_configuration_path.suffix}"
                )

            with open(new_configuration_file_path, "w") as new_configuration_file:
                json.dump(new_configuration, new_configuration_file)
            logging.info(f"Stored most recent configuration value to {new_configuration_file_path}")
            return new_configuration_file_path

    def _check_connector_under_test(self):
        """
        As a safety measure, we check that the connector under test matches the connector being tested by comparing the content of the metadata.yaml file to the CONNECTOR_UNDER_TEST_TECHNICAL_NAME environment varialbe.
        When running CAT from airbyte-ci we set this CONNECTOR_UNDER_TEST_TECHNICAL_NAME env var name,
        This is a safety check to ensure the correct test inputs are mounted to the CAT container.
        """
        if connector_under_test_technical_name := os.environ.get("CONNECTOR_UNDER_TEST_TECHNICAL_NAME"):
            metadata = yaml.safe_load(Path("/test_input/metadata.yaml").read_text())
            assert metadata["data"]["dockerRepository"] == f"airbyte/{connector_under_test_technical_name}", (
                f"Connector under test env var {connector_under_test_technical_name} does not match the connector "
                f"being tested {metadata['data']['dockerRepository']}"
            )
