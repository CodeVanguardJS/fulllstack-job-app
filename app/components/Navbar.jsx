"use client";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-xl font-bold text-blue-600">
          MyApp
        </a>

        {/* Menu */}
        <div className="flex gap-6 text-gray-700 font-medium">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/login" className="hover:text-blue-600">Login</a>
          <a href="/register" className="hover:text-blue-600">Register</a>
        </div>
      </div>
    </nav>
  );
}
