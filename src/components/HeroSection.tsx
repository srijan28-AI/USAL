// src/components/HeroSection.tsx
'use client'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-[#002868] to-[#BF0A30] text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mb-4"
      >
        Empowering Dreams. Guiding Futures.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg max-w-2xl mx-auto"
      >
        USAL helps students from Nepal apply to U.S. universities with confidence — no agents, just real guidance, free resources, and community support.
      </motion.p>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 px-6 py-3 bg-white text-[#002868] font-semibold rounded-full shadow hover:scale-105 transition"
      >
        Explore Universities
      </motion.button>
    </section>
  )
}
