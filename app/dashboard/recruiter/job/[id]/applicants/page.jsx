export default function ListApplicantPage() {
  const applicants = [
    { id: 1, name: "John Doe", email: "john@example.com", telp: "08123456789" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", telp: "08987654321" },
    { id: 3, name: "Michael Lee", email: "michael@example.com", telp: "08129876543" },
    { id: 4, name: "Sarah Kim", email: "sarah@example.com", telp: "08212345678" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-md p-4 text-center text-lg font-semibold">
        Navbar
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-xl font-semibold text-gray-800 mb-6">
          List Applicant for position
        </h1>

        <div className="flex flex-col gap-4">
          {applicants.map((applicant) => (
            <div
              key={applicant.id}
              className="flex justify-between items-center bg-blue-50 border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div>
                <p className="font-semibold text-blue-800">{applicant.name}</p>
                <p className="text-sm text-gray-600">{applicant.email}</p>
                <p className="text-sm text-gray-600">{applicant.telp}</p>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                Download CV
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
