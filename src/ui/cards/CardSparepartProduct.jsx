import AddSparepart from "../buttons/AddSparepart";
import CariSparepart from "../product/CariSparepart";
import CheckDetailSparepart from "../buttons/CheckDetailSparepart";
import DeleteSparepart from "../buttons/DeleteSparepart";

const sparepartData = [
  { id: 1, name: "Motor Drum", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400" },
  { id: 2, name: "Pompa Air", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400" },
  { id: 3, name: "Kompresor AC", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400" },
  { id: 4, name: "Thermostat Kulkas", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400" },
  { id: 5, name: "Resistor", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400" },
  { id: 6, name: "Dinamo Kipas", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400" },
];

function SparepartCard({ sparepart, onDelete, onCheck }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden border-t-4 border-purple-500">
      <div className="relative">
        <img
          src={sparepart.image}
          alt={sparepart.name}
          className="w-full h-32 object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-xs text-gray-400">Nama Sparepart</p>
            <h3 className="font-semibold text-gray-900">{sparepart.name}</h3>
          </div>
          <DeleteSparepart onClick={() => onDelete(sparepart.id)} />
        </div>
        <CheckDetailSparepart onClick={() => onCheck(sparepart.id)} />
      </div>
    </div>
  );
}

export default function CardSparepartProduct() {
  const handleAddSparepart = () => {
    console.log("Add Sparepart clicked");
  };

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
  };

  const handleDelete = (id) => {
    console.log("Delete sparepart:", id);
  };

  const handleCheck = (id) => {
    console.log("Check sparepart:", id);
  };

  return (
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
            onDelete={handleDelete}
            onCheck={handleCheck}
          />
        ))}
      </div>
    </div>
  );
}