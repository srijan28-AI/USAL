// src/components/UniversityCard.tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {
  name: string
  location: string
  fee: string
  ielts: string
  sat: string
  scholarship: string
  link: string
}

export default function UniversityCard({ name, location, fee, ielts, sat, scholarship, link }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative border border-gray-300 rounded-lg p-6 shadow-sm transition"
    >
      <h3 className="font-semibold text-lg text-[#002868]">{name}</h3>
      <p className="text-sm text-gray-600">{location}</p>
      <p className="text-sm text-gray-600">Fee: {fee}</p>
      <div className="opacity-0 hover:opacity-100 absolute inset-0 bg-white bg-opacity-90 flex flex-col justify-center items-center p-4 text-gray-800 transition">
        <p>IELTS: {ielts}</p>
        <p>SAT: {sat}</p>
        <p>{scholarship}</p>
      </div>
      <Link href={link} target="_blank" className="mt-3 inline-block text-sm text-blue-600 hover:underline">
        Visit Website →
      </Link>
    </motion.div>
  )
}
