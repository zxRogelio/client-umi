// src/pages/Login.jsx
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { API } from "../api/api";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const res = await API.post("/auth/login-normal", data);
      const token = res.data.token;
      setToken(token);
      localStorage.setItem("email", res.data.email);
      alert("Inicio de sesión exitoso");
      navigate("/dashboard");
    } catch (err) {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="page-login">
      <div className="login-box">
        <h2 className="page-title">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <input
            {...register("email")}
            placeholder="Correo electrónico"
            className="login-input"
          />
          <input
            {...register("password")}
            type="password"
            placeholder="Contraseña"
            className="login-input"
          />
          <button type="submit" className="login-button">
            Iniciar sesión
          </button>
        </form>
        <p className="login-link">
          <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
        </p>
      </div>
    </div>
  );
}
