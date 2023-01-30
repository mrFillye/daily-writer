import cn from 'classnames'
import React, { ChangeEvent, HTMLInputTypeAttribute } from 'react'
import styles from './index.module.scss'

interface InputProps {
  name: string
  value: string
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  error?: boolean
  type?: HTMLInputTypeAttribute
  label?: string
  className?: string
}

export const Input = ({
  name,
  value,
  onChange,
  placeholder,
  error,
  type = 'text',
  label,
  className,
}: InputProps) => {
  return (
    <>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <div className={cn(styles.inputContainer, className)}>
        <input
          name={name}
          value={value}
          className={styles.input}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
        />
        {error && <div className={styles.error}>Error</div>}
      </div>
    </>
  )
}
