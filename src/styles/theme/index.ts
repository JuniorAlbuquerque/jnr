import { createTheme } from '../stitches.config'
import { grayDark, skyDark, blackA } from '@radix-ui/colors'

export const darkTheme = createTheme({
  colors: {
    ...grayDark,
    ...skyDark,
    ...blackA
  }
})
