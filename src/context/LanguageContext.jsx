import { createContext, useContext, useState } from "react";

/*
 * ============================================================
 *  LanguageContext.jsx — El "cerebro" del sistema de idiomas
 * ============================================================
 *
 *  ¿Qué hace este archivo?
 *  1. Crea un Contexto de React: una especie de "variable global"
 *     a la que cualquier componente puede acceder sin necesidad
 *     de pasar props manualmente de padre a hijo.
 *  2. Guarda el idioma activo ("en" o "es") en un estado.
 *  3. Persiste la preferencia en localStorage para que el usuario
 *     no pierda su idioma al recargar la página.
 */

// 1) Creamos el contexto vacío. Se llenará con datos en el Provider.
export const LanguageContext = createContext();

/*
 * 2) LanguageProvider — componente que "envuelve" toda la app.
 *    Todo lo que esté dentro de <LanguageProvider> ... </LanguageProvider>
 *    podrá leer el idioma activo y cambiarlo.
 *
 *    Se usa en main.jsx así:
 *      <LanguageProvider>
 *        <App />
 *      </LanguageProvider>
 */
export function LanguageProvider({ children }) {
  /*
   * Estado del idioma activo.
   * localStorage.getItem() lee la preferencia guardada del usuario.
   * Si no existe (primera visita), usamos "en" como idioma por defecto.
   * Puedes cambiar el idioma por defecto a "es" si tu público
   * principal es hispanohablante.
   */
  const [language, setLanguage] = useState(
    localStorage.getItem("aaic-language") || "en"
  );

  /*
   * toggleLanguage — alterna entre inglés y español.
   * Además guarda la nueva preferencia en localStorage
   * para que sobreviva a recargas de página.
   */
  function toggleLanguage() {
    const next = language === "en" ? "es" : "en";
    setLanguage(next);
    localStorage.setItem("aaic-language", next);
  }

  /*
   * El "value" del Provider es lo que los componentes hijos reciben
   * cuando llaman a useLanguage(): el idioma actual y la función
   * para cambiarlo.
   */
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

/*
 * 3) useLanguage — hook de conveniencia.
 *    En lugar de escribir useContext(LanguageContext) en cada
 *    componente, solo escribimos useLanguage().
 */
export function useLanguage() {
  return useContext(LanguageContext);
}
