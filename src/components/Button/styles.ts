import { styled } from '@/styles/stitches.config'
import { darkTheme } from '@/styles/theme'

export const Container = styled('button', {
  borderRadius: '$2',
  padding: '1rem 1.6rem',
  border: 'none',
  background: '$gray4',
  color: '$gray12',
  width: 'fit-content',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  transition: 'all 0.25s',

  '&:hover': {
    background: '$gray7'
  },

  variants: {
    variant: {
      primary: {
        background: '$sky5',
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
      },
      secondary: {
        background: '$gray11',
        color: '$gray1',

        '&:hover': {
          background: '$gray12'
        }
      }
    }
  }
})
