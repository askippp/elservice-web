import { useState } from "react";
import AddTeknisiForm from "../forms/AddTeknisiForm";

export default function AddTeknisi() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (formData) => {
    console.log("Form submitted:", formData);
    // Logic untuk submit data teknisi
  };

  return (
    <>
      <button 
        onClick={() => setShowForm(true)}
        className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-700 transition-colors flex items-center gap-2 shadow-md"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        Add Teknisi
      </button>

      {showForm && (
        <AddTeknisiForm 
          onClose={() => setShowForm(false)}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
}