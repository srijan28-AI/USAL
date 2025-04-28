// src/components/TestimonialSlider.tsx
'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  { name: 'Asha', text: 'USAL made my visa process a breeze!' },
  { name: 'Binod', text: 'The community support is unmatched.' },
  { name: 'Chitra', text: 'I saved hundreds of dollars on agency fees.' },
]

export default function TestimonialSlider() {
  const [idx, setIdx] = useState(0)
  const next = () => setIdx((i) => (i + 1) % testimonials.length)
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)

  return (
    <div className="max-w-xl mx-auto text-center py-12">
      <motion.p
        key={idx}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="text-lg italic text-gray-700 mb-4"
      >
        “{testimonials[idx].text}”
      </motion.p>
      <p className="font-semibold text-[#002868]">{testimonials[idx].name}</p>
      <div className="flex justify-center gap-4 mt-6">
        <button onClick={prev} className="px-3 py-1 bg-gray-200 rounded">Prev</button>
        <button onClick={next} className="px-3 py-1 bg-gray-200 rounded">Next</button>
      </div>
    </div>
  )
}
