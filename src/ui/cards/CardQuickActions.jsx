import { useState } from 'react';
import FormManageOperator from '../forms/FormManageOperator';

export default function CardQuickActions() {
  const [showOperatorForm, setShowOperatorForm] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl p-6 border-2 border-gray-300 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Manage Operator Button */}
          <button 
            onClick={() => setShowOperatorForm(true)}
            className="bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-2xl p-8 text-white transition-all duration-300 hover:shadow-xl group"
          >
            <div className="flex flex-col items-center gap-3">
              <svg 
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
              <span className="text-lg font-semibold">Manage Operator</span>
            </div>
          </button>

          {/* Manage Teknisi Button */}
          <button className="bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-2xl p-8 text-white transition-all duration-300 hover:shadow-xl group">
            <div className="flex flex-col items-center gap-3">
              <svg 
                className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
                />
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                />
              </svg>
              <span className="text-lg font-semibold">Manage Teknisi</span>
            </div>
          </button>
        </div>
      </div>

      {/* Form Modal */}
      {showOperatorForm && (
        <FormManageOperator onClose={() => setShowOperatorForm(false)} />
      )}
    </>
  );
}