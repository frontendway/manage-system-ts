export const setItem = (key: string, value: string | object | number) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  } else if (typeof value === 'number') {
    value = value.toString()
  }

  window.localStorage.setItem(key, value)
}
