import { Trash2 } from "lucide-react";

export default function DeleteSparepart({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="p-2 text-red-500 bg-white rounded-lg"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  );
}