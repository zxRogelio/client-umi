// src/pages/VerifyOTP.jsx
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { API } from "../api/api";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function VerifyOTP() {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const onSubmit = async (data) => {
    try {
      const res = await API.post("/auth/verify-otp", {
        email: location.state.email,
        otp: data.otp,
      });

      setToken(res.data.token);
      alert("Inicio de sesión exitoso");
      navigate("/dashboard");
    } catch (err) {
      alert("OTP inválido");
    }
  };

  return (
    <div className="page-login">
      <div className="login-box">
        <h2 className="page-title">Verificar Código</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <input
            placeholder="Código de 6 dígitos"
            {...register("otp")}
            className="login-input"
          />
          <button type="submit" className="login-button">
            Verificar
          </button>
        </form>
      </div>
    </div>
  );
}
