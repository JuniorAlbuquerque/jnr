import { ComponentProps, FC } from 'react'
import Loader from '../Loader'
import { Container } from './styles'

type ButtonProps = ComponentProps<typeof Container> & {
  busy?: boolean
}

const Button: FC<ButtonProps> = ({ variant, busy, children, ...rest }) => {
  return (
    <Container variant={variant} {...rest}>
      {busy && <Loader />}
      <span>{children}</span>
    </Container>
  )
}

export default Button
