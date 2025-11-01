export default function SplitIntroLoading() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[300px] animate-pulse">
      {/* Izquierda: contenido */}
      <div className="bg-[#0F1E2D] text-[#C8D2D7] flex flex-col justify-center px-8 py-12 gap-6">
        <div className="flex gap-4">
          <div className="w-24 h-6 bg-[#1EBE91] rounded" />
          <div className="w-16 h-6 bg-[#1EBE91] rounded" />
        </div>
        <div className="space-y-2">
          <div className="w-full h-2 bg-slate-500 rounded" />
          <div className="w-full h-2 bg-slate-500 rounded" />
          <div className="w-full h-2 bg-slate-500 rounded" />
          <div className="w-full h-2 bg-slate-500 rounded" />
        </div>
        <div className="w-48 h-10 bg-[#1EBE91] rounded-full" />
      </div>

      {/* Derecha: decorativo */}
      <div className="bg-[#20C39D]" />
    </section>
  )
}
