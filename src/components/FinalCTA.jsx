import { useTranslation } from "../hooks/useTranslation";

/*
 * ============================================================
 *  FinalCTA.jsx — Llamada a la acción final con traducciones
 * ============================================================
 *
 *  Las 3 tarjetas de contacto (teléfono, horario, ubicación)
 *  se emparejan por índice con los íconos de ctaIcons, igual
 *  que en Features y Benefits.
 *
 *  RECUERDA: actualiza el teléfono, horario y ubicación reales
 *  en AMBOS archivos de traducción (finalCTA.cards).
 */

// Íconos en el mismo orden que finalCTA.cards en las traducciones
const ctaIcons = [
  // 0: Teléfono
  <svg key="phone" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#c22121]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>,
  // 1: Reloj (horario)
  <svg key="clock" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#c22121]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>,
  // 2: Pin de mapa (ubicación)
  <svg key="pin" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#c22121]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>,
];

export default function FinalCTA() {
  const { t } = useTranslation();

  // Array de tarjetas de contacto en el idioma activo
  const cards = t("finalCTA.cards");

  return (
    <section
      id="contacto"
      className="py-16 sm:py-20 px-6 sm:px-6 lg:px-8 bg-[#1a1a2e] relative overflow-hidden"
    >
      {/* Círculos decorativos difuminados */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#c22121]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#c22121]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">

        {/* ===== CONTENIDO CENTRAL ===== */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#c22121]/20 border border-[#c22121]/30 rounded-full mb-6">
            <span className="text-xs sm:text-sm text-[#c22121] font-medium">
              {t("finalCTA.badge")}
            </span>
          </div>

          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            {t("finalCTA.title1")}
            <br />
            <span className="text-[#c22121]">{t("finalCTA.title2")}</span>
          </h2>

          <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t("finalCTA.subtitle")}
          </p>
        </div>

        {/* ===== TARJETAS DE CONTACTO =====
            Se mapean desde las traducciones y se emparejan
            con los íconos por índice. */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:bg-white/10 transition-all duration-200"
            >
              <div className="w-10 h-10 bg-[#c22121]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                {ctaIcons[index]}
              </div>
              <p className="text-white/40 text-xs mb-1">{card.label}</p>
              <p className="text-white font-semibold text-sm">{card.value}</p>
            </div>
          ))}
        </div>

        {/* ===== BOTÓN CTA ===== */}
        <div className="flex justify-center">
          <a
            href="tel:4795790204"
            className="group w-full sm:w-auto px-8 py-4 bg-[#c22121] hover:bg-[#a81c1c] rounded-xl font-bold text-white text-base transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            {t("finalCTA.callButton")}
          </a>
        </div>

      </div>
    </section>
  );
}
