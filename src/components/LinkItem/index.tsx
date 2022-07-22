import { ComponentProps, FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavLinkContainer } from './styles'
import { motion } from 'framer-motion'

type LinkItemProps = ComponentProps<typeof Link> & {
  to: string
}

const LinkItem: FC<LinkItemProps> = ({ children, to }) => {
  // const resolved = useResolvedPath(to)
  // const isMatch = useMatch({
  //   path: resolved?.pathname,
  //   end: true
  // })
  // const navigate = useNavigate()
  const [isMatch, setIsMatch] = useState(false)
  const route = useRouter()

  useEffect(() => {
    if (route?.pathname) {
      setIsMatch(route?.pathname === to)
    }
  }, [route, to])

  const textMotion = {
    rest: {
      color: '$gray2',
      x: 0,
      transition: {
        duration: 0.25,
        type: 'tween',
        ease: 'easeIn'
      }
    },
    hover: {
      color: '$sky4',
      x: 0,
      transition: {
        duration: 0.25,
        type: 'tween',
        ease: 'easeOut'
      }
    }
  }

  return (
    <NavLinkContainer
      initial="rest"
      whileHover="hover"
      animate="rest"
      variant={isMatch ? 'active' : undefined}
      onClick={() => route.push(to)}
      tabIndex={0}
      onKeyPress={(event: any) => {
        if (event.key === 'Enter') {
          route.push(to)
        }
      }}
    >
      <motion.div variants={textMotion}>{children}</motion.div>
    </NavLinkContainer>
  )
}

export default LinkItem
