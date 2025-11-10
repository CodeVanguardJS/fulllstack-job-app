"use client";
import Navbar from "../components/Navbar";

// components/AppliedJobs.tsx
export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 px-6 py-18">
        <h1 className="text-2xl font-semibold text-blue-700 mb-6">Apply Job</h1>

        {/* Job Card List */}
        <div className="space-y-5">
          {/* Job Card */}
          <div className="bg-white shadow rounded-2xl p-5 flex justify-between items-start hover:shadow-lg transition">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Job Position</h2>
              <p className="text-gray-600">Company</p>
              <p className="text-gray-600 mb-4">Location</p>
              <p className="text-blue-600 text-sm font-medium">Apply in NextHire</p>
              <p className="text-gray-500 text-sm">Date of Apply</p>
            </div>
            <div className="w-10 h-10 bg-gray-400 rounded-md"></div>
          </div>

          {/* Job Card 2 */}
          <div className="bg-white shadow rounded-2xl p-5 flex justify-between items-start hover:shadow-lg transition">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Job Position</h2>
              <p className="text-gray-600">Company</p>
              <p className="text-gray-600 mb-4">Location</p>
              <p className="text-blue-600 text-sm font-medium">Apply in NextHire</p>
              <p className="text-gray-500 text-sm">Date of Apply</p>
            </div>
            <div className="w-10 h-10 bg-gray-400 rounded-md"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
