// src/pages/Dashboard.jsx
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [token]);

  if (loading) return <p className="dashboard-msg">Cargando...</p>;
  if (!token)
    return (
      <p className="dashboard-msg error">Acceso no autorizado</p>
    );

  const handleLogout = () => {
    logout();
    navigate("/home");
  };

  return (
    <div className="page-dashboard">
      <div className="dashboard-box">
        <h1 className="dashboard-title">Bienvenido al Dashboard</h1>
        <p className="dashboard-subtitle">Tu token de sesión es válido ✅</p>

        <Link to="/configurar-totp" className="dashboard-link">
          Activar verificación en 2 pasos
        </Link>

        <button onClick={handleLogout} className="dashboard-button">
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}
