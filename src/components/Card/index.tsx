import React from 'react'
import { Card as UiCard } from '@/ui/Card'
import styles from './index.module.scss'

type CardProps = {
  title: string
  description: string
}

export const Card = ({ title, description }: CardProps) => {
  return (
    <UiCard>
      <div className={styles.title}>{title}</div>
      <div className={styles.line} />
      <div>{description}</div>
    </UiCard>
  )
}
