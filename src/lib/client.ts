import { TinyZodClientProps } from '../interface';

export default class TinyZodClient {
  token: string;
  showLogs: boolean;
  cache: RequestCache;
  revalidate: number;
  constructor({ token, showLogs, cache, revalidate }: TinyZodClientProps) {
    this.token = token;
    this.cache = cache ?? 'default';
    this.revalidate = revalidate ?? 0;
    this.showLogs = showLogs ?? false;
  }
}
