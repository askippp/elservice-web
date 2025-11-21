export default function NotifDeleteAlat({ alat, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-sm shadow-2xl overflow-hidden">
        {/* Content */}
        <div className="px-8 pt-8 pb-0 text-center">
          {/* Message */}
          <h3 className="text-2xl font-medium text-gray-900">Anda Yakin</h3>
          <p className="text-2xl font-medium text-gray-900 mb-4">Ingin Menghapus Data ini?</p>

          {/* Delete Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <svg className="w-28 h-28" viewBox="0 0 100 100" fill="none">
                {/* Tutup tempat sampah */}
                <rect x="25" y="30" width="50" height="8" fill="#EF4444" />
                {/* Handle tutup */}
                <rect x="40" y="22" width="20" height="10" fill="#EF4444" />
                {/* Badan tempat sampah */}
                <path d="M28 40H72L68 85C68 88 65 90 62 90H38C35 90 32 88 32 85L28 40Z" fill="#EF4444" />
                {/* Garis dalam tempat sampah */}
                <rect x="48" y="70" width="12" height="8" fill="white" />
              </svg>
              {/* Warning Circle */}
              <div className="absolute top-0 left-6 w-7 h-7 bg-white rounded-full border-2 border-gray-500 flex items-center justify-center">
                <span className="text-gray-500 font-bold text-sm">!</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex">
            <button
              onClick={onConfirm}
              className="flex-1 py-5 text-xl font-normal text-gray-900 bg-white hover:bg-gray-50 transition-colors border-r border-gray-300"
            >
              YA
            </button>
            <button
              onClick={onCancel}
              className="flex-1 py-5 text-xl font-normal text-gray-900 bg-white hover:bg-gray-50 transition-colors"
            >
              Batalkan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}