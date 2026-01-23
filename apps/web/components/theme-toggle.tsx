'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('system')
    else setTheme('light')
  }
  return (
    <button
      onClick={cycleTheme}
      className="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
    >
      {theme === 'light' && '☀️ Light'}
      {theme === 'dark' && '🌙 Dark'}
      {theme === 'system' && '💻 System'}
    </button>
  )
}

