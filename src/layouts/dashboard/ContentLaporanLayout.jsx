import LaporanTableHeader from "../../ui/laporan/LaporanTableHeader";
import CardLaporan from "../../ui/cards/CardLaporan";
import CardService from "../../ui/cards/CardService";
import CardQuickActions from "../../ui/cards/CardQuickActions";

export default function ContentLaporanLayout({ children }) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-gray-100 p-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Laporan</h1>
        <p className="mt-1 text-gray-500">Manage and monitor all your reports</p>
        
        <div className="mt-4">
          <LaporanTableHeader />
        </div>

        <div className="mt-6">
          <CardLaporan />
        </div>

        <div className="mt-6">
          <CardService />
        </div>

        <div className="mt-6">
          <CardQuickActions />
        </div>
      </div>
      {children}
    </div>
  );
}