import { useState } from "react";
import NotifAddTeknisi from "../notif/notifAddTeknisi";

export default function AddTeknisiForm({ onClose, onSubmit }) {
  const [showNotif, setShowNotif] = useState(false);
  const [formData, setFormData] = useState({
    namaLengkap: "",
    email: "",
    telepon: "",
    cabang: "",
    alamat: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
    setShowNotif(true);
  };

  const handleNotifClose = () => {
    setShowNotif(false);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-900">Tambah Teknisi Baru</h2>
            <p className="text-sm text-gray-600 mt-1">Tambahkan Teknisi baru ke sistem</p>
          </div>

          {/* Form Content */}
          <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
            {/* Nama Lengkap */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Nama Lengkap</label>
              <input
                type="text"
                name="namaLengkap"
                value={formData.namaLengkap}
                onChange={handleChange}
                placeholder="Budi Santoso"
                className="w-full px-4 py-3 bg-gray-100 border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <label className="text-sm font-medium text-gray-900">Email</label>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="BudiSantoso@gmail.com"
                className="w-full px-4 py-3 bg-gray-100 border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Telepon */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <label className="text-sm font-medium text-gray-900">Telepon</label>
              </div>
              <input
                type="tel"
                name="telepon"
                value={formData.telepon}
                onChange={handleChange}
                placeholder="123456789"
                className="w-full px-4 py-3 bg-gray-100 border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Cabang */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Cabang</label>
              <select
                name="cabang"
                value={formData.cabang}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.75rem center',
                  backgroundSize: '1.5em 1.5em',
                }}
              >
                <option value="">Pilih cabang</option>
                <option value="Jakarta">Cabang Jakarta</option>
                <option value="Bandung">Cabang Bandung</option>
                <option value="Surabaya">Cabang Surabaya</option>
                <option value="Medan">Cabang Medan</option>
              </select>
            </div>

            {/* Alamat */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Alamat</label>
              <textarea
                name="alamat"
                value={formData.alamat}
                onChange={handleChange}
                placeholder="dhsdgfhshfd"
                rows="3"
                className="w-full px-4 py-3 bg-gray-100 border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
            </div>

            {/* Info Notice */}
            <div className="flex items-start gap-3">
              <svg className="w-8 h-8 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <p className="text-sm text-indigo-600 italic leading-relaxed">
                Teknisi akan ditambahkan tanpa akun. Anda bisa membuat akun nanti dengan klik icon tambah akun
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="p-6 border-t flex justify-center gap-4">
            <button
              onClick={onClose}
              className="px-8 py-2.5 bg-white border border-gray-300 text-gray-700 text-sm font-semibold rounded-full hover:bg-gray-50 transition-colors"
            >
              Tutup
            </button>
            <button
              onClick={handleSubmit}
              className="px-8 py-2.5 bg-purple-600 text-white text-sm font-semibold rounded-full hover:bg-purple-700 transition-colors"
            >
              Tambah
            </button>
          </div>
        </div>
      </div>

      {/* Notification */}
      {showNotif && (
        <NotifAddTeknisi 
          onClose={handleNotifClose}
          message="Teknisi Baru&#10;Berhasil di Buat!"
        />
      )}
    </>
  );
}