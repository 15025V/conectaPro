export default function ProfesionalLoading() {
  const mainCards = [1, 2, 3]
  const sideCards = [1, 2, 3, 4]

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center p-6 animate-pulse">
      {/* Header */}
      <div className="w-full max-w-6xl flex justify-between mb-6">
        <div className="space-x-4 flex">
          <div className="w-20 h-2 bg-emerald-400 rounded"></div>
          <div className="w-12 h-2 bg-emerald-400 rounded"></div>
        </div>
        <div className="w-20 h-2 bg-emerald-400 rounded"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Izquierda */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {mainCards.map((_, index) => (
            <div key={index} className="w-full h-48 bg-slate-900 rounded-xl shadow-md" />
          ))}
          <div className="flex justify-center items-center gap-3 mt-4">
            <button className="text-slate-600">{'<'}</button>
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="w-6 h-6 bg-emerald-400 rounded-md" />
            ))}
            <button className="text-slate-600">{'>'}</button>
          </div>
        </div>

        {/* Derecha */}
        <div className="flex flex-col gap-6">
          {sideCards.map((_, index) => (
            <div key={index} className="flex gap-3 items-start">
              <div className="w-16 h-16 bg-slate-900 rounded-lg" />
              <div className="flex flex-col gap-2">
                <div className="w-32 h-2 bg-emerald-400 rounded" />
                <div className="w-48 h-2 bg-slate-900 rounded" />
                <div className="flex gap-2 mt-1">
                  <div className="w-6 h-6 bg-emerald-400 rounded" />
                  <div className="w-6 h-6 bg-emerald-400 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
