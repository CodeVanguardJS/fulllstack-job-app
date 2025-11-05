"use client";
import { useState, useMemo, useContext } from "react";
import { FilterContext } from "./layout";

export default function JobsPage() {
  const filters = useContext(FilterContext); // ✅ Ambil filters dari Context

  const allJobs = [
    { id: 1, title: "Frontend Developer", company: "TechNova", location: "Jakarta", type: "Full Time", experience: "Mid Level", salary: "8–12 juta" },
    { id: 2, title: "Backend Developer", company: "Codeverse", location: "Surabaya", type: "Full Time", experience: "Senior", salary: "10–15 juta" },
    { id: 3, title: "UI/UX Designer", company: "Designly", location: "Bandung", type: "Internship", experience: "Entry Level", salary: "3–5 juta" },
    { id: 4, title: "Mobile Developer", company: "AppCore", location: "Jakarta", type: "Part Time", experience: "Mid Level", salary: "6–9 juta" },
    { id: 5, title: "DevOps Engineer", company: "InfraTech", location: "Yogyakarta", type: "Full Time", experience: "Senior", salary: "12–18 juta" },
    { id: 6, title: "QA Tester", company: "BugZero", location: "Jakarta", type: "Full Time", experience: "Entry Level", salary: "5–7 juta" },
    { id: 7, title: "Product Manager", company: "Innovex", location: "Bandung", type: "Full Time", experience: "Senior", salary: "15–20 juta" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;

  const filteredJobs = useMemo(() => {
    if (!filters) return allJobs; // ⛔ hindari error undefined
    return allJobs.filter((job) => {
      const matchLocation =
        !filters.location ||
        job.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchType =
        filters.type === "All" || job.type === filters.type;
      const matchExperience =
        filters.experience === "All" || job.experience === filters.experience;
      return matchLocation && matchType && matchExperience;
    });
  }, [filters]);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);

  const handleChangePage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Available Jobs</h1>

      {currentJobs.length === 0 ? (
        <p className="text-slate-500 text-sm italic">No jobs found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentJobs.map((job) => (
            <div
              key={job.id}
              className="rounded-lg bg-white shadow p-6 hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold text-indigo-700">
                {job.title}
              </h2>
              <p className="text-slate-600">{job.company}</p>
              <p className="text-sm text-slate-500 mt-1">
                {job.location} • {job.type}
              </p>
              <p className="text-sm font-medium text-green-600 mt-2">
                {job.salary}
              </p>
              <button className="mt-4 rounded bg-indigo-600 text-white px-4 py-2 text-sm hover:bg-indigo-700">
                View Details
              </button>
            </div>
          ))}
        </div>
      )}

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-10">
          <button
            onClick={() => handleChangePage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded border text-sm ${
              currentPage === 1
                ? "text-slate-400 border-slate-200 cursor-not-allowed"
                : "text-indigo-600 border-indigo-300 hover:bg-indigo-50"
            }`}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handleChangePage(i + 1)}
              className={`px-3 py-1 rounded border text-sm ${
                currentPage === i + 1
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "text-slate-600 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handleChangePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded border text-sm ${
              currentPage === totalPages
                ? "text-slate-400 border-slate-200 cursor-not-allowed"
                : "text-indigo-600 border-indigo-300 hover:bg-indigo-50"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
