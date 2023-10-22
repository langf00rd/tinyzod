import { z } from 'zod';
import {
  TinyZodClient,
  publishToDatasource,
  queryPipeWithDynamicParam,
} from '../dist/';

const tz = new TinyZodClient({
  showLogs: true,
  token:
    'p.eyJ1IjogIjMxZWQyYjg5LTI3ZjUtNDg0Zi1hOTQxLTJmZThiZGRjOGJmOSIsICJpZCI6ICIzNWQwMzI3ZC0zZmNlLTRjMzUtOTM1Yy00MGFhMTAwYTBkZmMiLCAiaG9zdCI6ICJldV9zaGFyZWQifQ.vqj62erNH7RfMww6VHXy5M4ubxiYWt431Ca7fR2VRq4',
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

const query_ = async () => {
  try {
    const response = await queryPipeWithDynamicParam({
      client: tz,
      pipe: 'demo_pipe__v1',
      query: 'column_01=8',
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

publish_();
query_();
