export default function AboutSection() {
    return (
        <section id="nosotros" className="bg-white py-8 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-12">
                    {/* Text Content */}
                    <div className="flex-1 lg:pr-12 px-4 md:px-0">
                        <h2 className="text-dispep-primary font-montserrat text-xl md:text-4xl font-bold mb-4 md:mb-6">
                            Quiénes Somos
                        </h2>
                        <p className="text-dispep-primary font-open-sans text-sm md:text-xl leading-relaxed">
                            Dispep es una empresa dedicada a la venta de materiales de
                            construcción, con enfoque en la calidad, variedad y buenos
                            precios para todos sus clientes.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex-1 w-full">
                        <img
                            src="/images/Galpón.png"
                            alt="DISPEP Warehouse"
                            className="w-full h-48 md:h-80 object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}