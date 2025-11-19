import { useState } from 'react';
import AddOperatorForm from '../forms/AddOperatorForm';

export default function AddOperator() {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <>
      <button 
        onClick={handleClick}
        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-3xl hover:bg-blue-700 transition-colors flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Operator
      </button>

      {/* Modal Form Tambah Operator */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleClose}>
          <div className="max-w-2xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <AddOperatorForm onClose={handleClose} />
          </div>
        </div>
      )}
    </>
  );
}