import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Card } from '@/components/Card'
import { IComment, INote } from '@/types'
import styles from './index.module.scss'
import { TextArea } from '@/components/TextArea'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { useFormik } from 'formik'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import {
  validationCommentSchema,
  validationDescriptionSchema,
} from './validationSchema'

const Note = () => {
  const [currentNote, setCurrentNote] = useState<INote>()
  const [comments, setComments] = useState<IComment[]>([])
  const [description, setDescription] = useState<string>('')
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const { query } = useRouter()

  const [storageNote, setStorageNote] = useLocalStorage<INote[]>('notes', [])

  useEffect(() => {
    const foundNote = storageNote?.find(({ id }) => Number(query.id) === id)

    if (foundNote) {
      setCurrentNote(foundNote)
      setDescription(foundNote.description)
    }

    if (foundNote && foundNote?.comment.length > 0) {
      setComments(foundNote.comment)
    }
  }, [query.id, storageNote])

  useEffect(() => {
    if (comments.length) {
      setStorageNote((prev) =>
        prev.map((item) => ({ ...item, comment: comments }))
      )
    }

    if (description.length) {
      setStorageNote((prev) =>
        prev.map((item) => ({ ...item, ...(description && { description }) }))
      )
    }
  }, [comments, description, setStorageNote])

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

  const handleToggleEdit = () => setIsEdit((prev) => !prev)

  const initialCommentValue = {
    comment: '',
  }

  const initialDescriptionValue = {
    description: '',
  }

  const handleAddComment = ({ comment }: { comment: string }) => {
    comment &&
      setComments(
        (prev) => [{ id: comments.length + 1, comment }, ...prev] as IComment[]
      )

    resetForm()
  }

  const handleUpdateDescription = ({
    description,
  }: {
    description: string
  }) => {
    description && setDescription(description)
    resetDescriptionField()
    handleToggleEdit()
  }

  const { values, handleSubmit, handleChange, resetForm, errors } = useFormik<{
    comment: string
  }>({
    initialValues: initialCommentValue,
    validationSchema: validationCommentSchema,
    onSubmit: handleAddComment,
  })

  const {
    values: descriptionField,
    errors: descriptionError,
    handleSubmit: handleUpdate,
    handleChange: handleDescriptionChange,
    resetForm: resetDescriptionField,
  } = useFormik<{ description: string }>({
    initialValues: initialDescriptionValue,
    validationSchema: validationDescriptionSchema,
    onSubmit: handleUpdateDescription,
  })

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className={styles.labelContainer}>
        <div className={styles.label}>{currentNote?.label}</div>
        <div className={styles.date}>{currentNote?.createdAt}</div>
      </div>
      <Card className={styles.card}>
        {!isEdit ? (
          <>
            <p className={styles.description}>{currentNote?.description}</p>
            <div className={styles.line}></div>
            <div className={styles.editToggle} onClick={handleToggleEdit}>
              Edit description
            </div>
          </>
        ) : (
          <form onSubmit={handleUpdate}>
            <TextArea
              name="description"
              value={descriptionField?.description}
              error={descriptionError?.description}
              onChange={handleDescriptionChange}
            />
            <div className={styles.buttonWrapper}>
              <Button className={styles.editButton} type="submit">
                Edit
              </Button>
              <div onClick={handleToggleEdit} className={styles.cancel}>
                Cancel
              </div>
            </div>
          </form>
        )}
      </Card>
      <div className={styles.commentsTitle}>Comments</div>
      <Card>
        <form onSubmit={handleSubmit}>
          <TextArea
            name="comment"
            value={values.comment || ''}
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
          comments.map(({ id, comment }) => (
            <Card key={id} className={styles.card}>
              <div className={styles.comment}>{comment}</div>
            </Card>
          ))
        ) : (
          <Card>
            <div className={styles.emptyTitle}>
              You have no comments for this note
            </div>
          </Card>
        )}
      </div>
    </>
  )
}

export default Note
