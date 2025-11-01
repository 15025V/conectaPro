interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

export default function Pagination({ totalPages, currentPage, onPageChange }: PaginationProps) {
  return (
    <nav className="flex justify-center items-center gap-3 mt-6" aria-label="Paginación de profesionales">
      {/* Botón anterior */}
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="px-2 py-1 text-sm text-[#0F2D3C] disabled:opacity-40"
        aria-label="Página anterior"
      >
        ‹
      </button>

      {/* Botones de página */}
      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1
        const isActive = currentPage === page

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-8 h-8 rounded-md text-sm font-medium transition-colors duration-200
              ${isActive ? 'bg-emerald-400 text-white' : 'bg-[#005546] text-white hover:bg-emerald-600'}`}
            aria-label={`Ir a la página ${page}`}
          >
            {page}
          </button>
        )
      })}

      {/* Botón siguiente */}
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-2 py-1 text-sm text-[#0F2D3C] disabled:opacity-40"
        aria-label="Página siguiente"
      >
        ›
      </button>
    </nav>
  )
}
