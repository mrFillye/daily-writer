export const getFromLocalStorage = (key: string) => {
  const value = localStorage.getItem(key)
  if (value && value !== undefined) return JSON.parse(value)
}

export const setToLocalStorage = <T extends {}>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const removeFromLocalStorage = (key: string) => {
  localStorage.removeItem(key)
}
