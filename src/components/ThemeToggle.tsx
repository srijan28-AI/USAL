'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure the component only renders after hydration
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="bg-transparent border border-gray-300 dark:border-gray-600 text-sm rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
    >
      <option value="light">🌞 Light</option>
      <option value="dark">🌜 Dark</option>
      <option value="system">
        {systemTheme === 'dark' ? '🌜 System (Dark)' : '🌞 System (Light)'}
      </option>
    </select>
  )
}
