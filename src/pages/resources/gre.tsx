'use client'

import Head from 'next/head'
import { FaDownload, FaFilePdf, FaBook, FaCalculator, FaPen, FaRedo, FaCalendarAlt } from 'react-icons/fa'

export default function GREResources() {
  const resources = [
    {
      name: "Barron's GRE 19th Edition",
      file: '/gre/barron\'s gre 19th edition.pdf',
    },
    {
      name: 'GRE Big Book - Verbal Part Only',
      file: '/gre/GRE-Big-Book-Verbal Part Only.pdf',
    },
    {
      name: 'Kaplan GRE Premier 2017 with 6 Practice',
      file: '/gre/Kaplan-GRE Premier 2017 with 6 Practice.pdf',
    },
    {
      name: 'McGraw Hill GRE 6 Tests',
      file: '/gre/McGraw Hill GRE 6 Tests.pdf',
    },
    {
      name: 'McGraw-Hill Education GRE 2019',
      file: '/gre/McGraw-Hill Education GRE 2019.pdf',
    },
    {
      name: 'ACE the GRE',
      file: '/gre/ACE the GRE.pdf',
    },
    {
      name: 'GRE Prep by Magoosh 2017',
      file: '/gre/GREPrepByMagoosh-20170102.pdf',
    },
  ]

  return (
    <>
      <Head>
        <title>GRE Resources – USAL</title>
        <meta
          name="description"
          content="Access GRE preparation materials, including practice tests, study guides, and tips for success."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
            GRE Resources
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90">
            The Graduate Record Examination (GRE) is a globally recognized standardized test required for admission to many graduate programs. It evaluates your verbal reasoning, quantitative reasoning, and analytical writing skills, helping universities assess your readiness for advanced study.
          </p>
        </div>
      </section>

      {/* How to Prepare for GRE Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            How to Prepare for GRE
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <FaBook className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Understand the Format</h3>
              <p className="text-gray-600">
                Learn about the sections (Verbal, Quantitative, Analytical Writing) and scoring system (130–170 for Verbal/Quant, 0–6 for Writing).
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <FaCalculator className="text-green-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quantitative Reasoning</h3>
              <p className="text-gray-600">
                Practice problem-solving, algebra, geometry, and data analysis. Use GRE prep books and online resources.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <FaPen className="text-yellow-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Analytical Writing</h3>
              <p className="text-gray-600">
                Practice writing essays on given topics. Focus on structure, coherence, and grammar.
              </p>
            </div>
            {/* Step 4 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <FaRedo className="text-purple-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mock Tests</h3>
              <p className="text-gray-600">
                Take full-length timed mock tests. Analyze mistakes and track your improvement.
              </p>
            </div>
            {/* Step 5 */}
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transform transition-transform hover:scale-105">
              <FaCalendarAlt className="text-indigo-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Study Plan</h3>
              <p className="text-gray-600">
                Create a 1-month plan: Week 1 (Quant basics), Week 2 (Verbal practice), Week 3 (Mock Tests), Week 4 (Review + Revision).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <main className="bg-gray-50 pb-16">
        <div className="container mx-auto px-6 pt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Download GRE Preparation Materials
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transform transition-transform hover:scale-105 p-6 flex flex-col"
              >
                <div className="mb-4">
                  <FaFilePdf className="h-8 w-8 text-blue-500 group-hover:text-blue-700 transition" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition">
                  {resource.name}
                </h3>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={resource.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-700 transform transition-transform hover:scale-110"
                  >
                    View PDF
                  </a>
                  <a
                    href={resource.file}
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