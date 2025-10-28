import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyResetCode from "./pages/VerifyResetCode";
import NewPassword from "./pages/NewPassword";
import Dashboard from "./pages/Dashboard";
import LoginConfirmado from "./pages/LoginConfirmado";
import ConfirmAccess from "./pages/ConfirmAccess";
import LoginTOTP from "./pages/LoginTOTP";
import ConfigurarTOTP from "./pages/ConfigurarTOTP";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <Router> 
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-reset" element={<VerifyResetCode />} />
            <Route path="/reset-password" element={<NewPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login-confirmado" element={<LoginConfirmado />} />
            <Route path="/confirm-access" element={<ConfirmAccess />} />
            <Route path="/configurar-totp" element={<ConfigurarTOTP />} />
            <Route path="/login-totp" element={<LoginTOTP />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
