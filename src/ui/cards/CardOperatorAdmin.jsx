import StatusAkunOperator from "../buttons/StatusAkunOperator";
import DeleteOperator from "../buttons/DeleteOperator";

export default function CardOperatorAdmin() {
  const operators = [
    { id: 1, name: "Ahmad Rahman", hasAccount: true, email: "ahmad@email.com", username: "ahmad123" },
    { id: 2, name: "Jarun", hasAccount: false },
    { id: 3, name: "Indah", hasAccount: true, email: "indah@email.com", username: "indah123" },
    { id: 4, name: "Raisya", hasAccount: false },
    { id: 5, name: "Aska", hasAccount: true, email: "aska@email.com", username: "aska123" },
    { id: 6, name: "Chelyn", hasAccount: false },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {operators.map((operator) => (
        <div key={operator.id} className="bg-white rounded-2xl p-6 border-2 border-purple-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div className="w-10 h-10 rounded-full border-2 border-gray-900 flex items-center justify-center">
              <span className="font-bold text-gray-900">{operator.id}</span>
            </div>
            
            {operator.hasAccount ? (
              <span className="px-4 py-1.5 bg-green-500 text-white text-sm font-semibold rounded-lg flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Punya akun
              </span>
            ) : (
              <span className="px-4 py-1.5 bg-gray-400 text-white text-sm font-semibold rounded-lg">
                Belum punya Akun
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-6">{operator.name}</h3>

          <div className="flex items-center gap-3">
            <StatusAkunOperator 
              hasAccount={operator.hasAccount}
              operator={operator}
            />
            <DeleteOperator 
              operator={operator}
            />
          </div>
        </div>
      ))}
    </div>
  );
}