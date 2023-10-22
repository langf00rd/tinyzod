import {
  TinyZodDatasourcePublishProps,
  TinybirdDatesourcePublishResponse,
} from './interface';
import { TINYBIRD_API_BASE_URL, TINYBIRD_API_VERSION } from './lib/constants';
import { logger } from './utils/logger';
import { validate } from './utils/validate';
/** publishes an event to a tinybird datasource */
export default async function publishToDatasource({
  client,
  schema,
  data,
  query,
  datasource,
  validator,
  mode,
  tbSchema,
}: TinyZodDatasourcePublishProps) {
  try {
    logger(client.showLogs, `publishing to ${datasource}`);
    const response = await fetch(
      `${TINYBIRD_API_BASE_URL}${TINYBIRD_API_VERSION}/datasources?name=${datasource}&mode=${mode}&${tbSchema &&
        `schema=${tbSchema}`}&${query}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${client.token}`,
          'Content-Type': 'application/plain',
        },
        body: validate(client, schema, data, validator),
      }
    );
    return (await response.json()) as TinybirdDatesourcePublishResponse;
  } catch (error) {
    throw { error };
  }
}
