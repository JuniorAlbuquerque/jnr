import { Moon } from '@/components/icons'
import IconCode from '@/components/icons/Code'
import IconDashboard from '@/components/icons/Dashboard'
import IconHeart from '@/components/icons/Heart'
import IconHome from '@/components/icons/Home'
import IconMail from '@/components/icons/Mail'
import { Action } from 'kbar'
import { useTheme } from 'next-themes'
import { NextRouter } from 'next/router'

export function useActions() {
  const { setTheme } = useTheme()
  const toggleTheme = () => {
    const theme = localStorage.getItem('theme')
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  const actions = (router: NextRouter): Action[] => [
    {
      id: 'home',
      name: 'Home',
      shortcut: ['n', 'h'],
      section: 'Navigation',
      keywords: 'writing words',
      icon: <IconHome />,
      perform: () => router.push('/')
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['n', 'a'],
      section: 'Navigation',
      keywords: 'writing words',
      icon: <IconHeart />,
      perform: () => router.push('about')
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['n', 'p'],
      keywords: 'projects',
      section: 'Navigation',
      icon: <IconDashboard />,
      perform: () => router.push('projects')
    },
    {
      id: 'contact',
      name: 'Contact',
      shortcut: ['n', 'c'],
      keywords: 'contacts',
      section: 'Navigation',
      icon: <IconMail />,
      perform: () => router.push('contact')
    },
    {
      id: 'source',
      name: 'View Source',
      shortcut: ['v'],
      keywords: 'source',
      section: 'Other',
      icon: <IconCode />,
      perform: () =>
        window.open(
          'https://github.com/JuniorAlbuquerque/jnr-website',
          '_blank'
        )
    },
    {
      id: 'email',
      name: 'Send Email',
      shortcut: ['e'],
      keywords: 'email',
      section: 'Other',
      icon: <IconMail />,
      perform: () => (window.location.href = 'mailto:jnrabl.dev@gmail.com')
    },
    {
      id: 'theme',
      name: 'Change theme',
      shortcut: ['t'],
      keywords: 'theme',
      section: 'Other',
      icon: <Moon />,
      perform: () => toggleTheme()
    }
  ]

  return {
    actions
  }
}
