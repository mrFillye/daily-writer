import React, { useContext } from 'react'
import { GlobalContext } from '@/context'
import { Input } from '../Input'
import styles from './index.module.scss'

export const SearchInput = () => {
  const { value, setValue } = useContext(GlobalContext)

  return (
    <Input
      name="search"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search..."
      className={styles.input}
    />
  )
}
