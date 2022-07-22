import { navItems } from '@/data/navItems'
import { useKBar } from 'kbar'
import React from 'react'
import Link from 'next/link'
import Button from '../Button'
import { Moon, Sun } from '../icons'
import CommandLine from '../icons/CommandLine'
import LinkItem from '../LinkItem'
import { box, header, root } from './styles'
import { useTheme } from 'next-themes'

const Header: React.FC = () => {
  const { theme, setTheme } = useTheme()
  const { query } = useKBar()

  return (
    <div className={root()}>
      <div className={header()}>
        <Link href="/">
          <span className="title">JNR</span>
        </Link>

        <nav>
          <ul>
            {navItems?.map((item) => (
              <li key={item?.id}>
                <LinkItem to={item.id} href="">
                  {item?.name}
                </LinkItem>
              </li>
            ))}
          </ul>
        </nav>

        <div className="actions">
          {theme === 'dark' ? (
            <Button onClick={() => setTheme('light')}>
              <Sun />
            </Button>
          ) : (
            <Button onClick={() => setTheme('dark')}>
              <Moon />
            </Button>
          )}

          <Button onClick={() => query.toggle()}>
            <CommandLine />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header
