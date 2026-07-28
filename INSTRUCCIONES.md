# Sistema de Traducción Bilingüe (EN/ES) — AAIC Landing Page

Este paquete contiene todos los archivos necesarios para que la landing page
funcione en inglés y español, con un botón de cambio de idioma en el Navbar.

---

## 📁 Contenido del paquete

```
src/
├── main.jsx                      ← MODIFICADO: envuelto con LanguageProvider
├── context/
│   └── LanguageContext.jsx       ← NUEVO: estado global del idioma
├── hooks/
│   └── useTranslation.js         ← NUEVO: función t() que traduce
├── translations/
│   ├── en.js                     ← NUEVO: todos los textos en inglés
│   └── es.js                     ← NUEVO: todos los textos en español
└── components/
    ├── Navbar.jsx                ← MODIFICADO: toggle de idioma + t()
    ├── Hero.jsx                  ← MODIFICADO: usa t()
    ├── Quees.jsx                 ← MODIFICADO: usa t()
    ├── Features.jsx              ← MODIFICADO: usa t()
    ├── Benefits.jsx              ← MODIFICADO: usa t()
    ├── OurFamily.jsx             ← MODIFICADO: usa t()
    ├── Testimonials.jsx          ← MODIFICADO: usa t()
    ├── FinalCTA.jsx              ← MODIFICADO: usa t()
    └── Footer.jsx                ← MODIFICADO: usa t()
```

**App.jsx NO necesita cambios** — sigue igual que lo tienes.

---

## 🚀 Instalación

1. Copia las carpetas `context/`, `hooks/` y `translations/` dentro de tu `src/`.
2. Reemplaza tu `main.jsx` por el de este paquete
   (o solo agrega el `<LanguageProvider>` alrededor de `<App />`).
3. Reemplaza los componentes de `src/components/` por los de este paquete.
4. Corre el proyecto y verifica el botón de idioma (🌐 EN/ES) en el Navbar.

---

## 🧠 Cómo funciona (resumen)

1. `LanguageContext.jsx` guarda el idioma activo ("en" o "es") y lo
   persiste en localStorage.
2. `useTranslation.js` expone la función `t("clave.anidada")` que busca
   el texto en el archivo del idioma activo.
3. Cada componente llama `const { t } = useTranslation()` y usa
   `{t("hero.badge")}` en lugar de texto fijo.
4. El botón del Navbar llama `toggleLanguage()` y TODA la página se
   re-renderiza en el otro idioma instantáneamente.

---

## ✏️ Cómo editar textos

- Todos los textos viven en `src/translations/en.js` y `es.js`.
- Para cambiar un texto: edítalo en AMBOS archivos (misma clave).
- Para agregar un texto nuevo:
  1. Agrégalo en `en.js` y `es.js` con la misma clave.
  2. Úsalo en el componente: `{t("seccion.nuevaClave")}`.

⚠️ Las estructuras de `en.js` y `es.js` deben ser idénticas
(mismas claves, mismos arrays, mismo orden). Solo cambia el texto.

---

## ⚠️ Pendientes de personalizar

- [ ] Teléfono real: en `en.js` y `es.js` (finalCTA.cards) + el
      `href="tel:..."` en FinalCTA.jsx + la barra inferior del Footer.jsx
- [ ] Horario y ubicación reales (finalCTA.cards en ambos idiomas)
- [ ] Links de redes sociales en Footer.jsx (href="#")
- [ ] Imagen del Hero: reemplazar `/tu-imagen.jpg`
- [ ] Fotos del equipo en OurFamily.jsx (actualmente placeholders)
- [ ] Nombres/roles/bios reales del equipo (ourFamily.team en ambos idiomas)

---

## 🗣️ Idioma por defecto

Actualmente el idioma por defecto es **inglés**. Para cambiarlo a español,
edita `LanguageContext.jsx` línea del useState:

```js
// Cambiar "en" por "es":
localStorage.getItem("aaic-language") || "es"
```
