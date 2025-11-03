import { Upload } from "lucide-react";

export default function CvSection() {
  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold text-slate-800 mb-1">Curriculum Vitae</h3>
        <p className="text-sm text-slate-600">Upload or update your latest CV.</p>
      </div>
      <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition">
        <Upload size={16} />
        Upload CV
      </button>
    </div>
  );
}
