'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/usal.jpg"
            alt="USAL Logo"
            width={50}
            height={50}
            className="rounded-full mr-3 animate-float"
          />
          <span className="text-2xl font-bold tracking-wide">
            USAL
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center gap-6">
          {['Home', 'Universities', 'Resources', 'Blogs & News', 'About', 'Visa', 'Login'].map(
            (label) => (
              <Link
                key={label}
                href={`/${label.toLowerCase().replace(/\s+/g, '')}`}
                className="relative px-4 py-2 text-lg font-medium transition hover:text-yellow-300"
              >
                {label}
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-300 transition-all duration-300 hover:w-full"></span>
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  )
}