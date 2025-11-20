import StatusAkunTeknisi from "../buttons/StatusAkunTeknisi";
import DeleteTeknisi from "../buttons/DeleteTeknisi";

export default function CardTeknisi({ 
  number,
  namaTeknisi = "Budi Santoso", 
  cabang = "Jakarta Pusat",
  hasAccount = false,
  onStatusAkun,
  onDelete
}) {
  return (
    <div className="bg-white rounded-2xl border-2 border-gray-300 p-5 shadow-sm hover:shadow-md transition-shadow">
      {/* Number Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center">
          <span className="text-lg font-semibold text-gray-900">{number}</span>
        </div>
      </div>

      {/* Nama Teknisi */}
      <h3 className="text-xl font-bold text-gray-900 mb-1">{namaTeknisi}</h3>
      
      {/* Cabang */}
      <p className="text-sm text-gray-500 mb-6">
        Cabang <span className="font-semibold text-gray-900">{cabang}</span>
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        {/* Status Akun Button */}
        <StatusAkunTeknisi 
          hasAccount={hasAccount}
          onClick={onStatusAkun}
        />

        {/* Delete Button */}
        <DeleteTeknisi onClick={onDelete} />
      </div>
    </div>
  );
}

// Sample data untuk testing
export const sampleTeknisi = [
  { id: 1, namaTeknisi: "Budi Santoso", cabang: "Jakarta Pusat", hasAccount: true },
  { id: 2, namaTeknisi: "Siti Rahayu", cabang: "Jakarta Timur", hasAccount: false },
  { id: 3, namaTeknisi: "Hiro", cabang: "Jakarta Selatan", hasAccount: true },
  { id: 4, namaTeknisi: "Fira", cabang: "Jakarta Selatan", hasAccount: false },
  { id: 5, namaTeknisi: "Kiyo", cabang: "Jakarta Utara", hasAccount: true },
  { id: 6, namaTeknisi: "Lilulu", cabang: "Jakarta Pusat", hasAccount: false },
];