import { css } from '@/styles/stitches.config'

export const styles = {
  content: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',

    background: '$gray2',
    padding: '$4',
    borderRadius: '$3',

    '@bp1': {
      flexDirection: 'row'
    }
  }),

  social: css({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    '& .social-links': {
      display: 'flex',
      flexDirection: 'column',
      gap: '$3',

      width: '100%',

      '@bp1': {
        maxWidth: '26rem'
      }
    },

    '& .social-item': {
      display: 'flex',
      gap: '$3',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '$4 $6',

      color: '$gray11',

      borderRadius: '$2',
      cursor: 'pointer',
      border: '1px solid $gray1',
      transition: 'all 0.25s',

      '@bp1': {
        justifyContent: 'initial'
      },

      '&:hover': {
        border: '1px solid $sky8',
        background: '$sky3',
        color: '$gray12'
      }
    }
  }),

  form: css({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: '$4',
    width: '100%',
    // background: '$gray1',
    padding: '$4',
    borderRadius: '$3',

    button: {
      width: '100%',
      marginTop: '$2'
    }
  })
}
