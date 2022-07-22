import { css } from '@/styles/stitches.config'

export const styles = {
  root: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '$4'
  }),
  content: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(40rem, 1fr))',
    justifyItems: 'center',
    gap: '$7',

    '@bp2': {
      gridTemplateColumns: 'repeat(auto-fit, minmax(34rem, 1fr))',
      justifyItems: 'flex-start'
    }
  }),

  card: css({
    padding: '$5',
    background: '$gray2',
    borderRadius: '$4',

    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
    width: '100%',

    a: {
      color: 'inherit',
      textDecoration: 'none',
      width: 'fit-content'
    },

    '& .articles': {
      marginTop: '$3',
      display: 'flex',
      flexDirection: 'column',
      gap: '$4'
    },

    '& .card-description': {
      display: 'flex',
      flexDirection: 'column',
      gap: '$2',

      color: '$gray12',
      textAlign: 'center',
      padding: '$3',

      span: {
        color: '$gray10',
        fontSize: '$1'
      }
    },

    '& .card-icons': {
      display: 'flex',
      gap: '$2',
      marginTop: 'auto',

      justifyContent: 'center'
    }
  })
}
