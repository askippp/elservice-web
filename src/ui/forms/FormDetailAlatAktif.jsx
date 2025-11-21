import { useState } from "react";

export default function FormDetailAlatAktif({ onClose }) {
  const [formData, setFormData] = useState({
    namaAlat: "",
    kategori: "",
    merek: "",
    tipeModel: "",
    status: "Aktif",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    console.log("Update data:", formData);
    onClose();
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="relative bg-purple-300 py-5 px-6 overflow-hidden">
        <div className="absolute left-0 top-0 w-20 h-full bg-purple-600" style={{ clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)' }}></div>
        <h2 className="text-2xl font-bold text-purple-900 text-center relative z-10">Detail Alat</h2>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Image */}
        <div className="mb-6">
          <div className="border-4 border-blue-400 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600" 
              alt="Alat"
              className="w-full h-32 object-cover"
            />
          </div>
        </div>

        {/* Form Fields - Grid 2 Kolom */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {/* Nama Alat */}
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">Nama Alat</label>
              <input
                type="text"
                name="namaAlat"
                value={formData.namaAlat}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white border-2 border-purple-400 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Kategori */}
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">Kategori</label>
              <input
                type="text"
                name="kategori"
                value={formData.kategori}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white border-2 border-purple-400 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Merek */}
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">Merek</label>
              <input
                type="text"
                name="merek"
                value={formData.merek}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white border-2 border-purple-400 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Tipe Model */}
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">Tipe Model</label>
              <input
                type="text"
                name="tipeModel"
                value={formData.tipeModel}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white border-2 border-purple-400 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Status - Full Width */}
          <div>
            <label className="block text-base font-semibold text-gray-900 mb-2">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-1/2 px-4 py-2.5 bg-white border-2 border-green-500 rounded-lg text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                backgroundSize: '1.5em 1.5em',
              }}
            >
              <option value="Aktif">Aktif</option>
              <option value="Non-aktif">Non-aktif</option>
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={handleUpdate}
            className="px-10 py-2.5 bg-purple-600 text-white text-base font-semibold rounded-lg hover:bg-purple-700 transition-colors"
          >
            Update
          </button>
          <button
            onClick={onClose}
            className="px-10 py-2.5 bg-red-500 text-white text-base font-semibold rounded-lg hover:bg-red-600 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}