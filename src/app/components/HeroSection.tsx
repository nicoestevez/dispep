'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header className="relative" id="inicio">
                <div
                    className="relative h-[555px] bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `linear-gradient(0deg, rgba(85, 107, 47, 0.20) 0%, rgba(85, 107, 47, 0.20) 100%), url('/images/Hero Section.png')`,
                    }}
                >
                    {/* Navigation */}
                    <nav className="flex justify-between items-center px-10 py-6 relative z-50">
                        <div className="text-white font-montserrat text-xl font-bold">
                            DISPEP
                        </div>
                        <div className="hidden md:flex space-x-8 text-white font-montserrat text-lg">
                            <button onClick={() => scrollToSection("inicio")} className="hover:text-gray-200 transition-colors">
                                Inicio
                            </button>
                            <button onClick={() => scrollToSection("productos")} className="hover:text-gray-200 transition-colors">
                                Productos
                            </button>
                            <button onClick={() => scrollToSection("nosotros")} className="hover:text-gray-200 transition-colors">
                                Nosotros
                            </button>
                            <button onClick={() => scrollToSection("contacto")} className="hover:text-gray-200 transition-colors">
                                Contacto
                            </button>
                        </div>
                        <div className="md:hidden">
                            <button onClick={toggleMobileMenu} className="text-white p-2">
                                {isMobileMenuOpen ? (
                                    <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
                                        <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" />
                                    </svg>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </nav>

                    {/* Hero Content */}
                    <div className="flex flex-col items-center justify-center text-center px-4 mt-16 md:mt-24">
                        <h1 className="text-white font-montserrat text-3xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight mb-8">
                            Materiales de construcción de calidad, al mejor precio
                        </h1>
                        <button
                            onClick={() => scrollToSection("nosotros")}
                            className="bg-dispep-primary text-white font-montserrat font-bold px-8 py-3 rounded-lg hover:bg-dispep-primary/90 transition-all duration-200 hover:scale-105"
                        >
                            Conócenos.
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `linear-gradient(0deg, rgba(85, 107, 47, 0.20) 0%, rgba(85, 107, 47, 0.20) 100%), url('/images/Hero Section Mobile.png')`,
                        }}
                    >
                        <div className="bg-white mx-4 mt-20 rounded-lg px-4 py-8">
                            <div className="space-y-0">
                                {[
                                    { id: "inicio", label: "Inicio" },
                                    { id: "productos", label: "Productos" },
                                    { id: "nosotros", label: "Nosotros" },
                                    { id: "contacto", label: "Contacto" },
                                ].map(({ id, label }, i) => (
                                    <button
                                        key={id}
                                        onClick={() => scrollToSection(id)}
                                        className={`w-full flex justify-between items-center py-4 ${
                                            i === 0 ? "border-t border-b" : "border-b"
                                        } border-dispep-primary`}
                                    >
                                        <span className="text-dispep-primary font-montserrat text-xl font-bold">{label}</span>
                                        <svg className="w-8 h-8 text-dispep-primary" fill="none" stroke="currentColor" viewBox="0 0 31 30">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M11.75 22.5L19.25 15L11.75 7.5" />
                                        </svg>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
