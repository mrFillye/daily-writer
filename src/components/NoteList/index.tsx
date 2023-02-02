import React from 'react'
import { INote } from '@/types'
import { setToLocalStorage } from '@/utils/global'
import { Card } from '../Card'
import { NoteCard } from '../NoteCard'
import { SearchInput } from '../SearchInput'
import styles from './index.module.scss'

export interface NoteListProps {
  notes: INote[]
  setNotes: (value: INote[]) => void
}

export const NoteList = ({ notes, setNotes }: NoteListProps) => {
  const handleRemove = (noteId: number) => {
    const updatedNotes = notes.filter(({ id }) => id !== noteId)

    setNotes(updatedNotes)
    setToLocalStorage('notes', updatedNotes)
  }

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
            onRemove={handleRemove}
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
