import {
  ChangeEvent,
  FocusEvent,
  useCallback,
  useEffect,
  useState
} from 'react'

type UseFormProps<T> = {
  initialValues: T
  validate: (values: T) => T
}

export function useForm<T>({ initialValues, validate }: UseFormProps<T>) {
  const [touched, setTouchedFields] = useState<T>({} as T)
  const [errors, setErrors] = useState<T>({} as T)
  const [values, setValues] = useState<T>(initialValues)

  const reset = useCallback(() => {
    setValues(initialValues)
    setErrors({} as T)
    setTouchedFields({} as T)
  }, [])

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const fieldName = event.target.getAttribute('name')
      const { value } = event.target

      setValues((prevState) => ({
        ...prevState,
        [fieldName]: value
      }))
    },
    []
  )

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const fieldName = event.target.getAttribute('name')

      setTouchedFields((prevState) => ({
        ...prevState,
        [fieldName]: true
      }))
    },
    []
  )

  const validateValues = useCallback((values: T) => {
    setErrors(validate(values))
  }, [])

  useEffect(() => {
    validateValues(values)
  }, [values])

  return {
    values,
    errors,
    touched,
    reset,
    handleChange,
    handleBlur
  }
}
