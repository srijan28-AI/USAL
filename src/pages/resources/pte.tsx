'use client'

import Head from 'next/head'
import { FaDownload, FaFilePdf, FaBook, FaHeadphones, FaPen, FaMicrophone, FaRedo, FaCalendarAlt } from 'react-icons/fa'

export default function PTEResourcesPage() {
  const files = [
    'Paper 10 PTE.pdf',
    'Pte guide.pdf',
    'PTE reading with all qns.pdf',
    'PTE Academic Online Test Taker.pdf',
    'PTE_Reading_Practice_test_1_3b7f284e49.pdf',
    'PTE_Reading_Practice_test_2_8728340fc2.pdf',
    'PTE-Academic-Testbuilder.pdf',
    'PTE-advantage-Academic-Module.pdf',
    'PTE-General-Skills-Boosters-4-SB (1).pdf',
  ]

  return (
    <>
      <Head>
        <title>PTE Resources – USAL</title>
        <meta
          name="description"
          content="Access PTE Academic preparation materials, including practice tests, study guides, and tips for success."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            PTE Resources
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl opacity-90">
            The Pearson Test of English (PTE) Academic is a computer-based English language test accepted by universities, colleges, and governments worldwide. It evaluates your English skills in Listening, Reading, Writing, and Speaking.
          </p>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            What is PTE and Why is it Important?
          </h2>
          <p className="text-gray-600 text-lg mb-8 text-center max-w-3xl mx-auto">
            The PTE Academic is a fast, reliable, and widely accepted English proficiency test. It is used for university admissions, visa applications, and professional certifications. The test evaluates your ability to communicate effectively in English through integrated tasks.
          </p>
        </div>
      </section>

      {/* How to Prepare for PTE Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            How to Prepare for the PTE Academic
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <FaBook className="text-purple-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Understand the Format</h3>
              <p className="text-gray-600">
                Learn about the sections (Listening, Reading, Writing, Speaking), question types, and scoring system (10–90 scale).
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <FaHeadphones className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Listening</h3>
              <p className="text-gray-600">
                Practice summarizing spoken texts, identifying keywords, and understanding accents. Use PTE listening practice tests.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <FaPen className="text-yellow-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Writing</h3>
              <p className="text-gray-600">
                Practice writing essays and summarizing written texts. Focus on grammar, coherence, and vocabulary.
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
            Download PTE Preparation Materials
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transform transition-transform hover:scale-105 p-6 flex flex-col"
              >
                <div className="mb-4">
                  <FaFilePdf className="h-8 w-8 text-purple-500 group-hover:text-purple-700 transition" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition">
                  {file.replace('.pdf', '')}
                </h3>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={`/pte/${file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-purple-600 text-white rounded-full px-4 py-2 hover:bg-purple-700 transform transition-transform hover:scale-110"
                  >
                    View PDF
                  </a>
                  <a
                    href={`/pte/${file}`}
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