export default function appendToEachArrayValue(array, appendString) {
  const new_array = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const value of array) {
    new_array.push(appendString + value);
  }
  return new_array;
}
