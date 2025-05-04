'use client'

import Link from 'next/link'
import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">USAL</h2>
          <p className="leading-relaxed">
            We are a trusted community providing expert guidance for students pursuing their dream of studying in the USA.
            From selecting the right university to navigating the visa process, we offer valuable insights and resources to ensure your success.
          </p>
          <div className="flex space-x-3 mt-6">
            <a
              href="https://www.facebook.com/share/g/15zVoNgfro/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://t.me/+K9Qhk2C3zwM4ODQ9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://www.instagram.com/usa.selflearn/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@usa.self.learn?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/@Usaselfapply"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 border-l-4 border-blue-500 pl-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white transition">› Home</Link></li>
            <li><Link href="/universities" className="hover:text-white transition">› University Selection</Link></li>
            <li><Link href="/visa" className="hover:text-white transition">› USA Visa Process</Link></li>
            <li><Link href="/resources" className="hover:text-white transition">› Universities</Link></li>
            <li><Link href="/ebook" className="hover:text-white transition">› E‑book</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 border-l-4 border-blue-500 pl-2">Useful Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-white transition">› About Us</Link></li>
            <li><Link href="/blog" className="hover:text-white transition">› News & Blog</Link></li>
            <li><Link href="/resources" className="hover:text-white transition">› Our Resource</Link></li>
            <li><Link href="/universities" className="hover:text-white transition">› University</Link></li>
            <li><Link href="/ebook" className="hover:text-white transition">› E‑book</Link></li>
          </ul>
        </div>

        {/* Contact & Form */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4 border-l-4 border-blue-500 pl-2">Contact Us</h3>
          <ul className="space-y-4 mb-6">
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-blue-500" />
              <span>Kathmandu, Nepal</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-500" />
              <span>usaselflearn@gmail.com</span>
            </li>
          </ul>

          <h4 className="text-lg font-semibold text-white mb-3">Send Message</h4>
          <form className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <textarea
              placeholder="Your Question"
              rows={3}
              className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded px-4 py-2 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-16 pt-6 pb-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} USA Self Learn (USAL). All rights reserved.</p>
          <div className="space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
