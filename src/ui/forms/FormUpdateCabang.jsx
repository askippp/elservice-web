import { useState } from "react";
import NotifUpdateCabang from "../notif/notifUpdateCabang";

export default function FormUpdateCabang({ onClose, onUpdate, onDelete, branchData }) {
  const [showNotif, setShowNotif] = useState(false);
  const [formData, setFormData] = useState({
    namaCabang: branchData?.namaCabang || "",
    kota: branchData?.kota || "",
    kontak: branchData?.kontak || "",
    email: branchData?.email || "",
    status: branchData?.isActive ? "Aktif" : "Non-aktif",
    dibuatPada: branchData?.dibuatPada || "",
    diUbahPada: branchData?.diUbahPada || "",
    alamatCabang: branchData?.alamatCabang || "",
    image: branchData?.imageSrc || null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    onUpdate(formData);
    setShowNotif(true);
  };

  const handleDelete = () => {
    onDelete(branchData?.id);
    onClose();
  };

  // Tentukan warna dropdown berdasarkan status
  const getStatusColor = () => {
    return formData.status === "Aktif" 
      ? "border-green-500 bg-green-50 text-green-700" 
      : "border-red-500 bg-red-50 text-red-700";
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
                Update Cabang
              </h2>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 max-h-[70vh] overflow-y-auto">
            {/* Image Display */}
            <div className="mb-5">
              <div className="border-2 border-gray-300 rounded-2xl overflow-hidden">
                {formData.image ? (
                  <img src={formData.image} alt="Branch" className="w-full h-32 object-cover" />
                ) : (
                  <div className="w-full h-32 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400">No Image</span>
                  </div>
                )}
              </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Nama Cabang */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Nama Cabang</label>
                <input
                  type="text"
                  name="namaCabang"
                  value={formData.namaCabang}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border-2 border-purple-400 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Kota */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Kota</label>
                <input
                  type="text"
                  name="kota"
                  value={formData.kota}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border-2 border-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Kontak */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Kontak</label>
                <input
                  type="text"
                  name="kontak"
                  value={formData.kontak}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border-2 border-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 border-2 border-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {/* Status */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">Status</label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className={`w-full px-3 py-2.5 border-2 rounded-lg text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-opacity-50 ${getStatusColor()}`}
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Non-aktif">Non-aktif</option>
                </select>
              </div>

              {/* di buat pada */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">di buat pada</label>
                <input
                  type="text"
                  name="dibuatPada"
                  value={formData.dibuatPada}
                  onChange={handleChange}
                  placeholder="dd/mm/yy"
                  className="w-full px-3 py-2.5 border-2 border-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
                />
              </div>
            </div>

            {/* di ubah pada */}
            <div className="mb-4">
              <label className="block text-sm font-bold text-gray-900 mb-2">di ubah pada</label>
              <input
                type="text"
                name="diUbahPada"
                value={formData.diUbahPada}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border-2 border-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
              />
            </div>

            {/* Alamat Cabang */}
            <div className="mb-5">
              <label className="block text-sm font-bold text-gray-900 mb-2">Alamat Cabang</label>
              <textarea
                name="alamatCabang"
                value={formData.alamatCabang}
                onChange={handleChange}
                rows="2"
                className="w-full px-3 py-2.5 border-2 border-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-600 resize-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={handleUpdate}
                className="px-8 py-2.5 bg-purple-600 text-white text-sm font-bold rounded-lg hover:bg-purple-700 transition-colors"
              >
                Update
              </button>
              <button
                onClick={handleDelete}
                className="px-8 py-2.5 bg-red-500 text-white text-sm font-bold rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Notifikasi Update */}
      {showNotif && (
        <NotifUpdateCabang 
          onClose={() => {
            setShowNotif(false);
            onClose();
          }} 
        />
      )}
    </>
  );
}