import { LayoutGrid } from "lucide-react";

export default function CheckDetailSparepart({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg text-purple-500 bg-white"
    >
      <LayoutGrid className="w-4 h-4" />
      Check Sparepart
    </button>
  );
}