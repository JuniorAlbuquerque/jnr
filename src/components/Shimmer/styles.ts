import { css, keyframes } from '@/styles/stitches.config'

const shimmer = keyframes({
  '0%': {
    background: '$gray6'
  },
  '50%': { background: '$gray4' },
  '100%': {
    background: '$gray6'
  }
})

export const styles = {
  root: ({
    width,
    height
  }: {
    width: number | string | undefined
    height: number | string | undefined
  }) =>
    css({
      width: width ? width : '100%',
      height: height ? height : '100%',
      background: '$gray10',
      borderRadius: '$4',

      animation: `${shimmer} 2s ease-in-out infinite`
    })
}
