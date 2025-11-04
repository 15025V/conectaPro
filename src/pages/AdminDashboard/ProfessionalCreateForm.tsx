import { useEffect, useState } from "react"
import axios from "axios"

export default function ProfessionalForm() {
  const [nombre, setNombre] = useState("")
  const [modalidad, setModalidad] = useState("")
  const [categoriaId, setCategoriaId] = useState("")
  const [correo, setCorreo] = useState("")
  const [telefono, setTelefono] = useState("")
  const [experiencia, setExperiencia] = useState("")
  const [ubicacion, setUbicacion] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [mensaje, setMensaje] = useState("")
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/categories")
      .then((res) => setCategorias(res.data))
      .catch(() => setMensaje("❌ No se pudieron cargar las categorías"))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMensaje("")

    // ✅ Validar token antes del POST
    const token = localStorage.getItem("token")
    if (!token || token === "null" || token === "undefined") {
      setMensaje("❌ No hay sesión activa. Inicia sesión nuevamente.")
      return
    }

    try {
      await axios.post(
        "http://localhost:3000/api/professionals",
        {
          nombre,
          modalidad,
          categoriaId: parseInt(categoriaId),
          correo,
          telefono,
          experiencia: experiencia ? parseInt(experiencia) : null,
          ubicacion: ubicacion || null,
          descripcion: descripcion || null
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      setMensaje("✅ Profesional agregado correctamente")
      setNombre("")
      setModalidad("")
      setCategoriaId("")
      setCorreo("")
      setTelefono("")
      setExperiencia("")
      setUbicacion("")
      setDescripcion("")

    } catch (err: any) {
      console.error("Error al agregar profesional:", err)
      setMensaje(err.response?.data?.error || "❌ Error al agregar profesional")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      {/* Nombre */}
      <div>
        <label className="text-sm font-medium text-gray-700">Nombre</label>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre completo"
          required
          className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Modalidad */}
      <div>
        <label className="text-sm font-medium text-gray-700">Modalidad</label>
        <input
          value={modalidad}
          onChange={(e) => setModalidad(e.target.value)}
          placeholder="Presencial, Virtual, Mixta..."
          required
          className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Categoría */}
      <div>
        <label className="text-sm font-medium text-gray-700">Categoría</label>
        <select
          value={categoriaId}
          onChange={(e) => setCategoriaId(e.target.value)}
          required
          className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
        >
          <option value="">Selecciona una categoría</option>
          {categorias.map((cat: any) => (
            <option key={cat.id} value={cat.id}>
              {cat.nombre}
            </option>
          ))}
        </select>
      </div>

      {/* Experiencia */}
      <div>
        <label className="text-sm font-medium text-gray-700">Años de experiencia</label>
        <input
          value={experiencia}
          onChange={(e) => setExperiencia(e.target.value)}
          placeholder="Ej: 5"
          type="number"
          min="0"
          className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Ubicación */}
      <div>
        <label className="text-sm font-medium text-gray-700">Ubicación</label>
        <input
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
          placeholder="Ciudad o estado"
          className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Descripción */}
      <div>
        <label className="text-sm font-medium text-gray-700">Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Breve descripción profesional"
          rows={3}
          className="w-full mt-1 p-3 border border-gray-300 rounded-lg resize-none"
        />
      </div>

      {/* Correo */}
      <div>
        <label className="text-sm font-medium text-gray-700">Correo</label>
        <input
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          placeholder="correo@ejemplo.com"
          type="email"
          className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Teléfono */}
      <div>
        <label className="text-sm font-medium text-gray-700">Teléfono</label>
        <input
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Opcional"
          className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Botón */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg text-lg hover:bg-blue-700 transition-all duration-300"
      >
        Agregar Profesional
      </button>

      {/* Mensaje */}
      {mensaje && (
        <p className="mt-6 text-center font-medium text-gray-700">
          {mensaje}
        </p>
      )}
    </form>
  )
}
