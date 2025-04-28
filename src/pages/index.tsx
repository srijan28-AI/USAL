// src/pages/index.tsx
'use client'

import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { FaYoutube, FaFacebook, FaTelegram, FaTiktok, FaInstagram } from 'react-icons/fa'

export default function Home() {
  useEffect(() => {
    async function fetchFollowers() {
      // Example for YouTube
      const youtubeResponse = await fetch('/api/youtube-followers');
      const youtubeData = await youtubeResponse.json();
      const youtubeElement = document.getElementById('youtube-followers');
      if (youtubeElement) {
        youtubeElement.innerText = youtubeData.followers;
      }

      // Example for Facebook
      const facebookResponse = await fetch('/api/facebook-followers');
      const facebookData = await facebookResponse.json();
      const facebookElement = document.getElementById('facebook-followers');
      if (facebookElement) {
        facebookElement.innerText = facebookData.followers;
      }

      // Add similar API calls for Telegram, TikTok, and Instagram
    }

    fetchFollowers();
  }, []);

  return (
    <>
      <Head>
        <title>USA Self Learn</title>
        <meta
          name="description"
          content="USA Self Learn (USAL) is an online community dedicated to providing valuable information and resources for students planning to study in the United States."
        />
      </Head>

      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-16 px-6">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              USA Self Learn
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              "Building Path To Success, Together"
            </p>
            <p className="text-gray-600 mb-8">
              USA Self Learn (USAL) is an online community dedicated to
              providing valuable information and resources for students planning
              to study in the United States or currently residing there. Our
              content includes podcasts featuring discussions on campus life,
              scholarships, visa tips, and personal experiences from students
              and professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/universities"
                className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-900 transition"
              >
                Universities
              </a>
              <a
                href="/resources"
                className="inline-block bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition"
              >
                Resources
              </a>
              <a
                href="/interview-questions"
                className="inline-block border-2 border-blue-800 text-blue-800 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-800 hover:text-white transition"
              >
                Interview Questions
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <Image
              src="/usal.jpg"
              alt="USA Self Learn Logo"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
        </section>

        {/* Connect With Us Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
              Join Our Community
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Follow us on social media to stay updated with the latest
              information and resources
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              {/* YouTube */}
              <div>
                <a
                  href="https://www.youtube.com/@Usaselfapply"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="text-red-600 text-6xl mx-auto mb-4 hover:scale-110 transition-transform" />
                </a>
                <h3 className="text-lg font-semibold text-blue-900">YouTube</h3>
                <p className="text-gray-600">
                  <span id="youtube-followers">Loading...</span> Subscribers
                </p>
              </div>
              {/* Facebook */}
              <div>
                <a
                  href="https://www.facebook.com/share/g/1BShbwhUkC/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-blue-600 text-6xl mx-auto mb-4 hover:scale-110 transition-transform" />
                </a>
                <h3 className="text-lg font-semibold text-blue-900">Facebook</h3>
                <p className="text-gray-600">
                  <span id="facebook-followers">Loading...</span> Members
                </p>
              </div>
              {/* Telegram */}
              <div>
                <a
                  href="https://t.me/+K9Qhk2C3zwM4ODQ9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegram className="text-blue-500 text-6xl mx-auto mb-4 hover:scale-110 transition-transform" />
                </a>
                <h3 className="text-lg font-semibold text-blue-900">Telegram</h3>
                <p className="text-gray-600">
                  <span id="telegram-followers">Loading...</span> Members
                </p>
              </div>
              {/* TikTok */}
              <div>
                <a
                  href="https://www.tiktok.com/@usa.self.learn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTiktok className="text-black text-6xl mx-auto mb-4 hover:scale-110 transition-transform" />
                </a>
                <h3 className="text-lg font-semibold text-blue-900">TikTok</h3>
                <p className="text-gray-600">
                  <span id="tiktok-followers">Loading...</span> Followers
                </p>
              </div>
              {/* Instagram */}
              <div>
                <a
                  href="https://www.instagram.com/usa.selflearn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-pink-500 text-6xl mx-auto mb-4 hover:scale-110 transition-transform" />
                </a>
                <h3 className="text-lg font-semibold text-blue-900">Instagram</h3>
                <p className="text-gray-600">
                  <span id="instagram-followers">Loading...</span> Followers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Resources Section */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
              Community Resources
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Explore our various platforms and resources to enhance your learning journey
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* YouTube Card */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                <Image
                  src="/youtube.png"
                  alt="YouTube Channel"
                  width={300}
                  height={100}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  YouTube Channel
                </h3>
                <p className="text-gray-600 mb-4">
                  Watch our informative videos about studying in the USA, visa processes, and university selection.
                </p>
                <a
                  href="https://www.youtube.com/@Usaselfapply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-900 transition"
                >
                  Visit Channel
                </a>
              </div>

              {/* Facebook Card */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                <Image
                  src="/facebook.png"
                  alt="Facebook Group"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Facebook Group
                </h3>
                <p className="text-gray-600 mb-4">
                  Join our active community to connect with other students and get your questions answered.
                </p>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-900 transition"
                >
                  Join Group
                </a>
              </div>

              {/* Telegram Card */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                <Image
                  src="/telegram.png"
                  alt="Telegram Channel"
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  Telegram Channel
                </h3>
                <p className="text-gray-600 mb-4">
                  Get instant updates and resources directly on your phone through our Telegram channel.
                </p>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-900 transition"
                >
                  Join Channel
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
