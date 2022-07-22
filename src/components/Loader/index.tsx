import React from 'react'
import { styles } from './styles'

const Loader: React.FC = () => {
  return (
    <div className={styles.root()}>
      <div className="loader"></div>
    </div>
  )
}

export default Loader
