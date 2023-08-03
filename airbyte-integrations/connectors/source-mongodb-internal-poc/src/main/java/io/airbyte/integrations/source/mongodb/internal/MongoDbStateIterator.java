/*
 * Copyright (c) 2023 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.integrations.source.mongodb.internal;

import com.mongodb.client.MongoCursor;
import io.airbyte.commons.json.Jsons;
import io.airbyte.db.mongodb.MongoUtils;
import io.airbyte.protocol.models.v0.AirbyteMessage;
import io.airbyte.protocol.models.v0.AirbyteMessage.Type;
import io.airbyte.protocol.models.v0.AirbyteRecordMessage;
import io.airbyte.protocol.models.v0.AirbyteStateMessage;
import io.airbyte.protocol.models.v0.AirbyteStateMessage.AirbyteStateType;
import io.airbyte.protocol.models.v0.AirbyteStreamState;
import io.airbyte.protocol.models.v0.CatalogHelpers;
import io.airbyte.protocol.models.v0.ConfiguredAirbyteStream;
import io.airbyte.protocol.models.v0.StreamDescriptor;
import java.time.Instant;
import java.util.Iterator;
import java.util.List;
import org.bson.Document;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

class MongoDbStateIterator implements Iterator<AirbyteMessage> {
  private static final Logger LOGGER = LoggerFactory.getLogger(MongoDbStateIterator.class);
  private final MongoCursor<Document> iter;

  private final ConfiguredAirbyteStream stream;

  private final List<String> fields;

  private final Instant emittedAt;
  private final int batchSize;
  private int count = 0;
  private Document last = null;
  private boolean finalStateNext = false;

  MongoDbStateIterator(final MongoCursor<Document> iter, final ConfiguredAirbyteStream stream, final Instant emittedAt, final int batchSize) {
    this.iter = iter;
    this.stream = stream;
    this.batchSize = batchSize;
    this.emittedAt = emittedAt;
    fields = CatalogHelpers.getTopLevelFieldNames(stream).stream().toList();
  }

  @Override
  public boolean hasNext() {
    LOGGER.info("!!! hasNext called");
    if (iter.hasNext()) {
      LOGGER.info("!!! true 1");
      return true;
    }
    if (!finalStateNext) {
      LOGGER.info("!!! true 2");
      finalStateNext = true;
      return true;
    }
    LOGGER.info("!!! false");
    return false;
  }

  @Override
  public AirbyteMessage next() {
    if ((count > 0 && count % batchSize == 0) || finalStateNext) {
      final var streamState = new AirbyteStreamState()
          .withStreamDescriptor(new StreamDescriptor()
              .withName(stream.getStream().getName())
              .withNamespace(stream.getStream().getNamespace())
          );
      if (last != null) {
        streamState.withStreamState(Jsons.jsonNode(
            new MongodbStreamState(last.getObjectId("_id").toString())
        ));
      }

      final var stateMessage = new AirbyteStateMessage()
          .withType(AirbyteStateType.STREAM)
          .withStream(streamState);

      return new AirbyteMessage().withType(Type.STATE).withState(stateMessage);
    }

    count++;
    final var document = iter.next();
    final var jsonNode = MongoUtils.toJsonNode(document, fields);

    last = document;
    LOGGER.info("document {} - {}", count, last);

    return new AirbyteMessage()
        .withType(Type.RECORD)
        .withRecord(new AirbyteRecordMessage()
            .withStream(stream.getStream().getName())
            .withNamespace(stream.getStream().getNamespace())
            .withEmittedAt(emittedAt.toEpochMilli())
            .withData(jsonNode)
        );
  }
}
