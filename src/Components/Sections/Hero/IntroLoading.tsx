export default function IntroLoading() {
  return (
    <section className="bg-[#0F1E2D] py-20 px-4 animate-pulse">
      <div className="max-w-4xl mx-auto">
        <div className="w-64 h-10 bg-emerald-400 rounded mb-4" />
        <div className="w-96 h-4 bg-slate-700 rounded mb-6" />
        <div className="flex gap-4 flex-wrap">
          <div className="w-48 h-10 bg-emerald-400 rounded" />
        </div>
      </div>
    </section>
  )
}
