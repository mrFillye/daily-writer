import cn from 'classnames'
import React from 'react'
import styles from './index.module.scss'

export type TextareaProps = {
  value: string
  name?: string
  placeholder?: string
  onChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void
  error?: string
  maxLength?: number
  className?: string
}

export const TextArea = ({
  value,
  name,
  placeholder,
  onChange,
  error,
  maxLength,
  className,
}: TextareaProps) => {
  return (
    <div className={className}>
      <textarea
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        maxLength={maxLength}
        className={cn(styles.textarea, error && styles.textareaError)}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  )
}
