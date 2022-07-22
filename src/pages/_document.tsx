import Header from '@/components/Header'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600&display=swap"
            rel="stylesheet "
          />
          <meta name="description" content="My personal website" />
          <meta property="og:title" content="Jnr Website" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://jnr.vercel.app/" />
          <meta
            property="og:image"
            content="https://user-images.githubusercontent.com/42422605/177070433-bccd0d3e-c1d1-4c0f-871a-60c1aa8cf23b.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
