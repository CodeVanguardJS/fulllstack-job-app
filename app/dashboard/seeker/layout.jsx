"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SeekerLayout({ children }) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Profile", path: "/dashboard/seeker/profile" },
    { name: "Applied", path: "/dashboard/seeker/applications" },
    { name: "Bookmark", path: "/dashboard/seeker/bookmark" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* ===== NAVBAR ===== */}
      <nav className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wide">Next-Hire</h1>
          <button className="rounded bg-white/20 px-3 py-1 text-sm font-medium hover:bg-white/30">
            Logout
          </button>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* ===== SIDEBAR ===== */}
        <aside className="w-56 bg-white border-r border-slate-200 p-6">
          <nav className="space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`block text-slate-700 font-medium hover:text-indigo-600 ${
                  pathname === item.path ? "text-indigo-600 font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>

        {/* ===== CONTENT ===== */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
