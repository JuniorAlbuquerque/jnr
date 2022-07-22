import { FC, ReactNode } from 'react'
import { styles } from './styles'

type CardProps = {
  children: ReactNode
}

const Card: FC<CardProps> = ({ children }) => {
  return <div className={styles.root()}>{children}</div>
}

export default Card
