import { FunctionComponent } from 'react'
import { styles } from './styles'

interface IShimmerEffect {
  width?: number | string
  height?: number | string
}

export const Shimmer: FunctionComponent<IShimmerEffect> = ({
  width,
  height
}) => {
  const style = styles.root({ width, height })

  return <div className={style()} />
}

export default Shimmer
