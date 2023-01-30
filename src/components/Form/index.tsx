import React, { useCallback, useEffect, useState } from 'react'
import { FormikConfig, useFormik } from 'formik'
import { Button } from '../Button'
import { Input } from '../Input'
import { TextArea } from '../TextArea'
import styles from './index.module.scss'
import { Card } from '../Card'
import { getFromLocalStorage, setToLocalStorage } from '@/utils/global'

type FormValues = {
  label: string
  description: string
}

export type Note = {
  id: number
  label: string
  description: string
}

export const Form = () => {
  const [formValues, setFormValues] = useState<Note[]>([])

  const initialValues = {
    label: '',
    description: '',
  }

  useEffect(() => {
    const notes = getFromLocalStorage('notes')
    notes && setFormValues(notes)
  }, [setFormValues])

  const handleSubmitForm = useCallback<FormikConfig<FormValues>['onSubmit']>(
    (values: FormValues) => {
      setFormValues((prev) => [
        ...prev,
        { id: formValues.length + 1, ...values },
      ])
    },

    [formValues.length]
  )

  const { resetForm, handleChange, values, handleSubmit } =
    useFormik<FormValues>({
      initialValues,
      onSubmit: handleSubmitForm,
    })

  useEffect(() => {
    if (formValues.length > 0) {
      setToLocalStorage<Note[]>('notes', formValues)
      resetForm()
    }
  }, [formValues, formValues.length, resetForm])

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
