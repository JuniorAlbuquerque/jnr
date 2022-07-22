import Button from '@/components/Button'
import { ArrowRight } from '@/components/icons'
import { useKBar } from 'kbar'
import type { NextPage } from 'next'
import Head from 'next/head'
import { styles } from '@/styles/pageStyles/home'

const Home: NextPage = () => {
  const { query } = useKBar()

  return (
    <div className={styles.content()}>
      <Head>
        <title>Jnr | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Hi, I'm Ednilson Jr 👋</h2>

      <p>
        Engenheiro de Software pela Universidade Federal do Amazonas, nascido em
        Parintins - Amazonas, desenvolvedor Frontend, entusiasta em UI e UX e
        músico nas horas vagas.
      </p>

      <p>
        Atualmente, Desenvolvedor Frontend Sr, com foco em React e Typescript.
      </p>

      <p>Quer conhecer mais sobre meu trabalho?</p>

      <Button
        variant="primary"
        css={{
          marginTop: '$6',
          svg: {
            transition: 'transform 0.25s',
            transform: 'translateX(-0.1rem)'
          },

          '&:hover': {
            svg: {
              transform: 'translateX(0.35rem)'
            }
          },

          kbd: {
            color: '$sky2',
            background: '$sky11',
            padding: '$1',
            borderRadius: '$1',
            fontSize: '$1'
          }
        }}
        onClick={() => query.toggle()}
      >
        Press <kbd>ctrl</kbd> + <kbd>K</kbd> to start
        <ArrowRight />
      </Button>
    </div>
  )
}

export default Home
