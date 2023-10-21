import { TinyZodPublishProps } from './interface';
import { TINYBIRD_API_BASE_URL } from './lib/constants';
import { formatPayload } from './utils/formatPayload';
import { logger } from './utils/logger';

/** publishes an event to tinybird */
export default async function publish({
  client,
  schema,
  data,
  dataSource,
  query,
}: TinyZodPublishProps) {
  const parsedData = schema.safeParse(data);
  if (!client.token) throw { error: 'invalid client token' };
  if (!parsedData.success) throw { error: parsedData.error.issues };
  try {
    logger(client.showLogs, `publishing to ${dataSource}`);
    const response = await fetch(
      `${TINYBIRD_API_BASE_URL}v0/datasources?name=${dataSource}&${query}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${client.token}`,
          'Content-Type': 'application/plain',
        },
        body: formatPayload(parsedData.data),
      }
    );
    return {
      status: response.status,
      response: await response.json(),
    };
  } catch (error) {
    throw { error };
  }
}
