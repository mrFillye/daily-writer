import { useEffect, useState } from 'react'
import { getFromLocalStorage, setToLocalStorage } from '@/utils/global'

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const [storageValue, setStorageValue] = useState<T>(defaultValue)

  useEffect(() => {
    const stored = getFromLocalStorage(key)
    setStorageValue(stored ? stored : defaultValue)
  }, [key])

  useEffect(() => {
    storageValue && setToLocalStorage(key, storageValue)
  }, [key, storageValue])

  return [storageValue, setStorageValue] as const
}
