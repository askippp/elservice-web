import { useState } from "react";
import AddAlat from "../buttons/AddAlat";
import CariAlat from "../product/CariAlat";
import CheckDetailAlat from "../buttons/CheckDetailAlat";
import DeleteAlat from "../buttons/DeleteAlat";

export default function CardAlatProduct() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSearch = (searchTerm) => {
    console.log("Search Alat:", searchTerm);
  };

  const handleCardClick = (id) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  const handleDelete = (id) => {
    console.log("Delete:", id);
  };

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
      {/* Search & Add Button */}
      <div className="flex items-center justify-between mb-6">
        <CariAlat onSearch={handleSearch} />
        <AddAlat />
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
              </div>

              {/* Check Detail & Delete Button */}
              <div className="flex justify-center items-center gap-3" onClick={(e) => e.stopPropagation()}>
                <CheckDetailAlat isActive={alat.isActive} />
                <DeleteAlat onClick={() => handleDelete(alat.id)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}