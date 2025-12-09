import { useState } from "react";
import NotifAddCabang from '../notif/notifAddCabang';

export default function FormTambahCabang({ onClose, onSubmit }) {
  const [showNotif, setShowNotif] = useState(false);
  const [formData, setFormData] = useState({
    namaCabang: "",
    kota: "",
    kontak: "",
    email: "",
    status: "Aktif",
    diUbahPada: "",
    alamatCabang: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: URL.createObjectURL(file),
      }));
    }
  };

  const handleSubmit = () => {
    // Submit data
    if (onSubmit) {
      onSubmit(formData);
    }
    // Show notification
    setShowNotif(true);
  };

  const handleNotifClose = () => {
    setShowNotif(false);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative bg-purple-300 rounded-t-3xl overflow-hidden">
            {/* Diagonal purple accent */}
            <div className="absolute top-0 left-0 w-32 h-full bg-purple-700" style={{ clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)' }}></div>
            
            <div className="relative p-4 flex items-center gap-3">
              <button
                onClick={onClose}
                className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center hover:bg-purple-700 transition-colors shadow-lg z-10"
              >
                <svg
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </button>
              <h2 className="text-2xl font-bold text-gray-900 absolute left-1/2 -translate-x-1/2">
                Tambah Cabang
              </h2>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 space-y-4">
            {/* Image Upload */}
            <div className="border-2 border-dashed border-purple-300 rounded-2xl p-4 flex items-center justify-center">
              <label className="cursor-pointer flex flex-col items-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="imageUpload"
                />
                {formData.image ? (
                  <img src={formData.image} alt="Preview" className="w-24 h-24 object-cover rounded-lg" />
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 border-4 border-dashed border-blue-400 rounded-2xl flex items-center justify-center mb-1">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <span className="text-gray-500 text-xs">Upload Image</span>
                  </div>
                )}
              </label>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-4">
              {/* Nama Cabang */}
              <div>
                <label className="block text-gray-800 font-semibold mb-1 text-sm">Nama Cabang</label>
                <input
                  type="text"
                  name="namaCabang"
                  value={formData.namaCabang}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 text-sm"
                  placeholder="Masukkan nama cabang"
                />
              </div>

              {/* Kota */}
              <div>
                <label className="block text-gray-800 font-semibold mb-1 text-sm">Kota</label>
                <input
                  type="text"
                  name="kota"
                  value={formData.kota}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 text-sm"
                  placeholder="Masukkan kota"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Kontak */}
              <div>
                <label className="block text-gray-800 font-semibold mb-1 text-sm">Kontak</label>
                <input
                  type="text"
                  name="kontak"
                  value={formData.kontak}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 text-sm"
                  placeholder="Masukkan kontak"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-800 font-semibold mb-1 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 text-sm"
                  placeholder="Masukkan email"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Status */}
              <div>
                <label className="block text-gray-800 font-semibold mb-1 text-sm">Status</label>
                <div className="relative">
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-2 border-green-400 rounded-xl focus:outline-none focus:border-green-500 appearance-none bg-white text-sm"
                  >
                    <option value="Aktif">Aktif</option>
                    <option value="Non-aktif">Non-aktif</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Di ubah pada */}
              <div>
                <label className="block text-gray-800 font-semibold mb-1 text-sm">di ubah pada</label>
                <input
                  type="date"
                  name="diUbahPada"
                  value={formData.diUbahPada}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 text-sm"
                />
              </div>
            </div>

            {/* Alamat Cabang */}
            <div>
              <label className="block text-gray-800 font-semibold mb-1 text-sm">Alamat Cabang</label>
              <textarea
                name="alamatCabang"
                value={formData.alamatCabang}
                onChange={handleChange}
                rows="2"
                className="w-full px-3 py-2 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500 resize-none text-sm"
                placeholder="Masukkan alamat cabang"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-purple-500 text-white font-semibold rounded-2xl hover:bg-purple-600 transition-colors shadow-lg text-sm"
              >
                Tambah
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-red-600 text-white font-semibold rounded-2xl hover:bg-red-700 transition-colors shadow-lg text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Component */}
      {showNotif && (
        <NotifAddCabang 
          onClose={handleNotifClose}
          message="Cabang Baru Berhasil Ditambahkan!"
        />
      )}
    </>
  );
}