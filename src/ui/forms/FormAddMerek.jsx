import { useState } from 'react';
import NotifAddMerek from '../notif/notifAddMerek';

export default function FormAddMerek({ onClose, onAdd }) {
  const [namaMerek, setNamaMerek] = useState('');
  const [tahunMerek, setTahunMerek] = useState('');
  const [showNotif, setShowNotif] = useState(false);

  const handleSimpan = () => {
    if (onAdd) {
      onAdd({ name: namaMerek, tahun: tahunMerek });
    }
    setShowNotif(true);
  };

  const handleCloseNotif = () => {
    setShowNotif(false);
    onClose();
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Tambah Merek</h2>
          <p className="text-gray-600">Tambahkan Merek ke sistem</p>
        </div>

        {/* Form */}
        <div className="space-y-4 mb-6">
          {/* Nama Merek */}
          <div>
            <label className="block text-gray-900 font-semibold mb-3">
              Nama Merek
            </label>
            <input
              type="text"
              value={namaMerek}
              onChange={(e) => setNamaMerek(e.target.value)}
              className="w-full bg-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Masukkan nama merek"
            />
          </div>

          {/* Tahun Merek */}
          <div>
            <label className="block text-gray-900 font-semibold mb-3">
              Tahun Merek
            </label>
            <input
              type="text"
              value={tahunMerek}
              onChange={(e) => setTahunMerek(e.target.value)}
              className="w-full bg-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Masukkan tahun merek"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-white border-2 border-gray-300 text-gray-700 rounded-xl py-3 font-semibold hover:bg-gray-50 transition-colors"
          >
            Tutup
          </button>
          <button
            onClick={handleSimpan}
            className="flex-1 bg-purple-500 text-white rounded-xl py-3 font-semibold hover:bg-purple-600 transition-colors"
          >
            Simpan
          </button>
        </div>
      </div>

      {/* Notifikasi Add Merek */}
      {showNotif && (
        <NotifAddMerek onClose={handleCloseNotif} />
      )}
    </>
  );
}