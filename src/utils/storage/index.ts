interface ObjectValue {
  [key: string]: unknown
}

type Value = ObjectValue | unknown[] | number | string

export const setItem = (key: string, value: Value) => {
  value = typeof value === 'object'
    ? JSON.stringify(value)
    : value.toString()

  window.localStorage.setItem(key, value)
}

export const getItem = (key: string) => {
  return window.localStorage.getItem(key)
}

export const clearItem = (key: string) => {
  return window.localStorage.clearItem(key)
}
