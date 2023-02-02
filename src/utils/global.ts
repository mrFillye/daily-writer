export const getFromLocalStorage = <T extends unknown>(
  key: string,
  defaultValue?: T
) => {
  const value = localStorage.getItem(key)
  if (value) return JSON.parse(value) || defaultValue
}

export const setToLocalStorage = <T extends unknown>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}
