"use client";
import { Upload, Edit2 } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="bg-white shadow rounded-lg p-6 flex flex-col md:flex-row items-start gap-6">
      {/* Avatar */}
      <div className="flex flex-col items-center">
        <img
          src="/images/default-avatar.png"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border"
        />
        <button className="mt-3 flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700">
          <Upload size={16} />
          Upload Photo
        </button>
      </div>

      {/* Info */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-3">
        <div>
          <p className="text-slate-500 text-sm">Name</p>
          <p className="text-slate-800 font-medium">John Doe</p>
        </div>
        <div>
          <p className="text-slate-500 text-sm">Email</p>
          <p className="text-slate-800 font-medium">john@example.com</p>
        </div>
        <div>
          <p className="text-slate-500 text-sm">Whatsapp Number</p>
          <p className="text-slate-800 font-medium">+62 812 3456 7890</p>
        </div>
        <div>
          <p className="text-slate-500 text-sm">Location</p>
          <p className="text-slate-800 font-medium">Jakarta</p>
        </div>
        <div>
          <p className="text-slate-500 text-sm">Age, Gender</p>
          <p className="text-slate-800 font-medium">27, Male</p>
        </div>
      </div>

      {/* Edit Button */}
      <button className="ml-auto text-indigo-600 hover:text-indigo-700">
        <Edit2 size={20} />
      </button>
    </div>
  );
}
