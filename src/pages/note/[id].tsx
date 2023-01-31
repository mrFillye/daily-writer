import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Card } from '@/components/Card'
import { INote } from '@/types'
import styles from './index.module.scss'
import { TextArea } from '@/components/TextArea'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { useFormik } from 'formik'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { validationSchema } from './validationSchema'

interface IFormValue {
  comment: string
}

interface IComment {
  id: number
  noteId: number
  comment: string
}

const Note = () => {
  const [currentNote, setCurrentNote] = useState<INote | null>(null)
  const [comments, setComment] = useState<IComment[]>([])
  const { query } = useRouter()

  const [storageValue, setStorageValue] = useLocalStorage<IComment>('comments')
  const [storageNote] = useLocalStorage<INote>('notes')

  useEffect(() => {
    const foundNote = storageNote?.find(({ id }) => Number(query.id) === id)

    foundNote && setCurrentNote(foundNote)
  }, [query.id, storageNote])

  useEffect(() => {
    comments.length && setStorageValue(comments)
  }, [comments, setStorageValue])

  useEffect(() => {
    const currentNoteComments = storageValue.filter(
      ({ noteId }: IComment) => noteId == currentNote?.id
    )

    currentNoteComments && setComment(currentNoteComments)
  }, [currentNote?.id])

  const breadcrumbs = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: `Note ${currentNote?.id}`,
      url: `note/${currentNote?.id}`,
    },
  ]

  const initialValues = {
    comment: '',
  }

  const handleFormSubmit = (value: IFormValue) => {
    setComment((prev) => [
      { id: comments.length + 1, noteId: Number(currentNote?.id), ...value },
      ...prev,
    ])

    resetForm()
  }

  const { values, handleSubmit, handleChange, resetForm, errors } =
    useFormik<IFormValue>({
      initialValues,
      validationSchema,
      onSubmit: handleFormSubmit,
    })

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className={styles.labelContainer}>
        <div className={styles.label}>{currentNote?.label}</div>
        <div className={styles.dateFI}>{currentNote?.createdAt}</div>
      </div>
      <Card className={styles.card}>{currentNote?.description}</Card>
      <div className={styles.commentsTitle}>Comments</div>
      <Card>
        <form onSubmit={handleSubmit}>
          <TextArea
            name="comment"
            value={values.comment}
            onChange={handleChange}
            error={errors.comment}
            placeholder="Add your comment"
          />
          <Button type="submit" className={styles.button}>
            Add comment
          </Button>
        </form>
      </Card>
      <div className={styles.comments}>
        {comments.length > 0 ? (
          comments.map(
            ({ id, noteId, comment }) =>
              noteId === currentNote?.id && (
                <Card key={id} className={styles.card}>
                  <div>{comment}</div>
                </Card>
              )
          )
        ) : (
          <Card>
            <div className={styles.emptyTitle}>
              There are no comments for this post.
            </div>
          </Card>
        )}
      </div>
    </>
  )
}

export default Note
