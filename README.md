<div align="center">
    <h1 align="center">tinyzod</h1>
    <p align="center">typesafe tinybird functions with zod</p>
</div>

- typesafe
- tree shakable
- request caching and revalidation
- in-built support for zod (support for other validation libs coming in soon...)
- other cool stuff coming in...

```ts
import { z } from 'zod';
import {
  TinyZodClient,
  publishToDatasource,
  queryPipeWithDynamicParam,
} from 'tinyzod';

const tz = new TinyZodClient({
  showLogs: true,
  token: 'TINYBIRD-TOKEN',
  /* other config */
});

const schema = z.object({
  id: z.number(),
  value: z.string(),
  date: z.string(),
  message: z.string(),
});

const publish_ = await publishToDatasource({
  client: tz,
  datasource: 'demo__v1',
  mode: 'append',
  data: {
    /* some data */
  },
});

const query_ = await queryPipeWithDynamicParam({
  client: tz,
  pipe: 'demo_pipe__v1',
  query: 'column_01=8',
});
```
