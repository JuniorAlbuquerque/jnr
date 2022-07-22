import { FC, ReactNode } from 'react'
import { styles } from './styles'

type SectionItem = {
  id: number
  period: string[]
  content: string | ReactNode
}

type SectionHistoryProps = {
  icon: ReactNode
  label: string
  items: SectionItem[]
}

const SectionHistory: FC<SectionHistoryProps> = ({ icon, label, items }) => {
  return (
    <div className={styles.root()}>
      <div className={styles.title()}>
        {icon}
        <h3>{label}</h3>
      </div>

      {items?.length > 0 &&
        items?.map((item) => (
          <div key={item?.id} className={styles.sectionItemContainer()}>
            <div className="line"></div>

            <div className="item">
              <div className="period">
                {item?.period?.map((item, index) => [index > 0 && ' - ', item])}
              </div>

              <p>{item?.content}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default SectionHistory
