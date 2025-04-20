'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

type UniversityCardProps = {
  name: string;
  location: string;
  fee: string;
  link?: string;
};

export default function UniversityCard({ name, location, fee, link }: UniversityCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="rounded-xl p-5 border border-gray-200 bg-white shadow-sm hover:shadow-lg transition duration-300"
    >
      <h3 className="text-lg font-semibold text-[#002868]">{name}</h3>
      <p className="text-sm text-gray-600">{location}</p>
      <p className="text-sm mt-1">
        <span className="font-medium">Application Fee:</span> {fee}
      </p>
      {link && (
        <Link
          href={link}
          target="_blank"
          className="text-sm text-[#BF0A30] font-medium hover:underline inline-block mt-2"
        >
          Visit Website →
        </Link>
      )}
    </motion.div>
  );
}
