import React, { FormEventHandler } from 'react'
import { Button } from '@/ui/Button'
import { TextArea } from '@/ui/TextArea'
import { Input } from '../../ui/Input'
import styles from './index.module.scss'
import { useFormik } from 'formik'

type FormValues = {
  label: string
  description: string
}

export const Form = () => {
  const initialValues = {
    label: '',
    description: '',
  }

  const handleSubmit = (values: FormValues) => {
    console.log('values:', values)
  }

  const formik = useFormik<FormValues>({
    initialValues,
    onSubmit: handleSubmit,
  })

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <Input
        name="label"
        value={formik.values.label}
        onChange={formik.handleChange}
        label="Тема заметки"
      />
      <TextArea
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
