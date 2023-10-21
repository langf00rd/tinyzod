<div align="center">
    <h1 align="center">tinyzod</h1>
    <p align="center">typesafe tinybird functions with zod</p>
</div>

- typesafe
- tiny package size
- tree shakable
- in-built support for zod (support for other validation libraries coming in soon...)
- other cool stuff coming in...

```ts
import { z } from 'zod';
import { TinyZodClient, publish } from 'tinyzod';

const tz = new TinyZodClient({
  apiKey: 'your-tinybird-api-key',
});

const response = await publish({
  client: tz,
  dataSource: 'page_views__v1',
  data: { name: 'john doe', age: 18 },
  schema: 'your-zod-schema',
});
```
