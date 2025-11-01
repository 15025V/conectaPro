import { useEffect, useState } from 'react'
import MainCard from '../../Card/MainCard'
import SidebarCard from '../../Card/SidebarCard'
import Pagination from '../../Pagination/Pagination'

interface CardData {
  id: number
  nombre: string
  modalidad: string,
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
  const [currentPage, setCurrentPage] = useState(1)
  const [professionals, setProfessionals] = useState<CardData[]>([])

  useEffect(() => {
    fetch("http://localhost:3000/api/professionals")
      .then(res => res.json())
      .then(data => setProfessionals(data))
      .catch(err => console.error("Error al cargar profesionales", err))
  }, [])

  const totalPages = Math.ceil(professionals.length / PAGE_SIZE)
  const startIndex = (currentPage - 1) * PAGE_SIZE
  const displayedCards = professionals.slice(startIndex, startIndex + PAGE_SIZE)

  const mainCards = displayedCards.slice(0, 3)
  const sidebarCards = displayedCards.slice(3, 6)

  return (
    <section className="min-h-screen bg-[#C8D2D7] flex flex-col items-center p-6">
      <header className="w-full max-w-6xl mb-6">
        <h1 className="text-[#1EBE91] text-lg font-semibold">
          Profesionales disponibles
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <main className="md:col-span-2 flex flex-col gap-6">
          {mainCards.map((card) => (
            <MainCard
              key={card.id}
              name={card.nombre}
              specialty={card.categoria.nombre}
              tags={[card.modalidad, `${card.experiencia} años`, card.ubicacion]}
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
              imageUrl={`https://randomuser.me/api/portraits/lego/${card.id % 10}.jpg`}
            />
          ))}
        </aside>
      </div>
    </section>
  )
}
