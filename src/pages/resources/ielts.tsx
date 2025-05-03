'use client'

import Head from 'next/head'
import { useEffect, useState } from 'react'
import { FaDownload, FaFilePdf, FaBook, FaHeadphones, FaPen, FaMicrophone, FaRedo, FaCalendarAlt } from 'react-icons/fa'

export default function IELTSMaterialsPage() {
  const [files, setFiles] = useState<string[]>([])

  useEffect(() => {
    // Fetch the list of files dynamically
    async function fetchFiles() {
      const response = await fetch('/api/ielts-files')
      const data = await response.json()

      // Sort files numerically based on the number in the file name
      const sortedFiles = data.files.sort((a: string, b: string) => {
        const numA = parseInt(a.match(/\d+/)?.[0] || '0', 10)
        const numB = parseInt(b.match(/\d+/)?.[0] || '0', 10)
        return numA - numB
      })

      setFiles(sortedFiles)
    }
    fetchFiles()
  }, [])

  return (
    <>
      <Head>
        <title>IELTS Materials – USAL</title>
        <meta
          name="description"
          content="Access IELTS preparation materials, including Cambridge IELTS PDFs for practice and study."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-800 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            IELTS Materials
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl opacity-90">
            The International English Language Testing System (IELTS) is a globally recognized test for assessing English proficiency. It is widely accepted by universities, employers, and immigration authorities worldwide.
          </p>
        </div>
      </section>

      {/* Explanation Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            What is IELTS and Why is it Important?
          </h2>
          <p className="text-gray-600 text-lg mb-8 text-center max-w-3xl mx-auto">
            IELTS evaluates your ability to communicate in English across four key skills: Listening, Reading, Writing, and Speaking. It is essential for university admissions, immigration, and professional registration in English-speaking countries.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Listening */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Listening</h3>
              <p className="text-gray-600">
                Tests your ability to understand spoken English in various contexts, such as conversations and lectures.
              </p>
            </div>
            {/* Reading */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Reading</h3>
              <p className="text-gray-600">
                Assesses your ability to read and comprehend texts, including academic and general content.
              </p>
            </div>
            {/* Writing */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Writing</h3>
              <p className="text-gray-600">
                Evaluates your ability to write essays, reports, or letters in a clear and structured manner.
              </p>
            </div>
            {/* Speaking */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Speaking</h3>
              <p className="text-gray-600">
                Tests your spoken English skills through a face-to-face interview with an examiner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Prepare for IELTS Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            How to Prepare for IELTS
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <FaBook className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Understand the Format</h3>
              <p className="text-gray-600">
                Learn about the sections (Listening, Reading, Writing, Speaking), types (Academic or General), and scoring system (0–9 band score).
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <FaHeadphones className="text-green-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Listening</h3>
              <p className="text-gray-600">
                Practice with Cambridge IELTS books, podcasts, and TED Talks. Focus on identifying keywords and accents.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <FaPen className="text-yellow-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Writing</h3>
              <p className="text-gray-600">
                Practice Task 1 (graphs, charts) and Task 2 (essays). Learn templates, linking words, and formal language.
              </p>
            </div>
            {/* Step 4 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <FaMicrophone className="text-red-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Speaking</h3>
              <p className="text-gray-600">
                Practice with a friend or record yourself. Prepare answers for common topics and focus on fluency.
              </p>
            </div>
            {/* Step 5 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <FaRedo className="text-purple-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mock Tests</h3>
              <p className="text-gray-600">
                Take full-length timed mock tests. Analyze mistakes and track your improvement.
              </p>
            </div>
            {/* Step 6 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <FaCalendarAlt className="text-indigo-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Study Plan</h3>
              <p className="text-gray-600">
                Create a 1-month plan: Week 1 (Listening + Reading), Week 2 (Writing), Week 3 (Mock Tests), Week 4 (Speaking + Revision).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <main className="bg-gray-50 pb-16">
        <div className="container mx-auto px-6 pt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Download IELTS Preparation Materials
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transform transition-transform hover:scale-105 p-6 flex flex-col"
              >
                <div className="mb-4">
                  <FaFilePdf className="h-8 w-8 text-red-500 group-hover:text-red-700 transition" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition">
                  {file.replace('.pdf', '')}
                </h3>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={`/ielts/${file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-700 transform transition-transform hover:scale-110"
                  >
                    View PDF
                  </a>
                  <a
                    href={`/ielts/${file}`}
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