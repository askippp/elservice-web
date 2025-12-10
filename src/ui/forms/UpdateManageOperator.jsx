import { useState } from 'react';
import NotifUpdateLaporanOperator from '../notif/notifUpdateLaporanOperator';

export default function UpdateManageOperator({ operator, onClose, onUpdate }) {
  const [formData, setFormData] = useState({
    name: operator?.name || '',
    cabang: operator?.cabang || '',
    phone: operator?.phone || '',
    email: operator?.email || '',
    shift: operator?.shift || '',
    status: operator?.status || ''
  });
  const [showNotif, setShowNotif] = useState(false);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSimpan = () => {
    if (onUpdate) {
      onUpdate({ ...operator, ...formData });
    }
    setShowNotif(true);
  };

  const handleCloseNotif = () => {
    setShowNotif(false);
    onClose();
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Edit Operator</h2>
        </div>

        {/* Form */}
        <div className="space-y-4 mb-6">
          {/* Nama Operator */}
          <div>
            <label className="block text-gray-900 font-semibold mb-2">
              Nama Operator
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full bg-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Budi Santoso"
            />
          </div>

          {/* Cabang */}
          <div>
            <label className="block text-gray-900 font-semibold mb-2">
              Cabang
            </label>
            <div className="relative">
              <select
                value={formData.cabang}
                onChange={(e) => handleChange('cabang', e.target.value)}
                className="w-full bg-gray-200 rounded-xl px-4 py-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
              >
                <option value="">Pilih Cabang</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Bandung">Bandung</option>
                <option value="Surabaya">Surabaya</option>
              </select>
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-900 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* No. Telepon & Email */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-900 font-semibold mb-2">
                No. Telepon
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full bg-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="086735638902"
              />
            </div>
            <div>
              <label className="block text-gray-900 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full bg-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="BudiSantoso1@gmail.com"
              />
            </div>
          </div>

          {/* Shift & Status */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-900 font-semibold mb-2">
                Shift
              </label>
              <div className="relative">
                <select
                  value={formData.shift}
                  onChange={(e) => handleChange('shift', e.target.value)}
                  className="w-full bg-gray-200 rounded-xl px-4 py-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
                >
                  <option value="">Pilih Shift</option>
                  <option value="Pagi">Pagi</option>
                  <option value="Siang">Siang</option>
                  <option value="Malam">Malam</option>
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-900 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div>
              <label className="block text-gray-900 font-semibold mb-2">
                Status
              </label>
              <div className="relative">
                <select
                  value={formData.status}
                  onChange={(e) => handleChange('status', e.target.value)}
                  className="w-full bg-gray-200 rounded-xl px-4 py-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none"
                >
                  <option value="">Pilih Status</option>
                  <option value="Aktif">Aktif</option>
                  <option value="Tidak Aktif">Tidak Aktif</option>
                </select>
                <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-900 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-white border-2 border-gray-300 text-gray-700 rounded-xl py-3 font-semibold hover:bg-gray-50 transition-colors"
          >
            Batal
          </button>
          <button
            onClick={handleSimpan}
            className="flex-1 bg-purple-500 text-white rounded-xl py-3 font-semibold hover:bg-purple-600 transition-colors"
          >
            Simpan
          </button>
        </div>
      </div>

      {/* Notifikasi Update Operator */}
      {showNotif && (
        <NotifUpdateLaporanOperator onClose={handleCloseNotif} />
      )}
    </>
  );
}