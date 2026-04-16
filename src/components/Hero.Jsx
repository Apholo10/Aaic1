import { ArrowRight } from "lucide-react";


export default function Hero() {
   
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 overflow-hidden">

            {/* Imagen de fondo — lado derecho desktop */}
            <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 hidden lg:block">
                <img
                    src="/imagen-1.jpg"
                    alt="Auto Accident Injury Care"
                    className="w-full h-full object-cover object-center"
                />
                {/* Degradado que fusiona con el fondo crema */}
                <div className="absolute inset-0 bg-linear-to-r from-[#f7f5f2] via-[#f7f5f2]/60 to-transparent" />
            </div>

            <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">

                    {/* Columna izquierda: texto */}
                    <div className="text-center lg:text-left">

                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-[#c22121]/10 border border-[#c22121]/25 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700">
                            <span className="text-xs sm:text-sm text-[#c22121] font-medium">
                                Texto de titulo
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
                            <span className="text-[#1a1a2e] block mb-1 sm:mb-2">
                                TEXTO EJEMPLO
                            </span>
                            <span className="text-[#c22121] block mb-1 sm:mb-2">
                                TEXTO EJEMPLO
                            </span>
                            <span className="text-[#1a1a2e] block mb-1 sm:mb-2">
                                TEXTO EJEMPLO
                            </span>
                        </h1>

                        {/* Párrafo */}
                        <p className="text-md sm:text-base lg:text-lg text-[#1a1a2e]/70 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </p>

                        {/* Botón CTA */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300">
                            <button className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#c22121] hover:bg-[#a81c1c] rounded-lg font-semibold text-sm sm:text-base text-white transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2">
                                <span>BUTTON</span>
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>

                    {/* Imagen móvil */}
                    <div className="relative w-full lg:hidden order-2">
                        <img
                            src="/imagen-1.jpg"
                            alt="Auto Accident Injury Care"
                            className="w-full h-64 sm:h-80 object-cover object-center rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#f7f5f2]/80 via-[#f7f5f2]/20 to-transparent rounded-2xl" />
                    </div>

                </div>
            </div>
        </section>
    );
}