'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Image from 'next/image'

export default function LandingPage() {
  const router = useRouter()

  useEffect(() => {
    // Prevent scrolling on the landing page
    document.body.style.overflow = 'hidden'
  }, [])

  const handleGetStarted = () => {
    document.body.style.overflow = 'auto' // Re-enable scrolling
    router.push('/home') // Redirect to the home page
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Floating Logo */}
      <div className="fixed top-10 right-10 z-50 animate-bounce">
        <Image
          src="/usal.jpg" // Replace with the path to your floating logo
          alt="Floating Logo"
          width={200}
          height={200}
          className="rounded-full shadow-2xl border-4 border-white"
        />
      </div>

      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 opacity-30 blur-3xl animate-pulse"></div>

      {/* Main Content */}
      <div className="text-center max-w-3xl z-10">
        <h1 className="text-6xl font-extrabold text-white mb-8 animate-fade-in">
          Welcome to <span className="text-yellow-300">USA Self Learn</span>
        </h1>
        <p className="text-2xl text-gray-100 mb-12 animate-fade-in delay-200">
          Building Paths to Success, Together.
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-transform duration-300 animate-fade-in delay-400"
        >
          Get Started
        </button>
      </div>
    </div>
  )
}