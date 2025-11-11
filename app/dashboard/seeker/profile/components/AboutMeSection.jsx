import { Edit2 } from "lucide-react";

export default function AboutMeSection() {
  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-slate-800">About Me</h3>
        <button className="text-indigo-600 hover:text-indigo-700">
          <Edit2 size={18} />
        </button>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">
        Passionate front-end developer who loves building clean and accessible
        interfaces. Currently exploring Next.js and Tailwind CSS.
      </p>
    </div>
  );
}
