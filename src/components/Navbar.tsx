// src/components/Navbar.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system')

  // Apply theme to <html>
  useEffect(() => {
    const root = window.document.documentElement
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    root.classList.toggle('dark', isDark)
  }, [theme])

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/usal.jpg" // Corrected file name
            alt="USAL Logo"
            width={50}
            height={50}
            className="rounded-full mr-2"
          />
          <span className="text-2xl font-bold text-blue-800 dark:text-blue-400">
            USAL
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center gap-4">
          {['Home', 'Universities', 'Resources', 'About', 'Contact', 'Visa', 'Auth'].map(
            (label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase().replace(/\s+/g, '')}`}
                className="px-4 py-2 rounded-full border border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white transition"
              >
                {label}
              </Link>
            )
          )}

          {/* Theme Selector */}
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as any)}
            className="ml-4 px-3 py-2 border rounded-md bg-white dark:bg-gray-800 dark:text-gray-200"
          >
            <option value="light">
              Light <SunIcon className="inline h-4 w-4 mb-0.5 ml-1" />
            </option>
            <option value="dark">
              Dark <MoonIcon className="inline h-4 w-4 mb-0.5 ml-1" />
            </option>
            <option value="system">
              System{' '}
              <SunIcon className="inline h-4 w-4 mb-0.5 ml-1" />/
              <MoonIcon className="inline h-4 w-4 mb-0.5 ml-1" />
            </option>
          </select>
        </nav>
      </div>
    </header>
  )
}
