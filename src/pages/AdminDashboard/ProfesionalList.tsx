import axios from "axios"
import type { Profesional } from "./AdminDashboard"


interface Props {
  profesionales: Profesional[]
  onEdit: (prof: Profesional) => void
  onDelete: () => void
}

export default function ProfesionalList({ profesionales, onEdit, onDelete }: Props) {
  const handleDelete = async (id: number) => {
    if (!confirm("¿Eliminar este profesional?")) return

    try {
      await axios.delete(`http://localhost:3000/api/professionals/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      })
      onDelete()
    } catch (err) {
      console.error("Error al eliminar profesional:", err)
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {profesionales.map((prof) => (
        <div key={prof.id} className="border p-4 rounded-xl shadow space-y-2">
          <h3 className="text-lg font-bold text-blue-700">{prof.nombre}</h3>
          <p className="text-sm text-gray-600">{prof.modalidad}</p>
          <p className="text-sm text-gray-500">{prof.ubicacion || "Sin ubicación"}</p>

          <div className="flex gap-4 pt-2">
            <button
              onClick={() => onEdit(prof)}
              className="text-blue-600 hover:underline text-sm"
            >
               Editar
            </button>
            <button
              onClick={() => handleDelete(prof.id)}
              className="text-red-600 hover:underline text-sm"
            >
               Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
