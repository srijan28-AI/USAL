'use client'

import Head from 'next/head'
import { FaDownload, FaFilePdf, FaBook, FaHeadphones, FaPen, FaMicrophone, FaRedo, FaCalendarAlt } from 'react-icons/fa'

export default function DuolingoResourcesPage() {
  const files = [
    '5 C test (hard) x 92_240122_190055.pdf',
    '6 interview listen (speaking)_240109_141541.pdf',
    '7 speaking describe image_240109_141325.pdf',
    'Duolingo-short-description-of-image__240109_141923.pdf',
    'Speaking - 90 seconds about a topic_240122_185840.pdf',
    'Subscores explained _240124_093239.pdf',
  ]

  return (
    <>
      <Head>
        <title>Duolingo Resources – USAL</title>
        <meta
          name="description"
          content="Access Duolingo English Test preparation materials, including practice tests and study guides."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Duolingo Resources
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl opacity-90">
            The Duolingo English Test is a modern, affordable, and convenient English proficiency test accepted by thousands of institutions worldwide. It evaluates reading, writing, listening, and speaking skills in a single test.
          </p>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            What is the Duolingo English Test and Why is it Important?
          </h2>
          <p className="text-gray-600 text-lg mb-8 text-center max-w-3xl mx-auto">
            The Duolingo English Test is a fast, affordable, and accessible way to prove your English proficiency. It is widely accepted by universities, employers, and institutions worldwide. The test evaluates your ability to read, write, listen, and speak English in an integrated format.
          </p>
        </div>
      </section>

      {/* How to Prepare for Duolingo Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            How to Prepare for the Duolingo English Test
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <FaBook className="text-green-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Understand the Format</h3>
              <p className="text-gray-600">
                Learn about the test structure, scoring system (10–160), and question types (e.g., speaking, writing, listening, and reading).
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <FaHeadphones className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Listening</h3>
              <p className="text-gray-600">
                Practice listening to English audio, such as podcasts, news, and interviews. Focus on understanding accents and identifying keywords.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <FaPen className="text-yellow-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Writing</h3>
              <p className="text-gray-600">
                Practice writing essays and short responses. Focus on grammar, vocabulary, and coherence.
              </p>
            </div>
            {/* Step 4 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <FaMicrophone className="text-red-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Speaking</h3>
              <p className="text-gray-600">
                Practice speaking fluently on common topics. Record yourself and focus on pronunciation and clarity.
              </p>
            </div>
            {/* Step 5 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <FaRedo className="text-purple-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mock Tests</h3>
              <p className="text-gray-600">
                Take full-length mock tests to familiarize yourself with the test format and timing.
              </p>
            </div>
            {/* Step 6 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <FaCalendarAlt className="text-indigo-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Study Plan</h3>
              <p className="text-gray-600">
                Create a study plan: Week 1 (Listening + Reading), Week 2 (Writing), Week 3 (Mock Tests), Week 4 (Speaking + Revision).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <main className="bg-gray-50 pb-16">
        <div className="container mx-auto px-6 pt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Download Duolingo Preparation Materials
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transform transition-transform hover:scale-105 p-6 flex flex-col"
              >
                <div className="mb-4">
                  <FaFilePdf className="h-8 w-8 text-green-500 group-hover:text-green-700 transition" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition">
                  {file.replace('.pdf', '')}
                </h3>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={`/duolingo/${file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-green-600 text-white rounded-full px-4 py-2 hover:bg-green-700 transform transition-transform hover:scale-110"
                  >
                    View PDF
                  </a>
                  <a
                    href={`/duolingo/${file}`}
                    download
                    className="inline-flex items-center justify-center bg-gray-600 text-white rounded-full px-4 py-2 hover:bg-gray-700 transform transition-transform hover:scale-110"
                  >
                    <FaDownload className="mr-2" /> Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}