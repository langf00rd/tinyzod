---
'tinyzod': major
---

---

## 'tinyzod': major

publish event to tinybird

you can publish an event to the tinybird events api with the `publishEvents()` function. below is an example:

```ts
import { z } from 'zod';
import { publishEvent, TinyzodClient } from 'tinyzod';

const schema = z.object({
  data: z.string(),
  city: z.string(),
});

const tz = new TinyzodClient({
  showLogs: true,
  token: 'TINYBIRD-TOKEN',
  /* other config */
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
```
