import { styled } from '@/styles/stitches.config'
import { darkTheme } from '@/styles/theme'
import { motion } from 'framer-motion'

export const NavLinkContainer = styled(motion.div, {
  padding: '1rem 1.6rem',
  borderRadius: '$2',

  color: '$gray11',

  '&:hover': {
    background: '$sky5',
    color: '$sky11'
  },

  variants: {
    variant: {
      active: {
        backgroundColor: '$sky5',
        color: '$sky11',

        '&:hover': {
          background: '$sky6'
        },

        [`.${darkTheme} &`]: {
          backgroundColor: '$sky4',
          color: '$sky11',

          '&:hover': {
            background: '$sky7'
          }
        }
      }
    }
  }
})
