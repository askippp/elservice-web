import { getUserData } from "../../hooks/useAuth";
import Sidebar from "../../ui/navigation/Sidebar";
import { getNavItemsByRole } from "../../config/NavConfig";
import Topbar from "../../ui/navigation/Topbar";

export default function DashboardLayout({ children }) {
  const { role } = getUserData();
  const items = getNavItemsByRole(role);

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar items={items} />
      <div className="flex-1 flex flex-col">
        <header className="border-b bg-transparent flex items-center px-2 py-2">
          <Topbar />
        </header>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
