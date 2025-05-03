'use client'

import Head from 'next/head'
import { FaDownload, FaFilePdf } from 'react-icons/fa'

export default function VisaQuestPage() {
  const file = 'visa guide.pdf'

  return (
    <>
      <Head>
        <title>Visa Guide – USAL</title>
        <meta
          name="description"
          content="Access the Visa Guide to learn about the visa application process, requirements, and tips for success."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            Visa Guide
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl opacity-90">
            Learn everything you need to know about the visa application process, including requirements, documentation, and tips for success.
          </p>
        </div>
      </section>

      {/* Visa Guide Section */}
      <main className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Download the Visa Guide
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-center">
            <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transform transition-transform hover:scale-105 p-6 flex flex-col items-center">
              <div className="mb-4">
                <FaFilePdf className="h-12 w-12 text-teal-500 group-hover:text-teal-700 transition" />
              </div>
              <h3 className="text-lg font-semibold mb-4 group-hover:text-teal-600 transition">
                Visa Guide
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`/visa quest/${file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-teal-600 text-white rounded-full px-4 py-2 hover:bg-teal-700 transform transition-transform hover:scale-110"
                >
                  View PDF
                </a>
                <a
                  href={`/visa quest/${file}`}
                  download
                  className="inline-flex items-center justify-center bg-gray-600 text-white rounded-full px-4 py-2 hover:bg-gray-700 transform transition-transform hover:scale-110"
                >
                  <FaDownload className="mr-2" /> Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}