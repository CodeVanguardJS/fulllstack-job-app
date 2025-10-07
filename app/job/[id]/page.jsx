"use client";

import { motion } from "framer-motion";
import { Bookmark, MapPin, Building2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function JobDetailPage() {
  const job = {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Company",
    location: "Jakarta, Indonesia",
    type: "Full-time",
    description:
      "We are looking for a passionate Frontend Developer who will be responsible for building the client-side of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications.",
  };

  const suggestedJobs = [
    { id: 2, title: "Backend Developer", company: "ABC Corp" },
    { id: 3, title: "UI/UX Designer", company: "XYZ Studio" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide text-indigo-600">
            NextHire
          </h1>
          <Button variant="outline" className="text-sm font-medium">
            Logout
          </Button>
        </div>
      </nav>

      {/* ===== CONTENT ===== */}
      <main className="mx-auto max-w-6xl px-6 pt-28 pb-16">
        {/* Header */}
        <div className="flex items-start gap-6 border-b border-slate-200 pb-8">
          <img
            src="/company-logo.png"
            alt="Company Logo"
            className="w-24 h-24 object-cover rounded-lg border border-slate-200 shadow-sm"
          />

          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              {job.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-slate-600 text-sm">
              <span className="flex items-center gap-1">
                <Building2 className="w-4 h-4" /> {job.company}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {job.location}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> {job.type}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-8">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow-sm">
              Apply Now
            </Button>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="p-2 border border-slate-300 rounded-lg hover:bg-slate-100 transition"
          >
            <Bookmark className="w-5 h-5 text-slate-600" />
          </motion.button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* Job Description */}
          <Card className="lg:col-span-2 border border-slate-100 shadow-sm">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">
                Job Description
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {job.description}
              </p>
            </CardContent>
          </Card>

          {/* Suggested Jobs */}
          <aside className="space-y-4">
            <h2 className="text-lg font-semibold text-slate-800">
              Suggested Jobs
            </h2>

            {suggestedJobs.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -4 }}
                className="transition"
              >
                <Card className="hover:shadow-md border border-slate-100">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-slate-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600">{item.company}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </aside>
        </div>
      </main>
    </div>
  );
}
