import { useEffect, useState } from "react"
import axios from "axios"
import type { Profesional } from "./AdminDashboard"

interface Props {
  profesional: Profesional
  onSuccess: () => void
  onCancel: () => void
}

export default function ProfesionalEditForm({ profesional, onSuccess, onCancel }: Props) {
  const [nombre, setNombre] = useState("")
  const [modalidad, setModalidad] = useState("")
  const [categoriaId, setCategoriaId] = useState("")
  const [correo, setCorreo] = useState("")
  const [telefono, setTelefono] = useState("")
  const [experiencia, setExperiencia] = useState("")
  const [ubicacion, setUbicacion] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [categorias, setCategorias] = useState([])
  const [mensaje, setMensaje] = useState("")

  useEffect(() => {
    axios.get("http://localhost:3000/api/categories")
      .then((res) => setCategorias(res.data))
  }, [])

  useEffect(() => {
    setNombre(profesional.nombre || "")
    setModalidad(profesional.modalidad || "")
    setCategoriaId(profesional.categoriaId?.toString() || "")
    setCorreo(profesional.correo || "")
    setTelefono(profesional.telefono || "")
    setExperiencia(profesional.experiencia?.toString() || "")
    setUbicacion(profesional.ubicacion || "")
    setDescripcion(profesional.descripcion || "")
  }, [profesional])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMensaje("")

    try {
      await axios.put(`http://localhost:3000/api/professionals/${profesional.id}`, {
        nombre,
        modalidad,
        categoriaId: parseInt(categoriaId),
        correo,
        telefono,
        experiencia: experiencia ? parseInt(experiencia) : null,
        ubicacion,
        descripcion
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      })

      setMensaje("✅ Profesional actualizado correctamente")
      onSuccess()
    } catch (err: any) {
      setMensaje(err.response?.data?.error || "❌ Error al actualizar profesional")
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

      {/* Botones */}
      <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold">
        Actualizar profesional
      </button>

      <button type="button" onClick={onCancel} className="w-full text-blue-600 text-sm mt-2 hover:underline">
        Cancelar edición
      </button>

      {mensaje && <p className="text-center mt-4 text-gray-700 font-medium">{mensaje}</p>}
    </form>
  )
}
