// src/pages/resources.tsx
'use client'

import Head from 'next/head'
import { motion } from 'framer-motion'
import { FaFileAlt } from 'react-icons/fa'

interface Resource {
  title: string
  description: string
  viewHref?: string // URL for viewing materials
  icon: React.ReactNode
}

const resources: Resource[] = [
  {
    title: 'IELTS',
    description: 'Comprehensive preparation materials for the IELTS exam.',
    viewHref: '/resources/ielts', // URL for viewing IELTS materials
    icon: <FaFileAlt className="h-8 w-8 text-indigo-500" />,
  },
  {
    title: 'PTE',
    description: 'Study guides and practice tests for the PTE Academic.',
    viewHref: '/resources/pte', // URL for viewing PTE materials
    icon: <FaFileAlt className="h-8 w-8 text-green-500" />,
  },
  {
    title: 'GRE',
    description: 'Preparation materials for the GRE graduate admissions test.',
    viewHref: '/resources/gre', // URL for viewing GRE materials
    icon: <FaFileAlt className="h-8 w-8 text-pink-500" />,
  },
  {
    title: 'Duolingo',
    description: 'Fast & convenient prep materials for the Duolingo English Test.',
    viewHref: '/resources/duolingo', // URL for viewing Duolingo materials
    icon: <FaFileAlt className="h-8 w-8 text-yellow-500" />,
  },
  {
    title: 'GMAT',
    description: 'Official guides and practice GMAT questions.',
    viewHref: '/resources/gmat', // URL for viewing GMAT materials
    icon: <FaFileAlt className="h-8 w-8 text-red-500" />,
  },
  {
    title: 'SAT eBook',
    description: 'A complete PDF guide to the SAT—tips, practice tests, and strategies.',
    viewHref: '/resources/sat', // URL for viewing SAT materials
    icon: <FaFileAlt className="h-8 w-8 text-blue-500" />,
  },
  {
    title: 'Visa Questions Guide',
    description: 'A special guide by USA for visa interview preparation.',
    viewHref: '/resources/visa-questions', // URL for viewing Visa Questions materials
    icon: <FaFileAlt className="h-8 w-8 text-purple-500" />,
  },
]

export default function ResourcesPage() {
  return (
    <>
      <Head>
        <title>USAL – Resources & Materials</title>
        <meta
          name="description"
          content="Access our library of study guides, practice tests, and expert tips for IELTS, SAT, GRE, GMAT, PTE, Duolingo, and more."
        />
      </Head>

      {/* Hero Banner */}
      <section className="relative bg-gradient-to-r from-blue-800 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Study Materials & Practice Guides
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl opacity-90">
            Everything you need to ace your exams — browse, view, and start practicing today!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-gray-50 pb-16">
        <div className="container mx-auto px-6 pt-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {resources.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col"
              >
                <div className="mb-4">{r.icon}</div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition">
                  {r.title}
                </h2>
                <p className="text-gray-600 flex-grow">{r.description}</p>
                <div className="mt-6">
                  {r.viewHref && (
                    <a
                      href={r.viewHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-700 transition"
                    >
                      View Materials
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
