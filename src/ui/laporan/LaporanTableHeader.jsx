export default function LaporanTableHeader() {
  return (
    <div className="flex items-center gap-3">
      {/* Search Bar */}
      <div className="relative flex-1 max-w-md">
        <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
          <svg 
            className="w-5 h-5 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search Task"
          className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-300 rounded-xl focus:outline-none focus:border-gray-900 transition-colors text-gray-900 placeholder-gray-400"
        />
      </div>
    </div>
  );
}