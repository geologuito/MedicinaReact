import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../features/auth/useAuth";

export default function ProtectedRoute() {

  const { isAuthed } = useAuth(); //Obtiene del contexto si el usuario está logueado.

  if (!isAuthed) {
    return <Navigate to="/" replace />; //Si no está logueado, redirige al login.
  }

  return <Outlet />; //Si está logueado, renderiza el componente hijo (MainLayout y sus rutas).
}