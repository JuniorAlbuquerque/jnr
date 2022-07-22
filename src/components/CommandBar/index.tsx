import { FC, forwardRef, ReactNode, RefObject, useEffect } from 'react'
import {
  ActionImpl,
  KBarPortal,
  KBarProvider,
  KBarResults,
  useKBar,
  useMatches
} from 'kbar'
import { Animator, GroupName, Item, Positioner, Search } from './styles'
import { useRouter } from 'next/router'
import { useActions } from '@/constants/actions'
import { useTheme } from 'next-themes'
import { ToastContainer } from 'react-toastify'

type RenderItemProps = {
  item: ActionImpl
  active: boolean
  activeIndex: number
}

type CommandBarProps = {
  children: ReactNode
}

const RenderItem = forwardRef(
  ({ item, active, activeIndex }: RenderItemProps, ref) => {
    const { query } = useKBar()

    useEffect(() => {
      if (activeIndex !== -1) {
        query?.setActiveIndex(activeIndex)

        return
      }

      query?.setActiveIndex(1)
    }, [])

    return (
      <Item
        ref={ref as RefObject<HTMLDivElement>}
        variant={active ? 'active' : undefined}
      >
        <div className="label">
          {item?.icon && item?.icon}

          {item.name}
        </div>

        {item?.shortcut && item?.shortcut?.length > 0 && (
          <div className="shortcuts">
            {item?.shortcut?.map((shortcut, index) => (
              <kbd key={index}>{shortcut}</kbd>
            ))}
          </div>
        )}
      </Item>
    )
  }
)

function RenderResults() {
  const { results } = useMatches()
  const router = useRouter()

  const activeIndex = results?.findIndex(
    (item) =>
      typeof item !== 'string' &&
      router?.pathname?.includes(item?.name?.toLowerCase())
  )

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <GroupName>{item}</GroupName>
        ) : (
          <RenderItem item={item} active={active} activeIndex={activeIndex} />
        )
      }
    />
  )
}

const CommandBar: FC<CommandBarProps> = ({ children }) => {
  const { actions } = useActions()
  const { theme } = useTheme()
  const router = useRouter()

  return (
    <KBarProvider actions={actions(router)}>
      <KBarPortal>
        <Positioner>
          <Animator>
            <Search placeholder="Search" />
            <RenderResults />
          </Animator>
        </Positioner>
      </KBarPortal>
      <ToastContainer
        position="bottom-left"
        toastClassName="toast-content"
        theme={theme === 'dark' ? 'dark' : 'light'}
      />

      {children}
    </KBarProvider>
  )
}

export default CommandBar
