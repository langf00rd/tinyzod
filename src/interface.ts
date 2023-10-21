import { ZodSchema } from 'zod';

export interface TinyZodClientProps {
  /** your tinybird api key */
  token: string;

  /** to show or hide logs */
  showLogs?: boolean;
}

export interface TinyZodFetchEventProps {
  /** tinyzod client */
  client: TinyZodClientProps;

  /** other queries (refer to https://www.tinybird.co/docs/api-reference/datasource-api.html) */
  query?: string;

  /** pipe to query. eg `get_page_views__v1` (refer to https://www.tinybird.co/docs/api-reference/datasource-api.html) */
  pipe: string;
}

export interface TinyZodPublishProps {
  /** tinyzod client */
  client: TinyZodClientProps;

  /** datasource. `eg page_views__v1` (refer to https://www.tinybird.co/docs/api-reference/datasource-api.html) */
  dataSource: string;

  /** other queries (refer to https://www.tinybird.co/docs/api-reference/datasource-api.html) */
  query?: string;

  /** data to be sent to tinybird */
  data: any;

  /** schema to validate data */
  schema: ZodSchema;
}
