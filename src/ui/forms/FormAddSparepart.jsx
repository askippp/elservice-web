import { useState } from "react";

export default function FormAddSparepart({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    namaAlat: "",
    kategori: "",
    merek: "",
    satuan: "",
    hargaBeli: "",
    hargaJual: "",
    stok: "",
    status: "",
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    console.log("Image:", imagePreview);
    // Add your submit logic here
    onClose();
  };

  const handleCancel = () => {
    setFormData({
      namaAlat: "",
      kategori: "",
      merek: "",
      satuan: "",
      hargaBeli: "",
      hargaJual: "",
      stok: "",
      status: "",
    });
    setImagePreview(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto overflow-hidden">
        {/* Header with diagonal cut */}
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
              Tambah Sparepart
            </h2>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-6">
          {/* Image Upload */}
          <div className="border-2 border-dashed border-purple-300 rounded-2xl p-8 flex items-center justify-center">
            <label className="cursor-pointer flex flex-col items-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 border-4 border-dashed border-blue-400 rounded-2xl flex items-center justify-center mb-2">
                    <svg
                      className="w-8 h-8 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-500 text-sm">Upload Image</span>
                </div>
              )}
            </label>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Nama Alat */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Nama Alat
              </label>
              <input
                type="text"
                name="namaAlat"
                value={formData.namaAlat}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Kategori */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Kategori
              </label>
              <input
                type="text"
                name="kategori"
                value={formData.kategori}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Merek */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Merek
              </label>
              <input
                type="text"
                name="merek"
                value={formData.merek}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Satuan */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Satuan
              </label>
              <input
                type="text"
                name="satuan"
                value={formData.satuan}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Harga Beli */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Harga Beli
              </label>
              <input
                type="text"
                name="hargaBeli"
                value={formData.hargaBeli}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Harga Jual */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Harga Jual
              </label>
              <input
                type="text"
                name="hargaJual"
                value={formData.hargaJual}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Stok */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Stok
              </label>
              <input
                type="text"
                name="stok"
                value={formData.stok}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Status
              </label>
              <div className="relative">
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-green-400 rounded-xl focus:outline-none focus:border-green-500 appearance-none bg-white"
                >
                  <option value="">Dropdown Option</option>
                  <option value="tersedia">Tersedia</option>
                  <option value="kosong">Kosong</option>
                  <option value="pre-order">Pre-Order</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 pt-4">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-purple-500 text-white font-semibold rounded-2xl hover:bg-purple-600 transition-colors"
            >
              Tambah
            </button>
            <button
              onClick={handleCancel}
              className="px-8 py-3 bg-red-600 text-white font-semibold rounded-2xl hover:bg-red-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}