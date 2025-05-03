'use client'

import Head from 'next/head'
import { useEffect, useState } from 'react'
import { FaDownload, FaFilePdf } from 'react-icons/fa'

export default function InterviewQuestionsPage() {
  const [files, setFiles] = useState<string[]>([])

  useEffect(() => {
    // Fetch the list of files dynamically
    async function fetchFiles() {
      const response = await fetch('/api/interview-questions-files')
      const data = await response.json()
      setFiles(data.files)
    }
    fetchFiles()
  }, [])

  return (
    <>
      <Head>
        <title>Interview Questions – USAL</title>
        <meta
          name="description"
          content="Prepare for your interviews with our curated list of common questions and expert tips."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Interview Questions
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl opacity-90">
            Prepare for your interviews with our curated list of common questions and expert tips. Download and practice today!
          </p>
        </div>
      </section>

      {/* Questions Section */}
      <main className="bg-gray-50 pb-16">
        <div className="container mx-auto px-6 pt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Download Interview Questions
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transform transition-transform hover:scale-105 p-6 flex flex-col"
              >
                <div className="mb-4">
                  <FaFilePdf className="h-8 w-8 text-orange-500 group-hover:text-orange-700 transition" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-600 transition">
                  {file.replace('.pdf', '')}
                </h3>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={`/interview questions/${file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-orange-600 text-white rounded-full px-4 py-2 hover:bg-orange-700 transform transition-transform hover:scale-110"
                  >
                    View PDF
                  </a>
                  <a
                    href={`/interview questions/${file}`}
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