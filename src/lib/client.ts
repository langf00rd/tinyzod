import { TinyzodClientProps } from '../interface';

export default class TinyzodClient {
  token: string;
  showLogs: boolean;
  cache: RequestCache;
  revalidate: number;
  constructor({ token, showLogs, cache, revalidate }: TinyzodClientProps) {
    this.token = token;
    this.cache = cache ?? 'default';
    this.revalidate = revalidate ?? 0;
    this.showLogs = showLogs ?? false;
  }
}
