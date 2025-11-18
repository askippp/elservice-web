export default function NotifDeleteCabang({ isOpen, onClose, onConfirm, branchName }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        {/* Header dengan Icon */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">!</span>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Hapus Cabang?
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="mb-6 ml-16">
          <p className="text-gray-700 mb-1">
            Apakah Anda yakin ingin menghapus Cabang <span className="font-semibold">{branchName}</span>?
          </p>
          <p className="text-red-500 font-medium">
            Cabang ini memiliki akun yang akan ikut terhapus.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
          >
            Batal
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2.5 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors font-medium"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
}