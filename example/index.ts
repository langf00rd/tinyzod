import { z } from 'zod';
import { TinyZodClient, send } from './packages/tinyzod';

const tb = new TinyZodClient({
  apiKey: 'p.123GT3RS',
  showLogs: true,
});

const schema = z.object({ id: z.string(), age: z.number() });

const sendEvent = async () => {
  try {
    const response = await send({
      client: tb,
      data: { id: '121dasd123', age: 18 },
      dataSource: 'page_views__v1',
      query: 'mode=append',
      schema,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

sendEvent();
