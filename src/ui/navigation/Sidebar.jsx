import { NavLink } from "react-router-dom";

export default function Sidebar({ items = [] }) {
  return (
    <aside className="w-64 shrink-0 p-3">
      <div className="h-full rounded-xl bg-gray-100 shadow-md">
        <div className="px-4 pt-4 pb-2">
          <div className="flex items-center gap-2 text-purple-600 font-bold text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M12 2 2 7l10 5 10-5-10-5Zm0 7L2 4v13l10 5 10-5V4l-10 5Z" />
            </svg>
            ELService
          </div>
        </div>

        <div className="px-4 text-sm text-gray-500">Menu</div>

        <nav className="mt-2 px-2 pb-4 space-y-1">
          {items.map((item) => (
            item.disabled ? (
              <div
                key={item.to}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-400 cursor-not-allowed"
                aria-disabled="true"
                title="Coming soon"
              >
                <span className="opacity-50">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ) : (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${
                    isActive
                      ? "text-purple-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                <span className="text-current">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            )
          ))}
        </nav>

        <div className="mt-auto" />
        <div className="p-3" />
      </div>
    </aside>
  );
}
