import en from "../translations/en";
import es from "../translations/es";
import { useLanguage } from "../context/LanguageContext";

/*
 * ============================================================
 *  useTranslation.js — La función t() que usan los componentes
 * ============================================================
 *
 *  Este hook conecta dos piezas:
 *    a) El idioma activo (viene del LanguageContext)
 *    b) Los archivos de traducción (en.js y es.js)
 *
 *  Uso dentro de cualquier componente:
 *
 *    const { t } = useTranslation();
 *    <h1>{t("hero.titleLine1")}</h1>
 *
 *  t() también puede devolver arrays u objetos, útil para listas:
 *
 *    const servicios = t("benefits.items");  // ← array completo
 *    servicios.map(s => <Card title={s.title} />)
 */

// Diccionario maestro: junta ambos idiomas bajo su código
const translations = { en, es };

export function useTranslation() {
  // Leemos el idioma activo y la función de cambio del contexto
  const { language, toggleLanguage } = useLanguage();

  /*
   * t(key) — La función traductora.
   *
   * Recibe una clave con notación de puntos, ej: "hero.titleLine1"
   * y navega el objeto de traducciones paso a paso:
   *
   *   "hero.titleLine1"
   *      → se divide en ["hero", "titleLine1"]
   *      → translations["es"]["hero"]["titleLine1"]
   *      → "Recupera tu vida"
   */
  function t(key) {
    // "hero.titleLine1" → ["hero", "titleLine1"]
    const keys = key.split(".");

    // Empezamos desde la raíz del idioma activo
    let value = translations[language];

    // Navegamos nivel por nivel. El operador ?. evita errores
    // si algún nivel intermedio no existe.
    for (const k of keys) {
      value = value?.[k];
    }

    /*
     * Fallback: si la clave no existe en el archivo de traducción,
     * devolvemos la clave misma en lugar de undefined.
     * Así, si olvidaste traducir algo, verás "hero.tituloX" en
     * pantalla y sabrás exactamente qué falta.
     */
    return value ?? key;
  }

  // Exponemos todo lo que un componente pueda necesitar
  return { t, language, toggleLanguage };
}
