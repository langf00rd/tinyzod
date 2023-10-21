/**
 * formats the payload into a format that tinybird can ingest
 * @param payload
 * @returns
 */
export function formatPayload(payload: { any: any }) {
  return Object.values(payload).join(',');
}
