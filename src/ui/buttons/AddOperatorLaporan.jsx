import { useState } from 'react';
import FormAddLaporanOperator from '../forms/FormAddLaporanOperator';

export default function AddOperatorLaporan({ onAdd }) {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleAdd = (newOperator) => {
    console.log('New operator:', newOperator);
    // Panggil callback jika ada
    if (onAdd) {
      onAdd(newOperator);
    }
  };

  return (
    <>
      <button 
        onClick={handleOpenForm}
        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4 rounded-2xl transition-all duration-300 hover:shadow-lg"
      >
        Tambah Operator Baru
      </button>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <FormAddLaporanOperator 
            onClose={handleCloseForm}
            onAdd={handleAdd}
          />
        </div>
      )}
    </>
  );
}