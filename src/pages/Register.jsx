// src/pages/Register.jsx
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { API } from "../api/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await API.post("/auth/register", data);
      alert("Registro exitoso");
      navigate("/");
    } catch (err) {
      alert("Error al registrar");
    }
  };

  return (
    <div className="page-login">
      <div className="login-box">
        <h2 className="page-title">Registro</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <input
            type="email"
            placeholder="Correo"
            {...register("email", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Correo no válido",
              },
            })}
            className="login-input"
          />
          {errors.email && (
            <p className="form-error">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Contraseña (mínimo 8 caracteres)"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 8,
                message: "Debe tener al menos 8 caracteres",
              },
            })}
            className="login-input"
          />
          {errors.password && (
            <p className="form-error">{errors.password.message}</p>
          )}

          <button type="submit" className="login-button">
            Registrarse
          </button>
        </form>

        <p className="login-link">
          ¿Ya tienes cuenta? <Link to="/">Iniciar sesión</Link>
        </p>
      </div>
    </div>
  );
}
