import { TinyZodFetchEventProps } from '../interface';
import { TINYBIRD_API_BASE_URL } from './constants';

export default async function fetchEvents({
  client,
  query,
  pipe,
}: TinyZodFetchEventProps) {
  try {
    const response = await fetch(
      `${TINYBIRD_API_BASE_URL}v0/pipes/${pipe}.json?${query}`,
      {
        headers: {
          method: 'GET',
          Authorization: `Bearer ${client.apiKey}`,
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
