'use client'

import Head from 'next/head'
import { useEffect, useState } from 'react'
import { FaDownload, FaFilePdf } from 'react-icons/fa'

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
            Browse and download Cambridge IELTS practice materials directly from here.
          </p>
        </div>
      </section>

      {/* Materials Section */}
      <main className="bg-gray-50 pb-16">
        <div className="container mx-auto px-6 pt-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col"
              >
                <div className="mb-4">
                  <FaFilePdf className="h-8 w-8 text-red-500" />
                </div>
                <h2 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition">
                  {file.replace('.pdf', '')}
                </h2>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={`/ielts/${file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-700 transition"
                  >
                    View PDF
                  </a>
                  <a
                    href={`/ielts/${file}`}
                    download
                    className="inline-flex items-center justify-center bg-gray-600 text-white rounded-full px-4 py-2 hover:bg-gray-700 transition"
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