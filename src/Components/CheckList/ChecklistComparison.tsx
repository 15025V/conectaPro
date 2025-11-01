'use client'

import ChecklistCard from "./CheckListCard"



export default function ChecklistComparison() {
  const cards = [
    {
      variant: 'dark',
      title: 'Perfil A',
      items: [
        { label: 'Verificado', completed: true },
        { label: 'Especialidad registrada', completed: true },
        { label: 'Certificación pendiente', completed: false },
        { label: 'Recomendaciones', completed: true },
      ],
    },
    {
      variant: 'highlight',
      title: 'Perfil Destacado',
      items: [
        { label: 'Verificado', completed: true },
        { label: 'Especialidad registrada', completed: true },
        { label: 'Certificación aprobada', completed: true },
        { label: 'Recomendaciones', completed: true },
      ],
    },
    {
      variant: 'dark',
      title: 'Perfil B',
      items: [
        { label: 'Verificado', completed: true },
        { label: 'Especialidad registrada', completed: true },
        { label: 'Certificación pendiente', completed: false },
        { label: 'Recomendaciones', completed: false },
      ],
    },
  ]

  return (
    <section className="bg-[#C8D2D7] py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {cards.map((card, i) => (
          <ChecklistCard key={i} {...card} />
        ))}
      </div>
    </section>
  )
}
