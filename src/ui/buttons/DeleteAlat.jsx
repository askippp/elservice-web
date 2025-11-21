import { useState } from 'react';
import NotifDeleteAlat from "../notif/notifDeleteAlat";

export default function DeleteAlat({ alat, onClick }) {
  const [showNotif, setShowNotif] = useState(false);

  const handleClick = () => {
    setShowNotif(true);
  };

  const handleConfirm = () => {
    if (onClick) onClick();
    setShowNotif(false);
  };

  const handleCancel = () => {
    setShowNotif(false);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="w-14 h-14 bg-white border-2 border-gray-800 rounded-2xl hover:bg-red-50 transition-colors flex items-center justify-center flex-shrink-0"
        title="Hapus alat"
      >
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          {/* Tutup tempat sampah */}
          <path d="M7 7H17V6C17 5.4 16.6 5 16 5H8C7.4 5 7 5.4 7 6V7Z" fill="#EF0000" />
          {/* Handle tutup */}
          <path d="M10 5H14V4C14 3.4 13.6 3 13 3H11C10.4 3 10 3.4 10 4V5Z" fill="#EF0000" />
          {/* Badan tempat sampah */}
          <path d="M6 8H18V20C18 21.1 17.1 22 16 22H8C6.9 22 6 21.1 6 20V8Z" fill="#EF0000" />
        </svg>
      </button>

      {/* Notifikasi Delete */}
      {showNotif && (
        <NotifDeleteAlat 
          alat={alat}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </>
  );
}