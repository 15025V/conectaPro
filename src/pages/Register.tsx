import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

export default function Register() {
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [password, setPassword] = useState("")
  const [rol, setRol] = useState("usuario")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      await axios.post("http://localhost:3000/api/auth/register", {
        nombre,
        correo,
        password,
        rol
      })

      // login automático
      const loginRes = await axios.post("http://localhost:3000/api/auth/login", {
        correo,
        password
      })

      const token = loginRes.data.token
      const decoded = JSON.parse(atob(token.split(".")[1]))

      login(token)

      if (decoded.rol === "admin") navigate("/dashboard")
      else navigate("/home")

    } catch (err: any) {
      setError(err.response?.data?.error || "Error al registrar")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 space-y-6 border border-gray-200"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700">
          Crear cuenta
        </h2>
        <p className="text-center text-gray-600">
          Regístrate para continuar
        </p>

        {/* Nombre */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            placeholder="Tu nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Correo */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Correo</label>
          <input
            type="email"
            placeholder="correo@ejemplo.com"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Contraseña</label>
          <input
            type="password"
            placeholder="•••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Rol */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Rol</label>
          <select
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="usuario">Usuario</option>
            <option value="admin">Administrador</option>
          </select>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-600 text-center font-medium">{error}</p>
        )}

        {/* Botón principal */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300"
        >
          Registrarse
        </button>

        {/* Botón secundario */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="w-full text-blue-600 font-medium text-center hover:underline"
        >
          ¿Ya tienes cuenta? Inicia sesión
        </button>
      </form>
    </div>
  )
}
