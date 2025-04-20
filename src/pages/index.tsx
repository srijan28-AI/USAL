import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>USAL – USA Self Learn</title>
        <meta
          name="description"
          content="USAL is a student-led platform from Nepal guiding students to apply to U.S. universities — no agents, just support."
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-white text-gray-800">
        {/* Hero */}
        <section className="text-center py-20 px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-[#002868] mb-4"
          >
            Empowering Dreams. Guiding Futures. 🇺🇸
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            USAL helps students from Nepal apply to U.S. universities with confidence — no agents, just real guidance, free resources, and community support.
          </motion.p>
        </section>

        {/* Info Cards */}
        <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 pb-20">
          {infoCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white border-l-[6px] rounded-xl shadow-md hover:shadow-xl p-6 transition-all"
              style={{ borderColor: card.color }}
            >
              <h2 className="text-xl font-bold mb-2" style={{ color: card.color }}>
                {card.icon} {card.title}
              </h2>
              <p className="text-gray-700 text-sm">{card.content}</p>
              {card.list && (
                <ul className="list-disc mt-3 ml-6 text-sm text-gray-600 space-y-1">
                  {card.list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </section>

        {/* Stats */}
        <section className="py-10 bg-gray-50 border-y">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl font-bold text-[#002868]">{stat.value}</p>
                <p className="text-sm text-gray-700 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center py-20 px-6 bg-gradient-to-r from-[#002868] to-[#BF0A30] text-white"
        >
          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            🎯 Ready to start your U.S. journey?
          </h3>
          <button className="bg-white text-[#002868] px-6 py-3 font-semibold rounded-full shadow hover:scale-105 transition-transform">
            Explore Universities
          </button>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}

const infoCards = [
  {
    icon: '🌍',
    title: 'About the USA',
    content: 'The U.S. is a top destination for education, offering diversity, innovation, and career-ready programs.',
    color: '#002868',
  },
  {
    icon: '🛂',
    title: 'What is an F-1 Visa?',
    content: 'An F-1 visa lets international students live and study in the U.S., with access to CPT (internships) and OPT (post-grad work).',
    color: '#BF0A30',
  },
  {
    icon: '💼',
    title: 'What are OPT & CPT?',
    content: 'CPT allows internships during study; OPT gives up to 12–36 months of work after graduation based on your degree.',
    color: '#F59E0B',
  },
  {
    icon: '🚀',
    title: 'About USAL',
    content: 'USAL is Nepal’s student-powered platform for applying to U.S. universities — no agents needed.',
    color: '#10B981',
    list: [
      'University shortlisting & tools',
      'Mock visa interview prep',
      'Real community experiences',
      'Always free — no agency fees',
    ],
  },
];

const stats = [
  { label: 'Students Helped', value: '500+' },
  { label: 'Visa Success Rate', value: '95%' },
  { label: 'Mock Interviews', value: '300+' },
  { label: 'Universities Listed', value: '100+' },
];
