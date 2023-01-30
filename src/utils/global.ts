export const getFromLocalStorage = (fieldName: string) => {
  const value = localStorage.getItem(fieldName)
  if (value) return JSON.parse(value)
}

export const setToLocalStorage = <T extends {}>(
  fieldname: string,
  value: T
) => {
  localStorage.setItem(fieldname, JSON.stringify(value))
}

export const removeFromStorage = (fieldName: string) => {
  localStorage.removeItem(fieldName)
}
