import { PubilshEventProps } from './interface';
import { TINYBIRD_API_BASE_URL, TINYBIRD_API_VERSION } from './lib/constants';
import { logger } from './utils/logger';
import validate from './utils/validate';

/** publishes an event to a datasource */
export default async function publishEvent({
  client,
  schema,
  data,
  validator,
  datasource,
}: PubilshEventProps) {
  try {
    logger(client.showLogs, `publishing event to ${datasource}`);
    const validatedData = validate(client, schema, data, validator, 'object');
    const response = await fetch(
      `${TINYBIRD_API_BASE_URL}${TINYBIRD_API_VERSION}/events?name=${datasource}`,
      {
        method: 'POST',
        body: JSON.stringify(validatedData),
        headers: {
          Authorization: `Bearer ${client.token}`,
        },
      }
    );
    if (!response.ok) throw { error: response.statusText };
    return await response.json();
  } catch (error) {
    throw { error };
  }
}
