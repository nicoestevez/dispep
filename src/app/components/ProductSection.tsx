'use client';

import { useState, useEffect } from 'react';
import ProductModal from './ProductModal';

const productSets = [
    // First set of products
    [
        {
            id: 1,
            name: "Pisos Flotantes",
            description:
                "Pisos flotantes para interiores, con gran variedad en color, diseño y tamaños.",
            image:
                "/images/Pisos Flotantes.png",
        },
        {
            id: 2,
            name: "Paneles SIP",
            description:
                "Paneles duraderos y resistentes perfectos para construcción.",
            image:
                "/images/Paneles SIP.png",
        },
        {
            id: 3,
            name: "Planchas OSB",
            description:
                "Planchas de gran calidad de tamaños distintos y de variados grosores.",
            image:
                "/images/Planchas OSB.png",
        },
        {
            id: 4,
            name: "Bloques de Hormigón",
            description:
                "Bloques resistentes y durables que se pueden utilizar para distintos tipos de construcciones.",
            image:
                "/images/Bloques.png",
        },
    ],
    [
        {
            id: 5,
            name: "Wall Panel",
            description:
                "Wall Panel de alta calidad para ocuparlo en la decoración de espacios interiores.",
            image:
                "/images/Wall Panel.png",
        },
        {
            id: 6,
            name: "Racks Metálicos",
            description:
                "Racks metálicos para soportar grandes cantidades de peso.",
            image:
                "/images/Rack Metálico.png",
        },
        {
            id: 7,
            name: "Barredoras Industriales",
            description:
                "Barredoras industriales para distintos usos y superficies.",
            image:
                "/images/Barredora Industrial.png",
        },
        {
            id: 8,
            name: "HDPE",
            description:
                "Coplas, THE, transiciones y diversos fittings de HDPE de distintos tamaños.",
            image:
                "/images/HDPE.png",
        },
    ],
];

