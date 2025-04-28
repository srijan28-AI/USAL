// src/pages/contact.tsx
import Head from 'next/head'


export default function ContactPage() {
  return (
    <>
      <Head><title>USAL – Contact</title></Head>

      <main className="px-6 py-16 max-w-lg mx-auto text-gray-800">
        <h1 className="text-3xl font-bold text-[#002868] mb-6">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input type="text" className="w-full border px-3 py-2 rounded"/>
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full border px-3 py-2 rounded"/>
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea className="w-full border px-3 py-2 rounded h-32"></textarea>
          </div>
          <button type="submit" className="px-6 py-2 bg-[#002868] text-white rounded-full">Send Message</button>
        </form>
      </main>
 
    </>
  )
}
