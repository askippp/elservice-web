import { useState } from "react";
import ProductTableHeader from "../../ui/product/ProductTableHeader";
import CardMerekProduct from "../../ui/cards/CardMerekProduct";
import CardAlatProduct from "../../ui/cards/CardAlatProduct";
import CardSparepartProduct from "../../ui/cards/CardSparepartProduct";
import Pagination from "../../ui/alat/Pagination";

export default function ContentProductLayout({ children }) {
  const [currentView, setCurrentView] = useState("brand");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // Sesuaikan dengan total halaman data kamu

  const handleFilterChange = (filter) => {
    setCurrentView(filter);
    setCurrentPage(1); // Reset ke halaman 1 saat ganti filter
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentView) {
      case "brand":
        return <CardMerekProduct />;
      case "alat":
        return <CardAlatProduct />;
      case "sparepart":
        return <CardSparepartProduct />;
      default:
        return <CardMerekProduct />;
    }
  };

  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-gray-100 p-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Product Management</h1>
        <p className="mt-1 text-gray-500">Manage and monitor all your products</p>
        
        {/* Product Table Header */}
        <div className="mt-4">
          <ProductTableHeader 
            onFilterChange={handleFilterChange}
            currentFilter={currentView}
          />
        </div>

        {/* Dynamic Content based on selected filter */}
        <div className="mt-4">
          {renderContent()}
        </div>

        {/* Pagination */}
        <div className="mt-6">
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      {children}
    </div>
  );
}