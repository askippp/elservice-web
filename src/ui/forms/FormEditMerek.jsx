import { useState } from 'react';
import NotifUpdateMerek from '../notif/NotifUpdateMerek';

export default function FormEditMerek({ merek, onClose, onUpdate }) {
  const [namaMerek, setNamaMerek] = useState(merek?.name || '');
  const [showNotif, setShowNotif] = useState(false);

  const handleUpdate = () => {
    if (onUpdate) {
      onUpdate({ ...merek, name: namaMerek });
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Update Merek</h2>
          <p className="text-gray-600">Perbarui Merek ke sistem</p>
        </div>

        {/* Form */}
        <div className="mb-6">
          <label className="block text-gray-900 font-semibold mb-3">
            Nama Merek
          </label>
          <input
            type="text"
            value={namaMerek}
            onChange={(e) => setNamaMerek(e.target.value)}
            className="w-full bg-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Samsung"
          />
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
            onClick={handleUpdate}
            className="flex-1 bg-purple-500 text-white rounded-xl py-3 font-semibold hover:bg-purple-600 transition-colors"
          >
            Update
          </button>
        </div>
      </div>

      {/* Notifikasi Update Merek */}
      {showNotif && (
        <NotifUpdateMerek onClose={handleCloseNotif} />
      )}
    </>
  );
}