'use client';

import { useState } from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

export default function FooterSection() {
    const [email, setEmail] = useState("");

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Newsletter signup:", email);
        setEmail("");
    };

    return (
        <footer id="contacto" className="bg-dispep-gray py-8 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                    {/* Company Name */}
                    <div className="lg:w-auto">
                        <h3 className="text-dispep-primary font-montserrat text-xl font-bold">
                            DISPEP
                        </h3>
                    </div>

                    {/* Contact Information */}
                    <div className="flex-1 lg:max-w-sm">
                        <h4 className="text-dispep-primary font-montserrat text-xl font-medium mb-6">
                            Contacto
                        </h4>
                        <div className="space-y-4">
                            {/* Phone */}
                            <div className="flex items-center gap-3">
                                <FiPhone className="w-6 h-6 text-dispep-primary" />
                                <span className="text-dispep-primary font-open-sans">
                                    +56 9 8127 9004
                                </span>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3">
                                <FiMail className="w-5 h-5 text-dispep-primary" />
                                <a
                                    href="mailto:contacto@dispep.cl"
                                    className="text-dispep-primary font-open-sans hover:underline focus:outline-none"
                                    aria-label="Enviar correo a contacto@dispep.cl"
                                >
                                    contacto@dispep.cl
                                </a>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-3">
                                <FiMapPin className="w-6 h-6 text-dispep-primary mt-0.5" />
                                <span className="text-dispep-primary font-open-sans">
                                    <a
                                        href="https://maps.app.goo.gl/Mc6fGfL4ndbwk1sC9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-dispep-primary font-open-sans hover:underline focus:outline-none"
                                        aria-label="Abrir dirección en Google Maps"
                                    >
                                        Camino Tapihue KM 0,7,<br />Casablanca
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Warehouse Image */}
                    <div className="lg:w-80">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.3816311551373!2d-71.38550172355998!3d-33.32864739128592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96626fe10a1104a7%3A0xc1a44a356954072e!2sDispep!5e1!3m2!1ses!2scl!4v1753222918160!5m2!1ses!2scl"
                            width="100%"
                            height="220"
                            style={{ border: 0, borderRadius: '0.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación DISPEP en Google Maps"
                        ></iframe>
                    </div>

                    {/* Newsletter Section */}
                    <div className="lg:w-80">
                        <h4 className="text-dispep-primary font-montserrat text-xl font-medium mb-6">
                            Ofertas
                        </h4>
                        <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Ingresa tu correo electrónico"
                                    className="w-full h-12 px-4 pr-12 bg-dispep-primary/20 rounded-lg border-none outline-none text-dispep-primary placeholder-dispep-primary/50 font-open-sans"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-dispep-primary hover:text-dispep-primary/70 transition-colors"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M15.3497 17.5L11.9543 15.2148L10.5851 16.3628L10.029 13.9189L15.9587 8.72567L8.84882 12.8097L5.5 10.3935L18.5 6.5L15.3497 17.5Z"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-dispep-primary/60 font-open-sans text-sm">
                                No te pierdas nuestras novedades y ofertas exclusivas.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}