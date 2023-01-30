import React, { PropsWithChildren } from 'react'
import styles from './index.module.scss'

export const Card = ({ children }: PropsWithChildren) => {
  return <div className={styles.card}>{children}</div>
}
