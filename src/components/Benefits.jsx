const services = [
  {
    title: "Quiropráctica Post-Accidente",
    description:
      "Tratamiento especializado de columna, nervios y articulaciones dañadas por el impacto. Reducimos el dolor desde la primera sesión con técnicas no invasivas.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "Tratamiento de Whiplash",
    description:
      "El latigazo cervical es la lesión más común en accidentes traseros. Nuestro protocolo específico alivia el dolor de cuello, hombros y cabeza de forma efectiva.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    ),
  },
  {
    title: "Rehabilitación y Fisioterapia",
    description:
      "Planes de rehabilitación personalizados para restaurar movilidad, fuerza y función después del accidente. Combinamos quiropráctica con ejercicios terapéuticos.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: "Documentación Médico-Legal",
    description:
      "Generamos los reportes médicos detallados que tu abogado y aseguradora necesitan. Trabajamos directamente con tu representante legal para fortalecer tu caso.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
];

export default function Benefits() {
  return (
    <section
      id="Benefits"
      className="py-16 sm:py-20 px-6 lg:px-8 bg-[#f7f5f2] relative"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#c22121]/10 border border-[#c22121]/25 rounded-full mb-6">
            <span className="text-xs sm:text-sm text-[#c22121] font-medium">
              Nuestros servicios
            </span>
          </div>
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#1a1a2e] leading-tight">
            Todo lo que necesitas
            <br />
            <span className="text-[#c22121]">para recuperarte</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Ofrecemos atención integral desde el día del accidente hasta tu recuperación completa.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-7 sm:p-8 border border-[#1a1a2e]/8 hover:border-[#c22121]/25 hover:shadow-lg transition-all duration-300 flex gap-5"
            >
              {/* Icono */}
              <div className="w-12 h-12 bg-[#c22121]/10 group-hover:bg-[#c22121] rounded-xl flex items-center justify-center text-[#c22121] group-hover:text-white transition-all duration-300 flex-shrink-0">
                {service.icon}
              </div>

              {/* Texto */}
              <div>
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner inferior */}
        <div className="mt-10 bg-[#1a1a2e] rounded-2xl p-7 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-bold text-lg mb-1">
              ¿No ves tu lesión aquí?
            </p>
            <p className="text-white/50 text-sm">
              Contáctanos — evaluamos cada caso de forma individual y sin costo.
            </p>
          </div>
          <a
            href="#contacto"
            className="flex-shrink-0 px-6 py-3 bg-[#c22121] hover:bg-[#a81c1c] text-white font-semibold rounded-lg text-sm transition-all duration-200 whitespace-nowrap"
          >
            Consulta gratuita
          </a>
        </div>

      </div>
    </section>
  );
}