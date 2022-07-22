import { Variants } from 'framer-motion'
import { ComponentProps } from 'react'
import { Container } from './styles'

const animations: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      type: 'tween',
      ease: 'circOut'
    }
  },
  exit: { opacity: 0 }
}

type AnimatedPageProps = ComponentProps<typeof Container>

const AnimatedPage = ({ children, variant }: AnimatedPageProps) => {
  return (
    <Container
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      variant={variant}
    >
      {children}
    </Container>
  )
}

export default AnimatedPage
