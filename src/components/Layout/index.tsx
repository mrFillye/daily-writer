import React, { PropsWithChildren } from 'react'
import styles from './index.module.scss'

export const Layout = ({ children }: PropsWithChildren) => {
  return <div className={styles.wrapper}>{children}</div>
}
