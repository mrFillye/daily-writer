import React, { ChangeEvent, HTMLInputTypeAttribute } from 'react'
import styles from './index.module.scss'

type InputProps = {
  name: string
  value: string
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  error?: boolean
  type?: HTMLInputTypeAttribute
  label?: string
}

export const Input = ({
  name,
  value,
  onChange,
  placeholder,
  error,
  type = 'text',
  label,
}: InputProps) => {
  return (
    <>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
        />
        {error && <div className={styles.error}>Error</div>}
      </div>
    </>
  )
}
