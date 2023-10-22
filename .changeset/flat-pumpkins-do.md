---
'tinyzod': major
---

## publishing data to tinybird datasource

you can publish data to a tinybird datasource with the `publishToDatasource()`. See example below:

```ts
import { z } from 'zod';
import { TinyZodClient, publishToDatasource } from 'tinyzod';

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

const response = await publishToDatasource({
  schema,
  client: tz,
  datasource: 'demo__v1',
  validator: 'zod',
  mode: 'append',
  tbSchema: 'schema=symbol String, date Date, close Float32',
  data: {
    id: Date.now(),
    value: Math.floor(Math.random() * 11).toString(),
    date: Date().substring(0, 21),
    message: 'hi mom!',
  },
});
```
