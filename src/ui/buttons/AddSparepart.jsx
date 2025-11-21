import { useState } from "react";
import FormAddSparepart from "../forms/FormAddSparepart";

export default function AddSparepart() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <button 
        onClick={handleOpenForm}
        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-3xl hover:bg-blue-700 transition-colors flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Add Sparepart
      </button>

      <FormAddSparepart isOpen={isFormOpen} onClose={handleCloseForm} />
    </>
  );
}