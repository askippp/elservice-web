import { useState } from 'react';
import NotifUpdateOperator from '../notif/notifUpdateOperator';

export default function DetailAkunOperator({ operator, onClose }) {
  const [showNotif, setShowNotif] = useState(false);

  const handleEdit = () => {
    console.log("Edit operator:", operator?.name);
    // Simulasi update berhasil
    setShowNotif(true);
  };

  const handleCloseNotif = () => {
    setShowNotif(false);
    onClose(); // Tutup form setelah notif di-close
  };

  return (
    <>
      <div className="bg-white rounded-2xl p-8 shadow-lg max-w-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Detail Akun Operator</h2>
        <p className="text-sm text-gray-600 mb-8">Informasi akun untuk operator {operator?.name || "Ahmad Rahman"}</p>
        
        <div className="space-y-5">
          {/* Nama Lengkap */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Nama Lengkap
            </label>
            <div className="w-full px-4 py-2.5 bg-gray-200 rounded-xl text-gray-900 text-sm">
              {operator?.name || "Ahmad Rahman"}
            </div>
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <label className="text-sm font-semibold text-gray-900">
                Email
              </label>
            </div>
            <div className="w-full px-4 py-2.5 bg-gray-200 rounded-xl text-gray-900 text-sm">
              {operator?.email || "ahmad.mad@gmail.com"}
            </div>
          </div>

          {/* Username */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <label className="text-sm font-semibold text-gray-900">
                Username
              </label>
            </div>
            <div className="w-full px-4 py-2.5 bg-gray-200 rounded-xl text-gray-900 text-sm">
              {operator?.username || "Ahmad"}
            </div>
          </div>

          {/* Telepon */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <label className="text-sm font-semibold text-gray-900">
                Telepon
              </label>
            </div>
            <div className="w-full px-4 py-2.5 bg-gray-200 rounded-xl text-gray-900 text-sm">
              983244624
            </div>
          </div>

          {/* Alamat */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Alamat
            </label>
            <div className="w-full px-4 py-2.5 bg-gray-200 rounded-xl text-gray-900 text-sm">
              vddfdgfhfjrth
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-8 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors text-sm"
            >
              Tutup
            </button>
            <button
              type="button"
              onClick={handleEdit}
              className="px-8 py-2 bg-purple-500 text-white font-medium rounded-full hover:bg-purple-600 transition-colors text-sm"
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Notifikasi Update */}
      {showNotif && (
        <NotifUpdateOperator onClose={handleCloseNotif} />
      )}
    </>
  );
}