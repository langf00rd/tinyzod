import { z } from 'zod';
import { TinyZodClient, publish } from '../dist/';

const tz = new TinyZodClient({
  apiKey: 'tinybird-api-key',
});

const schema = z.object({
  name: z.string(),
  age: z.number(),
});

const sendEvent = async () => {
  try {
    const response = await publish({
      client: tz,
      dataSource: 'page_views__v1',
      data: { name: 'john doe', age: 18 },
      schema,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

sendEvent();
