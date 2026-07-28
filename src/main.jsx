import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LanguageProvider } from "./context/LanguageContext";
import App from "./App.jsx";
import "./index.css";

/*
 * ============================================================
 *  main.jsx — Punto de entrada de la app
 * ============================================================
 *
 *  El único cambio respecto a tu versión original es que ahora
 *  <App /> está envuelto en <LanguageProvider>.
 *
 *  Esto es OBLIGATORIO para que el sistema de idiomas funcione:
 *  el Provider es quien "reparte" el idioma activo a todos los
 *  componentes. Si un componente llama useTranslation() y no hay
 *  Provider arriba en el árbol, React lanzará un error.
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);
