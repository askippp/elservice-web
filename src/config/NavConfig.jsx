const icons = {
  dashboard: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M3 3h8v8H3zM13 3h8v6h-8zM13 11h8v10h-8zM3 13h8v8H3z" />
    </svg>
  ),
  branch: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M6 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM6 9v4a5 5 0 0 0 5 5h3" />
    </svg>
  ),
  product: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M3 7l9-4 9 4-9 4-9-4Zm18 3-9 4-9-4v7l9 4 9-4v-7Z" />
    </svg>
  ),
  teknisi: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M21 2l-2 2 1.29 1.29a1 1 0 0 1 0 1.42l-1.58 1.58a1 1 0 0 1-1.42 0L16 7l-2 2 1.29 1.29a1 1 0 0 1 0 1.42l-6.29 6.29H6v-2l6.29-6.29a1 1 0 0 1 1.42 0L15 9l2-2-1.29-1.29a1 1 0 0 1 0-1.42L18 2Z" />
    </svg>
  ),
  operator: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm-7 8a7 7 0 0 1 14 0 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Z" />
    </svg>
  ),
};

export const navConfig = {
  admin: [
    { label: "Dashboard", to: "/admin/dashboard", icon: icons.dashboard },
    { label: "Branch", to: "/admin/branches", icon: icons.branch },
    { label: "Product", to: "/admin/products", icon: icons.product, disabled: true },
    { label: "Teknisi", to: "/admin/teknisi", icon: icons.teknisi, disabled: true },
    { label: "Operator", to: "/admin/operators", icon: icons.operator },
  ],
  operator: [
    { label: "Dashboard", to: "/operator/dashboard", icon: icons.dashboard },
    { label: "Services", to: "/operator/services", icon: icons.product },
  ],
};

export const getNavItemsByRole = (role) => navConfig[role] || [];
