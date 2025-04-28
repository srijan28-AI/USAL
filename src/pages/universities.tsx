'use client'

import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'

const universities = [
  // Liberal Arts Universities
  { name: 'Davidson College', location: 'North Carolina', category: 'Liberal Arts', website: 'https://www.davidson.edu' },
  { name: 'Amherst College', location: 'Massachusetts', category: 'Liberal Arts', website: 'https://www.amherst.edu' },
  { name: 'Wesleyan University', location: 'Connecticut', category: 'Liberal Arts', website: 'https://www.wesleyan.edu' },
  { name: 'Bowdoin College', location: 'Maine', category: 'Liberal Arts', website: 'https://www.bowdoin.edu' },
  { name: 'Middlebury College', location: 'Vermont', category: 'Liberal Arts', website: 'https://www.middlebury.edu' },
  { name: 'Colby College', location: 'Maine', category: 'Liberal Arts', website: 'https://www.colby.edu' },
  { name: 'Vassar College', location: 'New York', category: 'Liberal Arts', website: 'https://www.vassar.edu' },
  { name: 'Oberlin College', location: 'Ohio', category: 'Liberal Arts', website: 'https://www.oberlin.edu' },
  { name: 'Smith College', location: 'Massachusetts', category: 'Liberal Arts', website: 'https://www.smith.edu' },
  { name: 'Barnard College', location: 'New York', category: 'Liberal Arts', website: 'https://www.barnard.edu' },
  { name: 'Hamilton College', location: 'New York', category: 'Liberal Arts', website: 'https://www.hamilton.edu' },
  { name: 'Franklin & Marshall College', location: 'Pennsylvania', category: 'Liberal Arts', website: 'https://www.fandm.edu' },
  { name: 'Washington and Lee University', location: 'Virginia', category: 'Liberal Arts', website: 'https://www.wlu.edu' },
  { name: 'Colorado College', location: 'Colorado', category: 'Liberal Arts', website: 'https://www.coloradocollege.edu' },
  { name: 'Skidmore College', location: 'New York', category: 'Liberal Arts', website: 'https://www.skidmore.edu' },
  { name: 'Sewanee: The University of the South', location: 'Tennessee', category: 'Liberal Arts', website: 'https://www.sewanee.edu' },
  { name: 'DePauw University', location: 'Indiana', category: 'Liberal Arts', website: 'https://www.depauw.edu' },
  { name: 'Furman University', location: 'South Carolina', category: 'Liberal Arts', website: 'https://www.furman.edu' },
  { name: 'Whitman College', location: 'Washington', category: 'Liberal Arts', website: 'https://www.whitman.edu' },
  { name: 'Connecticut College', location: 'Connecticut', category: 'Liberal Arts', website: 'https://www.conncoll.edu' },
  { name: 'Clark University', location: 'Massachusetts', category: 'Liberal Arts', website: 'https://www.clarku.edu' },
  { name: 'The College of Wooster', location: 'Ohio', category: 'Liberal Arts', website: 'https://www.wooster.edu' },
  { name: 'Trinity College', location: 'Connecticut', category: 'Liberal Arts', website: 'https://www.trincoll.edu' },
  { name: 'Centre College', location: 'Kentucky', category: 'Liberal Arts', website: 'https://www.centre.edu' },
  { name: 'Ohio Wesleyan University', location: 'Ohio', category: 'Liberal Arts', website: 'https://www.owu.edu' },
  { name: 'Hiram College', location: 'Ohio', category: 'Liberal Arts', website: 'https://www.hiram.edu' },
  { name: 'St. Olaf College', location: 'Minnesota', category: 'Liberal Arts', website: 'https://www.stolaf.edu' },
  { name: 'The University of Puget Sound', location: 'Washington', category: 'Liberal Arts', website: 'https://www.pugetsound.edu' },
  { name: 'Lewis & Clark College', location: 'Oregon', category: 'Liberal Arts', website: 'https://www.lclark.edu' },
  { name: 'Earlham College', location: 'Indiana', category: 'Liberal Arts', website: 'https://www.earlham.edu' },
  { name: 'Kalamazoo College', location: 'Michigan', category: 'Liberal Arts', website: 'https://www.kzoo.edu' },
  { name: 'Grinnell College', location: 'Iowa', category: 'Liberal Arts', website: 'https://www.grinnell.edu' },
  { name: 'Luther College', location: 'Iowa', category: 'Liberal Arts', website: 'https://www.luther.edu' },
  { name: 'Bates College', location: 'Maine', category: 'Liberal Arts', website: 'https://www.bates.edu' },
  { name: 'Kenyon College', location: 'Ohio', category: 'Liberal Arts', website: 'https://www.kenyon.edu' },
  { name: 'Macalester College', location: 'Minnesota', category: 'Liberal Arts', website: 'https://www.macalester.edu' },
  { name: 'Augustana College', location: 'Illinois', category: 'Liberal Arts', website: 'https://www.augustana.edu' },
  { name: 'St. Lawrence University', location: 'New York', category: 'Liberal Arts', website: 'https://www.stlawu.edu' },
  { name: 'Alma College', location: 'Michigan', category: 'Liberal Arts', website: 'https://www.alma.edu' },
  { name: 'Beloit College', location: 'Wisconsin', category: 'Liberal Arts', website: 'https://www.beloit.edu' },

  // Full-Ride Scholarship Universities
  { name: 'Harvard University', location: 'Massachusetts', category: 'Full-Ride Scholarships', website: 'https://www.harvard.edu' },
  { name: 'Yale University', location: 'Connecticut', category: 'Full-Ride Scholarships', website: 'https://www.yale.edu' },
  { name: 'Princeton University', location: 'New Jersey', category: 'Full-Ride Scholarships', website: 'https://www.princeton.edu' },
  { name: 'Stanford University', location: 'California', category: 'Full-Ride Scholarships', website: 'https://www.stanford.edu' },
  { name: 'MIT', location: 'Massachusetts', category: 'Full-Ride Scholarships', website: 'https://www.mit.edu' },

  // Computer Science and Cybersecurity Universities
  { name: 'Bismarck State College (ND)', location: 'North Dakota', category: 'Computer Science and Cybersecurity', website: 'https://bismarckstate.edu' },
  { name: 'Nicholls State University (LA)', location: 'Louisiana', category: 'Computer Science and Cybersecurity', website: 'https://www.nicholls.edu' },
  { name: 'Minot State University (ND)', location: 'North Dakota', category: 'Computer Science and Cybersecurity', website: 'https://www.minotstateu.edu' },
  { name: 'Delta State University (MS)', location: 'Mississippi', category: 'Computer Science and Cybersecurity', website: 'https://www.deltastate.edu' },
  { name: 'Alcorn State University (MS)', location: 'Mississippi', category: 'Computer Science and Cybersecurity', website: 'https://www.alcorn.edu' },
  { name: 'Western Carolina University (NC)', location: 'North Carolina', category: 'Computer Science and Cybersecurity', website: 'https://www.wcu.edu' },
  { name: 'Oklahoma Panhandle State University', location: 'Oklahoma', category: 'Computer Science and Cybersecurity', website: 'https://www.opsu.edu' },
  { name: 'Mississippi University for Women', location: 'Mississippi', category: 'Computer Science and Cybersecurity', website: 'https://www.muw.edu' },
  { name: 'Wayne State College (NE)', location: 'Nebraska', category: 'Computer Science and Cybersecurity', website: 'https://www.wsc.edu' },
  { name: 'Louisiana State University—Shreveport', location: 'Louisiana', category: 'Computer Science and Cybersecurity', website: 'https://www.lsus.edu' },
]