export default function ProductSection() {
    const isMobileMenuOpen = false;
    const [currentProductPage, setCurrentProductPage] = useState(0);
    const [currentMobileProduct, setCurrentMobileProduct] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<string>('');
    const [selectedProductImage, setSelectedProductImage] = useState<string>('');
    const [selectedProductTitle, setSelectedProductTitle] = useState<string>('');
    const [selectedProductDescription, setSelectedProductDescription] = useState<string>('');

    const currentProducts = productSets[currentProductPage];
    const allProducts = productSets.flat(); // Flatten both sets for mobile navigation

    // Sample product data for modal - in a real app this would come from an API
    const getProductModalData = (productName: string) => {
        const productDataMap: Record<string, any> = {
            "Planchas OSB": [
                {
                    title: "Planchas OSB",
                    description: "Planchas de gran calidad de tamaños distintos y de variados grosores.",
                    products: [
                        { codigo: "18630000", ref: "187010", medida: "20x40mm", color: "Café", precio: "$7.790" },
                        { codigo: "18630000", ref: "187010", medida: "20x40mm", color: "Café", precio: "$7.790" },
                        { codigo: "18630000", ref: "187010", medida: "20x40mm", color: "Café", precio: "$7.790" },
                        { codigo: "18630000", ref: "187010", medida: "20x40mm", color: "Café", precio: "$7.790" },
                    ]
                },
                {
                    title: "Metalcom",
                    description: "Metalcom perfecto para construcción.",
                    products: [
                        { codigo: "18630000", ref: "187010", medida: "20x40mm", color: "Café", precio: "$7.790" },
                        { codigo: "18630000", ref: "187010", medida: "20x40mm", color: "Café", precio: "$7.790" },
                        { codigo: "18630000", ref: "187010", medida: "20x40mm", color: "Café", precio: "$7.790" },
                        { codigo: "18630000", ref: "187010", medida: "20x40mm", color: "Café", precio: "$7.790" },
                        { codigo: "18630000", ref: "187010", medida: "20x40mm", color: "Café", precio: "$7.790" },
                    ]
                }
            ],
            // Default data for other products
            "default": [
                {
                    title: "Información del Producto",
                    description: "Detalles y especificaciones técnicas del producto seleccionado.",
                    products: [
                        { codigo: "12345000", ref: "123456", medida: "Variadas", color: "Varios", precio: "Consultar" },
                        { codigo: "12345001", ref: "123457", medida: "Variadas", color: "Varios", precio: "Consultar" },
                        { codigo: "12345002", ref: "123458", medida: "Variadas", color: "Varios", precio: "Consultar" },
                    ]
                }
            ]
        };

        return productDataMap[productName] || productDataMap["default"];
    };

    const handleOpenModal = (productName: string, productImage: string) => {
        setSelectedProduct(productName);
        setSelectedProductImage(productImage);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct('');
        setSelectedProductImage('');
    };

    const goToNextProducts = () => {
        if (currentProductPage < productSets.length - 1) {
            setCurrentProductPage(currentProductPage + 1);
        }
    };

    const goToPrevProducts = () => {
        if (currentProductPage > 0) {
            setCurrentProductPage(currentProductPage - 1);
        }
    };

    const goToNextMobileProduct = () => {
        if (currentMobileProduct < allProducts.length - 1) {
            setCurrentMobileProduct(currentMobileProduct + 1);
        }
    };

    const goToPrevMobileProduct = () => {
        if (currentMobileProduct > 0) {
            setCurrentMobileProduct(currentMobileProduct - 1);
        }
    };

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        // Cleanup function to restore scroll on unmount
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <section id="productos" className="bg-dispep-gray py-8 md:py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-dispep-primary font-montserrat text-xl md:text-4xl font-bold text-center mb-8 md:mb-12">
                    Nuestros Productos
                </h2>

                {/* Desktop Products Grid */}
                <div className="hidden md:flex justify-center items-center gap-4 mb-8">
                    {/* Left Arrow */}
                    <button
                        onClick={goToPrevProducts}
                        disabled={currentProductPage === 0}
                        className={`p-2 transition-colors ${currentProductPage === 0
                            ? "text-dispep-gray/50 cursor-not-allowed"
                            : "text-dispep-primary hover:text-dispep-primary/70 cursor-pointer"
                            }`}
                    >
                        <svg
                            className="w-12 h-12"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 48 48"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={4}
                                d="M30 36L18 24L30 12"
                            />
                        </svg>
                    </button>

                    {/* Product Cards Container */}
                    <div className="flex-1 max-w-5xl">
                        {/* Dynamic Product Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {currentProducts.map(product => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                                >
                                    <div
                                        className="h-48 bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url('${product.image}')`,
                                        }}
                                    ></div>
                                    <div className="p-6">
                                        <h3 className="text-dispep-primary font-montserrat text-xl font-semibold mb-2">
                                            {product.name}
                                        </h3>
                                        <p className="text-dispep-primary font-open-sans text-sm mb-4">
                                            {product.description}
                                        </p>
                                        <button
                                            onClick={() => handleOpenModal(product.name, product.image)}
                                            className="bg-dispep-primary text-white font-montserrat font-semibold px-6 py-2 rounded-lg hover:bg-dispep-primary/90 transition-colors"
                                        >
                                            Ver más
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={goToNextProducts}
                        disabled={currentProductPage === productSets.length - 1}
                        className={`p-2 transition-colors ${currentProductPage === productSets.length - 1
                            ? "text-dispep-gray/50 cursor-not-allowed"
                            : "text-dispep-primary hover:text-dispep-primary/70 cursor-pointer"
                            }`}
                    >
                        <svg
                            className="w-12 h-12"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 48 48"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={4}
                                d="M18 36L30 24L18 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Products Carousel */}
                <div className="md:hidden flex items-center justify-center gap-1 px-2">
                    {/* Left Arrow */}
                    <button
                        onClick={goToPrevMobileProduct}
                        disabled={currentMobileProduct === 0}
                        className={`p-1 transition-colors flex-shrink-0 ${currentMobileProduct === 0
                            ? "text-dispep-gray/50 cursor-not-allowed"
                            : "text-dispep-primary hover:text-dispep-primary/70 cursor-pointer"
                            }`}
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 32 33"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={4}
                                d="M20 24.5L12 16.5L20 8.5"
                            />
                        </svg>
                    </button>

                    {/* Single Product Card for Mobile */}
                    <div className="flex-1 max-w-sm mx-2">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div
                                className="h-32 bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('${allProducts[currentMobileProduct]?.image}')`,
                                }}
                            ></div>
                            <div className="p-3">
                                <h3 className="text-dispep-primary font-montserrat text-base font-semibold mb-1">
                                    {allProducts[currentMobileProduct]?.name}
                                </h3>
                                <p className="text-dispep-primary font-open-sans text-xs mb-3 leading-relaxed">
                                    {allProducts[currentMobileProduct]?.description}
                                </p>
                                <button
                                    onClick={() => handleOpenModal(allProducts[currentMobileProduct]?.name || '', allProducts[currentMobileProduct]?.image || '')}
                                    className="bg-dispep-primary text-white font-montserrat font-semibold px-3 py-1.5 rounded-lg hover:bg-dispep-primary/90 transition-colors text-xs"
                                >
                                    Ver más
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={goToNextMobileProduct}
                        disabled={currentMobileProduct === allProducts.length - 1}
                        className={`p-1 transition-colors flex-shrink-0 ${currentMobileProduct === allProducts.length - 1
                            ? "text-dispep-gray/50 cursor-not-allowed"
                            : "text-dispep-primary hover:text-dispep-primary/70 cursor-pointer"
                            }`}
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 32 33"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={4}
                                d="M12 24.5L20 16.5L12 8.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Product Modal */}
            <ProductModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                categories={getProductModalData(selectedProduct)}
                image={selectedProductImage}
            />
        </section>
    );
}
