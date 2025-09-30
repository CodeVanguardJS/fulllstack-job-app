"use client";

import { useState } from "react";

export default function CreateJobPage() {
  const [form, setForm] = useState({
    jobTitle: "",
    company: "",
    location: "",
    workType: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", form);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ===== NAVBAR ===== */}
      <nav className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide">Next-Hire</h1>
          <button className="rounded bg-white/20 px-3 py-1 text-sm font-medium hover:bg-white/30">
            Dashboard
          </button>
        </div>
      </nav>

      {/* ===== CONTENT ===== */}
      <main className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="mb-10 text-center text-2xl font-extrabold tracking-wide text-slate-900">
          Create a New Job
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl space-y-6 rounded-lg bg-white p-8 shadow-md"
        >
          {/* Job Title */}
          <FormGroup
            id="jobTitle"
            label="Job Title"
            placeholder="e.g. Frontend Developer"
            value={form.jobTitle}
            onChange={handleChange}
          />

          {/* Company */}
          <FormGroup
            id="company"
            label="Company"
            placeholder="e.g. PT Maju Jaya"
            value={form.company}
            onChange={handleChange}
          />

          {/* Location */}
          <FormGroup
            id="location"
            label="Location"
            placeholder="e.g. Jakarta / Remote"
            value={form.location}
            onChange={handleChange}
          />

          {/* Work Type */}
          <div>
            <label
              className="mb-1 block font-semibold text-gray-700"
              htmlFor="workType"
            >
              Work Type
            </label>
            <select
              id="workType"
              name="workType"
              value={form.workType}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 p-2 text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="">-- Select --</option>
              <option value="office">Work From Office</option>
              <option value="home">Work From Home</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label
              className="mb-1 block font-semibold text-gray-700"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={6}
              value={form.description}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 p-2 text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Job details, responsibilities, etc."
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-100"
              onClick={() =>
                setForm({
                  jobTitle: "",
                  company: "",
                  location: "",
                  workType: "",
                  description: "",
                })
              }
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 
             px-4 py-2 font-semibold text-white 
             transition hover:from-indigo-700 hover:to-violet-700 
             focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Publish
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

/* ---- Reusable input group ---- */
function FormGroup({ id, label, placeholder, value, onChange }) {
  return (
    <div>
      <label className="mb-1 block font-semibold text-gray-700" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-gray-300 p-2 text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
}
