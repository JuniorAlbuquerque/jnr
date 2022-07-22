import { createStitches } from '@stitches/react'
import { gray, sky, blackA, crimsonA, tealA } from '@radix-ui/colors'
import type * as Stitches from '@stitches/react'

export const { styled, css, globalCss, createTheme, keyframes } =
  createStitches({
    theme: {
      fonts: {
        default: 'Be Vietnam Pro, sans-serif'
      },
      fontSizes: {
        1: '1.4rem',
        2: '1.6rem',
        3: '1.8rem',
        4: '2.4rem',
        5: '2.8rem',
        6: '3rem',
        7: '3.2rem'
      },
      radii: {
        1: '0.4rem',
        2: '0.8rem',
        3: '1.2rem',
        4: '1.6rem',
        5: '2rem'
      },
      space: {
        1: '0.4rem',
        2: '0.8rem',
        3: '1rem',
        4: '1.4rem',
        5: '1.8rem',
        6: '2rem',
        7: '2.4rem',
        8: '3rem',
        9: '3.4rem'
      },
      sizes: {
        w1: '80rem',
        w2: '108rem',
        w3: '112.8rem',
        w4: '136.6rem'
      },
      colors: {
        ...gray,
        ...sky,
        ...blackA,
        ...crimsonA,
        ...tealA,
        overlay: '$blackA11'
      }
    },
    media: {
      bp1: '(min-width: 640px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
      bp4: '(min-width: 1366px)'
    },
    utils: {
      ml: (value: Stitches.ScaleValue<'space'>) => ({
        marginLeft: value
      }),
      mr: (value: Stitches.ScaleValue<'space'>) => ({
        marginRight: value
      }),
      ct: (value: Stitches.ScaleValue<'sizes'>) => ({
        maxWidth: value,
        margin: '0 auto',
        width: '100%'
      })
    }
  })
