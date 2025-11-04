type Profesional = {
  id: number
  nombre: string
  modalidad: string
  categoria?: { nombre: string }
  experiencia?: number | null
  ubicacion?: string | null
  correo?: string | null
  telefono?: string | null
}

export default function ProfesionalCard({
  data,
  onEdit,
  onDelete
}: {
  data: Profesional
  onEdit: (prof: Profesional) => void
  onDelete: (id: number) => void
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-200">

      {/* Nombre */}
      <h3 className="text-2xl font-semibold text-gray-800">
        {data.nombre}
      </h3>

      {/* Info básica */}
      <div className="text-gray-600 space-y-1">
        <p><span className="font-medium text-gray-800">Modalidad:</span> {data.modalidad}</p>
        <p><span className="font-medium text-gray-800">Categoría:</span> {data.categoria?.nombre ?? "No especificada"}</p>
        <p><span className="font-medium text-gray-800">Experiencia:</span> {data.experiencia ?? "No especificada"} años</p>
        <p><span className="font-medium text-gray-800">Ubicación:</span> {data.ubicacion ?? "No especificada"}</p>
        <p><span className="font-medium text-gray-800">Correo:</span> {data.correo ?? "No especificado"}</p>
        <p><span className="font-medium text-gray-800">Teléfono:</span> {data.telefono ?? "No especificado"}</p>
      </div>

      {/* Acciones */}
      <div className="flex gap-3 pt-3">
        <button
          onClick={() => onEdit(data)}
          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-medium transition-colors"
        >
          Editar
        </button>

        <button
          onClick={() => onDelete(data.id)}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition-colors"
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}
