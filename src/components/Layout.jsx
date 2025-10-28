// src/components/Layout.jsx
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          backgroundColor: "#3f51b5",
          color: "white",
          height: "70px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ fontWeight: "bold" }}>UMISUMI Auth</h2>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          <Link to="/" style={linkStyle}>Login</Link>
          <Link to="/register" style={linkStyle}>Registro</Link>
          <Link to="/home" style={linkStyle}>Inicio</Link>
        </div>
      </nav>

      <main
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
};
