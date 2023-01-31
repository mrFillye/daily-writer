import classNames from 'classnames'
import React, { PropsWithChildren } from 'react'
import styles from './index.module.scss'

interface IButtonProps {
  onClick?: () => void
  type?: 'submit' | 'button'
  form?: string
  className?: string
}

export const Button = ({
  children,
  onClick,
  type,
  form,
  className,
}: PropsWithChildren<IButtonProps>) => (
  <button
    className={classNames(styles.button, className)}
    type={type}
    form={form}
    onClick={onClick}
  >
    {children}
  </button>
)
