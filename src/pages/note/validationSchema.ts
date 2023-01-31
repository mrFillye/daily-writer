import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  comment: Yup.string().min(2, 'Too Short!').required('Required field'),
})
