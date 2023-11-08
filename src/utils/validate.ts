import { ZodSchema } from 'zod';
import TinyzodClient from '../lib/client';
import { objectToValueString } from './format';
import { logger } from './logger';
import { TinyzodValidator, ValidatorOutputType } from '../types';
/**
 * validates payload with specified validation library type if a schema is passed
 * @param client - tinyzod client
 * @param schema - validation schema (eg, zod schema)
 * @param data
 * @param validator
 * @param outputType
 * @returns data object in value string format. eg: {name:'john',age:'18'} returns 'john,18'
 */
export default function validate(
  client: TinyzodClient,
  schema: ZodSchema | undefined,
  data: unknown,
  validator: TinyzodValidator,
  outputType: ValidatorOutputType
) {
  logger(client.showLogs, `validate: ${!!schema}\nvalidator: ${validator}`);
  if (schema) {
    const parsedbody = schema.safeParse(data);
    if (!validator) throw Error('validator is required when using a schema');
    if (!parsedbody.success) throw { error: parsedbody.error.message };
    if (outputType === 'string') return objectToValueString(parsedbody.data);
    else return parsedbody.data;
  } else {
    if (outputType === 'string') return objectToValueString(data);
    else return data;
  }
}
