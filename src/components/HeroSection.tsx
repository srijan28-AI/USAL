'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="text-center px-6 py-24">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow mb-6"
      >
        Empowering Dreams. Guiding Futures. 🇺🇸
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl mx-auto text-white text-lg md:text-xl font-light"
      >
        USAL helps students from Nepal apply to U.S. universities with confidence — no agents, just real guidance, free resources, and community support.
      </motion.p>
    </section>
  );
}
