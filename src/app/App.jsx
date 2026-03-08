import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import MainLayout from "./layout/MainLayout";
import Home from "../features/portal/pages/Home";
import Coberturas from "../features/portal/pages/Coberturas";
import ReservarTurno from "../features/portal/pages/ReservarTurno";
import ReservarEstudio from "../features/portal/pages/ReservarEstudio";
import TurnosAgendados from "../features/portal/pages/TurnosAgendados";
import Profesionales from "../features/portal/pages/Profesionales";
import Resultados from "../features/portal/pages/Resultados";
import NotFound from "../features/portal/pages/NotFound";
import ProtectedRoute from "./routes/ProtectedRoute";
import { useAuth } from "../features/auth/useAuth";


export default function App() {

  const { isAuthed, login, logout } = useAuth();
  return (
    <Routes>
      {/* Login */}
      <Route
        path="/"
        element={
          isAuthed ? (
            <Navigate to="/app" replace />
          ) : (
            <LoginPage onLogin={login} />
          )
        }
      />
      {/* Rutas protegidas */}
      <Route element={<ProtectedRoute />}>
        <Route path="/app" element={<MainLayout onLogout={logout} />}>
          <Route index element={<Home />} />
          <Route path="coberturas" element={<Coberturas />} />
          <Route path="turnos/reservar-turno" element={<ReservarTurno />} />
          <Route path="turnos/reservar-estudio" element={<ReservarEstudio />} />
          <Route path="turnos/agendados" element={<TurnosAgendados />} />
          <Route path="turnos/profesionales" element={<Profesionales />} />
          <Route path="turnos/resultados" element={<Resultados />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
