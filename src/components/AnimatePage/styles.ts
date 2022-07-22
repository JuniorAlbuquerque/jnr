import { styled } from '@/styles/stitches.config'
import { motion } from 'framer-motion'

export const Container = styled(motion.div, {
  ct: '$w3',
  display: 'flex',
  gap: '$3',
  flexDirection: 'column',
  flex: 1,
  padding: '$7',
  height: '100%',

  variants: {
    variant: {
      center: {
        'div:first-of-type': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flex: 1,
          height: '100%'
        }
      }
    }
  }
})
