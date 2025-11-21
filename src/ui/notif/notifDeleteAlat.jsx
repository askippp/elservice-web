export default function NotifDeleteAlat({ alat, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-sm shadow-2xl overflow-hidden">
        {/* Content */}
        <div className="px-8 pt-8 pb-0 text-center">
          {/* Message */}
          <h3 className="text-xl font-medium text-gray-900 mb-1">Anda Yakin</h3>
          <p className="text-xl font-medium text-gray-900 mb-6">Ingin Menghapus Data ini?</p>

          {/* Delete Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
                {/* Tutup tempat sampah */}
                <path d="M30 35H70V30C70 28 68 26 65 26H35C32 26 30 28 30 30V35Z" fill="#EF4444" />
                {/* Handle tutup */}
                <path d="M42 26H58V22C58 20 56 18 54 18H46C44 18 42 20 42 22V26Z" fill="#EF4444" />
                {/* Badan tempat sampah */}
                <path d="M28 38H72V82C72 86 68 90 64 90H36C32 90 28 86 28 82V38Z" fill="#EF4444" />
              </svg>
              {/* Warning Circle */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-2 border-gray-400 flex items-center justify-center">
                <span className="text-gray-500 font-bold text-sm">!</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-gray-300"></div>

          {/* Buttons */}
          <div className="flex">
            <button
              onClick={onConfirm}
              className="flex-1 py-4 text-lg font-normal text-gray-900 bg-white hover:bg-gray-50 transition-colors border-r border-gray-300"
            >
              YA
            </button>
            <button
              onClick={onCancel}
              className="flex-1 py-4 text-lg font-normal text-gray-900 bg-white hover:bg-gray-50 transition-colors"
            >
              Batalkan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}