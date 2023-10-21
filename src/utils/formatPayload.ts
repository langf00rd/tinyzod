/**
 * formats the payload into a format that tinybird can ingest
 * @param payload
 * @returns
 */
export function formatPayload(payload: { any: any }) {
  const values = Object.values(payload);
  const formattedPayload = [];

  for (let a = 0; a < values.length; a++) {
    const element = values[a];
    if (typeof element === 'string')
      formattedPayload.push(element.replaceAll(' ', '-'));
    else formattedPayload.push(element);
  }

  return formattedPayload.join(',');
}
