// src/pages/community.tsx
import Head from 'next/head'
import Footer from '@/components/Footer'

export default function CommunityPage() {
  return (
    <>
      <Head><title>USAL – Community</title></Head>
 
      <main className="px-6 py-16 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-3xl font-bold text-[#002868] mb-6">Community & Blog</h1>
        <p className="mb-4">Join our Telegram groups, read student stories, and participate in discussions.</p>
        <ul className="list-disc list-inside space-y-3">
          <li><a href="#" className="text-blue-600 hover:underline">Telegram Group</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Student Blog</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Discussion Forum</a></li>
        </ul>
      </main>
      <Footer/>
    </>
  )
}
