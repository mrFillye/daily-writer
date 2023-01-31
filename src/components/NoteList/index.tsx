import { Note } from '@/types'
import React from 'react'
import { Card } from '../Card'
import { NoteCard } from '../NoteCard'
import { SearchInput } from '../SearchInput'
import styles from './index.module.scss'

export interface NoteListProps {
  notes: Note[]
}

export const NoteList = ({ notes }: NoteListProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>Your Note List</p>
        <SearchInput />
      </div>
      <div className={styles.noteWrapper}>
        {notes.map(({ id, label, description, createdAt }) => (
          <NoteCard
            key={id}
            id={id}
            label={label}
            description={description}
            createdAt={createdAt}
          />
        ))}
        {notes.length < 1 && (
          <Card>
            <div className={styles.emptyTitle}>You have no notes</div>
          </Card>
        )}
      </div>
    </div>
  )
}
