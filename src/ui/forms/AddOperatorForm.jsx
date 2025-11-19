import { useState } from 'react';
import NotifAddOperator from '../notif/notifAddOperator';

export default function AddOperatorForm({ onClose }) {
  const [showNotif, setShowNotif] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form tambah operator submitted");
    // Tampilkan notifikasi dulu, baru tutup form
    setShowNotif(true);
  };

  const handleCloseNotif = () => {
    setShowNotif(false);
    onClose(); // Baru tutup form setelah notif di-close
  };

  return (
    <>
      <div className="bg-white rounded-2xl p-8 shadow-lg max-w-xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Tambah Operator Baru</h2>
        <p className="text-sm text-gray-600 mb-8">Tambahkan operator baru ke sistem</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Nama Lengkap */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              className="w-full px-4 py-2.5 bg-gray-200 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 text-sm"
              placeholder="kilo"
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
              placeholder="kilo@gmail.com"
            />
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
            <input
              type="tel"
              className="w-full px-4 py-2.5 bg-gray-200 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 text-sm"
              placeholder="23432423"
            />
          </div>

          {/* Alamat */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Alamat
            </label>
            <input
              type="text"
              className="w-full px-4 py-2.5 bg-gray-200 border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 text-sm"
              placeholder="hdvdufgudtgudyfdyf"
            />
          </div>

          {/* Info Text dengan icon lonceng */}
          <div className="flex items-start gap-3 mt-4">
            <svg className="w-6 h-6 text-gray-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <p className="text-sm text-blue-600 italic leading-relaxed">
              Operator akan ditambahkan tanpa Akun, Anda bisa membuat akun nanti dengan klik tombol "Buat Akun".
            </p>
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
              Tambah
            </button>
          </div>
        </form>
      </div>

      {/* Notifikasi Success - di luar div form */}
      {showNotif && (
        <NotifAddOperator onClose={handleCloseNotif} />
      )}
    </>
  );
}