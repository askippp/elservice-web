import { useState } from "react";
import AddAlat from "../buttons/AddAlat";
import CariAlat from "../operator/CariAlat";
import CheckDetailAlat from "../buttons/CheckDetailAlat";

export default function CardAlatProduct() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleAddAlat = () => {
    console.log("Add Alat clicked");
    // Logic untuk add alat
  };

  const handleSearch = (searchTerm) => {
    console.log("Search Alat:", searchTerm);
    // Logic untuk search alat
  };

  const handleCardClick = (id) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  const handleDelete = (id) => {
    console.log("Delete:", id);
    // Logic untuk delete
  };

  // Sample data alat
  const alats = [
    { id: 1, nama: "Mesin Cuci Front Load", isActive: true },
    { id: 2, nama: "Kulkas 2 Pintu", isActive: true },
    { id: 3, nama: "AC Split 1 PK", isActive: true },
    { id: 4, nama: "Rice Cooker", isActive: false },
    { id: 5, nama: "Kipas Angin", isActive: false },
    { id: 6, nama: "Microwave", isActive: true },
    { id: 7, nama: "Televisi", isActive: false },
    { id: 8, nama: "Dispenser", isActive: true },
    { id: 9, nama: "Oven", isActive: false },
  ];

  const getBorderColor = (id, isActive) => {
    if (selectedCard === id) {
      return isActive ? 'border-purple-500 shadow-[0_6px_0_0_rgb(168,85,247)]' : 'border-red-500 shadow-[0_6px_0_0_rgb(239,68,68)]';
    }
    return 'border-gray-700';
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      {/* Search & Add Button - Sejajar */}
      <div className="flex items-center justify-between mb-6">
        <CariAlat onSearch={handleSearch} />
        <AddAlat onClick={handleAddAlat} />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {alats.map((alat) => (
          <div
            key={alat.id}
            onClick={() => handleCardClick(alat.id)}
            className={`bg-white rounded-2xl border-2 ${getBorderColor(alat.id, alat.isActive)} overflow-hidden cursor-pointer transition-all duration-300`}
          >
            {/* Image Container */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400" 
                alt={alat.nama}
                className="w-full h-32 object-cover"
              />
              {/* Status Badge */}
              <div className="absolute top-2 right-2">
                <span className={`px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 ${
                  alat.isActive 
                    ? 'bg-white text-green-600 border border-green-600' 
                    : 'bg-white text-red-700 border border-red-700'
                }`}>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  {alat.isActive ? 'Aktif' : 'Non-aktif'}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-3.5">
              <div className="flex items-center gap-2.5 mb-3">
                <h3 className="text-sm font-bold text-gray-900 whitespace-nowrap">Nama Alat</h3>
                <input 
                  type="text" 
                  value={alat.nama}
                  readOnly
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 px-3 py-1.5 text-sm border-2 border-purple-500 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 min-w-0"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(alat.id);
                  }}
                  className="w-9 h-9 bg-white border-2 border-gray-900 rounded-lg hover:bg-red-50 transition-colors flex items-center justify-center flex-shrink-0"
                >
                  <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Check Detail Button - Menggunakan Component Terpisah */}
              <div className="flex justify-end" onClick={(e) => e.stopPropagation()}>
                <CheckDetailAlat isActive={alat.isActive} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}