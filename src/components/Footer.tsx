'use client';
import Link from 'next/link';
import { FaTelegramPlane, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 text-sm mt-20 border-t-4 border-[#002868] shadow-inner">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        {/* Left Section */}
        <div>
          <Link href="/" className="text-xl font-bold text-[#002868] hover:underline">
            USAL – USA Self Learn
          </Link>
          <p className="mt-1">© {currentYear} All rights reserved.</p>
          <p className="mt-1">
            Made with <span className="text-[#BF0A30]">❤️</span> by Nepali students for Nepali students.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-[#002868] text-xl">
          <a
            href="https://t.me/usal_community"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            title="Telegram"
            className="hover:text-[#BF0A30] transition duration-200"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://github.com/usal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="hover:text-black transition duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/usal_nepal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="hover:text-pink-500 transition duration-200"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
