import { TinyZodClientProps } from '../interface';

export default class TinyZodClient {
  token: string;
  showLogs: boolean;
  constructor({ token, showLogs }: TinyZodClientProps) {
    this.token = token;
    this.showLogs = showLogs ?? false;
  }
}
