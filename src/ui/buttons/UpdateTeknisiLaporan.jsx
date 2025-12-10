import { useState } from 'react';
import FormLihatAkunTeknisi from '../forms/FormLihatAkunTeknisi';

export default function UpdateTeknisiLaporan({ teknisi, onUpdate }) {
  const [showDetail, setShowDetail] = useState(false);

  const handleOpenDetail = () => {
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    
    // Panggil callback jika ada untuk refresh data
    if (onUpdate) {
      onUpdate();
    }
  };

  return (
    <>
      <button 
        onClick={handleOpenDetail}
        className="w-16 h-16 bg-white border-2 border-gray-900 rounded-xl hover:bg-purple-50 transition-colors flex items-center justify-center"
      >
        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </button>

      {/* Modal Detail Akun Teknisi */}
      {showDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <FormLihatAkunTeknisi
            teknisi={teknisi}
            onClose={handleCloseDetail}
          />
        </div>
      )}
    </>
  );
}