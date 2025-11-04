import { useEffect, useState } from 'react'
import axios from "axios"
import { useReload } from '../../../context/ReloadContext'
import MainCard from '../../Card/MainCard'
import SidebarCard from '../../Card/SidebarCard'
import Pagination from '../../Pagination/Pagination'

interface CardData {
  id: number
  nombre: string
  modalidad: string
  experiencia: number
  ubicacion: string
  descripcion: string
  correo: string
  telefono: string
  imagenUrl?: string
  categoria: {
    nombre: string
  }
}

const PAGE_SIZE = 6

export default function ProfesionalContent() {
  const { reloadFlag } = useReload()

  const [currentPage, setCurrentPage] = useState(1)
  const [professionals, setProfessionals] = useState<CardData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const loadProfessionals = () => {
    axios.get("http://localhost:3000/api/professionals")
      .then(res => {
        setProfessionals(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Error al cargar profesionales", err)
        setError(true)
        setLoading(false)
      })
  }

  // ✅ Primero load normal
  useEffect(() => {
    loadProfessionals()
  }, [])

  // ✅ Luego actualiza instantáneamente cuando hay cambios
  useEffect(() => {
    setLoading(true)      // ✅ Esto hace que se vea instantáneo
    loadProfessionals()
  }, [reloadFlag])

  const totalPages = Math.ceil(professionals.length / PAGE_SIZE)
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const displayedCards = professionals.slice(startIndex, startIndex + PAGE_SIZE)

  const mainCards = displayedCards.slice(0, 3)
  const sidebarCards = displayedCards.slice(3)

  return (
    <section className="min-h-screen bg-[#C8D2D7] flex flex-col items-center p-6">
      <header className="w-full max-w-6xl mb-6">
        <h1 className="text-[#1EBE91] md:text-lg font-semibold">
          Profesionales disponibles
        </h1>
      </header>

      {loading ? (
        <p className="text-gray-600 text-center mt-10">Cargando profesionales...</p>
      ) : error ? (
        <p className="text-red-600 text-center mt-10">Error al cargar profesionales.</p>
      ) : professionals.length === 0 ? (
        <p className="text-gray-600 text-center mt-10">No hay profesionales disponibles en este momento.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          <main className="md:col-span-2 flex flex-col gap-6">
            {mainCards.map((card) => (
              <MainCard
                key={card.id}
                name={card.nombre}
                specialty={card.categoria.nombre}
                tags={[
                  card.modalidad,
                  `${card.experiencia} años de experiencia`,
                  card.ubicacion
                ]}
                description={card.descripcion}
                contactEmail={card.correo}
                contactPhone={card.telefono}
                imageUrl={card.imagenUrl || `https://randomuser.me/api/portraits/lego/${card.id % 10}.jpg`}
              />
            ))}

            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </main>

          <aside className="flex flex-col gap-6">
            {sidebarCards.map((card) => (
              <SidebarCard
                key={card.id}
                name={card.nombre}
                specialty={card.categoria.nombre}
                tags={[card.modalidad]}
                contactEmail={card.correo}
                contactPhone={card.telefono}
                imageUrl={`https://randomuser.me/api/portraits/lego/${card.id % 10}.jpg`}
              />
            ))}
          </aside>
        </div>
      )}
    </section>
  )
}
