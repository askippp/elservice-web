export default function CardLaporan() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Card Total Pemasukan */}
      <div className="bg-gradient-to-b from-green-700 to-green-500 rounded-2xl p-5 text-white shadow-lg">
        <h3 className="text-base font-bold mb-4">Total Pemasukan</h3>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold mb-1">Rp 125.500.000</p>
            <p className="text-sm">Bulan ini</p>
          </div>
          <svg 
            className="w-8 h-8 mb-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
            />
          </svg>
        </div>
      </div>

      {/* Card Total Pengeluaran */}
      <div className="bg-gradient-to-b from-red-800 to-red-600 rounded-2xl p-5 text-white shadow-lg">
        <h3 className="text-base font-bold mb-4">Total Pengeluaran</h3>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold mb-1">Rp 67.800.000</p>
            <p className="text-sm">Bulan ini</p>
          </div>
          <svg 
            className="w-8 h-8 mb-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" 
            />
          </svg>
        </div>
      </div>

      {/* Card Selisih */}
      <div className="bg-gradient-to-b from-blue-800 to-blue-600 rounded-2xl p-5 text-white shadow-lg">
        <h3 className="text-base font-bold mb-4">Selisih</h3>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold mb-1">Rp 57.700.000</p>
            <p className="text-sm">Keuntungan</p>
          </div>
          <svg 
            className="w-8 h-8 mb-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2.5} 
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
}