import React from 'react'
import { Card } from '../Card'
import styles from './index.module.scss'

type CardProps = {
  title: string
  description: string
}

export const NoteCard = ({ title, description }: CardProps) => {
  return (
    <Card>
      <div className={styles.title}>{title}</div>
      <div className={styles.line} />
      <div>{description}</div>
    </Card>
  )
}
