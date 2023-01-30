import { ErrorMessage } from 'formik'
import styles from './index.module.scss'

interface IErrorType {
  fieldName: string
}

export const Error = ({ fieldName }: IErrorType) => {
  return (
    <ErrorMessage name={fieldName}>
      {(msg) => <span className={styles.errorMessageText}>{msg}</span>}
    </ErrorMessage>
  )
}
