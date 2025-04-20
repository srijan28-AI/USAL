// src/pages/universities.tsx
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaGraduationCap } from 'react-icons/fa';

export default function UniversitiesPage() {
  // Split the full‑ride list into two roughly equal columns
  const fullRideList = [
    'Harvard University','Yale University','Princeton University','Stanford University','MIT','Columbia University',
    'University of Chicago','Duke University','Amherst College','Dartmouth College','Vanderbilt University','Swarthmore College',
    'Rice University','University of Pennsylvania','Caltech','University of Southern California','Emory University','Hamilton College',
    'Wake Forest University','University of Denver','University of Minnesota','Southern Methodist University','University of Georgia',
    'New York University','Boston College','University of Miami','University of Oklahoma','University of Kentucky',
    'University of Texas at Austin','University of Washington','University of California, Berkeley','Carnegie Mellon University',
    'University of North Carolina at Chapel Hill','University of Richmond','Colgate University','Grinnell College','Berea College',
    'University of Rochester','Claremont McKenna College','Davidson College','University of Alabama',
    'University of Illinois at Urbana-Champaign','University of Wisconsin–Madison'
  ];
  const mid = Math.ceil(fullRideList.length / 2);
  const firstCol = fullRideList.slice(0, mid);
  const secondCol = fullRideList.slice(mid);

  return (
    <>
      <Head>
        <title>USAL – Universities</title>
        <meta name="description" content="Explore USAL's recommended universities and those offering full‑ride scholarships." />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gray-50 text-gray-900 px-6 py-16">
        {/* --- Applied Universities (if you still want them) --- */}
        {/* You can remove this block if not needed */}
        <section className="max-w-6xl mx-auto mb-20">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            🎓 Universities You Applied To
          </h1>
          <p className="text-gray-700">
            (Application fee, IELTS/SAT & scholarship info on hover)
          </p>
          {/* ... your applied‑list grid here if you still want it ... */}
        </section>

        {/* --- Full‑Ride Scholarships Section --- */}
        <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center mb-4">
            <FaGraduationCap className="text-4xl text-blue-800 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
              Universities Providing Full‑Ride Scholarships
            </h2>
          </div>
          <p className="text-gray-600 mb-6">
            List of universities offering 100% funding through need‑based or merit‑based aid.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1 */}
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              {firstCol.map((uni) => (
                <li key={uni}>{uni}</li>
              ))}
            </ul>

            {/* Column 2 */}
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              {secondCol.map((uni) => (
                <li key={uni}>{uni}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
