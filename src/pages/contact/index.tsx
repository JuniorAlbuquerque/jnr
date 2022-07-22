import Button from '@/components/Button'
import IconGithub from '@/components/icons/Github'
import IconLinkedin from '@/components/icons/Linkedin'
import IconMail from '@/components/icons/Mail'
import Input from '@/components/Input'
import TextArea from '@/components/TextArea'
import { useEmail } from '@/hooks/useEmail'
import { useForm } from '@/hooks/useForm'
import Head from 'next/head'
import React, { FormEvent, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { styles } from './styles'

type EmailForm = {
  user_name: string
  user_email: string
  message: string
}

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmited, setIsSubmited] = useState(false)
  const { isLoading, sendEmail } = useEmail()

  const { values, touched, errors, reset, handleChange, handleBlur } =
    useForm<EmailForm>({
      initialValues: {
        user_name: '',
        user_email: '',
        message: ''
      },
      validate: function (values) {
        const errors: EmailForm = {} as EmailForm

        if (!values.user_email.includes('@')) {
          errors.user_email = 'E-mail inválido'
        }

        if (!values.user_name) {
          errors.user_name = 'Campo obrigatório'
        }

        if (!values.message) {
          errors.message = 'Campo obrigatório'
        }

        return errors
      }
    })

  const navigateTo = (typeLink: 'git' | 'mail' | 'linkedin') => {
    const urls = {
      git: 'https://github.com/JuniorAlbuquerque',
      mail: 'mailto:jnrabl.dev@gmail.com',
      linkedin: 'https://www.linkedin.com/in/junior-albuquerque/'
    }

    window.open(urls[typeLink], '_blank')
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setIsSubmited(true)
    event.preventDefault()

    if (Object.keys(errors)?.length) {
      toast('Preencha todos os campos', {
        type: 'warning'
      })

      return
    }

    await sendEmail({
      form: form.current
    })

    setIsSubmited(false)
    reset()
  }

  return (
    <div className={styles.content()}>
      <Head>
        <title>Jnr | Contact</title>
      </Head>

      <div className={styles.social()}>
        <section className="social-links">
          <div className="social-item" onClick={() => navigateTo('mail')}>
            <IconMail />
            <span>jnralb.dev@gmail.com</span>
          </div>

          <div className="social-item" onClick={() => navigateTo('git')}>
            <IconGithub />
            <span>JuniorAlbuquerque</span>
          </div>

          <div className="social-item" onClick={() => navigateTo('linkedin')}>
            <IconLinkedin />
            <span>junior-albuquerque</span>
          </div>
        </section>

        <div></div>
      </div>

      <form ref={form} onSubmit={handleSubmit} className={styles.form()}>
        <Input
          type="text"
          name="user_name"
          label="Nome"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.user_name}
          error={
            (isSubmited && !!errors.user_name) ||
            (!!touched.user_name && !!errors.user_name)
          }
          errorMessage={errors.user_name}
        />

        <Input
          name="user_email"
          label="E-mail"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.user_email}
          error={isSubmited || (!!touched.user_email && !!errors.user_email)}
          errorMessage={errors.user_email}
        />

        <TextArea
          name="message"
          label="Mensagem"
          onChange={handleChange}
          onBlur={handleBlur}
          rows={10}
          value={values.message}
          error={isSubmited || (!!touched.message && !!errors.message)}
          errorMessage={errors.message}
        />
        <Button type="submit" value="Send" variant="secondary" busy={isLoading}>
          Enviar
        </Button>
      </form>
    </div>
  )
}

export default Contact
