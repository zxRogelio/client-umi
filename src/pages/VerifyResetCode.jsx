// src/pages/VerifyResetCode.jsx
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { API } from "../api/api";
import { useLocation, useNavigate } from "react-router-dom";

export default function VerifyResetCode() {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const onSubmit = async (data) => {
    try {
      await API.post("/auth/verify-reset-otp", {
        email,
        otp: data.otp,
      });
      alert("Código correcto, ahora cambia tu contraseña");

      navigate("/reset-password", {
        state: { email, otp: data.otp },
      });
    } catch (err) {
      alert("Código incorrecto o expirado");
    }
  };

  return (
    <div className="page-login">
      <div className="login-box">
        <h2 className="page-title">Verificar código</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <input
            placeholder="Código recibido por correo"
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
