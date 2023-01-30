import { useContext, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { Form } from '@/components/Form'
import { Layout } from '@/components/Layout'
import { NoteList } from '@/components/NoteList'
import { Note } from '@/types'
import { getFromLocalStorage, setToLocalStorage } from '@/utils/global'
import { GlobalContext } from '@/context'
import { useDebounce } from '@/hooks/useDebounce'

export interface FormValues {
  label: string
  description: string
}

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([])
  const { value } = useContext(GlobalContext)

  const debouncedValue = useDebounce(value)

  const handleSubmit = (values: FormValues) => {
    const date = new Date()
    const createdAt = dayjs(date).format('DD/MM/YYYY')

    setNotes((prev) => [
      { id: notes.length + 1, createdAt, ...values },
      ...prev,
    ])
  }

  useEffect(() => {
    notes.length && setToLocalStorage('notes', notes)
  }, [notes])

  useEffect(() => {
    const storageNotes = getFromLocalStorage('notes')
    storageNotes && setNotes(storageNotes)
  }, [])

  const searchNotes = notes.filter(({ label }) =>
    label.includes(debouncedValue)
  )

  return (
    <Layout>
      <Form onSubmit={handleSubmit} />
      <NoteList notes={searchNotes} />
    </Layout>
  )
}
