import { INote } from '@/types'
import Link from 'next/link'
import React from 'react'
import { Card } from '../Card'
import styles from './index.module.scss'

interface INoteCard extends Omit<INote, 'comment'> {
  onRemove: (noteId: number) => void
}

export const NoteCard = ({
  id,
  label,
  description,
  createdAt,
  onRemove,
}: INoteCard) => {
  return (
    <Card className={styles.card}>
      <div className={styles.removeAction} onClick={() => onRemove(id)}>
        &#10006;
      </div>
      <div className={styles.date}>{createdAt}</div>
      <Link href={`note/${id}`} className={styles.label}>
        {label}
      </Link>
      <div className={styles.line}></div>
      <p className={styles.description}>{description}</p>
    </Card>
  )
}
