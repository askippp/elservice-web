import { useState } from 'react';
import NotifCreateAkun from '../notif/notifCreateAkun';

export default function BuatAkunOperator({ operator, onClose }) {
  const [showNotif, setShowNotif] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form buat akun submitted");
    // Tampilkan notifikasi
    setShowNotif(true);
  };

  const handleCloseNotif = () => {
    setShowNotif(false);
    onClose(); // Tutup form setelah notif di-close
  };

  return (
    <>
      <div className="bg-white rounded-2xl p-8 shadow-lg max-w-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Buat Akun</h2>
        <p className="text-sm text-gray-600 mb-8">Informasi akun untuk operator {operator?.name}</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nama Lengkap */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              defaultValue={operator?.name}
              className="w-full px-4 py-2.5 bg-gray-200 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 text-sm"
              placeholder="Masukkan nama lengkap"
            />
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
            <input
              type="email"
              className="w-full px-4 py-2.5 bg-gray-200 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 text-sm"
              placeholder="rai@gmail.com"
            />
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
            <input
              type="text"
              defaultValue={operator?.name}
              className="w-full px-4 py-2.5 bg-gray-200 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 text-sm"
              placeholder="Masukkan username"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <label className="text-sm font-semibold text-gray-900">
                Password
              </label>
            </div>
            <input
              type="password"
              className="w-full px-4 py-2.5 bg-gray-200 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 text-sm"
              placeholder="shgffdhff"
            />
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
              type="submit"
              className="px-8 py-2 bg-purple-500 text-white font-medium rounded-full hover:bg-purple-600 transition-colors text-sm"
            >
              Buat Akun
            </button>
          </div>
        </form>
      </div>

      {/* Notifikasi Create Akun */}
      {showNotif && (
        <NotifCreateAkun onClose={handleCloseNotif} />
      )}
    </>
  );
}