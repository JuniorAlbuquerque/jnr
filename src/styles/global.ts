import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap')"
  ],
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    '-webkit-font-smoothing': 'antialiased',

    '::-webkit-scrollbar': {
      width: 10
    },

    /* Track */
    '::-webkit-scrollbar-track': {
      background: '$gray5'
    },

    /* Handle */
    '::-webkit-scrollbar-thumb': {
      background: '$gray9',
      borderRadius: '$2'
    },

    /* Handle on hover */
    '::-webkit-scrollbar-thumb:hover': {
      background: '$gray10'
    }
  },
  html: {
    fontSize: '58.5%',
    background: '$gray1',
    color: '$gray12',
    height: '-webkit-fill-available',

    '@bp1': {
      fontSize: '62.5%'
    }
  },
  'body, button, input, textarea': {
    fontFamily: '$default',
    fontSize: '$2'
  },
  button: {
    cursor: 'pointer'
  },
  'body, #__next': {
    minHeight: '100vh',
    /* mobile viewport bug fix */
    'min-height': '-webkit-fill-available',
    display: 'flex',
    flexDirection: 'column',

    '.toast-content': {
      fontFamily: 'Be Vietnam Pro, sans-serif'
    }
  },
  '#__next': {
    flex: 1
  }
})
