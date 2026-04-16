import { useState } from "react";

export default function Navbar() {

    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#1a1a2e] backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">

                    {/* LOGO SECTION */}
                    <div className="flex items-center space-x-2 group cursor-pointer">
                        <div>
                            <img
                                src="/logo-1.png"
                                alt="AAIC Logo"
                                className="w-6 h-6 sm:w-8 sm:h-8"
                            />
                        </div>
                        <span className="text-lg text-white sm:text-xl md:text-2xl font-medium tracking-wide">
                            <span>AUTO </span>
                            <span>ACCIDENT </span>
                            <span>INJURE </span>
                            <span>CARE</span>
                        </span>
                    </div>

                    {/* LINKS SECTION */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href="#Quees" className="text-white/70 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                            Chiropractor
                        </a>
                        <a href="#Features" className="text-white/70 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                            Features
                        </a>
                        <a href="#Benefits" className="text-white/70 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                            Benefits
                        </a>
                        <a href="#AboutUs" className="text-white/70 hover:text-white transition-colors duration-200 text-sm lg:text-base">
                            About Us
                        </a>
                        <a href="#contacto" className="px-4 py-2 bg-[#c22121] hover:bg-[#a81c1c] text-white text-sm lg:text-base font-semibold rounded-lg transition-colors duration-200">
                            Contáctanos
                        </a>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        className="md:hidden p-2 text-white/70 hover:text-white transition-colors duration-200"
                        onClick={() => setMobileMenuIsOpen((prev) => !prev)}
                    >
                        {mobileMenuIsOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 sm:w-6 sm:h-6">
                                <line x1="4" x2="20" y1="6" y2="6" />
                                <line x1="4" x2="20" y1="12" y2="12" />
                                <line x1="4" x2="20" y1="18" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {mobileMenuIsOpen && (
                <div className="md:hidden bg-[#1a1a2e] border-t border-white/10 animate-in slide-in-from-top duration-300">
                    <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                        <a href="#Quees" onClick={() => setMobileMenuIsOpen(false)} className="block text-white/70 hover:text-white transition-colors duration-200 text-sm">
                            Chiropractor
                        </a>
                        <a href="#Features" onClick={() => setMobileMenuIsOpen(false)} className="block text-white/70 hover:text-white transition-colors duration-200 text-sm">
                            Features
                        </a>
                        <a href="#Benefits" onClick={() => setMobileMenuIsOpen(false)} className="block text-white/70 hover:text-white transition-colors duration-200 text-sm">
                            Benefits
                        </a>
                        <a href="#AboutUs" onClick={() => setMobileMenuIsOpen(false)} className="block text-white/70 hover:text-white transition-colors duration-200 text-sm">
                            About Us
                        </a>
                        <a href="#contacto" onClick={() => setMobileMenuIsOpen(false)} className="block w-full text-center px-4 py-2 bg-[#c22121] hover:bg-[#a81c1c] text-white font-semibold rounded-lg transition-colors duration-200 text-sm"
                        >
                            Contáctanos
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}