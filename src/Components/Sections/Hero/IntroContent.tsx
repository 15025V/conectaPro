export default function IntroContent() {
  return (
    <section
      className="bg-[#0F1E2D] py-20 px-4 bg-[url('/colegas.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="max-w-4xl justify-items-start mx-auto bg-[#0F1E2D]/70 p-8 rounded-2xl backdrop-blur-sm">
        <h1 className="text-4xl font-bold text-[#20C39D] mb-4">
          Bienvenido a ConectaPro
        </h1>
        <p className="text-lg text-[#C8D2D7] mb-6">
          Tu puerta de entrada a conexiones profesionales confiables
        </p>

        <div className="flex gap-4 flex-wrap">
          <button className="bg-[#20C39D] text-white font-semibold px-6 py-2 rounded hover:bg-[#69D7B9] transition">
            Explorar Profesionales
          </button>
        </div>
      </div>
    </section>
  )
}
