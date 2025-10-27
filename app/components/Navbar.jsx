"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm sticky top-0 z-50 text-gray-800">
        <h1 className="text-2xl font-bold text-blue-600">NextHire</h1>
        <nav className="space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/jobs" className="hover:text-blue-600">Lowongan</Link>
          <Link href="/contact" className="hover:text-blue-600">Kontak</Link>
        </nav>
        {pathName === "/login" ? (
          <Link
          href="/register"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold"
        >
          Daftar
        </Link>
      ) : (
        <Link
          href="/login"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-semibold"
        >
          Masuk
        </Link>
        )}
      </header>
  );
}
