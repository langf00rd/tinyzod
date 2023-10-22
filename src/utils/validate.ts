import { ZodSchema } from 'zod';
import TinyZodClient from '../lib/client';
import { objectToValueString } from './format';
import { logger } from './logger';
import { TinyZodValidator } from '../types';
/**
 * validates payload with specified validation library type. if no schema is passed, return formatted payload
 * @param client - tinyzod client
 * @param schema
 * @param data
 * @param validator
 * @returns formatted string
 */
export function validate(
  client: TinyZodClient,
  schema: ZodSchema | undefined,
  data: unknown,
  validator: TinyZodValidator
) {
  logger(client.showLogs, `validate: ${!!schema}\nvalidator: ${validator}`);
  if (schema) {
    const parsedbody = schema.safeParse(data);
    if (!validator) throw Error('validator is required when using a schema');
    if (!parsedbody.success) throw { error: parsedbody.error.message };
    return objectToValueString(parsedbody.data);
  } else return objectToValueString(data);
}
