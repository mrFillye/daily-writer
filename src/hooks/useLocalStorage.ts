import { useEffect, useState } from 'react'
import { getFromLocalStorage, setToLocalStorage } from '@/utils/global'

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [storageValue, setStorageValue] = useState<T>(defaultValue)

  useEffect(() => {
    const stored = getFromLocalStorage(key)
    setStorageValue((prev) => (stored ? stored : prev))
  }, [key])

  useEffect(() => {
    const isArray = Array.isArray(storageValue)
    if (isArray && storageValue.length > 0) {
      setToLocalStorage(key, storageValue)
    }
  }, [key, storageValue])

  return [storageValue, setStorageValue] as const
}
