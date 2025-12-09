export default function AddOperatorLaporan({ onAdd }) {
  const handleAdd = () => {
    // Logic untuk tambah operator baru
    console.log('Adding new operator');
    
    // Panggil callback jika ada
    if (onAdd) {
      onAdd();
    }
  };

  return (
    <button 
      onClick={handleAdd}
      className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-4 rounded-2xl transition-all duration-300 hover:shadow-lg"
    >
      Tambah Operator Baru
    </button>
  );
}