import { useEffect, useState } from "react"
import axios from "axios"
import NavBar from "../../Components/NavBar/NavBar"
import Footer from "../../Components/Footer/Footer"
import ProfessionalForm from "./ProfessionalCreateForm"
import ProfesionalEditForm from "./ProfessionalEdit"
import ProfesionalList from "./ProfesionalList"

export interface Profesional {
  id: number
  nombre: string
  modalidad: string
  categoriaId: number
  correo?: string
  telefono?: string
  experiencia?: number
  ubicacion?: string
  descripcion?: string
  imagenUrl?: string
}

export default function AdminDashboard() {
  const [profesionales, setProfesionales] = useState<Profesional[]>([])
  const [profesionalEditando, setProfesionalEditando] = useState<Profesional | null>(null)

  const fetchProfesionales = async () => {
    const res = await axios.get("http://localhost:3000/api/professionals")
    setProfesionales(res.data)
  }

  useEffect(() => {
    fetchProfesionales()
  }, [])

  return (
    <div>
      <NavBar />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Crear nuevo */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Agregar nuevo profesional</h2>
            <ProfessionalForm onSuccess={fetchProfesionales} />
          </section>

          {/* Editar existente */}
          {profesionalEditando && (
            <section className="bg-white p-6 rounded-xl shadow border border-blue-300">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Editar profesional</h2>
              <ProfesionalEditForm
                profesional={profesionalEditando}
                onSuccess={() => {
                  setProfesionalEditando(null)
                  fetchProfesionales()
                }}
                onCancel={() => setProfesionalEditando(null)}
              />
            </section>
          )}

          {/* Listado */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Listado de profesionales</h2>
            <ProfesionalList
              profesionales={profesionales}
              onEdit={setProfesionalEditando}
              onDelete={fetchProfesionales}
            />
          </section>

        </div>
      </div>

      <Footer />
    </div>
  )
}
