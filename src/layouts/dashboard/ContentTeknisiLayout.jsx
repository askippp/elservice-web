import { useState } from "react";
import TeknisiTableHeader from "../../ui/teknisi/TeknisiTableHeader";
import CardTeknisi, { sampleTeknisi } from "../../ui/cards/CardTeknisi";

export default function ContentTeknisiLayout({ children }) {
  const handleStatusAkun = (teknisi) => {
    if (teknisi.hasAccount) {
      console.log("Lihat akun teknisi:", teknisi.namaTeknisi);
      // Logic untuk lihat akun
    } else {
      console.log("Buat akun untuk teknisi:", teknisi.namaTeknisi);
      // Logic untuk buat akun
    }
  };

  const handleDelete = (teknisiId) => {
    console.log("Delete teknisi:", teknisiId);
    // Logic untuk delete
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gray-100 p-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Manage Teknisi</h1>
        
        {/* Search Header */}
        <div className="mt-6">
          <TeknisiTableHeader />
        </div>
        
        {/* Teknisi Cards Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sampleTeknisi.map((teknisi, index) => (
            <CardTeknisi
              key={teknisi.id}
              number={index + 1}
              namaTeknisi={teknisi.namaTeknisi}
              cabang={teknisi.cabang}
              hasAccount={teknisi.hasAccount}
              onStatusAkun={() => handleStatusAkun(teknisi)}
              onDelete={() => handleDelete(teknisi.id)}
            />
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}