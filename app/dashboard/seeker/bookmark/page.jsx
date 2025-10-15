"use client";
import { useRouter } from "next/navigation";
import { Bookmark } from "lucide-react";

export default function BookmarkPage() {
  const router = useRouter();

  const bookmarks = [
    {
      id: 1,
      title: "UI/UX Designer",
      company: "Creatify Studio",
      location: "Jakarta",
      logo: "/images/creatify-logo.png",
    },
    {
      id: 2,
      title: "Mobile Developer",
      company: "AppForge",
      location: "Bandung",
      logo: "/images/appforge-logo.png",
    },
  ];

  const handleClick = (id) => {
    router.push(`/jobs/${id}`);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Bookmarked Jobs</h2>

      <div className="space-y-4">
        {bookmarks.map((job) => (
          <div
            key={job.id}
            onClick={() => handleClick(job.id)}
            className="bg-white shadow rounded-lg p-6 flex justify-between items-start cursor-pointer hover:shadow-md transition"
          >
            <div className="flex items-start gap-4">
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-12 h-12 rounded-md object-contain border"
              />
              <div>
                <h3 className="text-lg font-semibold text-slate-800">
                  {job.title}
                </h3>
                <p className="text-slate-600 text-sm mt-1">{job.company}</p>
                <p className="text-slate-500 text-sm">{job.location}</p>
              </div>
            </div>

            <Bookmark
              className="text-indigo-600 hover:text-indigo-700"
              size={22}
              strokeWidth={2}
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2">
        <button className="px-3 py-1 border rounded-lg text-sm text-slate-700 hover:bg-slate-100">
          Prev
        </button>
        <button className="px-3 py-1 border rounded-lg text-sm bg-indigo-600 text-white">
          1
        </button>
        <button className="px-3 py-1 border rounded-lg text-sm text-slate-700 hover:bg-slate-100">
          2
        </button>
        <button className="px-3 py-1 border rounded-lg text-sm text-slate-700 hover:bg-slate-100">
          Next
        </button>
      </div>
    </div>
  );
}
