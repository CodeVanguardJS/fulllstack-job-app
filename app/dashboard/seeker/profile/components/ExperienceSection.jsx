import { Plus } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    { id: 1, company: "Creatify Studio", role: "UI Designer", years: "2022–2023" },
    { id: 2, company: "AppForge", role: "Frontend Developer", years: "2023–Now" },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-slate-800">Experience</h3>
        <button className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1 text-sm">
          <Plus size={16} />
          Add
        </button>
      </div>

      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.id}>
            <p className="font-medium text-slate-800">{exp.role}</p>
            <p className="text-sm text-slate-600">{exp.company}</p>
            <p className="text-xs text-slate-500">{exp.years}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
