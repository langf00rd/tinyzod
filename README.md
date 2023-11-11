typesafe tinybird functions with zod

- fully typesafe
- small size (< 11kb)
- tree shakable
- request caching and revalidation
- supports zod (support for other validation libs coming in soon)

```ts
import { TinyzodClient, publishEvent, queryPipe } from 'tinyzod';
import { z } from 'zod';

// initialize tinyzod
const tz = new TinyzodClient({
  token: 'TINYBIRD-TOKEN',
  /* other config */
});

// your schema
const schema = z.object({
  name: z.string(),
  age: z.number(),
});

// publish event to a datasource
await publishEvent({
  client: tz,
  schema,
  validator: 'zod',
  datasource: 'demo_v1',
  data: {
    name: 'john doe',
    age: '20',
  },
});

// query pipe
await queryPipe({
  client: tz,
  pipe: 'demo_pipe__v1',
  query: 'column_01=value',
});
```
