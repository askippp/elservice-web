import { useState } from 'react';
import BuatAkunOperator from '../forms/BuatAkunOperator';
import DetailAkunOperator from '../forms/DetailAkunOperator';

export default function StatusAkunOperator({ hasAccount, operator }) {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  if (hasAccount) {
    return (
      <>
        <button 
          onClick={handleClick}
          className="flex-1 py-2.5 bg-white border-2 border-purple-500 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Lihat Akun
        </button>

        {/* Modal Detail Akun */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleClose}>
            <div className="max-w-2xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
              <DetailAkunOperator operator={operator} onClose={handleClose} />
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <button 
        onClick={handleClick}
        className="flex-1 py-2.5 bg-white border-2 border-purple-500 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
        Buat Akun
      </button>

      {/* Modal Buat Akun */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleClose}>
          <div className="max-w-2xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <BuatAkunOperator operator={operator} onClose={handleClose} />
          </div>
        </div>
      )}
    </>
  );
}