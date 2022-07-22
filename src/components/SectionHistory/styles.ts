import { css } from '@/styles/stitches.config'
import { darkTheme } from '@/styles/theme'

export const styles = {
  root: css({
    display: 'flex',
    flexDirection: 'column'
  }),

  title: css({
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
    color: '$sky11',

    h3: {
      fontSize: '$4'
    },

    svg: {
      width: '2.4rem',
      height: '2.2rem'
    },

    [`.${darkTheme} &`]: {
      color: '$sky10'
    }
  }),

  sectionItemContainer: css({
    padding: '$1',
    marginLeft: '$8',
    marginTop: '$4',
    position: 'relative',

    display: 'flex',

    '.line': {
      width: '0.25rem',
      borderRadius: '$2',
      background: '$gray7',
      marginRight: '$2',
      height: 'calc(auto + 200px)'
    },

    '& .item': {
      padding: '$2',
      display: 'flex',
      flexDirection: 'column',
      gap: '$2'
    },

    '& .period': {
      color: '$gray9'
    }
  })
}
