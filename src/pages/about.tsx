// src/pages/about.tsx
'use client'

import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaPassport, FaUsers, FaBook, FaChalkboardTeacher, FaGlobe } from 'react-icons/fa'

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false)

  const socialMedia = [
    { name: 'Facebook', image: '/fb.png', followers: '39.5K+', link: 'https://facebook.com/groups/407151185598666/' },
    { name: 'Instagram', image: '/insta.png', followers: '309', link: 'https://www.instagram.com/usa.selflearn/' },
    { name: 'YouTube', image: '/yt.png', followers: '2.4k+', link: 'https://youtube.com/@usaselfapply?si=4omZV3cF3UzBIVHq' },
    { name: 'TikTok', image: '/tiktok.png', followers: '724', link: 'https://www.tiktok.com/@usa.self.learn?_t=ZS-8teY7ivI0eO&_r=1' },
    { name: 'Telegram', image: '/telegram.png', followers: '8.4K+', link: 'https://t.me/+K9Qhk2C3zwM4ODQ9' },
  ]

  const playcards = [
    {
      icon: <FaGraduationCap className="text-blue-600 text-6xl" />,
      title: 'University Selection',
      description: 'Find the perfect university that matches your academic goals.',
    },
    {
      icon: <FaPassport className="text-blue-600 text-6xl" />,
      title: 'Visa Guidance',
      description: 'Step-by-step guidance to navigate the visa application process.',
    },
    {
      icon: <FaUsers className="text-blue-600 text-6xl" />,
      title: 'Community Support',
      description: 'Connect with students and alumni for shared experiences.',
    },
    {
      icon: <FaBook className="text-blue-600 text-6xl" />,
      title: 'Study Materials',
      description: 'Access free resources to prepare for exams and applications.',
    },
    {
      icon: <FaChalkboardTeacher className="text-blue-600 text-6xl" />,
      title: 'Expert Mentorship',
      description: 'Get advice from experienced mentors and professionals.',
    },
    {
      icon: <FaGlobe className="text-blue-600 text-6xl" />,
      title: 'Global Network',
      description: 'Join a global network of students pursuing their dreams.',
    },
  ]

  return (
    <>
      <Head>
        <title>USAL – Empowering Students to Study in the USA</title>
        <meta
          name="description"
          content="USAL – your free, student-led guide to studying in the USA. Join our community and achieve your dreams."
        />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 via-purple-600 to-pink-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Express the Power of Your Confidence with{' '}
            <span className="text-yellow-400">USAL</span>
          </motion.h1>
          <motion.p
            className="max-w-3xl mx-auto text-xl md:text-2xl opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Founded in 2024, we are a community dedicated to helping students navigate the process
            of studying in the USA without the hefty price tag.
          </motion.p>
          <motion.div
            className="mt-6 flex justify-center space-x-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow-400 text-blue-900 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-500 transition"
            >
              Join Our Community
            </button>
            <button
              onClick={() => setIsLearnMoreOpen(true)}
              className="bg-transparent border border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-blue-900 transition"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Playcards Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-100 to-gray-200">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              What We Offer
            </h2>
            <p className="text-gray-600 mt-4 text-lg">
              Explore the key features and benefits of joining USAL.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {playcards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 hover:shadow-2xl transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="flex items-center justify-center mb-6">{card.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800 text-center">
                  {card.title}
                </h3>
                <p className="text-gray-600 mt-4 text-center">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Community Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl w-full relative">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Follow Us on Social Media</h3>
            <p className="text-gray-600 mb-8">
              Stay connected with our community and get the latest updates.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {socialMedia.map((platform, index) => (
                <a
                  key={index}
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition"
                >
                  <Image
                    src={platform.image}
                    alt={`${platform.name} Logo`}
                    width={80}
                    height={80}
                    className="mb-4"
                  />
                  <h4 className="text-lg font-semibold text-gray-800">{platform.name}</h4>
                  <p className="text-sm text-gray-500">{platform.followers} Followers</p>
                </a>
              ))}
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-8 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Learn More Modal */}
      {isLearnMoreOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-3xl w-full relative">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Learn More About Studying in the USA</h3>
            <p className="text-gray-600 mb-8">
              Discover everything you need to know about studying in the USA, including university selection, visa processes, scholarships, and more.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-4">
              <li>
                <a
                  href="/university"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  How to choose the right university for your goals.
                </a>
              </li>
              <li>
                <a
                  href="/visa"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Step-by-step guidance on applying for a student visa.
                </a>
              </li>
              <li>Tips for finding and applying for scholarships.</li>
              <li>Understanding the cost of living and budgeting as a student.</li>
              <li>Building a strong application and writing a compelling personal statement.</li>
              <li>Connecting with a supportive community of students and alumni.</li>
            </ul>
            <button
              onClick={() => setIsLearnMoreOpen(false)}
              className="mt-8 bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}
