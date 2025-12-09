import { useState } from 'react';
import DeleteOperator from "../buttons/DeleteOperator";
import UpdateOperatorLaporan from '../buttons/UpdateOperatorLaporan';
import AddOperatorLaporan from '../buttons/AddOperatorLaporan';

export default function FormManageOperator({ onClose }) {
  const [operators] = useState([
    {
      id: 1,
      name: "Budi Santoso",
      shift: "Shift Pagi",
      email: "budi@email.com",
      phone: "081234567890"
    },
    {
      id: 2,
      name: "Siti Rahma",
      shift: "Shift Siang",
      email: "siti@email.com",
      phone: "081234567891"
    }
  ]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Manage Operator</h2>
            <button 
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Operator Cards */}
          {operators.map((operator) => (
            <div 
              key={operator.id}
              className="bg-white border-2 border-gray-300 rounded-2xl p-5 hover:border-purple-300 transition-colors"
            >
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900">{operator.name}</h3>
                  <p className="text-sm text-gray-600">{operator.shift}</p>
                  <p className="text-sm text-gray-600">
                    {operator.email} • {operator.phone}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <UpdateOperatorLaporan operator={operator} />
                  <DeleteOperator operatorId={operator.id} operatorName={operator.name} />
                </div>
              </div>
            </div>
          ))}

          {/* Add Button */}
          <AddOperatorLaporan />
        </div>
      </div>
    </div>
  );
}