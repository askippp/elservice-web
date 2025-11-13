import { Routes, Route } from 'react-router-dom';
import OperatorPage from './pages/admin/OperatorPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/admin/DashboardPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}
