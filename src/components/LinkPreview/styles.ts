import { css } from '@/styles/stitches.config'
import { darkTheme } from '@/styles/theme'

export const styles = {
  root: css({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    background: '$gray3',
    borderRadius: '$4',

    img: {
      width: '100%',
      objectFit: 'cover',
      height: '24rem',
      borderTopLeftRadius: '$4',
      borderTopRightRadius: '$4'
    },

    '& .image-preview': {
      maxHeight: '24rem',
      height: 'auto'
    }
  }),

  previewContent: css({
    padding: '$4',
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',

    '& .title': {
      fontSize: '$3',
      color: '$sky11',
      fontWeight: '600',
      maxWidth: '28rem',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',

      '@bp2': {
        maxWidth: '28rem'
      },

      [`.${darkTheme} &`]: {
        color: '$sky9'
      }
    },

    '& .description': {
      maxWidth: '28rem',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },

    '& .url': {
      display: 'flex',
      alignItems: 'center',
      gap: '$3',

      color: '$gray10',
      cursor: 'pointer',

      '&:hover': {
        color: '$gray11'
      },

      a: {
        textDecoration: 'none',
        color: 'inherit',

        maxWidth: '24rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }
  }),

  shimmer: css({
    background: '$gray2',
    borderRadius: '$4',
    width: '100%',
    height: '35rem',
    flex: 1,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    '.texts': {
      marginTop: '$3',
      display: 'flex',
      flexDirection: 'column',
      gap: '$3',
      alignItems: 'center',
      width: '100%'
    }
  })
}
