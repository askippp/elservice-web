export default function CardService() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Card Service Aktif */}
      <div className="relative group cursor-pointer">
        <div className="relative bg-white rounded-2xl p-6 border-2 border-gray-300 shadow-sm transition-all duration-300 group-hover:border-yellow-400 group-hover:shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-base font-semibold text-gray-900">Service Aktif</h3>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-yellow-200">
              <svg 
                className="w-6 h-6 text-yellow-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-900 mb-1">10</p>
            <p className="text-sm text-gray-600">Dalam Proses</p>
          </div>
        </div>
        {/* Shadow effect on right and bottom borders */}
        <div className="absolute right-0 top-2 bottom-2 w-1.5 bg-yellow-400 rounded-r-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-2 right-2 h-1.5 bg-yellow-400 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Card Service Selesai */}
      <div className="relative group cursor-pointer">
        <div className="relative bg-white rounded-2xl p-6 border-2 border-gray-300 shadow-sm transition-all duration-300 group-hover:border-green-400 group-hover:shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-base font-semibold text-gray-900">Service Selesai</h3>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-green-200">
              <svg 
                className="w-7 h-7 text-green-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-900 mb-1">50</p>
            <p className="text-sm text-gray-600">Bulan ini</p>
          </div>
        </div>
        {/* Shadow effect on right and bottom borders */}
        <div className="absolute right-0 top-2 bottom-2 w-1.5 bg-green-400 rounded-r-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-2 right-2 h-1.5 bg-green-400 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Card Total Service */}
      <div className="relative group cursor-pointer">
        <div className="relative bg-white rounded-2xl p-6 border-2 border-gray-300 shadow-sm transition-all duration-300 group-hover:border-purple-400 group-hover:shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-base font-semibold text-gray-900">Total Service</h3>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-purple-200">
              <svg 
                className="w-6 h-6 text-purple-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
                />
              </svg>
            </div>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-900 mb-1">65</p>
            <p className="text-sm text-gray-600">Keseluruhan</p>
          </div>
        </div>
        {/* Shadow effect on right and bottom borders */}
        <div className="absolute right-0 top-2 bottom-2 w-1.5 bg-purple-400 rounded-r-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-2 right-2 h-1.5 bg-purple-400 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
}