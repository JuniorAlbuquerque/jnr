import { css } from '@/styles/stitches.config'
import { darkTheme } from '@/styles/theme'

export const box = css({})

export const root = css({
  background: '$gray1',
  width: '100%',
  position: 'sticky',
  top: '0',
  zIndex: 2,

  '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
    background: 'rgba(255, 255, 255, 0.05)',
    WebkitBackdropFilter: 'saturate(200%) blur(25px)',
    backdropFilter: 'saturate(200%) blur(25px)',

    [`.${darkTheme} &`]: {
      background: 'rgba(255, 255, 255, 0.0)'
    }
  }
})

export const header = css({
  display: 'flex',
  alignItems: 'baseline',
  gap: '$7',
  padding: '$7',
  ct: '$w3',

  a: {
    textDecoration: 'none'
  },

  '.title': {
    mr: '$6',
    fontSize: '$5',
    fontWeight: '600',
    padding: '1rem',
    borderRadius: '$2',
    marginLeft: '-$3',
    cursor: 'pointer',

    color: '$sky11',

    '&:hover': {
      background: '$sky4'
    }
  },

  nav: {
    display: 'none',
    '@bp1': {
      display: 'initial'
    }
  },

  ul: {
    display: 'flex',
    gap: '$7',
    ml: '$7',

    li: {
      listStyleType: 'none',
      cursor: 'pointer'
    }
  },

  '& .actions': {
    display: 'flex',
    gap: '$4',
    ml: 'auto'
  }
})
