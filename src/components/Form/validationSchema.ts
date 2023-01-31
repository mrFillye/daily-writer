import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  label: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required field'),
  description: Yup.string().min(2, 'Too Short!').required('Required field'),
})
