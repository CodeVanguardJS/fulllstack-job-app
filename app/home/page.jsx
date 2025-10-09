'use client'

import { useState } from 'react'

export default function Home() {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const [selectedJob, setSelectedJob] = useState(null)

  const jobs = [
    { title: 'Frontend Developer', company: 'Tech Innovators', location: 'Jakarta', type: 'Full-Time' },
    { title: 'Backend Developer', company: 'Digital Future', location: 'Bandung', type: 'Full-Time' },
    { title: 'UI/UX Designer', company: 'Creative Minds', location: 'Surabaya', type: 'Contract' },
  ]

  const handleApply = (title, company) => {
    setSelectedJob({ title, company })
    setTimeout(() => alert(`Lamaran untuk posisi "${title}" di ${company} berhasil dikirim! 🎉`), 200)
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600">JobPortal</h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#jobs" className="hover:text-blue-600">Lowongan</a>
          <a href="#contact" className="hover:text-blue-600">Kontak</a>
        </nav>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold">
          Masuk
        </button>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="text-center py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Temukan Pekerjaan Impianmu</h2>
        <p className="text-lg text-blue-100 mb-8">
          Jelajahi ribuan lowongan kerja dari perusahaan terbaik di seluruh Indonesia.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-2xl mx-auto">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari posisi..."
            className="w-full md:w-2/3 px-4 py-3 rounded-lg text-gray-800"
          />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Lokasi..."
            className="w-full md:w-1/3 px-4 py-3 rounded-lg text-gray-800"
          />
          <button
            onClick={() => alert(`Mencari pekerjaan: ${query || 'Semua'} di ${location || 'Semua lokasi'}`)}
            className="px-6 py-3 bg-yellow-400 text-gray-800 font-semibold rounded-lg hover:bg-yellow-300 transition"
          >
            Cari Kerja
          </button>
        </div>
      </section>

      {/* Job Listings */}
      <section id="jobs" className="max-w-6xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-10">Lowongan Terbaru</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="job-card bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <h4 className="text-lg font-semibold mb-1">{job.title}</h4>
              <p className="text-sm text-gray-600 mb-2">{job.company}</p>
              <p className="text-sm text-gray-500 mb-4">{job.location} • {job.type}</p>
              <button
                onClick={() => handleApply(job.title, job.company)}
                className="text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Lamar Sekarang →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-600 text-white text-center py-16 px-6">
        <h3 className="text-3xl font-bold mb-4">Butuh Bantuan?</h3>
        <p className="text-blue-100 mb-6">Hubungi kami untuk pertanyaan atau kerjasama.</p>
        <a
          href="mailto:support@jobportal.com"
          className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Kirim Email
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-8">
        <p className="text-sm">© 2025 JobPortal. All rights reserved.</p>
      </footer>

      {/* Modal Apply */}
      {selectedJob && (
        <div
          onClick={() => setSelectedJob(null)}
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl shadow-lg p-6 max-w-sm text-center"
          >
            <h4 className="text-lg font-semibold mb-2 text-gray-800">Lamaran Dikirim!</h4>
            <p className="text-sm text-gray-600 mb-4">
              Kamu telah melamar posisi <strong>{selectedJob.title}</strong> di <strong>{selectedJob.company}</strong>.
            </p>
            <button
              onClick={() => setSelectedJob(null)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
