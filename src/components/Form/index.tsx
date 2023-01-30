import React, { useCallback, useEffect, useState } from 'react'
import { FormikConfig, useFormik } from 'formik'
import { Button } from '../Button'
import { Input } from '../Input'
import { TextArea } from '../TextArea'
import styles from './index.module.scss'
import { Card } from '../Card'

type FormValues = {
  label: string
  description: string
}

type StorageValues = {
  id: number
  label: string
  description: string
}

export const setToLocalStorage = <T extends {}>(
  fieldname: string,
  value: T
) => {
  const stringiyValue = JSON.stringify(value)
  localStorage.setItem(fieldname, stringiyValue)
}

export const getFromLocalStorage = (fieldName: string) => {
  localStorage.getItem(fieldName)
}

export const Form = () => {
  const [formValues, setFormValues] = useState<StorageValues[]>([])

  const initialValues = {
    label: '',
    description: '',
  }

  useEffect(() => {
    setToLocalStorage<StorageValues[]>('notes', formValues)
  }, [formValues])

  const handleSubmit = useCallback<FormikConfig<FormValues>['onSubmit']>(
    (values: FormValues) => {
      setFormValues((prev) => [
        ...prev,
        { id: formValues.length + 1, ...values },
      ])
    },
    [formValues.length]
  )

  const formik = useFormik<FormValues>({
    initialValues,
    onSubmit: handleSubmit,
  })

  return (
    <>
      <p className={styles.title}>Enter your text note!</p>
      <Card>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <Input
            name="label"
            value={formik.values.label}
            onChange={formik.handleChange}
            placeholder="Enter note topic"
            label="Note topic"
          />
          <TextArea
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            placeholder="Enter your note description"
          />
          <Button type="submit">Create Note</Button>
        </form>
      </Card>
    </>
  )
}
