import dayjs from 'dayjs'
import React from 'react'
import { Card } from '../Card'
import styles from './index.module.scss'

type CardProps = {
  label: string
  description: string
  createdAt: string
}

export const NoteCard = ({ label, description, createdAt }: CardProps) => {
  return (
    <Card>
      <div className={styles.label}>{label}</div>
      <div className={styles.line}></div>
      <div>{description}</div>
    </Card>
  )
}
