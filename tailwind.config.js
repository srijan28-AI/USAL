// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',      // ← make sure these globs match
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: { },
  },
  plugins: [],
}
