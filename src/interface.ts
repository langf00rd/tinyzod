import { ZodSchema } from 'zod';
import TinyzodClient from './lib/client';
import { TinyzodValidator, TinybirdDatesourceMode } from './types';

export interface TinyzodClientProps {
  /** your tinybird api key. get from https://www.tinybird.co */
  token: string;

  /** to show or hide logs */
  showLogs?: boolean;

  /** control request caching */
  cache?: RequestCache;

  /** revalidation duration */
  revalidate?: number;
}

export interface TinyZodqueryDynamicParamsProps {
  /** tinyzod client */
  client: TinyzodClient;

  /** your query. eg `name=john` (refer to https://www.tinybird.co/docs/api-reference/pipe-api.html#) */
  query?: string;

  /** pipe to query. eg `get_page_views__v1` (refer to https://www.tinybird.co/docs/api-reference/pipe-api.html#) */
  pipe: string;
}

export interface TinyZodDatasourcePublishProps {
  /** tinyzod client */
  client: TinyzodClient;

  /** tinybird datasource. `eg page_views__v1` (refer to https://www.tinybird.co/docs/api-reference/datasource-api.html) */
  datasource: string;

  /** other tinybird datasource api queries (refer to https://www.tinybird.co/docs/ingest/datasource-api.html) */
  query?: string;

  /** data to be sent to tinybird */
  data: unknown;

  /** schema to validate data */
  schema?: ZodSchema;

  /** datasource query mode */
  mode: TinybirdDatesourceMode;

  /** validator library of choice */
  validator?: TinyzodValidator;

  /** tinybird schema. eg: "schema=symbol String, date Date, close Float32" */
  tbSchema?: string;
}

export interface TinybirdDataSource {
  id: string;
  name: string;
  cluster: string;
  tags: Record<string, any>;
  created_at: string;
  updated_at: string;
  replicated: boolean;
  version: number;
  project: string | null;
  headers: Record<string, any>;
  shared_with: any[];
  engine: Record<string, any>;
  description: string;
  used_by: any[];
  type: string;
}

/** event publish reponse interface from tinybird */
export interface TinybirdDatesourcePublishResponse {
  import_id: string;
  datasource: TinybirdDataSource;
  quarantine_rows: number;
  invalid_lines: number;
  error: boolean;
}

export interface TinybirdEventPublishResponse {
  successful_rows: number;
  quarantined_rows: number;
}

export interface TinyBirdPipeWithDynamicParamResponse {
  meta: { name: string; type: string }[];
  data: Record<any, any>[];
  rows: number;
  statistics: { elapsed: number; rows_read: number; bytes_read: number };
}

export interface PubilshEventProps {
  /** tinyzod client */
  client: TinyzodClient;

  /** event data to be published to tinybird */
  data: Record<string, any>;

  /** tinybird datasource to receive event data */
  datasource: string;

  /** schema to validate data */
  schema?: ZodSchema;

  /** validator library of choice */
  validator?: TinyzodValidator;
}
