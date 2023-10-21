import { ZodSchema } from 'zod';

interface TinyZodClientProps {
  /** your tinybird api key */
  apiKey: string;

  /** to show or hide logs */
  showLogs?: boolean;
}

interface TinyZodSendProps {
  /** tinyzod client */
  client: TinyZodClientProps;

  /** datasource name */
  dataSource: string;

  /** other queries (refer to https://www.tinybird.co/docs/api-reference/datasource-api.html) */
  query?: string;

  /** data to be sent to tinybird */
  data: any;

  /** schema to validate data */
  schema: ZodSchema;
}

export { TinyZodClientProps, TinyZodSendProps };
