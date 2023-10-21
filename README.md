<div align="center">
    <h1 align="center">tinyzod</h1>
    <p align="center">typesafe tinybird functions with zod</p>
</div>

- typesafe
- tree shakable
- tiny size | < 60kb
- in-built support for zod (support for other validation libraries coming in soon...)
- other cool stuff coming in...

```ts
import { z } from 'zod';
import { TinyZodClient, publish, fetchEvents } from 'tinyzod';

// initialize the tinyzod client with your tinybird token
const tz = new TinyZodClient({
  token: 'TINYBIRD-TOKEN',
  /* other client config */
});

// publish an event
const response = await publish({
  client: tz,
  dataSource: 'DATASOURCE-NAME',
  schema: 'ZOD-SCHEMA',
  data: {
    /* object to be published to tinybird */
  },
});

// fetch events from a pipe
const events = await fetchEvents({
  client: tz,
  pipe: 'PIPE-NAME',
  query: 'some_field=value',
});
```
