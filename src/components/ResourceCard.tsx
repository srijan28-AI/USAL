// src/components/ResourceCard.tsx
'use client';

import { FaBook } from 'react-icons/fa';
import { motion } from 'framer-motion';

export interface Resource {
  title: string;
  description: string;
  link: string;
}

export default function ResourceCard({
  title,
  description,
  link,
}: Resource) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition p-6 flex flex-col"
    >
      <div className="text-4xl text-blue-800 mb-4">
        <FaBook />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-blue-800 font-medium hover:underline"
      >
        Access Materials &rarr;
      </a>
    </motion.div>
  );
}
