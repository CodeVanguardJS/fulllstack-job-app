"use client";

import Link from "next/link";
import { Bookmark } from "lucide-react";

export default function ApplicationsPage() {
  const applications = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Techify",
      location: "Jakarta",
      logo: "https://via.placeholder.com/50x50?text=T",
      status: "Applied",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "SoftHub",
      location: "Bandung",
      logo: "https://via.placeholder.com/50x50?text=S",
      status: "Rejected",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Designify",
      location: "Yogyakarta",
      logo: "https://via.placeholder.com/50x50?text=D",
      status: "Accepted",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Accepted":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <div className="text-slate-800">
      <h2 className="text-2xl font-bold mb-8">Applied Jobs</h2>

      <div className="flex flex-col gap-5">
        {applications.map((job) => (
          <div
            key={job.id}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start">
              <Link
                href={`/job/${job.id}`}
                className="flex items-center gap-4 group cursor-pointer"
              >
                {/* Company Logo */}
                <img
                  src={job.logo}
                  alt={job.company}
                  className="w-12 h-12 rounded-md border border-slate-200 object-cover"
                />

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-slate-600 mt-1 font-medium">{job.company}</p>
                  <p className="text-slate-500 text-sm">{job.location}</p>
                </div>
              </Link>

              {/* Bookmark Icon */}
              <button
                aria-label="Bookmark"
                className="text-slate-400 hover:text-indigo-600 transition-colors"
              >
                <Bookmark className="w-5 h-5" />
              </button>
            </div>

            {/* Status */}
            <div className="mt-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
                  job.status
                )}`}
              >
                {job.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
