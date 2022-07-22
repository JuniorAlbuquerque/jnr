import { FC, InputHTMLAttributes } from 'react'
import { InputContent, InputWrapper } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: boolean
  errorMessage?: string
}

const Input: FC<InputProps> = ({ label, error, errorMessage, ...rest }) => {
  return (
    <InputWrapper>
      <label className="label">{label}</label>
      <InputContent {...rest} />
      {error && errorMessage && <span className="error">{errorMessage}</span>}
    </InputWrapper>
  )
}

export default Input
