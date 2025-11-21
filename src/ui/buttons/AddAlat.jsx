import { useState } from 'react';
import FormAddAlat from "../forms/FormAddAlat";

export default function AddAlat() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmitAlat = (data) => {
    console.log('Data alat baru:', data);
    // Kirim ke API di sini
  };

  return (
    <>
      <button 
        onClick={() => setIsFormOpen(true)}
        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-3xl hover:bg-blue-700 transition-colors flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Alat
      </button>

      <FormAddAlat 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleSubmitAlat}
      />
    </>
  );
}