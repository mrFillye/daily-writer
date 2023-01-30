import React, { PropsWithChildren } from 'react'
import styles from './index.module.scss'

type ButtonProps = {
  onClick?: () => void
  type?: 'submit' | 'button'
  form?: string
}

export const Button = ({
  children,
  onClick,
  type,
  form,
}: PropsWithChildren<ButtonProps>) => (
  <button className={styles.button} type={type} form={form} onClick={onClick}>
    {children}
  </button>
)
