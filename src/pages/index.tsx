import { Form } from '@/components/Form'
import { Layout } from '@/components/Layout'
import { NoteList } from '@/components/NoteList'

export default function Home() {
  return (
    <Layout>
      <Form />
      <NoteList />
    </Layout>
  )
}
