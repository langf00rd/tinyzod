import { TinyZodClientProps } from '../interface';
/** log info to console */
export function logger(client: TinyZodClientProps, message: string | any) {
  if (client.showLogs) console.log(message);
}
