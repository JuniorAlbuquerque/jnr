import { css } from '@/styles/stitches.config'

export const styles = {
  content: css({
    h2: {
      fontSize: '$7',
      marginBottom: '$4'
    },

    p: {
      fontSize: '$3'
    }
  }),

  card: css({
    display: 'flex',
    flexDirection: 'column',

    gap: '$7',

    h1: {
      color: '$sky11'
    },

    img: {
      borderRadius: '$4',
      width: '100%',
      height: 'auto',
      maxHeight: '30rem',
      objectFit: 'cover',

      '@bp1': {
        maxWidth: '23rem',
        maxHeight: '45rem'
      }
    },

    '@bp1': {
      flexDirection: 'row'
    }
  }),

  cardInfo: css({
    display: 'flex',
    marginTop: '$4',
    flexDirection: 'column',
    gap: '$7',
    textAlign: 'justify',

    button: {
      marginTop: 'auto',
      alignSelf: 'flex-end'
    },

    '@bp1': {
      maxWidth: '80%'
    }
  }),

  history: css({
    marginTop: '$8',
    display: 'flex',
    flexDirection: 'column',
    gap: '$8'
  })
}
