import { useState } from 'react';
import FormEditMerek from '../forms/FormEditMerek';

export default function EditMerek({ merek, onEdit }) {
  const [showForm, setShowForm] = useState(false);

  const handleEdit = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  const handleUpdate = (updatedMerek) => {
    if (onEdit) {
      onEdit(updatedMerek);
    }
    console.log('Updated merek:', updatedMerek);
  };

  return (
    <>
      <button
        onClick={handleEdit}
        className="w-full bg-white border-2 border-purple-300 text-purple-500 rounded-xl py-2 hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        Edit
      </button>

      {/* Modal Form Edit Merek */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <FormEditMerek
            merek={merek}
            onClose={handleClose}
            onUpdate={handleUpdate}
          />
        </div>
      )}
    </>
  );
}