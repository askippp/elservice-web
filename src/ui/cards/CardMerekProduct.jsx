import AddMerek from "../buttons/AddMerek";
import EditMerek from "../buttons/EditMerek";
import MerekTableHeader from "../merek/MerekTableHeader";

export default function CardMerekProduct() {
  const handleAddMerek = () => {
    console.log("Add Merek clicked");
    // Logic untuk add merek
  };

  const handleEditMerek = (merekId) => {
    console.log("Edit merek:", merekId);
    // Logic untuk edit merek
  };

  // Dummy data untuk merek
  const merekList = [
    { id: 1, name: "Samsung", subtitle: "Korea Selatan", tahun: 1938, produk: 165 },
    { id: 2, name: "Samsung", subtitle: "Korea Selatan", tahun: 1938, produk: 165 },
    { id: 3, name: "Samsung", subtitle: "Korea Selatan", tahun: 1938, produk: 165 },
    { id: 4, name: "Samsung", subtitle: "Korea Selatan", tahun: 1938, produk: 165 },
    { id: 5, name: "Samsung", subtitle: "Korea Selatan", tahun: 1938, produk: 165 },
    { id: 6, name: "Samsung", subtitle: "Korea Selatan", tahun: 1938, produk: 165 },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      {/* Button Add Merek di pojok kanan atas */}
      <div className="flex justify-end mb-4">
        <AddMerek onClick={handleAddMerek} />
      </div>
      
      {/* Merek Table Header */}
      <MerekTableHeader />
      
      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {merekList.map((merek) => (
          <div key={merek.id} className="border-2 border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-colors">
            {/* Number Badge */}
            <div className="flex items-start mb-4">
              <div className="w-8 h-8 border-2 border-gray-900 rounded-full flex items-center justify-center text-sm font-semibold">
                {merek.id}
              </div>
            </div>

            {/* Avatar */}
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 bg-purple-200 rounded-full"></div>
            </div>

            {/* Brand Name */}
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">{merek.name}</h3>
              <p className="text-sm text-gray-400">{merek.subtitle}</p>
            </div>

            {/* Stats */}
            <div className="flex gap-2 mb-4">
              <div className="flex-1 bg-purple-100 rounded-xl p-3">
                <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Tahun
                </div>
                <div className="font-bold text-gray-900">{merek.tahun}</div>
              </div>

              <div className="flex-1 bg-purple-100 rounded-xl p-3">
                <div className="flex items-center gap-1 text-xs text-gray-600 mb-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Produk
                </div>
                <div className="font-bold text-gray-900">{merek.produk}</div>
              </div>
            </div>

            {/* Edit Button - Using EditMerek Component */}
            <EditMerek merekId={merek.id} onEdit={handleEditMerek} />
          </div>
        ))}
      </div>
    </div>
  );
}