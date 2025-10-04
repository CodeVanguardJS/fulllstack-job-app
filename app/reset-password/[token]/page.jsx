"use client";

import Navbar from "../../components/Navbar";

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      {/* Navbar */}
      <Navbar />

      {/* Reset Password Card */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 mt-16">
          <h1 className="text-2xl font-bold text-center text-gray-800">Reset Password</h1>
          <p className="text-center text-gray-500 mb-6">
            Enter your new password below
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Reset Password
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Back to{" "}
            <a href="/login" className="text-blue-600 font-medium hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
