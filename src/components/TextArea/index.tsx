import React, { TextareaHTMLAttributes } from 'react'
import { TextAreaContent, TextAreaWrapper } from './styles'

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  error?: boolean
  errorMessage?: string
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  error,
  errorMessage,
  ...rest
}) => {
  return (
    <TextAreaWrapper>
      <label className="label">{label}</label>
      <TextAreaContent {...rest} />
      {!!error && <span className="error">{errorMessage}</span>}
    </TextAreaWrapper>
  )
}

export default TextArea
