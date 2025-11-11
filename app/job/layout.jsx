"use client";
import { useState, createContext } from "react";


export const FilterContext = createContext();

export default function JobsLayout({ children }) {
  const [filters, setFilters] = useState({
    location: "",
    type: "All",
    experience: "All",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <FilterContext.Provider value={filters}>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* Navbar */}
        <nav className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md">
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-wide">Next-Hire</h1>
            <button className="rounded bg-white/20 px-3 py-1 text-sm font-medium hover:bg-white/30">
              Logout
            </button>
          </div>
        </nav>

        {/* Content */}
        <div className="flex flex-1">
          {/* Sidebar Filter */}
          <aside className="w-72 bg-white border-r border-slate-200 p-6">
            <h2 className="font-semibold text-slate-700 mb-4">Filter Jobs</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Location
                </label>
                <input
                  name="location"
                  type="text"
                  placeholder="e.g. Jakarta"
                  value={filters.location}
                  onChange={handleFilterChange}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Job Type
                </label>
                <select
                  name="type"
                  value={filters.type}
                  onChange={handleFilterChange}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option>All</option>
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Internship</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1">
                  Experience
                </label>
                <select
                  name="experience"
                  value={filters.experience}
                  onChange={handleFilterChange}
                  className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option>All</option>
                  <option>Entry Level</option>
                  <option>Mid Level</option>
                  <option>Senior</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Job List Area */}
          <main className="flex-1 p-8">{children}</main>
        </div>
      </div>
    </FilterContext.Provider>
  );
}
