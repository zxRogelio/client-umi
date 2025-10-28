// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { MdEmail, MdSecurity } from "react-icons/md";

export default function Home() {
  return (
    <div className="page-container">
      <h1 className="page-title">Métodos de Autenticación</h1>

      <div className="card-grid">
        <Card
          title="Confirmación por Correo"
          desc="Login con correo y contraseña + confirmación de identidad vía enlace."
          to="/login-confirmado"
          btn="Confirmar Acceso"
          icon={<MdEmail size={40} color="#3f51b5" />}
        />
        <Card
          title="Login TOTP"
          desc="Login mediante secreto TOTP."
          to="/login-totp"
          btn="Acceder"
          icon={<MdSecurity size={40} color="#3f51b5" />}
        />
      </div>
    </div>
  );
}

function Card({ title, desc, to, btn, icon }) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{desc}</p>
      <Link to={to} className="card-btn">
        {btn}
      </Link>
    </div>
  );
}
