import {
  TinyBirdPipeWithDynamicParamResponse,
  TinyZodqueryDynamicParamsProps,
} from './interface';
import { TINYBIRD_API_BASE_URL, TINYBIRD_API_VERSION } from './lib/constants';
import { logger } from './utils/logger';

/** queries pipe with a dynamic parameter */
export default async function queryPipe({
  client,
  query,
  pipe,
}: TinyZodqueryDynamicParamsProps) {
  try {
    logger(client.showLogs, `querying for rows matching ${query} from ${pipe}`);
    const response = await fetch(
      `${TINYBIRD_API_BASE_URL}${TINYBIRD_API_VERSION}/pipes/${pipe}.json?${query}`,
      {
        headers: {
          method: 'GET',
          Authorization: `Bearer ${client.token}`,
        },
        cache: client.cache,
        //@ts-ignore
        next: {
          revalidate: client.revalidate,
        },
      }
    );
    return (await response.json()) as TinyBirdPipeWithDynamicParamResponse;
  } catch (error) {
    throw { error };
  }
}
