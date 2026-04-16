const features = [
  {
    title: "Atención Inmediata Post-Accidente",
    description:
      "Sabemos que cada hora cuenta después de un accidente. Nuestro equipo está disponible para evaluarte el mismo día y comenzar tu tratamiento sin demoras.",
    imagePosition: "left",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    stats: [
      { value: "Mismo día", label: "Primera consulta" },
      { value: "24/7", label: "Línea de contacto" },
    ],
  },
  {
    title: "Tratamiento Quiropráctico Especializado",
    description:
      "Nos especializamos en lesiones de columna, cuello y espalda causadas por colisiones. Nuestros quiroprácticos certificados diseñan un plan de recuperación personalizado para ti.",
    imagePosition: "right",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    stats: [
      { value: "+500", label: "Pacientes recuperados" },
      { value: "100%", label: "Certificados" },
    ],
  },
  {
    title: "Documentación para tu Caso Legal",
    description:
      "Te ayudamos con toda la documentación médica necesaria para tu reclamación de seguro o caso legal. Trabajamos directamente con abogados de lesiones personales.",
    imagePosition: "left",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    stats: [
      { value: "Sin costo", label: "Consulta inicial" },
      { value: "Directo", label: "Con tu abogado" },
    ],
  },
];

export default function Features() {
  return (
    <section
      id="Features"
      className="py-16 sm:py-20 px-6 sm:px-6 lg:px-8 bg-white relative"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#c22121]/10 border border-[#c22121]/25 rounded-full mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm text-[#c22121] font-medium">
              ¿Por qué elegirnos?
            </span>
          </div>
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#1a1a2e] leading-tight">
            Todo lo que necesitas
            <br />
            <span className="text-[#c22121]">en un solo lugar</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Desde el primer día después de tu accidente hasta tu recuperación completa, estamos contigo en cada paso.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-28">
          {features.map((feature, key) => (
            <div
              key={key}
              className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 ${
                feature.imagePosition === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Visual Card */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="relative bg-[#f7f5f2] border border-[#1a1a2e]/8 rounded-2xl p-8 sm:p-10 overflow-hidden transition-all duration-300 group-hover:shadow-lg">
                    
                    {/* Acento decorativo */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-[#c22121] rounded-l-2xl" />
                    
                    {/* Icono */}
                    <div className="w-14 h-14 bg-[#c22121]/10 rounded-xl flex items-center justify-center text-[#c22121] mb-6 ml-4">
                      {feature.icon}
                    </div>

                    {/* Stats */}
                    <div className="flex gap-6 ml-4">
                      {feature.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-3xl font-bold text-[#1a1a2e]">
                            {stat.value}
                          </span>
                          <span className="text-sm text-gray-400 mt-1">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Decorativo fondo */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#c22121]/5 rounded-tl-full" />
                  </div>
                </div>
              </div>

              {/* Texto */}
              <div className="flex-1 w-full">
                <div className="max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                  <h3 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-[#1a1a2e]">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center text-[#c22121] font-semibold text-sm group cursor-pointer">
                    <span>Saber más</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}