export default function UniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const filteredUniversities = universities.filter((university) => {
    const matchesSearch = university.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory
      ? university.category === selectedCategory
      : true
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <Head>
        <title>USAL – Universities</title>
      </Head>

      <main className="px-6 py-16 text-gray-900">
        {/* How to Select the Right University Section */}
        <section className="max-w-6xl mx-auto mb-12">
          <h2 className="text-center text-sm font-semibold text-blue-600 uppercase mb-2">Expert Guidance</h2>
          <h1 className="text-center text-4xl font-bold text-gray-900 mb-6">
            How to Select the Right University
          </h1>
          <p className="text-center text-gray-600 mb-12">
            Follow these steps to find universities that align with your academic goals, budget, and career aspirations.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Step 1 */}
            <div className="border-l-4 border-blue-600 bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">1. Define Your Academic Goals</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Identify your preferred major or area of study</li>
                <li>Determine whether you need a bachelor's, master's, or doctoral program</li>
                <li>Consider any specializations or concentrations you're interested in</li>
                <li>Research career outcomes for graduates in your field</li>
              </ul>
            </div>
            {/* Step 2 */}
            <div className="border-l-4 border-blue-600 bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">2. Assess Your Academic Profile</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Calculate your GPA and compare it to university averages</li>
                <li>Review your standardized test scores (SAT, ACT, GRE, GMAT)</li>
                <li>Assess your English proficiency test scores (TOEFL, IELTS, Duolingo)</li>
                <li>Consider your extracurricular activities and achievements</li>
              </ul>
            </div>
            {/* Step 3 */}
            <div className="border-l-4 border-blue-600 bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">3. Determine Your Budget</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Research tuition fees for different universities</li>
                <li>Calculate living expenses based on location (urban vs. rural)</li>
                <li>Factor in health insurance, books, and travel costs</li>
                <li>Identify potential funding sources (scholarships, loans, family support)</li>
              </ul>
            </div>
            {/* Step 4 */}
            <div className="border-l-4 border-blue-600 bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">4. Research University Rankings</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Check program-specific rankings rather than just overall rankings</li>
                <li>Look at different ranking systems (U.S. News, QS, Times Higher Education)</li>
                <li>Consider faculty expertise and research opportunities</li>
                <li>Research job placement rates and career services</li>
              </ul>
            </div>
            {/* Step 5 */}
            <div className="border-l-4 border-blue-600 bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">5. Consider Location Preferences</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Decide between urban, suburban, or rural settings</li>
                <li>Consider climate preferences and seasonal changes</li>
                <li>Research job markets in different regions for post-graduation opportunities</li>
                <li>Evaluate proximity to industry hubs relevant to your field</li>
              </ul>
            </div>
            {/* Step 6 */}
            <div className="border-l-4 border-blue-600 bg-white shadow-md rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">6. Explore Scholarship Opportunities</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Research merit-based scholarships at each university</li>
                <li>Look for need-based financial aid options</li>
                <li>Explore external scholarship opportunities</li>
                <li>Consider graduate assistantships for advanced degrees</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="max-w-6xl mx-auto mb-8">
          <h2 className="text-3xl font-bold text-[#002868] mb-6">Search for Universities</h2>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by university name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {/* Filter Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Filter by Category</option>
              <option value="Liberal Arts">Liberal Arts</option>
              <option value="Full-Ride Scholarships">Full-Ride Scholarships</option>
              <option value="Computer Science and Cybersecurity">Computer Science and Cybersecurity</option>
            </select>
          </div>
        </section>

        {/* Universities List Section */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-[#002868] mb-4">Universities</h2>
          {filteredUniversities.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {filteredUniversities.map((university, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg p-6 shadow hover:shadow-lg transition"
                >
                  {/* University Image */}
                  <div className="mb-4">
                    <Image
                      src={`/${university.name.toLowerCase().replace(/ /g, '-')}.png`}
                      alt={university.name}
                      width={300}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                  {/* University Details */}
                  <a
                    href={university.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-[#002868] hover:underline"
                  >
                    {university.name}
                  </a>
                  <p className="text-gray-600">{university.location}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Use the search or filter options above to find universities.</p>
          )}
        </section>
      </main>
    </>
  )
}
