import { TinyZodPublishProps } from '../interface';
import { TINYBIRD_API_BASE_URL } from './constants';
import { formatPayload } from './formatPayload';
import { logger } from './logger';

/** publishes an event to tinybird */
export default async function publish({
  client,
  schema,
  data,
  dataSource,
  query,
}: TinyZodPublishProps) {
  logger(client.showLogs, 'publishing to tinybird');
  const parsedData = schema.safeParse(data);
  if (!parsedData.success) throw { error: parsedData.error.issues };
  if (!client.apiKey.trim()) {
    throw { error: 'invalid tinybird api key' };
  }

  try {
    const response = await fetch(
      `${TINYBIRD_API_BASE_URL}v0/datasources?name=${dataSource}&${query}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${client.apiKey}`,
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
