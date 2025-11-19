import AddOperator from "../buttons/AddOperator";

export default function OperatorTableHeader() {
  return (
    <div className="bg-gray-50 rounded-2xl p-6">
      <div className="flex items-center justify-between gap-4">
        {/* Search Box */}
        <div className="relative max-w-md flex-1">
          <input
            type="text"
            placeholder="Search Operator"
            className="pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
          />
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
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

        {/* Add Operator Button */}
        <AddOperator />
      </div>
    </div>
  );
}