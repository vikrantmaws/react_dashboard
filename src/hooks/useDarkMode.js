import { useEffect, useState } from 'react'

const getInitialMode = () => {
  const stored = localStorage.getItem('theme')
  if (stored) return stored === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(getInitialMode)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return { isDark, setIsDark }
}
