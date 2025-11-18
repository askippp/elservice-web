import { useState } from "react";
import DeleteBranch from "../buttons/DeleteBranch";
import CheckDetailBranch from "../buttons/CheckDetailBranch";

export default function CardBranch({ 
  imageSrc, 
  branchName = "Nama Cabang", 
  service = "Service sukamaju",
  isActive = true,
  onCheckDetail,
  onDelete
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked);
  };

  // Tentukan warna border dan shadow berdasarkan status
  const getBorderColor = () => {
    if (isClicked) {
      return isActive ? 'border-purple-500' : 'border-red-500';
    }
    return 'border-gray-700';
  };

  const getShadowColor = () => {
    if (isClicked) {
      return isActive ? 'shadow-[0_8px_0_0_rgb(168,85,247)]' : 'shadow-[0_8px_0_0_rgb(239,68,68)]';
    }
    return 'shadow-sm';
  };

  return (
    <div 
      onClick={handleCardClick}
      className={`bg-white rounded-2xl border-2 ${getBorderColor()} ${getShadowColor()} hover:shadow-md transition-all duration-300 cursor-pointer`}
    >
      {/* Image Container */}
      <div className="relative">
        <img 
          src={imageSrc || "https://via.placeholder.com/300x180"} 
          alt={branchName}
          className="w-full h-36 object-cover"
        />
        {/* Status Badge */}
        <div className="absolute top-2.5 right-2.5">
          <span className={`px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1 ${
            isActive 
              ? 'bg-white text-green-600 border border-green-600' 
              : 'bg-white text-red-700 border border-red-700'
          }`}>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            {isActive ? 'Aktif' : 'Non- aktif'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3.5">
        {/* Nama Cabang, Service Input, Delete Button */}
        <div className="flex items-center gap-2.5 mb-3">
          <h3 className="text-base font-bold text-gray-900 whitespace-nowrap">{branchName}</h3>
          <input 
            type="text" 
            value={service}
            readOnly
            onClick={(e) => e.stopPropagation()}
            className="flex-1 px-3 py-1.5 text-sm border-2 border-purple-500 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 min-w-0"
          />
          <div onClick={(e) => e.stopPropagation()}>
            <DeleteBranch onClick={onDelete} />
          </div>
        </div>

        {/* Check Detail Button - Pojok Kanan */}
        <div className="flex justify-end">
          <div onClick={(e) => e.stopPropagation()}>
            <CheckDetailBranch onClick={onCheckDetail} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Sample data untuk testing
export const sampleBranches = [
  { id: 1, branchName: "Nama Cabang", service: "Service sukamaju", isActive: true, imageSrc: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400" },
  { id: 2, branchName: "Nama Cabang", service: "Service sukamaju", isActive: true, imageSrc: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400" },
  { id: 3, branchName: "Nama Cabang", service: "Service sukamaju", isActive: true, imageSrc: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400" },
  { id: 4, branchName: "Nama Cabang", service: "Service sukamaju", isActive: false, imageSrc: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400" },
  { id: 5, branchName: "Nama Cabang", service: "Service sukamaju", isActive: false, imageSrc: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400" },
  { id: 6, branchName: "Nama Cabang", service: "Service sukamaju", isActive: true, imageSrc: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400" },
  { id: 7, branchName: "Nama Cabang", service: "Service sukamaju", isActive: true, imageSrc: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400" },
  { id: 8, branchName: "Nama Cabang", service: "Service sukamaju", isActive: true, imageSrc: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400" },
  { id: 9, branchName: "Nama Cabang", service: "Service sukamaju", isActive: false, imageSrc: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400" },
];