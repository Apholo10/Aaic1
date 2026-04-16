const team = [
  {
    name: "Dr. John Smith",
    role: "Quiropráctico Principal",
    bio: "Más de 15 años especializándose en lesiones por accidentes de tráfico. Certificado por el American Chiropractic Board.",
    initials: "JS",
  },
  {
    name: "Dr. Maria López",
    role: "Especialista en Rehabilitación",
    bio: "Experta en fisioterapia y rehabilitación post-trauma. Ha tratado a más de 300 pacientes de accidentes de auto.",
    initials: "ML",
  },
  {
    name: "Dr. Robert Chen",
    role: "Quiropráctico & Documentación",
    bio: "Especializado en la generación de reportes médico-legales. Trabaja directamente con firmas de abogados de lesiones personales.",
    initials: "RC",
  },
];

export default function OurFamily() {
  return (
    <section
      id="AboutUs"
      className="py-16 sm:py-20 px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Decorativo */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#c22121]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#c22121]/10 border border-[#c22121]/25 rounded-full mb-6">
            <span className="text-xs sm:text-sm text-[#c22121] font-medium">
              Nuestro equipo
            </span>
          </div>
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#1a1a2e] leading-tight">
            Conoce a las personas
            <br />
            <span className="text-[#c22121]">detrás de tu recuperación</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Un equipo de profesionales certificados comprometidos con tu bienestar desde el primer día.
          </p>
        </div>

        {/* Cards del equipo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="group bg-[#f7f5f2] rounded-2xl overflow-hidden border border-[#1a1a2e]/8 hover:border-[#c22121]/20 hover:shadow-lg transition-all duration-300"
            >
              {/* Foto placeholder */}
              <div className="relative h-52 bg-[#1a1a2e]/5 flex items-center justify-center overflow-hidden">
                <div className="w-24 h-24 rounded-full bg-[#1a1a2e] flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                  {member.initials}
                </div>
                {/* Acento inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#c22121] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#1a1a2e] mb-1">
                  {member.name}
                </h3>
                <p className="text-[#c22121] text-xs font-semibold uppercase tracking-wide mb-3">
                  {member.role}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner inferior */}
        <div className="mt-12 bg-[#f7f5f2] border border-[#1a1a2e]/8 rounded-2xl p-7 sm:p-8 text-center">
          <p className="text-[#1a1a2e] font-bold text-lg mb-2">
            ¿Listo para conocernos en persona?
          </p>
          <p className="text-gray-500 text-sm mb-5 max-w-md mx-auto">
            Agenda tu consulta inicial sin costo. Nuestro equipo estará listo para evaluarte el mismo día.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a2e] hover:bg-[#2d2d4e] text-white font-semibold rounded-lg text-sm transition-all duration-200"
          >
            Agendar consulta
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}