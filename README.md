# ELService Web (React + Vite)

A React (Vite) frontend for ELService with clear separation between UI, layouts, hooks, and API service layers. Includes role-based navigation, authentication handling, and basic dashboard components.

## Requirements

- Node.js 18+ (recommended) and npm 9+
- A running backend API compatible with the endpoints used here

## Installation

```bash
# clone repository (if needed)
# git clone <repo-url>
# cd elservice-web

# install dependencies
npm install
```

## Running the project

- Development (with HMR):
```bash
npm run dev
```
- Build production bundle:
```bash
npm run build
```
- Preview built app locally:
```bash
npm run preview
```

## Environment variables

Create a `.env` file in the project root:

```bash
VITE_API_BASE_URL=http://127.0.0.1:8000/api
```

- `VITE_API_BASE_URL`: Base URL for the backend API (used by axios client). You can set different values per environment (e.g. `.env.development`, `.env.production`).

## Project structure

```
./
├─ public/
│  └─ images/ ...
├─ src/
│  ├─ api/
│  │  ├─ client.js                # axios instance + interceptors (auth token, 401 handling)
│  │  └─ service/
│  │     ├─ authApi.js            # login/logout
│  │     ├─ cabangApi.js          # CRUD cabang
│  │     └─ operatorApi.js        # fetch operators
│  ├─ hooks/
│  │  ├─ useAuth.jsx              # login/logout, read user data (localStorage)
│  │  └─ useCabangs.jsx           # data fetching with React Query
│  ├─ layouts/
│  │  ├─ LoginLayout.jsx
│  │  └─ dashboard/
│  │     ├─ DashboardLayout.jsx   # shell layout: Sidebar + Topbar + content
│  │     ├─ ContentAdminLayout.jsx
│  │     └─ ContentOperatorLayout.jsx
│  ├─ pages/
│  │  ├─ LoginPage.jsx
│  │  └─ admin/
│  │     └─ DashboardPage.jsx
│  ├─ ui/
│  │  ├─ navigation/
│  │  │  ├─ Sidebar.jsx           # role-based links, presentational
│  │  │  └─ Topbar.jsx            # mail/bell buttons + user info
│  │  ├─ forms/
│  │  │  └─ LoginForm.jsx
│  │  ├─ inputs/                  # InputText, InputPassword
│  │  ├─ buttons/                 # ButtonLogin
│  │  └─ cards/
│  │     ├─ CardCountServices.jsx
│  │     └─ CardOperator.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ index.css
│  └─ App.css
├─ package.json
├─ vite.config.js
└─ README.md
```

## Features overview

- Authentication
  - `useAuth` to handle login/logout, store token/role/user data in `localStorage`.
  - Axios request interceptor attaches Bearer token automatically.
  - Axios response interceptor clears auth on `401` and redirects to login.

- Role-based navigation
  - `DashboardLayout` renders `Sidebar` and `Topbar`.
  - `Sidebar` shows items based on current role and supports disabled items.

- Data fetching with React Query
  - `useCabangs` uses `@tanstack/react-query` for caching and mutations (create/update/delete) with automatic invalidation.

- UI components
  - Reusable components in `src/ui/*` (forms, inputs, buttons, cards) for consistent styling.
  - Dashboard cards (`CardCountServices`) for key metrics.

## Routing

Example routes (adjust as needed in `App.jsx`):
- `/` → `LoginPage`
- `/admin/dashboard` → Admin `DashboardPage`
- Add more routes for operator/admin sections as needed.

## Notes

- For production, ensure you set `VITE_API_BASE_URL` to the correct server URL.
- Consider adding route guards to enforce role-based access beyond just hiding navigation items.
- Prefer keeping API logic in `src/api/service/*` and consume via hooks/components, maintaining separation of concerns.
