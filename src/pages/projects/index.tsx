import Button from '@/components/Button'
import IconGithub from '@/components/icons/Github'
import LinkPreview from '@/components/LinkPreview'
import Head from 'next/head'
import { styles } from './styles'

const Projects: React.FC = () => {
  return (
    <div className={styles.root()}>
      <Head>
        <title>Jnr | Projects</title>
      </Head>

      <div className={styles.content()}>
        <div className={styles.card()}>
          <LinkPreview url="https://jnr.vercel.app/" />

          <div className="card-description">
            <p>My personal website</p>

            <span>[React, Typescript, Vite, Stitches]</span>
          </div>

          <div className="card-icons">
            <a
              href="https://github.com/JuniorAlbuquerque/jnr-website"
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                <IconGithub />
              </Button>
            </a>
          </div>
        </div>

        <div className={styles.card()}>
          <LinkPreview
            url="https://github.com/JuniorAlbuquerque/launcher-jnr"
            imgSrc="https://user-images.githubusercontent.com/42422605/160262526-d8ce3f58-e870-4fe7-9c55-8bcfbaedc9fc.png"
          />

          <div className="card-description">
            <p>Simple Launcher</p>

            <span>[React, Typescript, Vite, Emotion, Socket.io]</span>
          </div>

          <div className="card-icons">
            <a
              href="https://github.com/JuniorAlbuquerque/launcher-jnr"
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                <IconGithub />
              </Button>
            </a>
          </div>
        </div>

        <div className={styles.card()}>
          <LinkPreview url="https://github.com/JuniorAlbuquerque/launcher-api" />

          <div className="card-description">
            <p>Simple Launcher (API)</p>

            <span>[NodeJS, Typescript, Express, Socket.io]</span>
          </div>

          <div className="card-icons">
            <a
              href="https://github.com/JuniorAlbuquerque/launcher-api"
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                <IconGithub />
              </Button>
            </a>
          </div>
        </div>

        <div className={styles.card()}>
          <LinkPreview
            title="RST-IoT"
            url="https://riot-frontend.vercel.app/"
            imgSrc="https://riot-frontend.vercel.app/static/media/check-bg.413c5571.png"
            description="Uma Ferramenta de Apoio a Especificação de Requisitos de Sistemas de Software IoT"
          />

          <div className="card-description">
            <p>Especificação de Requisitos de Sistemas de Software IoT</p>

            <span>[ReactJS, Node, Postgres]</span>
          </div>

          <div className="card-icons">
            <a
              href="https://github.com/JuniorAlbuquerque/riot-frontend"
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                <IconGithub />
              </Button>
            </a>
          </div>
        </div>

        <div className={styles.card()}>
          <LinkPreview
            url="https://jnrgod1.gitlab.io/color-huh"
            imgSrc="https://gitlab.com/jnrgod1/color-huh/-/raw/master/img/screens/white.png"
            description="Gerador randomico de cores :D"
          />

          <div className="card-description">
            <p>Simple Color generator</p>

            <span>[Javascript (vanilla), HTML, css]</span>
          </div>

          <div className="card-icons">
            <a
              href="https://gitlab.com/jnrgod1/color-huh"
              target="_blank"
              rel="noreferrer"
            >
              <Button>
                <IconGithub />
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div
        className={styles.card({
          css: {
            marginTop: '$2'
          }
        })}
      >
        <h3>Publicações</h3>

        <div className="articles">
          <a
            href="https://www.semanticscholar.org/paper/RST-IoT%3A-Um-Apoio-Computacional-para-Especifica%C3%A7%C3%A3o-J%C3%BAnior-Costa/b971e7e981b87fc23b33fa6e418639672d8b8d3f"
            target="_blank"
            rel="noreferrer"
          >
            <Button>24º Workshop em Engenharia de Requisitos | Brasília</Button>
          </a>

          <a
            href="https://riu.ufam.edu.br/handle/prefix/5818"
            target="_blank"
            rel="noreferrer"
          >
            <Button>Trabalho de Conclusão de Curso (2021)</Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
