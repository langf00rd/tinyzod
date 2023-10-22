import { TinyZodFetchEventProps } from './interface';
import { TINYBIRD_API_BASE_URL, TINYBIRD_API_VERSION } from './lib/constants';
import { logger } from './utils/logger';
/** fetches events from a pipe */
export default async function fetchEvents({
  client,
  query,
  pipe,
}: TinyZodFetchEventProps) {
  if (!client.token) throw { error: 'invalid client token' };
  try {
    logger(client.showLogs, `querying ${query} from ${pipe}`);
    const response = await fetch(
      `${TINYBIRD_API_BASE_URL}${TINYBIRD_API_VERSION}/pipes/${pipe}.json?${query}`,
      {
        headers: {
          method: 'GET',
          Authorization: `Bearer ${client.token}`,
        },
      }
    );
    return {
      status: response.status,
      data: await response.json(),
    };
  } catch (error) {
    throw { error };
  }
}
