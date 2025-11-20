import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/admin/DashboardPage.jsx';
import BranchPage from './pages/admin/BranchPage.jsx';
import OperatorAdminPage from './pages/admin/OperatorAdminPage.jsx';
import ProductPage from './pages/admin/ProductPage.jsx';
import TeknisiPage from './pages/admin/TeknisiPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin/dashboard" element={<DashboardPage />} />
      <Route path="/admin/branches" element={<BranchPage />} />
      <Route path="/admin/operators" element={<OperatorAdminPage />} />
      <Route path="/admin/products" element={<ProductPage />} />
      <Route path="/admin/teknisi" element={<TeknisiPage />} />
    </Routes>
  );
}