import { TinyZodSendProps } from '../interface';
/** sends an event to tinybird */
export declare function send({ client, schema, data, dataSource, query, }: TinyZodSendProps): Promise<{
    status: number;
    response: Response;
}>;
