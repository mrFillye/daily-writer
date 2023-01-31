import { useContext, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { Form } from '@/components/Form'
import { NoteList } from '@/components/NoteList'
import { INote } from '@/types'
import { GlobalContext } from '@/context'
import { useDebounce } from '@/hooks/useDebounce'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { useLocalStorage } from '@/hooks/useLocalStorage'

export interface FormValues {
  label: string
  description: string
}

export default function Home() {
  const [notes, setNotes] = useState<INote[]>([])
  const { value } = useContext(GlobalContext)

  const debouncedValue = useDebounce(value)

  const [storageValue, setStorageValue] = useLocalStorage<INote>('notes')

  const handleSubmit = (values: FormValues) => {
    const date = new Date()
    const createdAt = dayjs(date).format('DD.MM.YYYY')

    setNotes((prev) => [
      { id: notes.length + 1, createdAt, ...values },
      ...prev,
    ])
  }

  useEffect(() => {
    notes.length && setStorageValue(notes)
  }, [notes, setStorageValue])

  useEffect(() => {
    storageValue && setNotes(storageValue)
  }, [storageValue])

  const searchNotes = notes.filter(({ label }) =>
    label.includes(debouncedValue)
  )

  const breadcrumbs = [
    {
      label: 'Home',
      url: '/',
    },
  ]

  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Form onSubmit={handleSubmit} />
      <NoteList notes={searchNotes} />
    </>
  )
}
