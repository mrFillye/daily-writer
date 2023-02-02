import React, { ChangeEvent, HTMLInputTypeAttribute } from 'react'
import cn from 'classnames'
import styles from './index.module.scss'

interface InputProps {
  name: string
  value: string
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  error?: string
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
    <div className={cn(className)}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <div
        className={cn(
          styles.inputContainer,
          error && styles.inputContainerError
        )}
      >
        <input
          name={name}
          value={value}
          className={styles.input}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
        />
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  )
}
