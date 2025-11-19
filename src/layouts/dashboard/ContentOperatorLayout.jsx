import OperatorTableHeader from "../../ui/operator/OperatorTableHeader";
import CardOperatorAdmin from "../../ui/cards/CardOperatorAdmin";

export default function ContentOperatorLayout({ children }) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-gray-100 p-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Operator Management</h1>
        <p className="mt-1 text-gray-500">Manage and monitor all your operators</p>
        
        <div className="mt-4">
          <OperatorTableHeader />
        </div>

        <div className="mt-4">
          <CardOperatorAdmin />
        </div>
      </div>
      {children}
    </div>
  );
}