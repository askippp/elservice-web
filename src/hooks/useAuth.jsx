import { useState } from "react";
import { login, logout } from "../api/service/authApi";
import { useNavigate } from "react-router-dom";
 

export const getUserData = () => {
  const token = localStorage.getItem("authToken");
  const role = localStorage.getItem("userRole");
  const userDataStr = localStorage.getItem("userData");
  const userDetailStr = localStorage.getItem("userDetail");

  const userData = userDataStr ? JSON.parse(userDataStr) : null;
  const userDetail = userDetailStr ? JSON.parse(userDetailStr) : null;

  return {
    token,
    role,
    user: userData,
    detail: userDetail,
    isAuthenticated: !!token,
  };
};

// debug tampilkan semua data user
export const debugUserData = () => {
  const data = getUserData();
  if (import.meta.env?.DEV) {
    console.log("=== DEBUG USER DATA ===");
    console.log("Token:", data.token);
    console.log("Role:", data.role);
    console.log("Is Authenticated:", data.isAuthenticated);
    console.log("User Data:", data.user);
    console.log("User Detail:", data.detail);
    console.log("Full Data Object:", data);
    console.log("=======================");
  }
  
  return data;
};

// Export ke window untuk bisa dipanggil dari browser console
if (import.meta.env?.DEV && typeof window !== "undefined") {
  window.debugUserData = debugUserData;
  window.getUserData = getUserData;
}

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //login function
  const handleLogin = async (credentials) => {
    setLoading(true);
    setError(null);

    try {
      const response = await login(credentials);

      //set token, role, user, dan detail ke local storage
      localStorage.setItem("authToken", response.data?.token);
      localStorage.setItem("userRole", response.data?.role);
      
      //simpan user data jika diperlukan
      if (response.data?.user) {
        localStorage.setItem("userData", JSON.stringify(response.data.user));
      }
      
      //simpan detail (admin/operator/teknisi) jika diperlukan
      if (response.data?.detail) {
        localStorage.setItem("userDetail", JSON.stringify(response.data.detail));
      }

      //get role dari response
      const role = response.data?.role;

      // DEBUG: Tampilkan semua data user yang login
      if (import.meta.env?.DEV) {
        console.log("=== LOGIN SUCCESS ===");
        console.log("Token:", response.data?.token);
        console.log("Role:", response.data?.role);
        console.log("User Data:", response.data?.user);
        console.log("User Detail:", response.data?.detail);
        console.log("Full Response:", response.data);
        console.log("====================");
      }
      
      // Debug dengan helper function
      debugUserData();

      //redirect berdasarkan role
      switch (role) {
        case "admin":
          navigate("/admin/dashboard");
          break;
        case "operator":
          navigate("/operator/dashboard");
          break;
        case "teknisi":
          navigate("/teknisi/dashboard");
          break;
        default:
          navigate("/");
      }

      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || "Login failed. Please try again.";
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error("Logout failed:", err);
    } finally {
      //clear local storage
      localStorage.removeItem("authToken");
      localStorage.removeItem("userRole");
      localStorage.removeItem("userData");
      localStorage.removeItem("userDetail");
      navigate("/");
    }
  };

  // Function untuk mendapatkan data user saat ini
  const getCurrentUser = () => {
    return getUserData();
  };

  return {
    loading,
    error,
    login: handleLogin,
    logout: handleLogout,
    getCurrentUser, // Export function untuk mendapatkan data user
  };
};