# tinyzod

## 1.0.0

### Major Changes

- 90adc71:

  ## querying a pipe with dynamic parameter(s)

  for pipes with dynamic parameter(s) where you want to run an SQL query like `% SELECT * FROM demo__v1 WHERE column_01 = {{ Int16(column_01, required=True) }}`. tinyzod simplifies it as follows:

  ```ts
  import { TinyzodClient, queryDynamicParam } from 'tinyzod';

  const tz = new TinyzodClient({
    showLogs: true,
    token: 'TINYBIRD-TOKEN',
    /* other config */
  });

  const query_ = await queryDynamicParam({
    client: tz,
    pipe: 'demo_pipe__v1',
    query: 'column_01=8',
  });
  ```

  ## publishing data to a tinybird datasource

  you can publish an event to a tinybird datasource with the `publishToDatasource()` function. See example below:

  ```ts
  import { z } from 'zod';
  import { TinyzodClient, publishToDatasource } from 'tinyzod';

  const tz = new TinyzodClient({
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
  ```
