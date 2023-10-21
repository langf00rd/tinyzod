/** log info to console */
export function logger(showLogs: boolean | undefined, message: string | any) {
  if (showLogs === true) console.log(message);
  return message;
}
