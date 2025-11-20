import AddBranch from "../buttons/AddBranch";

export default function BranchTableHeader({ onFilterChange, currentFilter = "manage" }) {
  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex items-center justify-between gap-4">
        {/* Left Side - Show Entries & Search */}
        <div className="flex items-center gap-3">
          {/* Show Entries Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-700">Show</span>
            <select className="px-2.5 py-1.5 bg-white border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-purple-500">
              <option value="9">9</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <span className="text-xs text-gray-700">Entries</span>
          </div>

          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-3 py-1.5 bg-white border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-purple-500 w-48"
            />
            <svg
              className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400"
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
        </div>

        {/* Right Side - Filter Buttons & Add Button */}
        <div className="flex items-center gap-2">
          {/* Manage Button */}
          <button 
            onClick={() => onFilterChange("manage")}
            className={`px-6 py-2 text-xs font-semibold transition-all ${
              currentFilter === "manage"
                ? "bg-gradient-to-b from-purple-600 to-purple-400 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
            style={{ borderRadius: '0 0 20px 20px' }}
          >
            Manage
          </button>

          {/* Active Br. Button */}
          <button 
            onClick={() => onFilterChange("active")}
            className={`px-6 py-2 text-xs font-semibold transition-all ${
              currentFilter === "active"
                ? "bg-gradient-to-b from-purple-600 to-purple-400 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
            style={{ borderRadius: '0 0 20px 20px' }}
          >
            Active Br.
          </button>

          {/* Inactive Br. Button */}
          <button 
            onClick={() => onFilterChange("inactive")}
            className={`px-6 py-2 text-xs font-semibold transition-all ${
              currentFilter === "inactive"
                ? "bg-gradient-to-b from-purple-600 to-purple-400 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
            style={{ borderRadius: '0 0 20px 20px' }}
          >
            Inactive Br.
          </button>

          {/* Add Branch Button */}
          <AddBranch />
        </div>
      </div>
    </div>
  );
}