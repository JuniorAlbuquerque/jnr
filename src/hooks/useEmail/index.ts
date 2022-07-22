import emailjs from '@emailjs/browser'
import { useCallback, useState } from 'react'
import { toast } from 'react-toastify'

type UseEmailProps = {
  form: HTMLFormElement
}

export function useEmail() {
  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = useCallback(async ({ form }: UseEmailProps) => {
    try {
      setIsLoading(true)
      await emailjs.sendForm(
        'service_pvussfc',
        'template_qt9402z',
        form,
        'WLxDh91TDMsdYRO8D'
      )

      toast('E-mail enviado com sucesso', {
        type: 'success'
      })
    } catch (error) {
      console.warn(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    isLoading,
    sendEmail
  }
}
