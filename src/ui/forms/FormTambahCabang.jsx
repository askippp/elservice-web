import { useState } from "react";
import NotifAddCabang from "../notif/notifAddCabang";

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
        <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-400 to-purple-300 px-6 py-4 relative">
            <button
              onClick={onClose}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-lg font-bold text-center text-gray-900">Tambah Cabang</h2>
          </div>

          {/* Form Content */}
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            {/* Image Upload */}
            <div className="mb-4">
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center bg-gray-50">
                {formData.image ? (
                  <img src={formData.image} alt="Preview" className="w-full h-32 object-cover rounded-lg mb-2" />
                ) : (
                  <div className="text-center">
                    <svg className="w-12 h-12 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="imageUpload"
                />
                <label htmlFor="imageUpload" className="cursor-pointer text-sm text-purple-600 hover:text-purple-700">
                  {formData.image ? "Change Image" : "Upload Image"}
                </label>
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Nama Cabang */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Nama Cabang</label>
                <input
                  type="text"
                  name="namaCabang"
                  value={formData.namaCabang}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-2 border-purple-400 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Kota */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Kota</label>
                <input
                  type="text"
                  name="kota"
                  value={formData.kota}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Kontak */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Kontak</label>
                <input
                  type="text"
                  name="kontak"
                  value={formData.kontak}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Status */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Non-aktif">Non-aktif</option>
                </select>
              </div>

              {/* Di ubah pada */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">di ubah pada</label>
                <input
                  type="date"
                  name="diUbahPada"
                  value={formData.diUbahPada}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            {/* Alamat Cabang */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-900 mb-1">Alamat Cabang</label>
              <textarea
                name="alamatCabang"
                value={formData.alamatCabang}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-purple-600 text-white text-sm font-semibold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Tambah
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-red-500 text-white text-sm font-semibold rounded-lg hover:bg-red-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notification */}
      {showNotif && (
        <NotifAddCabang 
          onClose={handleNotifClose}
          message="Akun Baru&#10;Berhasil di Buat!"
        />
      )}
    </>
  );
}