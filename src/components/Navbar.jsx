import { useState } from "react";
import { useTranslation } from "../hooks/useTranslation";

/*
 * ============================================================
 *  Navbar.jsx — Barra de navegación con toggle de idioma
 * ============================================================
 *
 *  Cambios respecto a la versión anterior:
 *  1. Se importa useTranslation y se extraen t, language y
 *     toggleLanguage.
 *  2. Todos los textos fijos se reemplazaron por t("navbar.xxx").
 *  3. Se agregó el botón de idioma (EN/ES) en desktop y móvil.
 */
export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  /*
   * t              → función traductora
   * language       → idioma activo ("en" o "es")
   * toggleLanguage → alterna entre ambos idiomas
   */
  const { t, language, toggleLanguage } = useTranslation();

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#1a1a2e] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">

          {/* ===== LOGO ===== */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <img
              src="/logo-1.png"
              alt="AAIC Logo"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
            <span className="text-lg text-white sm:text-xl md:text-2xl font-medium tracking-wide">
              AUTO ACCIDENT INJURY CARE
            </span>
          </div>

          {/* ===== LINKS DESKTOP ===== */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#Quees" className="text-white/70 hover:text-white transition-colors duration-200 text-sm lg:text-base">
              {t("navbar.chiropractor")}
            </a>
            <a href="#Features" className="text-white/70 hover:text-white transition-colors duration-200 text-sm lg:text-base">
              {t("navbar.services")}
            </a>
            <a href="#Benefits" className="text-white/70 hover:text-white transition-colors duration-200 text-sm lg:text-base">
              {t("navbar.benefits")}
            </a>
            <a href="#AboutUs" className="text-white/70 hover:text-white transition-colors duration-200 text-sm lg:text-base">
              {t("navbar.about")}
            </a>

            {/* Botón CTA */}
            <a
              href="#contacto"
              className="px-4 py-2 bg-[#c22121] hover:bg-[#a81c1c] text-white text-sm lg:text-base font-semibold rounded-lg transition-colors duration-200"
            >
              {t("navbar.cta")}
            </a>

            {/*
              TOGGLE DE IDIOMA (desktop)
              Muestra el idioma al que PUEDES cambiar, no el activo:
              - Si estás en inglés  → el botón dice "ES"
              - Si estás en español → el botón dice "EN"
            */}
            <button
              onClick={toggleLanguage}
              aria-label="Change language"
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/20 hover:border-white/50 rounded-lg text-white/70 hover:text-white text-sm font-semibold transition-all duration-200"
            >
              {/* Ícono de globo — refuerza visualmente que es un selector de idioma */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              {language === "en" ? "ES" : "EN"}
            </button>
          </div>

          {/* ===== BOTÓN MENÚ MÓVIL ===== */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors duration-200"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileMenuIsOpen ? (
              /* Ícono X — menú abierto */
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              /* Ícono hamburguesa — menú cerrado */
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ===== MENÚ MÓVIL DESPLEGABLE ===== */}
      {mobileMenuIsOpen && (
        <div className="md:hidden bg-[#1a1a2e] border-t border-white/10 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a href="#Quees" onClick={() => setMobileMenuIsOpen(false)} className="block text-white/70 hover:text-white transition-colors duration-200 text-sm">
              {t("navbar.chiropractor")}
            </a>
            <a href="#Features" onClick={() => setMobileMenuIsOpen(false)} className="block text-white/70 hover:text-white transition-colors duration-200 text-sm">
              {t("navbar.services")}
            </a>
            <a href="#Benefits" onClick={() => setMobileMenuIsOpen(false)} className="block text-white/70 hover:text-white transition-colors duration-200 text-sm">
              {t("navbar.benefits")}
            </a>
            <a href="#AboutUs" onClick={() => setMobileMenuIsOpen(false)} className="block text-white/70 hover:text-white transition-colors duration-200 text-sm">
              {t("navbar.about")}
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block w-full text-center px-4 py-2 bg-[#c22121] hover:bg-[#a81c1c] text-white font-semibold rounded-lg transition-colors duration-200 text-sm"
            >
              {t("navbar.cta")}
            </a>

            {/*
              TOGGLE DE IDIOMA (móvil)
              Usa texto completo en vez de solo "EN"/"ES" para más claridad.
              El texto viene de las traducciones: cada idioma invita
              a cambiar al otro.
            */}
            <button
              onClick={toggleLanguage}
              className="block w-full text-center px-4 py-2 border border-white/20 text-white/70 hover:text-white rounded-lg text-sm font-semibold transition-all duration-200"
            >
              {t("navbar.switchLanguage")}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
