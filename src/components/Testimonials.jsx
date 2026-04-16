import { useState, useEffect } from "react";

// ⚠️ Reemplaza con tu API Key y Place ID de Google
const GOOGLE_API_KEY = "TU_API_KEY";
const PLACE_ID = "TU_PLACE_ID";

// Testimonios de ejemplo — se reemplazan cuando conectes la API
const fallbackTestimonials = [
  {
    name: "Maria González",
    rating: 5,
    text: "Después de mi accidente estaba muy asustada y con mucho dolor. El equipo de AAIC me atendió el mismo día y desde la primera sesión sentí alivio. Los recomiendo al 100%.",
    date: "Hace 2 semanas",
    initials: "MG",
  },
  {
    name: "Carlos Ramírez",
    rating: 5,
    text: "Excelente atención. Me ayudaron con todo el papeleo del seguro y mi caso legal. Sin ellos no hubiera sabido por dónde empezar. Mi espalda está mucho mejor ahora.",
    date: "Hace 1 mes",
    initials: "CR",
  },
  {
    name: "Jennifer Torres",
    rating: 5,
    text: "El doctor fue muy profesional y explicó cada paso del tratamiento. En pocas semanas recuperé el movimiento del cuello que perdí por el accidente. Gracias a todo el equipo.",
    date: "Hace 3 semanas",
    initials: "JT",
  },
  {
    name: "Roberto Méndez",
    rating: 4,
    text: "Muy buena clínica. La atención es rápida y el personal muy amable. Me sentí en buenas manos desde el primer día. Totalmente recomendable si tuviste un accidente.",
    date: "Hace 2 meses",
    initials: "RM",
  },
  {
    name: "Ana Flores",
    rating: 5,
    text: "No sabía que existía un lugar así. Me ayudaron con el dolor de espalda y además me conectaron con un abogado. Un servicio completo e integral. Muy agradecida.",
    date: "Hace 1 semana",
    initials: "AF",
  },
  {
    name: "David Castillo",
    rating: 5,
    text: "Después de semanas con dolor pensé que nunca iba a recuperarme. Aquí me dieron un plan de tratamiento claro y en menos de un mes ya podía moverme sin dolor.",
    date: "Hace 5 semanas",
    initials: "DC",
  },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-[#c22121]" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ name, rating, text, date, initials, index }) {
  return (
    <div
      className="bg-white rounded-2xl p-6 sm:p-7 border border-[#1a1a2e]/8 hover:shadow-lg hover:border-[#c22121]/20 transition-all duration-300 flex flex-col gap-4 animate-in slide-in-from-bottom duration-700"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
            {initials}
          </div>
          <div>
            <p className="font-semibold text-[#1a1a2e] text-sm">{name}</p>
            <p className="text-xs text-gray-400">{date}</p>
          </div>
        </div>
        {/* Google icon */}
        <svg className="w-5 h-5 opacity-40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>

      {/* Estrellas */}
      <StarRating rating={rating} />

      {/* Texto */}
      <p className="text-gray-500 text-sm leading-relaxed flex-1">
        "{text}"
      </p>
    </div>
  );
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(fallbackTestimonials);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [averageRating, setAverageRating] = useState(4.9);
  const [totalReviews, setTotalReviews] = useState(128);

  // 🔌 Descomenta esto cuando tengas tu API Key y Place ID listos
  /*
  useEffect(() => {
    async function fetchGoogleReviews() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_API_KEY}`
        );
        const data = await res.json();
        const reviews = data.result?.reviews;

        if (reviews && reviews.length > 0) {
          const mapped = reviews.map((r) => ({
            name: r.author_name,
            rating: r.rating,
            text: r.text,
            date: r.relative_time_description,
            initials: r.author_name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase(),
          }));
          setTestimonials(mapped);
          setAverageRating(data.result.rating);
          setTotalReviews(data.result.user_ratings_total);
        }
      } catch (err) {
        setError("No se pudieron cargar las reseñas.");
      } finally {
        setLoading(false);
      }
    }

    fetchGoogleReviews();
  }, []);
  */

  return (
    <section
      id="Testimonials"
      className="py-16 sm:py-20 px-6 sm:px-6 lg:px-8 bg-[#f7f5f2] relative"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[#c22121]/10 border border-[#c22121]/25 rounded-full mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm text-[#c22121] font-medium">
              Reseñas de Google
            </span>
          </div>
          <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-[#1a1a2e] leading-tight">
            Lo que dicen
            <br />
            <span className="text-[#c22121]">nuestros pacientes</span>
          </h2>

          {/* Rating summary */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <span className="text-4xl font-bold text-[#1a1a2e]">{averageRating}</span>
            <div className="flex flex-col items-start gap-1">
              <StarRating rating={Math.round(averageRating)} />
              <span className="text-sm text-gray-400">{totalReviews} reseñas verificadas</span>
            </div>
          </div>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="text-center py-12 text-gray-400 text-sm">
            Cargando reseñas...
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="text-center py-4 text-[#c22121] text-sm mb-8">
            {error}
          </div>
        )}

        {/* Grid */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} index={i} />
            ))}
          </div>
        )}

        {/* CTA bottom */}
        <div className="text-center mt-12">
          
           <a href={`https://search.google.com/local/reviews?placeid=${PLACE_ID}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-[#1a1a2e]/20 rounded-lg text-[#1a1a2e] text-sm font-semibold hover:bg-[#1a1a2e] hover:text-white transition-all duration-200">
            Ver todas las reseñas en Google
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}