import React, { useState } from 'react'
import { Button } from '../Button'
import { Card } from '../Card'
import { Input } from '../Input'
import { TextArea } from '../TextArea'
import styles from './index.module.scss'

type CardProps = {
  id: number
  label: string
  description: string
  createdAt: string
}

export const NoteCard = ({ id, label, description }: CardProps) => {
  const [isComent, setIsComment] = useState<boolean>(false)
  const [addCommentId, setCommentId] = useState<number | null>(null)

  const handleToggleClick = () => setIsComment((prev) => !prev)

  const handleAddComment = () => {
    setCommentId(null)
  }

  return (
    <Card>
      <div className={styles.label}>{label}</div>
      <div className={styles.line}></div>
      <div className={styles.description}>{description}</div>
      <span className={styles.addComment} onClick={handleToggleClick}>
        + Add comment
      </span>
      {isComent && (
        <>
          <TextArea
            name=""
            value=""
            placeholder="Enter your comment"
            onChange={() => {}}
            className={styles.textarea}
          />
          <Button className={styles.button} onClick={handleAddComment}>
            Send comment
          </Button>
        </>
      )}
    </Card>
  )
}
