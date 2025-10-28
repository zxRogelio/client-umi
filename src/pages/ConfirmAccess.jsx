/* eslint-disable react-hooks/exhaustive-deps */
import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { API } from "../api/api";
import { useAuth } from "../context/AuthContext";

export default function ConfirmAccess() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { setToken } = useAuth();

  useEffect(() => {
    const confirm = async () => {
      const tokenFromUrl = params.get("token");
      console.log("🔍 Token recibido por URL:", tokenFromUrl);

      if (!tokenFromUrl) {
        alert("No se encontró el token en la URL");
        navigate("/");
        return;
      }

      try {
        const res = await API.post("/auth/confirm-access", {
          token: tokenFromUrl,
        });

        console.log("✅ Respuesta del backend:", res.data);

        // Guarda el token y el correo
        setToken(res.data.token);
        localStorage.setItem("email", res.data.email);

        alert("Acceso confirmado");
        navigate("/dashboard");
      } catch (err) {
        console.error("❌ Error confirmando acceso:", err.response?.data || err.message);
        alert("Token inválido o expirado");
        navigate("/");
      }
    };

    confirm();
  }, []);

  return <p>Confirmando acceso...</p>;
}
