import { useState } from "react"

const categorias = [
  "Psicología",
  "Diseño gráfico",
  "Desarrollo web",
  "Marketing digital",
  "Fotografía",
  "Contabilidad",
  "Educación",
  "Nutrición",
  "Arquitectura",
  "Ingeniería civil",
  "Traducción",
  "Redacción y copywriting",
  "Desarrollo de software",
  "Consultoría legal",
  "Gestión de proyectos"
]

const categoriaMap = {
  "Psicología": 1,
  "Diseño gráfico": 2,
  "Desarrollo web": 3,
  "Marketing digital": 4,
  "Fotografía": 5,
  "Contabilidad": 6,
  "Educación": 7,
  "Nutrición": 8,
  "Arquitectura": 9,
  "Ingeniería civil": 10,
  "Traducción": 11,
  "Redacción y copywriting": 12,
  "Desarrollo de software": 13,
  "Consultoría legal": 14,
  "Gestión de proyectos": 15
}

export default function ProfesionalForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    modalidad: "",
    categoriaNombre: "",
    descripcion: "",
    experiencia: "",
    ubicacion: "",
    correo: "",
    telefono: "",
    imagenUrl: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const categoriaId = categoriaMap[formData.categoriaNombre]
    try {
      const res = await fetch("http://localhost:3000/api/professionals", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          categoriaId,
          experiencia: Number(formData.experiencia)
        })
      })
      if (res.ok) {
        alert("Profesional creado exitosamente")
        setFormData({
          nombre: "",
          modalidad: "",
          categoriaNombre: "",
          descripcion: "",
          experiencia: "",
          ubicacion: "",
          correo: "",
          telefono: "",
          imagenUrl: ""
        })
      }
    } catch (err) {
      console.error("Error al crear profesional", err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-[#1EBE91]">Agregar Profesional</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="nombre" placeholder="Nombre completo" value={formData.nombre} onChange={handleChange} className="input" required />
        <input name="ubicacion" placeholder="Ubicación" value={formData.ubicacion} onChange={handleChange} className="input" />

        <input name="correo" type="email" placeholder="Correo electrónico" value={formData.correo} onChange={handleChange} className="input" />
        <input name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} className="input" />

        <select name="modalidad" value={formData.modalidad} onChange={handleChange} className="input" required>
          <option value="">Selecciona modalidad</option>
          <option value="remoto">Remoto</option>
          <option value="presencial">Presencial</option>
          <option value="online">Online</option>
        </select>

        <select name="categoriaNombre" value={formData.categoriaNombre} onChange={handleChange} className="input" required>
          <option value="">Selecciona categoría</option>
          {categorias.map((nombre) => (
            <option key={nombre} value={nombre}>{nombre}</option>
          ))}
        </select>

        <input name="experiencia" type="number" placeholder="Años de experiencia" value={formData.experiencia} onChange={handleChange} className="input" />
        <input name="imagenUrl" placeholder="URL de imagen personalizada" value={formData.imagenUrl} onChange={handleChange} className="input" />
      </div>

      <textarea name="descripcion" placeholder="Descripción breve" value={formData.descripcion} onChange={handleChange} className="input" rows={4} />

      <button type="submit" className="bg-[#1EBE91] text-white font-semibold px-6 py-3 rounded hover:bg-[#17a97f] transition">
        Guardar profesional
      </button>
    </form>
  )
}
