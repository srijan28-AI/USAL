'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
      <Head>
        <title>USAL – {isLogin ? 'Login' : 'Sign Up'}</title>
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-800 to-indigo-600 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 relative"
        >
          {/* Toggle Animation */}
          <motion.div
            className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#002868] text-white px-6 py-2 rounded-full cursor-pointer shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
          </motion.div>

          {/* Form Title */}
          <h1 className="text-3xl font-bold text-center text-[#002868] mb-6">
            {isLogin ? 'Login' : 'Sign Up'}
          </h1>

          {/* Form */}
          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, x: isLogin ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: isLogin ? 50 : -50 }}
            transition={{ duration: 0.5 }}
          >
            {/* Name Field (Only for Sign Up) */}
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#002868]"
                />
              </motion.div>
            )}

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <input
                type="email"
                placeholder="Email"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#002868]"
              />
            </motion.div>

            {/* Password Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <input
                type="password"
                placeholder="Password"
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#002868]"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-2 bg-[#002868] text-white rounded-full font-semibold transition"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </motion.button>
          </motion.form>
        </motion.div>
      </main>
    </>
  )
}