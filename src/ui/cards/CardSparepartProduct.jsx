import { useState } from "react";
import AddSparepart from "../buttons/AddSparepart";
import CariSparepart from "../product/CariSparepart";
import CheckDetailSparepart from "../buttons/CheckDetailSparepart";
import DeleteSparepart from "../buttons/DeleteSparepart";
import FormCheckSparepartAktif from "../forms/FormCheckSparepartAktif";
import FormCheckSparepartNonAktif from "../forms/FormCheckSparepartNonAktif";
import NotifDeleteSparepart from "../notif/notifDeleteSparepart";

const sparepartData = [
  { id: 1, name: "Motor Drum", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400", isActive: true },
  { id: 2, name: "Pompa Air", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400", isActive: false },
  { id: 3, name: "Kompresor AC", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400", isActive: true },
  { id: 4, name: "Thermostat Kulkas", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400", isActive: false },
  { id: 5, name: "Resistor", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400", isActive: true },
  { id: 6, name: "Dinamo Kipas", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400", isActive: false },
];

function SparepartCard({ sparepart, isSelected, onClick, onDelete, onCheck }) {
  const getBorderColor = () => {
    if (isSelected) {
      return sparepart.isActive 
        ? 'border-purple-500 shadow-[0_6px_0_0_rgb(168,85,247)]' 
        : 'border-red-500 shadow-[0_6px_0_0_rgb(239,68,68)]';
    }
    return 'border-gray-700';
  };

  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-2xl border-2 ${getBorderColor()} overflow-hidden cursor-pointer transition-all duration-300`}
    >
      <div className="relative">
        <img
          src={sparepart.image}
          alt={sparepart.name}
          className="w-full h-32 object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 ${
            sparepart.isActive 
              ? 'bg-white text-green-600 border border-green-600' 
              : 'bg-white text-red-700 border border-red-700'
          }`}>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {sparepart.isActive ? 'Aktif' : 'Non-aktif'}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-xs text-gray-400">Nama Sparepart</p>
            <h3 className="font-semibold text-gray-900">{sparepart.name}</h3>
          </div>
          <div onClick={(e) => e.stopPropagation()}>
            <DeleteSparepart onClick={() => onDelete(sparepart.id)} />
          </div>
        </div>
        <div onClick={(e) => e.stopPropagation()}>
          <CheckDetailSparepart onClick={() => onCheck(sparepart)} />
        </div>
      </div>
    </div>
  );
}

export default function CardSparepartProduct() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [selectedSparepart, setSelectedSparepart] = useState(null);
  const [showDeleteNotif, setShowDeleteNotif] = useState(false);
  const [sparepartToDelete, setSparepartToDelete] = useState(null);

  const handleAddSparepart = () => {
    console.log("Add Sparepart clicked");
  };

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };

  const handleCardClick = (id) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  const handleDelete = (id) => {
    setSparepartToDelete(id);
    setShowDeleteNotif(true);
  };

  const handleConfirmDelete = () => {
    console.log("Delete sparepart:", sparepartToDelete);
    // Di sini nanti tambah logic untuk hapus data beneran
    setShowDeleteNotif(false);
    setSparepartToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteNotif(false);
    setSparepartToDelete(null);
  };

  const handleCheck = (sparepart) => {
    setSelectedSparepart(sparepart);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedSparepart(null);
  };

  const handleUpdateSparepart = (data) => {
    console.log("Update sparepart:", data);
    setShowForm(false);
    setSelectedSparepart(null);
  };

  return (
    <>
      {showDeleteNotif && (
        <NotifDeleteSparepart
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}

      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <CariSparepart onSearch={handleSearch} />
          <AddSparepart onClick={handleAddSparepart} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sparepartData.map((sparepart) => (
            <SparepartCard
              key={sparepart.id}
              sparepart={sparepart}
              isSelected={selectedCard === sparepart.id}
              onClick={() => handleCardClick(sparepart.id)}
              onDelete={handleDelete}
              onCheck={() => handleCheck(sparepart)}
            />
          ))}
        </div>

        {/* Show Form Based on Status */}
        {showForm && selectedSparepart && (
          selectedSparepart.isActive ? (
            <FormCheckSparepartAktif
              sparepart={selectedSparepart}
              onClose={handleCloseForm}
              onUpdate={handleUpdateSparepart}
            />
          ) : (
            <FormCheckSparepartNonAktif
              sparepart={selectedSparepart}
              onClose={handleCloseForm}
              onUpdate={handleUpdateSparepart}
            />
          )
        )}
      </div>
    </>
  );
}