export default function CheckDetailBranch({ onClick }) {
  return (
    <button 
      onClick={onClick}
      className="py-2 px-4 bg-white border-2 border-gray-800 text-gray-900 text-sm font-semibold rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-1.5"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
      Check Detail
    </button>
  );
}