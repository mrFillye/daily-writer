import * as Yup from 'yup'

export const validationCommentSchema = Yup.object().shape({
  comment: Yup.string().min(2, 'Too Short!').required('Required field'),
})

export const validationDescriptionSchema = Yup.object().shape({
  description: Yup.string().min(2, 'Too Short!').required('Required field'),
})
