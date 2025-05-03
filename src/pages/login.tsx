'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
      <Head>
        <title>USAL – {isLogin ? 'Login' : 'Sign Up'}</title>
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Image
            src="/usal.jpg"
            alt="USAL Logo"
            width={100}
            height={100}
            className="rounded-full shadow-lg"
          />
        </motion.div>

        {/* Auth Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-white shadow-lg rounded-lg p-8"
        >
          {/* Form Title */}
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            {isLogin ? 'Log in to your account' : 'Create a new account'}
          </h1>

          {/* Google Login */}
          <button className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition">
            <FcGoogle className="text-2xl mr-2" />
            <span className="text-gray-700 font-medium">
              {isLogin ? 'Log in with Google' : 'Sign up with Google'}
            </span>
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

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
                  placeholder="Full Name"
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {isLogin ? 'Log In' : 'Sign Up'}
            </motion.button>
          </motion.form>

          {/* Forgot Password */}
          {isLogin && (
            <div className="text-center mt-4">
              <a
                href="#"
                className="text-blue-500 hover:underline text-sm font-medium"
              >
                Forgot password?
              </a>
            </div>
          )}

          {/* Toggle Login/Sign Up */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              {isLogin
                ? "Don't have an account?"
                : 'Already have an account?'}{' '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-500 hover:underline font-medium"
              >
                {isLogin ? 'Sign Up' : 'Log In'}
              </button>
            </p>
          </div>
        </motion.div>
      </main>
    </>
  )
}