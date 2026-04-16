export default function Quees() {
  const stats = [
    { value: "+500", label: "Pacientes recuperados" },
    { value: "10+", label: "Años de experiencia" },
    { value: "98%", label: "Tasa de satisfacción" },
    { value: "Sin costo", label: "Consulta inicial" },
  ];

  return (
    <section
      id="Quees"
      className="py-16 sm:py-20 px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Decorativo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#c22121]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Imagen placeholder */}
          <div className="relative w-full order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden bg-[#f7f5f2] border border-[#1a1a2e]/8 aspect-[4/3]">
              {/* Placeholder visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#1a1a2e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#1a1a2e]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21 8.954 9.954a.75.75 0 0 1 1.08-.082l2.982 2.982a.75.75 0 0 0 1.117-.07l3.024-4.147a.75.75 0 0 1 1.191-.02l5.578 7.783" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423m7.539 7.538.003-.003.002.005-.005-.002Zm0 0a23.65 23.65 0 0 1 1.282-7.093M7.296 9.843l3.296 1.317" />
                    </svg>
                  </div>
                  <p className="text-[#1a1a2e]/30 text-sm">Tu foto aquí</p>
                </div>
              </div>
              {/* Acento rojo */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#c22121]" />
            </div>

            {/* Badge flotante */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 bg-[#1a1a2e] text-white px-5 py-3 rounded-xl shadow-lg">
              <p className="text-xs text-white/50 mb-0.5">Fundada en</p>
              <p className="text-xl font-bold">2014</p>
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#c22121]/10 border border-[#c22121]/25 rounded-full mb-6">
              <span className="text-xs sm:text-sm text-[#c22121] font-medium">
                Quiénes somos
              </span>
            </div>

            <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#1a1a2e] leading-tight">
              Más que una clínica,
              <br />
              <span className="text-[#c22121]">somos tu equipo.</span>
            </h2>

            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-4">
              En Auto Accident Injury Care llevamos más de 10 años ayudando a víctimas de accidentes de tráfico en Dallas a recuperarse física y legalmente. Entendemos el estrés que viene con un accidente — el dolor, los seguros, los abogados — y estamos aquí para simplificarlo todo.
            </p>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
              Nuestro equipo de quiroprácticos certificados trabaja de la mano con abogados de lesiones personales para que tú solo te enfocas en sanar.
            </p>

            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c22121] hover:bg-[#a81c1c] text-white font-semibold rounded-lg transition-all duration-200 text-sm"
            >
              Conoce al equipo
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 sm:mt-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#f7f5f2] rounded-2xl p-5 sm:p-6 text-center border border-[#1a1a2e]/5 hover:border-[#c22121]/20 transition-all duration-200"
            >
              <p className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-1">
                {stat.value}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}