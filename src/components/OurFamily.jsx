import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";
import crewImage from "../assets/wholecrew.jpg";
import arelyImage from "../assets/arely.jpg";
import ceciImage from "../assets/ceci.jpg";
import ginaImage from "../assets/gina.jpg";
import jasmineImage from "../assets/jasmine.jpg";
import kennsieImage from "../assets/kennsie.jpg";

/*
 * ============================================================
 *  OurFamily.jsx — Sección del equipo con traducciones
 * ============================================================
 *
 *  t("ourFamily.team") devuelve el array completo del equipo.
 *  Los nombres NO cambian entre idiomas (son nombres propios),
 *  pero los roles y bios sí — por eso todo vive en las
 *  traducciones para mantener una sola fuente de verdad.
 */
export default function OurFamily() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  // Array del equipo en el idioma activo
  const team = Array.isArray(t("ourFamily.team")) ? t("ourFamily.team") : [];
  const displayTeam = team.filter((member) => member?.name?.toLowerCase() !== "belinda castillo").slice(0, 6);

  const getMemberImage = (name) => {
    if (!name) return crewImage;

    const normalizedName = name.toLowerCase();

    if (normalizedName.includes("ceci")) return ceciImage;
    if (normalizedName.includes("gina")) return ginaImage;
    if (normalizedName.includes("kennsie")) return kennsieImage;
    if (normalizedName.includes("jasmine")) return jasmineImage;
    if (normalizedName.includes("arely")) return arelyImage;

    return crewImage;
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const delta = touchStart - touchEnd;

    if (delta > 50) {
      setActiveIndex((prev) => (prev + 1) % displayTeam.length);
    } else if (delta < -50) {
      setActiveIndex((prev) => (prev - 1 + displayTeam.length) % displayTeam.length);
    }

    setTouchStart(null);
  };

  const activeMember = displayTeam[activeIndex] || null;

  return (
    <section
      id="AboutUs"
      className="py-16 sm:py-20 px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Círculo decorativo difuminado */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#c22121]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#c22121]/10 border border-[#c22121]/25 rounded-full mb-6">
            <span className="text-xs sm:text-sm text-[#c22121] font-medium">
              {t("ourFamily.badge")}
            </span>
          </div>
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#1a1a2e] leading-tight">
            {t("ourFamily.title1")}
            <br />
            <span className="text-[#c22121]">{t("ourFamily.title2")}</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t("ourFamily.subtitle")}
          </p>
        </div>

        {/* ===== FOTO GENERAL DEL CREW ===== */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="overflow-hidden rounded-[2rem] border border-[#1a1a2e]/8 bg-[#f7f5f2] shadow-sm">
            <img
              src={crewImage}
              alt="Nuestro equipo de Auto Accident Injury Care"
              className="w-full h-64 sm:h-80 md:h-96 object-cover object-[center_10%]"
            />
          </div>
        </div>

        {/* ===== TARJETAS DEL EQUIPO ===== */}
        <div className="mx-auto max-w-5xl">
          <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {displayTeam.map((member, index) => (
              <div
                key={member?.name || index}
                className="overflow-hidden rounded-[1.5rem] border border-[#1a1a2e]/8 bg-[#f7f5f2] shadow-sm"
              >
                <img
                  src={getMemberImage(member?.name)}
                  alt={member?.name || "Miembro del equipo"}
                  className="h-56 w-full object-cover object-[center_20%]"
                />
                <div className="p-4">
                  <h3 className="text-base font-bold text-[#1a1a2e]">
                    {member?.name || "Próximamente"}
                  </h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#c22121]">
                    {member?.role || "Nuevo miembro"}
                  </p>
                  {member?.bio && (
                    <p className="mt-3 text-sm leading-relaxed text-gray-500">
                      {member.bio}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {displayTeam.length > 0 && (
            <div
              className="block sm:hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className="overflow-hidden rounded-[1.5rem] border border-[#1a1a2e]/8 bg-[#f7f5f2] shadow-sm">
                <img
                  src={getMemberImage(activeMember?.name)}
                  alt={activeMember?.name || "Miembro del equipo"}
                  className="h-72 w-full object-cover object-[center_20%]"
                />
                <div className="p-4">
                  <h3 className="text-base font-bold text-[#1a1a2e]">
                    {activeMember?.name || "Próximamente"}
                  </h3>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#c22121]">
                    {activeMember?.role || "Nuevo miembro"}
                  </p>
                  {activeMember?.bio && (
                    <p className="mt-3 text-sm leading-relaxed text-gray-500">
                      {activeMember.bio}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-3 flex items-center justify-center gap-2">
                {displayTeam.map((member, index) => (
                  <button
                    key={member?.name || index}
                    type="button"
                    aria-label={`Ver a ${member?.name || "miembro del equipo"}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full transition ${index === activeIndex ? "bg-[#c22121]" : "bg-[#1a1a2e]/20"}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ===== BANNER INFERIOR ===== */}
        <div className="mt-12 bg-[#f7f5f2] border border-[#1a1a2e]/8 rounded-2xl p-7 sm:p-8 text-center">
          <p className="text-[#1a1a2e] font-bold text-lg mb-2">
            {t("ourFamily.banner.title")}
          </p>
          <p className="text-gray-500 text-sm mb-5 max-w-md mx-auto">
            {t("ourFamily.banner.subtitle")}
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a2e] hover:bg-[#2d2d4e] text-white font-semibold rounded-lg text-sm transition-all duration-200"
          >
            {t("ourFamily.banner.button")}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
