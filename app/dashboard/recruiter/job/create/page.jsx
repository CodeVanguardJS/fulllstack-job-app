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
    // TODO: kirim ke API ketika backend sudah siap
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ===== NAVBAR ===== */}
      <nav className="bg-white shadow">
        <div className="mx-auto max-w-5xl px-4 py-4">
          <h1 className="text-lg font-bold">JobBoard</h1>
        </div>
      </nav>

      {/* ===== CONTENT ===== */}
      <main className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="mb-8 text-2xl font-bold text-center">
          Create a New Job
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl space-y-6 bg-white p-6 shadow rounded"
        >
          {/* Job Title */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="title">
              Job Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              placeholder="e.g. Frontend Developer"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="company">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={form.company}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              placeholder="e.g. PT Maju Jaya"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="location">
              Location
            </label>
            <input
              id="location"
              name="location"
              type="text"
              value={form.location}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              placeholder="e.g. Jakarta / Remote"
            />
          </div>

          {/* Work Type */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="workType">
              Work Type
            </label>
            <select
              id="workType"
              name="workType"
              value={form.workType}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
            >
              <option value="">-- Select --</option>
              <option value="office">Work From Office</option>
              <option value="home">Work From Home</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={6}
              value={form.description}
              onChange={handleChange}
              className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              placeholder="Job details, responsibilities, etc."
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              className="rounded border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => setForm({ title:"", company:"", location:"", workType:"", description:"" })}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
            >
              Publish
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
