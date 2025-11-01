export default function SplitIntroContent() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-[300px]">
            {/* Izquierda: contenido real */}
            <div className="bg-[#0F1E2D] text-[#C8D2D7] flex flex-col justify-center px-8 py-12 gap-6">
                <div>
                    <h2 className="text-2xl font-bold text-[#1EBE91] mb-2">ConectaPro te da la bienvenida</h2>
                    <p className="text-sm md:text-base">
                        Encuentra profesionales certificados en psicología, nutrición, medicina y más. Tu bienestar empieza aquí.
                    </p>
                </div>
                <div>
                    <button className="bg-[#1EBE91] text-[#0F1E2D] font-semibold px-6 py-2 rounded-full hover:bg-[#69D7B9] transition">
                        Explorar profesionales
                    </button>
                </div>
            </div>

            {/* Derecha: decorativo */}
            <div className="bg-[url('/Jobs.jpg')] bg-cover bg-center min-h-[300px] w-full flex items-center justify-center">
            </div>

        </section>
    )
}
