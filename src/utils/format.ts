/**
 * converts an object to object value string. eg: {name:'john',age:'18'} returns 'john,18'
 * @param payload
 * @returns object as string. multi-worded strings will be in format `some-random-string`
 */
export function objectToValueString(payload: any) {
  const values = Object.values(payload);
  const valuesAsString = values
    .map(value => {
      if (typeof value === 'string')
        return (value as string).toString().replaceAll(' ', '-');
      return value;
    })
    .join(',');
  return valuesAsString;
}
