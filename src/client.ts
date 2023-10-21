import { TinyZodClientProps } from './interface';

export class TinyZodClient {
  apiKey: string;
  showLogs: boolean;
  constructor({ apiKey, showLogs }: TinyZodClientProps) {
    this.apiKey = apiKey;
    this.showLogs = showLogs ?? false;
  }
}
