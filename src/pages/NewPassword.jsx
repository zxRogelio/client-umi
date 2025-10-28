// src/pages/NewPassword.jsx
import { useForm } from "react-hook-form";
import { API } from "../api/api";
import { useLocation, useNavigate } from "react-router-dom";

export default function NewPassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;
  const otp = location.state?.otp; // ✅ Recibido desde verify-reset

  const onSubmit = async (data) => {
    try {
      await API.post("/auth/reset-password", {
        email,
        otp,
        newPassword: data.password,
      });
      alert("Contraseña actualizada correctamente");
      navigate("/");
    } catch (err) {
      console.error("Error al cambiar contraseña:", err.response?.data || err);
      alert("Error al cambiar contraseña");
    }
  };

  return (
    <div className="page-login">
      <div className="login-box">
        <h2 className="page-title">Nueva Contraseña</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
          <input
            type="password"
            placeholder="Nueva contraseña (mínimo 8 caracteres)"
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

          <input
            type="password"
            placeholder="Confirmar contraseña"
            {...register("confirmPassword", {
              required: "Confirma tu contraseña",
              validate: (value) =>
                value === watch("password") ||
                "Las contraseñas no coinciden",
            })}
            className="login-input"
          />
          {errors.confirmPassword && (
            <p className="form-error">{errors.confirmPassword.message}</p>
          )}

          <button type="submit" className="login-button">
            Cambiar contraseña
          </button>
        </form>
      </div>
    </div>
  );
}
