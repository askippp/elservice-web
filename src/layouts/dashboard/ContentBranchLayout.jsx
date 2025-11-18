import { useState } from "react";
import BranchTableHeader from "../../ui/branch/BranchTableHeader";
import CardBranch, { sampleBranches } from "../../ui/cards/CardBranch";
import Pagination from "../../ui/branch/Pagination";

export default function ContentBranchLayout({ children }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleCheckDetail = (branchId) => {
    console.log("Check detail for branch:", branchId);
  };

  const handleDelete = (branchId) => {
    console.log("Delete branch:", branchId);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("Current page:", page);
    // Tambahkan logic untuk fetch data berdasarkan page
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-gray-100 p-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Manage Branch</h1>
     
        {/* Branch Table Header (Filter & Search) */}
        <div className="mt-6">
          <BranchTableHeader />
        </div>

        {/* Branch Cards Grid - Posisi di bawah BranchTableHeader */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sampleBranches.map((branch) => (
            <CardBranch
              key={branch.id}
              branchName={branch.branchName}
              service={branch.service}
              isActive={branch.isActive}
              imageSrc={branch.imageSrc}
              onCheckDetail={() => handleCheckDetail(branch.id)}
              onDelete={() => handleDelete(branch.id)}
            />
          ))}
        </div>

        {/* Pagination - Posisi di bawah cards, tengah-tengah */}
        <Pagination 
          currentPage={currentPage}
          totalPages={3}
          onPageChange={handlePageChange}
        />
      </div>
      {children}
    </div>
  );
}
