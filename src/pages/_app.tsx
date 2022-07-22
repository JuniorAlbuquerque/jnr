import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { darkTheme } from '../styles/theme'
import { globalStyles } from '@/styles/global'
import AnimatedPage from '@/components/AnimatePage'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: 'light',
        dark: darkTheme.className
      }}
    >
      <AnimatedPage>
        <Component {...pageProps} />
      </AnimatedPage>
    </ThemeProvider>
  )
}

export default MyApp
