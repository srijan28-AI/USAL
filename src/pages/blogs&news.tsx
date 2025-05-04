'use client'

import Head from 'next/head'
import { useState } from 'react'

export default function BlogsAndNews() {
  const [activeSection, setActiveSection] = useState('Latest News')

  return (
    <>
      <Head>
        <title>USAL – News & Blog</title>
      </Head>

      <main className="text-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-purple-600 to-purple-800 text-white py-16">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-4">News & Blog</h1>
            <p className="text-lg">
              Stay updated with the latest educational resources, visa processes, and study abroad opportunities
            </p>
          </div>
        </section>

        {/* Navigation Buttons */}
        <section className="bg-white py-8">
          <div className="max-w-6xl mx-auto flex justify-center gap-4">
            <button
              onClick={() => setActiveSection('Latest News')}
              className={`px-6 py-3 font-semibold rounded-full transition ${
                activeSection === 'Latest News'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Latest News
            </button>
            <button
              onClick={() => setActiveSection('Blog Posts')}
              className={`px-6 py-3 font-semibold rounded-full transition ${
                activeSection === 'Blog Posts'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              Blog Posts
            </button>
            <button
              onClick={() => setActiveSection('University Info')}
              className={`px-6 py-3 font-semibold rounded-full transition ${
                activeSection === 'University Info'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              University Info
            </button>
            <button
              onClick={() => setActiveSection('USA Rules')}
              className={`px-6 py-3 font-semibold rounded-full transition ${
                activeSection === 'USA Rules'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              USA Rules
            </button>
          </div>
        </section>

        {/* Conditional Rendering of Sections */}
        {activeSection === 'USA Rules' && (
          <section className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Important US Rules for International Students
              </h2>
              <p className="text-gray-600 mb-8">
                Understanding and following US regulations is crucial for maintaining your legal status as an international student. Here are key rules you need to know:
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {/* Rule 1 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-pink-100 text-pink-600 flex items-center justify-center rounded-full">
                      <span className="text-2xl font-bold">📅</span>
                    </div>
                    <h3 className="ml-4 text-lg font-bold text-gray-900">Maintaining F-1 Status</h3>
                  </div>
                  <p className="text-gray-600">
                    You must maintain a full course load (typically 12 credits for undergraduates, 9 for graduates), make satisfactory academic progress, and not work off-campus without authorization.
                  </p>
                </div>
                {/* Rule 2 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-pink-100 text-pink-600 flex items-center justify-center rounded-full">
                      <span className="text-2xl font-bold">💼</span>
                    </div>
                    <h3 className="ml-4 text-lg font-bold text-gray-900">Employment Regulations</h3>
                  </div>
                  <p className="text-gray-600">
                    F-1 students can work on-campus up to 20 hours per week during the academic year and full-time during breaks. Off-campus work requires CPT or OPT authorization from your DSO and USCIS.
                  </p>
                </div>
                {/* Rule 3 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-pink-100 text-pink-600 flex items-center justify-center rounded-full">
                      <span className="text-2xl font-bold">📆</span>
                    </div>
                    <h3 className="ml-4 text-lg font-bold text-gray-900">Grace Periods</h3>
                  </div>
                  <p className="text-gray-600">
                    F-1 students have a 60-day grace period after completing their program to depart the US, apply for a change of status, or transfer to another school. Violating status may result in no grace period.
                  </p>
                </div>
                {/* Rule 4 */}
                <div className="bg-white shadow-md rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-pink-100 text-pink-600 flex items-center justify-center rounded-full">
                      <span className="text-2xl font-bold">📜</span>
                    </div>
                    <h3 className="ml-4 text-lg font-bold text-gray-900">Reporting Requirements</h3>
                  </div>
                  <p className="text-gray-600">
                    You must report changes in address, academic status, or program details to your DSO within 10 days. Keep your I-20 updated and valid at all times.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'University Info' && (
          <section className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Understanding US Universities
              </h2>
              <p className="text-gray-600 mb-8">
                The American higher education system offers a diverse range of institutions with unique characteristics, admission requirements, and academic programs. Here&apos;s what you need to know:
              </p>
              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex items-start gap-4 bg-white shadow-md rounded-lg p-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                    <span className="text-2xl font-bold">🏫</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Types of Institutions</h3>
                    <p className="text-gray-600">
                      The US has public universities (state-funded), private universities, liberal arts colleges, community colleges, and technical institutes. Each offers different educational experiences and degree programs.
                    </p>
                  </div>
                </div>
                {/* Item 2 */}
                <div className="flex items-start gap-4 bg-white shadow-md rounded-lg p-6">
                  <div className="w-12 h-12 bg-green-100 text-green-600 flex items-center justify-center rounded-full">
                    <span className="text-2xl font-bold">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Degree Programs</h3>
                    <p className="text-gray-600">
                      US universities offer Associate&apos;s (2 years), Bachelor&apos;s (4 years), Master&apos;s (1–2 years), and Doctoral degrees (3+ years) across various disciplines and specializations.
                    </p>
                  </div>
                </div>
                {/* Item 3 */}
                <div className="flex items-start gap-4 bg-white shadow-md rounded-lg p-6">
                  <div className="w-12 h-12 bg-yellow-100 text-yellow-600 flex items-center justify-center rounded-full">
                    <span className="text-2xl font-bold">📄</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Admission Requirements</h3>
                    <p className="text-gray-600">
                      Requirements typically include academic transcripts, standardized test scores (SAT/ACT for undergraduates, GRE/GMAT for graduates), English proficiency tests (TOEFL/IELTS), essays, and letters of recommendation.
                    </p>
                  </div>
                </div>
                {/* Item 4 */}
                <div className="flex items-start gap-4 bg-white shadow-md rounded-lg p-6">
                  <div className="w-12 h-12 bg-red-100 text-red-600 flex items-center justify-center rounded-full">
                    <span className="text-2xl font-bold">💰</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Tuition and Costs</h3>
                    <p className="text-gray-600">
                      Costs vary widely between institutions. Public universities typically charge lower tuition for in-state residents, while private universities have the same tuition for all students. International students should budget for tuition, living expenses, health insurance, and travel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  )
}
