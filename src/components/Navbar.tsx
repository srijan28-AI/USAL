'use client'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Universities', href: '/universities' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-[#002868]">
          USAL
        </Link>
        <nav className="flex gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full border border-[#002868] text-[#002868] font-medium hover:bg-[#002868] hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
