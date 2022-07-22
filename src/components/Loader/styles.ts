import { css, keyframes } from '@/styles/stitches.config'

const loader = keyframes({
  '0%': { WebkitTransform: 'rotate(0deg)', transform: 'rotate(0deg)' },
  '100%': { WebkitTransform: 'rotate(360deg)', transform: 'rotate(360deg)' }
})

export const styles = {
  root: css({
    '.loader, .loader:after': {
      borderRadius: '50%',
      width: '2rem',
      height: '2rem'
    },
    '.loader': {
      fontSize: '0.25rem',
      position: 'relative',
      textIndent: '-9999em',
      borderTop: '0.25rem solid rgba(255, 255, 255, 0.2)',
      borderRight: '0.25rem solid rgba(255, 255, 255, 0.2)',
      borderBottom: '0.25rem solid rgba(255, 255, 255, 0.2)',
      borderLeft: '0.25rem solid #ffffff',
      WebkitTransform: 'translateZ(0)',
      msTransform: 'translateZ(0)',
      transform: 'translateZ(0)',
      animation: `${loader} 1.1s infinite linear`
    }
  })
}
