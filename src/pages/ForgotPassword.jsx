// src/pages/ForgotPassword.jsx
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { API } from "../api/api";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await API.post("/auth/forgot-password", { email: data.email });
      alert("Código enviado al correo");
      navigate("/verify-reset", { state: { email: data.email } });
    } catch (err) {
      alert("Error al enviar código");
    }
  };

  return (
    <div className="page-login">
      <div className="login-box">
        <h2 className="page-title">Recuperar Contraseña</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <input
            type="email"
            placeholder="Ingresa tu correo"
            {...register("email")}
            className="login-input"
          />
          <button type="submit" className="login-button">
            Enviar código
          </button>
        </form>
        <p className="login-link">
          <a href="/login">¿Ya tienes código? Inicia sesión</a>
        </p>
      </div>
    </div>
  );
}
