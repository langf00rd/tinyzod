import { TinyZodSendProps } from '../interface';
import { TINYBIRD_API_BASE_URL } from './constants';
import { logger } from './logger';

/** sends an event to tinybird */
export async function send({
  client,
  schema,
  data,
  dataSource,
  query,
}: TinyZodSendProps): Promise<{
  status: number;
  response: Response;
}> {
  logger(client, 'sending data to tinybird...');

  const parsedData = schema.safeParse(data);
  if (!parsedData.success) throw { error: parsedData.error.issues };

  try {
    const response = await fetch(
      `${TINYBIRD_API_BASE_URL}v0/datasources?name=${dataSource}&${query}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${client.apiKey}`,
          'Content-Type': 'application/plain',
        },
        body: parsedData.data,
      }
    );
    return {
      status: response.status,
      response,
    };
  } catch (error) {
    logger(client, error);
    throw Error(error as any);
  }
}
