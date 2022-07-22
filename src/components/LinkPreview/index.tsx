import axios from 'axios'
import { FC, Fragment, useEffect, useState } from 'react'
import IconLink from '../icons/Link'
import Shimmer from '../Shimmer'
import { styles } from './styles'

type LinkPreviewProps = {
  url: string
  title?: string
  imgSrc?: string
  description?: string
  showLoading?: boolean
}

type PreviewLink = {
  description: string
  title: string
  image: string
  url: string
}

const Skeleton = () => (
  <div className={styles.shimmer()}>
    <Shimmer height="26rem" />

    <div className="texts">
      <Shimmer width="90%" height="1.5rem" />
      <Shimmer width="90%" height="1.5rem" />
      <Shimmer width="90%" height="1.5rem" />
    </div>
  </div>
)

const LinkPreview: FC<LinkPreviewProps> = ({
  url,
  title,
  imgSrc,
  description,
  showLoading
}) => {
  const [previewLinkData, setPreviewData] = useState<PreviewLink>(null)
  const [isLoading, setIsLoading] = useState(false)

  const img = imgSrc ? imgSrc : previewLinkData?.image

  const scrap = async () => {
    setIsLoading(true)
    const { data } = await axios.get(
      `https://link-preview-ts.vercel.app/api/v1/scrap?url=${url}`
    )
    setIsLoading(false)
    setPreviewData(data)
  }

  useEffect(() => {
    scrap()
  }, [])

  return (
    <div className={styles.root()}>
      {isLoading || showLoading ? (
        <Skeleton />
      ) : (
        <Fragment>
          <div className="image-preview">
            <img src={img} alt="SITE_IMAGE" />
          </div>

          <div className={styles.previewContent()}>
            <p className="title">{title ?? previewLinkData?.title}</p>
            <p className="description">
              {previewLinkData?.description
                ? previewLinkData?.description
                : description}
            </p>

            <div className="url">
              <IconLink />
              <a href={url ?? previewLinkData?.url}>
                {url ?? previewLinkData?.url}
              </a>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  )
}

export default LinkPreview
