import { getFromLocalStorage } from '@/utils/global'
import React, { useEffect, useState } from 'react'
import { Card } from '../Card'
import { Note } from '../Form'
import { NoteCard } from '../NoteCard'
import styles from './index.module.scss'

export const NoteList = () => {
  const [notesList, setNoteList] = useState<Note[]>([])

  useEffect(() => {
    const notes = getFromLocalStorage('notes')
    setNoteList(notes)
  }, [])

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Your Note List</p>
      {notesList && (
        <div className={styles.noteWrapper}>
          {notesList.map(({ id, label, description }) => (
            <NoteCard key={id} label={label} description={description} />
          ))}
        </div>
      )}
      {!notesList && (
        <Card>
          <div className={styles.emptyTitle}>You have no notes</div>
        </Card>
      )}
    </div>
  )
}
