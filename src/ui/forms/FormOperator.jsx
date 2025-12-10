import { useState } from 'react';

// Komponen Notifikasi (gabungin di file yang sama)
function NotifUpdateOperator({ onClose, message = "Akun\nBerhasil di Perbarui!" }) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-[60] p-4">
      <div className="bg-white rounded-3xl w-full max-w-sm shadow-2xl overflow-hidden">
        <div className="px-8 pt-12 pb-0 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-10 whitespace-pre-line leading-tight">
            {message}
          </h3>
          <div className="flex justify-center mb-12">
            <svg className="w-32 h-32" viewBox="0 0 128 128" fill="none">
              <circle cx="64" cy="64" r="56" stroke="#3B82F6" strokeWidth="8" fill="white" strokeLinecap="round"/>
              <path d="M40 64 L56 80 L88 48" stroke="#3B82F6" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
          <div className="border-t border-gray-300"></div>
          <button onClick={onClose} className="w-full py-4 text-lg font-normal text-gray-900 bg-white hover:bg-gray-50 transition-colors">
            Okay!
          </button>
        </div>
      </div>
    </div>
  );
}

// Komponen Form Operator
export default function FormOperator({ operator, onClose, onSave }) {
  const [formData, setFormData] = useState({
    nama: operator?.nama || '',
    cabang: operator?.cabang || '',
    noTelepon: operator?.noTelepon || '',
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

  const handleSubmit = () => {
    // Panggil callback untuk menyimpan (tanpa validasi ketat)
    if (onSave) {
      onSave(formData);
    }

    // Tampilkan notifikasi sukses
    setShowNotif(true);
  };

  const handleCloseNotif = () => {
    setShowNotif(false);
    // Tutup form setelah notifikasi ditutup
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md">
          {/* Header */}
          <div className="bg-gray-900 text-white text-center py-6 rounded-t-3xl">
            <h2 className="text-2xl font-bold">Edit Operator</h2>
          </div>

          {/* Form Content */}
          <div className="p-8 space-y-6">
            {/* Nama Operator */}
            <div>
              <label className="block text-gray-900 font-semibold mb-2">
                Nama Operator
              </label>
              <input
                type="text"
                value={formData.nama}
                onChange={(e) => handleChange('nama', e.target.value)}
                className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Nama Operator"
              />
            </div>

            {/* Cabang */}
            <div>
              <label className="block text-gray-900 font-semibold mb-2">
                Cabang
              </label>
              <select
                value={formData.cabang}
                onChange={(e) => handleChange('cabang', e.target.value)}
                className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 appearance-none cursor-pointer"
              >
                <option value="">Pilih Cabang</option>
                <option value="Jakarta">Jakarta</option>
                <option value="Bandung">Bandung</option>
                <option value="Surabaya">Surabaya</option>
                <option value="Semarang">Semarang</option>
                <option value="Yogyakarta">Yogyakarta</option>
              </select>
            </div>

            {/* No. Telepon & Email */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  No. Telepon
                </label>
                <input
                  type="tel"
                  value={formData.noTelepon}
                  onChange={(e) => handleChange('noTelepon', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="08xxxxxxxxxx"
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
                  className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            {/* Shift & Status */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Shift
                </label>
                <select
                  value={formData.shift}
                  onChange={(e) => handleChange('shift', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 appearance-none cursor-pointer"
                >
                  <option value="">Pilih Shift</option>
                  <option value="Pagi">Pagi</option>
                  <option value="Siang">Siang</option>
                  <option value="Malam">Malam</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-900 font-semibold mb-2">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => handleChange('status', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 appearance-none cursor-pointer"
                >
                  <option value="">Pilih Status</option>
                  <option value="Aktif">Aktif</option>
                  <option value="Tidak Aktif">Tidak Aktif</option>
                  <option value="Cuti">Cuti</option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={onClose}
                className="flex-1 px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 px-6 py-3 bg-purple-500 text-white rounded-full font-semibold hover:bg-purple-600 transition-colors"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notifikasi */}
      {showNotif && (
        <NotifUpdateOperator 
          onClose={handleCloseNotif}
          message="Akun Operator\nBerhasil di Perbarui!"
        />
      )}
    </>
  );
}