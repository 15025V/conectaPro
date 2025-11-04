import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../context/AuthContext" 

interface NavLinksProps {
  isOpen: boolean
}

export default function NavLinks({ isOpen }: NavLinksProps) {
  const { isAuthenticated, rol, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <nav
      className={`text-sm font-medium
        flex-col gap-4 px-6 py-4 bg-[#C7D2D9] absolute top-full left-0 w-full z-10
        md:static md:flex md:flex-row md:justify-end md:gap-6 md:py-0 md:px-0 md:bg-transparent
        ${isOpen ? 'flex' : 'hidden'}`}
    >
      <Link to="#" className="text-[#1EBE91]">Inicio</Link>

      {isAuthenticated && rol === "usuario" && (
        <Link to="/home" className="hover:text-[#1EBE91] transition">Mi perfil</Link>
      )}

      {isAuthenticated && rol === "admin" && (
        <Link to="/dashboard" className="hover:text-[#1EBE91] transition">Panel admin</Link>
      )}

      {isAuthenticated ? (
        <button
          onClick={handleLogout}
          className="text-red-600 hover:underline transition"
        >
          Cerrar sesión
        </button>
      ) : (
        <Link to="/register" className="hover:text-[#1EBE91] transition">Registrarse</Link>
      )}
    </nav>
  )
}
