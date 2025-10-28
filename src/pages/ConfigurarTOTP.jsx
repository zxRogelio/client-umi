// src/pages/ConfigurarTOTP.jsx
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { API } from "../api/api";

export default function ConfigurarTOTP() {
  const { token } = useAuth();
  const [qrUrl, setQrUrl] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQR = async () => {
      try {
        const email = localStorage.getItem("email");
        if (!email) {
          setError("No se encontró el correo del usuario.");
          return;
        }

        const res = await API.post("/auth/generate-totp", { email });
        setQrUrl(res.data.qr);
      } catch (err) {
        console.error("Error generando QR:", err);
        setError("No se pudo generar el código QR.");
      }
    };

    fetchQR();
  }, []);

  if (!token) {
    return (
      <div className="page-login">
        <p className="dashboard-msg error">Acceso no autorizado</p>
      </div>
    );
  }

  return (
    <div className="page-dashboard">
      <div className="dashboard-box">
        <h2 className="dashboard-title">Activar verificación en 2 pasos</h2>
        <p className="dashboard-subtitle">
          Escanea el código QR con tu app de autenticación (Google Authenticator, Microsoft Authenticator, etc.)
        </p>

        {error && <p className="dashboard-error">{error}</p>}

        {qrUrl ? (
          <img
            src={qrUrl}
            alt="Código QR"
            className="qr-image"
          />
        ) : (
          <p className="dashboard-subtitle">Generando código QR...</p>
        )}

        <button onClick={() => navigate("/dashboard")} className="dashboard-button">
          Volver al Dashboard
        </button>
      </div>
    </div>
  );
}
