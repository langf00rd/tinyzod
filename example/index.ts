import { z } from 'zod';
import { TinyZodClient, fetchEvents, publish } from '../dist/';

const tz = new TinyZodClient({
  showLogs: true,
  apiKey: 'your-api-key-here',
});

const schema = z.object({
  timestamp: z.string(),
  id: z.string(),
});

const publish_ = async () => {
  try {
    const response = await publish({
      schema,
      client: tz,
      query: 'mode=append',
      dataSource: 'page_views__v1',
      data: {
        id: Date.now().toString(),
        timestamp: '2013-03-15 10:39:35',
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
      pipe: 'get_page_views__v1',
      query: 'site=demo',
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

publish_();
fetchEvents_();
