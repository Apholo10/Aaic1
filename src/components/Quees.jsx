import { useTranslation } from "../hooks/useTranslation";

/*
 * ============================================================
 *  Quees.jsx — Sección "Quiénes somos" con traducciones
 * ============================================================
 *
 *  Nota sobre las estadísticas:
 *  t("quees.stats") devuelve un ARRAY completo (no un string),
 *  porque en los archivos de traducción "stats" está definido
 *  como un array de objetos { value, label }.
 *  Eso permite hacer .map() directamente sobre el resultado.
 */
export default function Quees() {
  const { t } = useTranslation();

  // Array de estadísticas en el idioma activo
  const stats = t("quees.stats");

  return (
    <section
      id="Quees"
      className="py-16 sm:py-20 px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Círculo decorativo difuminado */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#c22121]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ===== IMAGEN REAL ===== */}
          <div className="relative w-full order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden bg-[#f7f5f2] border border-[#1a1a2e]/8 aspect-[4/3]">
              <img
                src="/src/assets/quees.webp"
                alt="Clínica Autoinjur"
                className="h-full w-full object-cover"
              />
              {/* Línea de acento rojo en la parte inferior */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#c22121]" />
            </div>

            {/* Badge flotante con el año de fundación */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 bg-[#1a1a2e] text-white px-5 py-3 rounded-xl shadow-lg">
              <p className="text-xs text-white/50 mb-0.5">{t("quees.foundedLabel")}</p>
              <p className="text-xl font-bold">2022</p>
            </div>
          </div>

          {/* ===== TEXTO ===== */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#c22121]/10 border border-[#c22121]/25 rounded-full mb-6">
              <span className="text-xs sm:text-sm text-[#c22121] font-medium">
                {t("quees.badge")}
              </span>
            </div>

            <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#1a1a2e] leading-tight">
              {t("quees.title1")}
              <br />
              <span className="text-[#c22121]">{t("quees.title2")}</span>
            </h2>

            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-4">
              {t("quees.p1")}
            </p>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
              {t("quees.p2")}
            </p>

            <a
              href="#AboutUs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c22121] hover:bg-[#a81c1c] text-white font-semibold rounded-lg transition-all duration-200 text-sm"
            >
              {t("quees.button")}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* ===== ESTADÍSTICAS =====
            Se mapean directamente desde las traducciones. */}
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
