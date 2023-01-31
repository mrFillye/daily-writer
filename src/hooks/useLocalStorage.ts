import { useEffect, useState } from 'react'
import { getFromLocalStorage, setToLocalStorage } from '@/utils/global'

export function useLocalStorage<T>(key: string) {
  const [storageValue, setStorageValue] = useState<T[]>([])

  useEffect(() => {
    const stored = getFromLocalStorage(key)
    stored && setStorageValue(stored)
  }, [key])

  useEffect(() => {
    storageValue.length > 0 && setToLocalStorage(key, storageValue)
  }, [key, storageValue])

  return [storageValue, setStorageValue] as const
}
