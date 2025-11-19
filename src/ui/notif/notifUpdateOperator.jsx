export default function NotifUpdateOperator({ onClose, message = "Akun\nBerhasil di Perbarui!" }) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl w-full max-w-sm shadow-2xl overflow-hidden">
        {/* Content */}
        <div className="px-8 pt-10 pb-0 text-center">
          {/* Message */}
          <h3 className="text-2xl font-medium text-gray-900 mb-8 whitespace-pre-line leading-snug">
            {message}
          </h3>

          {/* Success Icon */}
          <div className="flex justify-center mb-10">
            <div className="relative">
              <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none">
                {/* Circle */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="42" 
                  stroke="#3B82F6" 
                  strokeWidth="7"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* Checkmark */}
                <path 
                  d="M32 50 L44 62 L68 38" 
                  stroke="#3B82F6" 
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-2 border-gray-300"></div>

          {/* Okay Button */}
          <button
            onClick={onClose}
            className="w-full py-4 text-lg font-normal text-gray-900 bg-white hover:bg-gray-50 transition-colors"
          >
            Okay!
          </button>
        </div>
      </div>
    </div>
  );
}