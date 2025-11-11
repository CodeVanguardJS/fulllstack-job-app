// app/job-post-list/page.tsx
import Navbar from "@/app/components/Navbar";
export default function JobPostList() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Navbar */}
      {/* <nav className="bg-gray-200 py-4 shadow-sm text-center text-lg font-semibold text-gray-700">
        Navbar
      </nav> */}
      <Navbar />
      {/* Main Content */}
      <main className="max-w-5xl mx-auto py-10 px-6 mt-8">
        <h1 className="text-2xl font-semibold mb-6">Job Post List</h1>

        {/* Job Card 1 */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6 flex justify-between items-start border border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Job Position</h2>
            <p className="text-gray-600">Company</p>
            <p className="text-gray-600 mb-4">Location</p>

            <p className="text-blue-600 font-medium">Apply in NextHire</p>
            <p className="text-gray-500 text-sm">Date of Apply</p>
          </div>
          <div className="w-10 h-10 bg-gray-400 rounded"></div>
        </div>

        {/* Job Card 2 */}
        <div className="bg-white rounded-2xl shadow p-6 mb-6 flex justify-between items-start border border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Job Position</h2>
            <p className="text-gray-600">Company</p>
            <p className="text-gray-600 mb-4">Location</p>

            <p className="text-blue-600 font-medium">Apply in NextHire</p>
            <p className="text-gray-500 text-sm">Date of Apply</p>
          </div>
          <div className="w-10 h-10 bg-gray-400 rounded"></div>
        </div>
      </main>
    </div>
  );
}
