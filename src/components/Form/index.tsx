import React from 'react'
import { useFormik } from 'formik'
import { Button } from '../Button'
import { Input } from '../Input'
import { TextArea } from '../TextArea'
import styles from './index.module.scss'
import { Card } from '../Card'
import { FormValues } from '@/pages'

export interface INote {
  id: number
  label: string
  description: string
}

export interface IFormProps {
  onSubmit: (values: FormValues) => void | Promise<any>
}

export const Form = ({ onSubmit }: IFormProps) => {
  const initialValues = {
    label: '',
    description: '',
  }

  const handleFormSubmit = (values: FormValues) => {
    onSubmit(values)
    resetForm()
  }

  const { handleChange, values, handleSubmit, resetForm } =
    useFormik<FormValues>({
      initialValues,
      onSubmit: handleFormSubmit,
    })

  return (
    <>
      <p className={styles.title}>Enter your text note!</p>
      <Card>
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            name="label"
            value={values.label}
            onChange={handleChange}
            placeholder="Enter note topic"
            label="Note topic"
          />
          <TextArea
            name="description"
            value={values.description}
            onChange={handleChange}
            placeholder="Enter your note description"
          />
          <Button type="submit">Create Note</Button>
        </form>
      </Card>
    </>
  )
}
