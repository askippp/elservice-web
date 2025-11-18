import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/admin/DashboardPage.jsx';
import BranchPage from './pages/admin/BranchPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin/dashboard" element={<DashboardPage />} />
      <Route path="/admin/branches" element={<BranchPage />} />
    </Routes>
  );
}