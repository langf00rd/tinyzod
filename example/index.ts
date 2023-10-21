import { z } from 'zod';
import { TinyZodClient, fetchEvents, publish } from '../dist/';

const tz = new TinyZodClient({
  showLogs: true,
  token: 'TINYBIRD-TOKEN',
});

const schema = z.object({
  id: z.number(),
  value: z.string(),
  date: z.string(),
  message: z.string(),
});

const publish_ = async () => {
  try {
    const response = await publish({
      schema,
      client: tz,
      query: 'mode=append',
      dataSource: 'demo__v1',
      data: {
        id: Date.now(),
        value: Math.floor(Math.random() * 11).toString(),
        date: Date().substring(0, 21),
        message: 'hello world',
      },
    });
    console.log(response.response);
  } catch (error) {
    console.log(error);
  }
};

const fetchEvents_ = async () => {
  try {
    const response = await fetchEvents({
      client: tz,
      pipe: 'demo_pipe__v1',
      query: 'column_01=8',
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

publish_();
fetchEvents_();
