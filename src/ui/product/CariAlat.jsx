export default function CariAlat({ onSearch }) {
  const handleSearch = (e) => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="relative w-64">
      <input
        type="text"
        placeholder="Cari Alat"
        onChange={handleSearch}
        className="pl-10 pr-4 py-2 bg-gray-200 border-0 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
      />
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
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
  );
}