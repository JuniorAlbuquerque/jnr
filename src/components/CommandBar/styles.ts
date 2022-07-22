import { styled } from '@/styles/stitches.config'
import { darkTheme } from '@/styles/theme'
import { KBarAnimator, KBarPositioner, KBarSearch } from 'kbar'

export const Positioner = styled(KBarPositioner, {
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  inset: '0px',
  padding: '14vh 16px 16px',
  background: '$blackA8',
  boxSizing: 'border-box',
  zIndex: 3,

  [`.${darkTheme} &`]: {
    background: '$blackA11'
  }
})

export const Animator = styled(KBarAnimator, {
  maxWidth: '600px',
  width: '100%',
  color: '$gray11',
  borderRadius: '8px',
  overflow: 'hidden',
  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    background: 'rgba(255, 255, 255, 0.55)',
    WebkitBackdropFilter: 'saturate(300%) blur(25px)',
    backdropFilter: 'saturate(300%) blur(25px)',

    [`.${darkTheme} &`]: {
      background: 'rgba(255, 255, 255, 0.05)'
    }
  }
})

export const Search = styled(KBarSearch, {
  padding: '$4',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  background: 'rgba(255, 255, 255, 0.05)',
  color: '$gray11',

  [`.${darkTheme} &`]: {
    background: 'rgba(255, 255, 255, 0)'
  }
})

export const GroupName = styled('div', {
  padding: '$4',
  fontSize: '10px',
  textTransform: 'uppercase',
  letterSpacing: '1px'
})

export const Item = styled('div', {
  padding: '$4',
  cursor: 'pointer',

  display: 'flex',
  justifyContent: 'space-between',

  variants: {
    variant: {
      active: {
        background: 'rgba(0, 0, 0, 0.15)',
        color: '$gray12',

        [`.${darkTheme} &`]: {
          background: '$overlay',
          color: '$gray12'
        }
      }
    }
  },

  '.label': {
    display: 'flex',
    gap: '$2',
    alignItems: 'center'
  },

  '.shortcuts': {
    display: 'flex',
    gap: '$1',

    kbd: {
      padding: '$1 $2',
      fontSize: '$1',
      background: '$gray3',
      borderRadius: '$1'
    }
  }
})
