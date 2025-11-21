import { useState } from 'react';
import NotifAddAlat from '../notif/notifAddAlat';

export default function FormAddAlat({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    namaAlat: '',
    kategori: '',
    merek: '',
    tipeModel: '',
    status: '',
    gambar: null
  });
  const [preview, setPreview] = useState(null);
  const [showNotif, setShowNotif] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, gambar: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setShowNotif(true);
  };

  const handleCloseNotif = () => {
    setShowNotif(false);
    handleReset();
  };

  const handleReset = () => {
    setFormData({
      namaAlat: '',
      kategori: '',
      merek: '',
      tipeModel: '',
      status: '',
      gambar: null
    });
    setPreview(null);
    onClose();
  };

  if (!isOpen && !showNotif) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {/* Notifikasi */}
      {showNotif && <NotifAddAlat onClose={handleCloseNotif} />}

      {/* Form - hide when notif showing */}
      {!showNotif && (
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl overflow-hidden">
        {/* Header */}
        <div className="relative bg-purple-300 py-5 px-6 overflow-hidden">
          <div className="absolute left-0 top-0 w-20 h-full bg-purple-600" style={{ clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)' }}></div>
          <h2 className="text-2xl font-bold text-purple-900 text-center relative z-10">Tambah Alat</h2>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6">
          {/* Image Upload */}
          <div className="mb-6">
            <label className="block border-2 border-dashed border-gray-300 rounded-lg p-8 cursor-pointer hover:border-purple-400 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
              {preview ? (
                <img src={preview} alt="Preview" className="max-h-32 mx-auto object-contain" />
              ) : (
                <div className="flex flex-col items-center text-gray-400">
                  <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 13a3 3 0 100-6 3 3 0 000 6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v2m1-1h-2" />
                  </svg>
                </div>
              )}
            </label>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Nama Alat</label>
              <input
                type="text"
                name="namaAlat"
                value={formData.namaAlat}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Kategori</label>
              <input
                type="text"
                name="kategori"
                value={formData.kategori}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Merek</label>
              <input
                type="text"
                name="merek"
                value={formData.merek}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Tipe Model</label>
              <input
                type="text"
                name="tipeModel"
                value={formData.tipeModel}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full md:w-1/2 px-3 py-2 border border-green-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
            >
              <option value="">Dropdown Option</option>
              <option value="tersedia">Tersedia</option>
              <option value="dipinjam">Dipinjam</option>
              <option value="rusak">Rusak</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="px-8 py-2 bg-purple-100 text-purple-700 font-medium rounded-lg hover:bg-purple-200 transition-colors border border-purple-300"
            >
              Tambah
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-8 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      )}
    </div>
  );
}