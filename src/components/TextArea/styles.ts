import { styled } from '@/styles/stitches.config'

export const TextAreaWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  '.label': {
    marginBottom: '$1',
    marginLeft: '$1'
  },

  '.error': {
    color: '$crimsonA10',
    fontSize: '$1',
    marginLeft: '$1'
  }
})

export const TextAreaContent = styled('textarea', {
  background: '$gray4',
  padding: '$4',
  borderRadius: '$3',

  resize: 'vertical',

  color: '$gray12',
  outline: 'none',
  border: '1px solid $gray4',

  '&:focus': {
    outline: 'none',
    border: '1px solid $gray11'
  }
})
