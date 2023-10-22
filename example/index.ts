import { z } from 'zod';
import { TinyZodClient, publishToDatasource } from '../dist/';

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
    const response = await publishToDatasource({
      schema,
      client: tz,
      datasource: 'demo__v1',
      validator: 'zod',
      mode: 'append',
      data: {
        id: Date.now(),
        value: Math.floor(Math.random() * 11).toString(),
        date: Date().substring(0, 21),
        message: 'hi mom!',
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

// const fetchEvents_ = async () => {
//   try {
//     const response = await fetchEvents({
//       client: tz,
//       pipe: 'demo_pipe__v1',
//       query: 'column_01=8',
//     });
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

publish_();
// fetchEvents_();
