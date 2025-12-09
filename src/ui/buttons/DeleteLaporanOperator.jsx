export default function DeleteLaporanOperator({ operatorId, operatorName }) {
  const handleDelete = () => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus operator ${operatorName}?`)) {
      // Logic untuk delete operator
      console.log('Deleting operator:', operatorId);
    }
  };

  return (
    <button 
      onClick={handleDelete}
      className="w-10 h-10 bg-white border-2 border-gray-900 rounded-xl hover:bg-red-50 transition-colors flex items-center justify-center"
    >
      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    </button>
  );
}