import { useEffect, useState } from 'react'

export const useDebounce = (value: string, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value)

  useEffect(() => {
    const timeOutHandler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timeOutHandler)
    }
  }, [value, delay])

  return debouncedValue
}
