// src/pages/LoginTOTP.jsx
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { API } from "../api/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginTOTP() {
  const { register, handleSubmit } = useForm();
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await API.post("/auth/verify-totp", data);
      const finalToken = response.data.token;
      setToken(finalToken);
      alert("Inicio de sesión exitoso ✅");
      navigate("/dashboard");
    } catch (err) {
      alert("Código inválido o expirado ❌");
    }
  };

  return (
    <div className="page-login">
      <div className="login-box">
        <h2 className="page-title">Verificación en dos pasos</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <input
            placeholder="Correo"
            {...register("email")}
            className="login-input"
          />
          <input
            placeholder="Código de 6 dígitos"
            {...register("otp")}
            className="login-input"
          />
          <button type="submit" className="login-button">
            Verificar código
          </button>
        </form>
      </div>
    </div>
  );
}
