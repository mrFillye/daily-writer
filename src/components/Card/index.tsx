import React, { PropsWithChildren } from 'react'
import cn from 'classnames'
import styles from './index.module.scss'

interface ICardProps {
  className?: string
}

export const Card = ({
  children,
  className,
}: PropsWithChildren<ICardProps>) => {
  return <div className={cn(styles.card, className)}>{children}</div>
}
