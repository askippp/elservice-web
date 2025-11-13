import { getUserData } from "../../hooks/useAuth";

export default function Topbar() {
  const { user } = getUserData();
  const name = user?.username || "unknown username";
  const email = user?.email || "unknown email";

  return (
    <div className="w-full bg-gray-100 rounded-xl shadow-md">
      <div className="flex h-20 items-center justify-end gap-6 px-8">
        {/* Mail Icon */}
        <button
          type="button"
          aria-label="Messages"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-700 hover:text-indigo-600 hover:bg-gray-100 shadow-sm transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-7 w-7"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m2 7 10 7 10-7" />
          </svg>
        </button>

        {/* Bell Icon */}
        <button
          type="button"
          aria-label="Notifications"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-700 hover:text-indigo-600 hover:bg-gray-100 shadow-sm transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-7 w-7"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3 ml-2">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="h-7 w-7">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>
          <div className="leading-tight">
            <div className="text-base font-bold text-gray-900">{name}</div>
            <div className="text-sm text-gray-600">{email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}