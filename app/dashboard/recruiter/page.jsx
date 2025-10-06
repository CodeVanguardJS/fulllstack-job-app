"use client";

import Link from "next/link";

export default function RecruiterDashboard() {
  // Dummy data sementara
  const stats = {
    totalJobs: 3,
    totalApplicants: 12,
  };

  const jobs = [
    { id: 1, title: "Frontend Developer", status: "Open", applicants: 5 },
    { id: 2, title: "Backend Developer", status: "Closed", applicants: 3 },
    { id: 3, title: "UI/UX Designer", status: "Open", applicants: 4 },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ===== NAVBAR ===== */}
      <nav className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide">Next-Hire</h1>
          <button className="rounded bg-white/20 px-3 py-1 text-sm font-medium hover:bg-white/30">
            Logout
          </button>
        </div>
      </nav>

      
       {/* ===== CONTENT ===== */}
      <main className="mx-auto max-w-6xl px-4 py-10">
        {/* Create Job Button */}
        <div className="mb-6">
          <Link href="/dashboard/recruiter/job/create">
          <button className="rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700">
            + Create New Job
          </button>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-10">
          <div className="rounded-lg bg-white p-6 shadow text-center">
            <h2 className="text-lg font-semibold text-slate-700">Total Jobs</h2>
            <p className="mt-2 text-3xl font-bold text-indigo-600">{stats.totalJobs}</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow text-center">
            <h2 className="text-lg font-semibold text-slate-700">Total Applicants</h2>
            <p className="mt-2 text-3xl font-bold text-violet-600">{stats.totalApplicants}</p>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-lg bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-bold text-slate-800">Recent Jobs</h2>
          <table className="min-w-full border border-slate-200">
            <thead>
              <tr className="bg-slate-100 text-black">
                <th className="border px-4 py-2 text-left">Job Title</th>
                <th className="border px-4 py-2 text-left">Status</th>
                <th className="border px-4 py-2 text-left">Applicants</th>
                <th className="border px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-slate-50 text-black">
                  <td className="border px-4 py-2">{job.title}</td>
                  <td className="border px-4 py-2">{job.status}</td>
                  <td className="border px-4 py-2">{job.applicants}</td>
                  <td className="border px-4 py-2">
                    <button className="rounded bg-indigo-600 px-3 py-1 text-sm font-medium text-white hover:bg-indigo-700">
                      Show Applicants
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
