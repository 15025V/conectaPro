import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import type { JSX } from "react"

type ProtectedRouteProps = {
  children: JSX.Element
  requiredRole?: "admin" | "usuario"
}

export default function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const { isAuthenticated, rol, loading } = useAuth()

  // Espera a que el contexto termine de cargar antes de decidir
  // A corregir Todavia😢
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-blue-600 font-semibold">Cargando sesión...</p>
      </div>
    )
  }

  // Si no está autenticado, redirige al login
  if (!isAuthenticated) return <Navigate to="/" replace />

  // Si el rol no coincide, redirige al login
  if (requiredRole && rol !== requiredRole) return <Navigate to="/" replace />

  // Si todo está bien, muestra el contenido protegido
  return children
}
