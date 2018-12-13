export const updateValue = (name, value) => {
  return {
    type: 'UPDATE_VALUE',
    name,
    value,
  }
}
