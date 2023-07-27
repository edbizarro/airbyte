package io.airbyte.integrations.destination.bigquery.typing_deduping;

import com.google.cloud.bigquery.BigQuery;
import com.google.cloud.bigquery.Field;
import com.google.cloud.bigquery.Table;
import com.google.cloud.bigquery.TableDefinition;
import com.google.cloud.bigquery.TableId;
import io.airbyte.integrations.base.destination.typing_deduping.CollectionUtils;
import io.airbyte.integrations.base.destination.typing_deduping.DestinationV1V2Migrator;
import io.airbyte.integrations.base.destination.typing_deduping.MigrationResult;
import io.airbyte.integrations.base.destination.typing_deduping.StreamConfig;
import io.airbyte.integrations.destination.bigquery.BigQuerySQLNameTransformer;
import io.airbyte.protocol.models.AirbyteStreamNameNamespacePair;
import java.util.Collection;
import java.util.Collections;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

public class BigQueryV1V2Migrator implements DestinationV1V2Migrator<TableDefinition> {

  private final BigQuery bq;
  private final BigQuerySqlGenerator bQsqlGenerator;
  private final BigQueryDestinationHandler bQdestinationHandler;

  private final BigQuerySQLNameTransformer nameTransformer;

  public BigQueryV1V2Migrator(final BigQuery bq, BigQuerySqlGenerator bqSqlGenerator, BigQueryDestinationHandler bQdestinationHandler,
      BigQuerySQLNameTransformer nameTransformer) {
    this.bq = bq;
    this.bQsqlGenerator = bqSqlGenerator;
    this.bQdestinationHandler = bQdestinationHandler;
    this.nameTransformer = nameTransformer;
  }

  /**
   * Primary method for this class, wrapping the primary method of the interface
   *
   * @param streamConfig the stream to check the migration status of
   * @return an optional migration result
   */
  public Optional<MigrationResult> migrateIfNecessary(StreamConfig streamConfig) {
    return migrateIfNecessary(this.bQsqlGenerator, this.bQdestinationHandler, streamConfig);
  }

  @Override
  public boolean doesAirbyteInternalNamespaceExist(StreamConfig streamConfig) {
    return bq.getDataset(streamConfig.id().rawNamespace()).exists();
  }

  @Override
  public Optional<TableDefinition> getTableIfExists(AirbyteStreamNameNamespacePair nameAndNamespacePair) {
    Table table = bq.getTable(TableId.of(nameAndNamespacePair.getNamespace(), nameAndNamespacePair.getName()));
    return table.exists() ? Optional.of(table.getDefinition()) : Optional.empty();
  }

  @Override
  public boolean schemaMatchesExpectation(TableDefinition existingTable, Collection<String> expectedColumnNames) {
    Set<String> existingSchemaColumns = Optional.ofNullable(existingTable.getSchema())
        .map(schema -> schema.getFields().stream()
            .map(Field::getName)
            .collect(Collectors.toSet()))
        .orElse(Collections.emptySet());

    return !existingSchemaColumns.isEmpty() &&
        CollectionUtils.containsAllIgnoreCase(expectedColumnNames, existingSchemaColumns);
  }

  @Override
  public AirbyteStreamNameNamespacePair convertToV1RawName(StreamConfig streamConfig) {
    return new AirbyteStreamNameNamespacePair(
        this.nameTransformer.getNamespace(streamConfig.id().originalNamespace()),
        this.nameTransformer.getRawTableName(streamConfig.id().originalName())
    );
  }
}
