// src/pages/LoginConfirmado.jsx
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { API } from "../api/api";

export default function LoginConfirmado() {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      await API.post("/auth/login-confirmation-request", data);
      alert("Revisa tu correo para confirmar acceso");
    } catch (err) {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="page-login">
      <div className="login-box">
        <h2 className="page-title">Login con Confirmación</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <input
            placeholder="Correo"
            {...register("email")}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password")}
            className="login-input"
          />
          <button type="submit" className="login-button">
            Enviar confirmación
          </button>
        </form>
      </div>
    </div>
  );
}
