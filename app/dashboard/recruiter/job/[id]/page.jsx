export default function JobDetailPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-3 shadow-md">
        <h1 className="text-lg font-semibold">Navbar</h1>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto mt-8 bg-white shadow-md rounded-2xl p-6">
        {/* Header */}
        <div className="flex items-start space-x-4">
          {/* Logo */}
          <div className="w-20 h-20 bg-gray-200 flex items-center justify-center rounded-md border border-gray-300">
            <span className="text-sm text-gray-600 text-center">Logo<br/>Perusahaan</span>
          </div>

          {/* Job Info */}
          <div className="space-y-1">
            <h2 className="text-xl font-semibold text-blue-700">Posisi</h2>
            <p className="text-gray-600">Nama Perusahaan</p>
            <p className="text-gray-600">Nominal Gaji</p>
            <p className="text-gray-600">Kategori Posisi (Remote / Hybrid / Onsite)</p>
            <p className="text-gray-600">Jumlah Pelamar yang dibutuhkan</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex space-x-3 mt-5">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Applied List
          </button>
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-400 transition">
            Edit Job
          </button>
        </div>

        {/* Job Description */}
        <div className="mt-6">
          <h3 className="font-semibold text-blue-700 mb-2">Job Description</h3>
          <div className="bg-gray-100 rounded-md p-3 text-gray-700">
            <p>
              Deskripsi pekerjaan akan ditampilkan di sini. Misalnya: tanggung jawab, jam kerja, dan benefit.
            </p>
          </div>
        </div>

        {/* Qualification */}
        <div className="mt-6">
          <h3 className="font-semibold text-blue-700 mb-2">Qualification</h3>
          <div className="bg-gray-100 rounded-md p-3 text-gray-700">
            <p>
              Kualifikasi pekerjaan seperti pendidikan, pengalaman, dan skill yang dibutuhkan akan muncul di sini.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
