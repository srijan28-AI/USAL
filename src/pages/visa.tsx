// src/pages/visa.tsx
'use client'

import Head from 'next/head'
import Link from 'next/link'
import { FaUniversity, FaDollarSign, FaFileAlt, FaCalendarAlt, FaFolderOpen, FaPlane } from 'react-icons/fa'

export default function VisaPage() {
  const steps = [
    {
      title: 'Apply to a SEVP‑approved School 🎓',
      description:
        'Start your journey by applying to a school that is certified by the Student and Exchange Visitor Program (SEVP). Once accepted, the school will issue you a Form I-20, which is essential for your visa process.',
      icon: <FaUniversity className="text-blue-600 text-4xl mb-4" />,
    },
    {
      title: 'Pay SEVIS I‑901 Fee 💵',
      description:
        'After receiving your I-20, pay the SEVIS I-901 fee to activate your SEVIS record. This fee supports the system that tracks international students.',
      icon: <FaDollarSign className="text-green-600 text-4xl mb-4" />,
    },
    {
      title: 'Complete DS‑160 Online Application 🖥️',
      description:
        'The DS-160 is the U.S. visa application form. It collects your personal, academic, and travel information.',
      icon: <FaFileAlt className="text-purple-600 text-4xl mb-4" />,
    },
    {
      title: 'Upload Photo & Schedule Visa Interview 📸🗓️',
      description:
        'Create a profile on the CGI Federal portal, upload a passport-sized photo, and schedule your visa interview.',
      icon: <FaCalendarAlt className="text-pink-600 text-4xl mb-4" />,
    },
    {
      title: 'Gather Documents & Attend Interview 📁🗣️',
      description:
        'Prepare all necessary documents for your interview, including your passport, DS-160 confirmation, I-20 form, SEVIS fee receipt, and financial documents.',
      icon: <FaFolderOpen className="text-yellow-600 text-4xl mb-4" />,
    },
    {
      title: 'Receive Visa & Plan Your Arrival ✈️📅',
      description:
        'If your visa is approved, your passport will be returned with an F-1 visa sticker. Start planning your travel to the U.S.',
      icon: <FaPlane className="text-blue-600 text-4xl mb-4" />,
    },
  ]

  return (
    <>
      <Head>
        <title>USAL – F‑1 Visa Process</title>
      </Head>

      <main className="px-6 py-16 max-w-6xl mx-auto text-gray-800">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">USA Visa Process</h1>
          <p className="text-lg text-gray-600">
            Follow these essential steps to successfully navigate the U.S. visa application process.
          </p>
        </section>

        {/* Steps Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
            >
              {/* Icon */}
              {step.icon}
              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h2>
              {/* Description */}
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="mt-16 text-center">
          <Link href="/resources">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
              Explore Visa Resources
            </button>
          </Link>
        </div>
      </main>
    </>
  )
}
