import { useState } from "react"
import NavBar from "../../Components/NavBar/NavBar"
import Footer from "../../Components/Footer/Footer"
import ProfesionalForm from "./ProfessionalCreateForm"
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
  const [profesionalSeleccionado, setProfesionalSeleccionado] = useState<Profesional | null>(null)

  return (
    <div>
      <NavBar />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* FORMULARIO */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              {profesionalSeleccionado ? "Editar profesional" : "Agregar nuevo profesional"}
            </h2>

            <ProfesionalForm
              profesional={profesionalSeleccionado}
              onClear={() => setProfesionalSeleccionado(null)}
            />
          </section>

          {/* LISTA */}
          <section className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Listado de profesionales
            </h2>

            <ProfesionalList onEdit={setProfesionalSeleccionado} />
          </section>

        </div>
      </div>

      <Footer />
    </div>
  )
}
