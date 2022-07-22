import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { darkTheme } from '../styles/theme'
import { globalStyles } from '@/styles/global'
import AnimatedPage from '@/components/AnimatePage'
import Header from '@/components/Header'
import { useEffect } from 'react'
import CommandBar from '@/components/CommandBar'
import { KBarProvider } from 'kbar'
import { useActions } from '@/constants/actions'

function MyApp({ Component, pageProps, router }: AppProps) {
  globalStyles()

  useEffect(() => {
    console.log(router.route)
  }, [router.route])

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: 'light',
        dark: darkTheme.className
      }}
    >
      <CommandBar>
        <Header />
        <AnimatedPage
          pageKey={router.route}
          variant={router.route === '/' ? 'center' : undefined}
        >
          <Component {...pageProps} />
        </AnimatedPage>
      </CommandBar>
    </ThemeProvider>
  )
}

export default MyApp
