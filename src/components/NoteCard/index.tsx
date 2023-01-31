import { INote } from '@/types'
import Link from 'next/link'
import React from 'react'
import { Card } from '../Card'
import styles from './index.module.scss'

export const NoteCard = ({ id, label, description, createdAt }: INote) => {
  return (
    <Card>
      <div className={styles.date}>{createdAt}</div>
      <Link href={`note/${id}`} className={styles.label}>
        {label}
      </Link>
      <div className={styles.line}></div>
      <div>{description}</div>
    </Card>
  )
}
