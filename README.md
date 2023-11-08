typesafe tinybird functions with zod

- typesafe
- tree shakable
- request caching and revalidation
- in-built support for zod (support for other validation libs coming in soon...)
- other cool stuff coming in...

```ts
import { z } from 'zod';
import { TinyzodClient, publishEvent, queryPipe } from 'tinyzod';

const tz = new TinyzodClient({
  showLogs: true,
  token: 'TINYBIRD-TOKEN',
  /* other config */
});

const schema = z.object({
  data: z.string(),
  city: z.string(),
});

const response = await publishEvent({
  client: tz,
  schema,
  validator: 'zod',
  datasource: 'demo_v1',
  data: {
    date: '2020-10-04',
    city: 'ontario',
  },
});

const query_ = await queryPipe({
  client: tz,
  pipe: 'demo_pipe__v1',
  query: 'column_01=value',
});
```
