'use client';

import { useEffect } from 'react';

interface Product {
  codigo: string;
  ref: string;
  medida: string;
  color: string;
  precio: string;
}

interface ProductCategory {
  title: string;
  description: string;
  products: Product[];
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  categories: ProductCategory[];
  image?: string;
  title?: string;
  description?: string;
}

export default function ProductModal({ isOpen, onClose, categories, image, title, description }: ProductModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with hero image and close button */}
        <div
          className="relative h-64 md:h-72 bg-cover bg-center rounded-t-lg flex justify-end items-start p-3"
          style={{
            backgroundImage: `url('${image || 'https://api.builder.io/api/v1/image/assets/TEMP/eb6e79fac6fe31d28f4d883599c51a78ee18dc1d?width=1872'}')`
          }}
        >
          <button
            onClick={onClose}
            className="bg-black/20 hover:bg-black/40 transition-colors rounded-full p-2"
            aria-label="Cerrar modal"
          >
            <svg 
              className="w-6 h-6 text-white" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="px-6 md:px-8 py-6">
              {/* Category header */}
              <div className="mb-6">
                <h2 className="text-dispep-primary font-open-sans text-2xl font-bold mb-2">
                  {categoryIndex === 0 && title ? title : category.title}
                </h2>
                <p className="text-gray-600 font-open-sans text-lg">
                  {categoryIndex === 0 && description ? description : category.description}
                </p>
              </div>

              {/* Product table */}
              <div className="overflow-x-auto">
                <div className="min-w-[600px] md:min-w-full bg-white">
                  {/* Table header */}
                  <div className="grid grid-cols-5 gap-0 md:gap-6 border-b border-dispep-primary">
                    <div className="py-2 md:py-3 px-0 md:px-2">
                      <span className="text-gray-500 font-open-sans text-xs md:text-lg font-medium">
                        Código
                      </span>
                    </div>
                    <div className="py-2 md:py-3 px-0 md:px-2">
                      <span className="text-gray-600 font-open-sans text-xs md:text-lg">
                        Ref
                      </span>
                    </div>
                    <div className="py-2 md:py-3 px-0 md:px-2">
                      <span className="text-gray-600 font-open-sans text-xs md:text-lg">
                        Medida
                      </span>
                    </div>
                    <div className="py-2 md:py-3 px-0 md:px-2">
                      <span className="text-gray-600 font-open-sans text-xs md:text-lg">
                        Color
                      </span>
                    </div>
                    <div className="py-2 md:py-3 px-0 md:px-2">
                      <span className="text-gray-600 font-open-sans text-xs md:text-lg">
                        Precio
                      </span>
                    </div>
                  </div>

                  {/* Table rows */}
                  {category.products.map((product, productIndex) => (
                    <div
                      key={productIndex}
                      className="grid grid-cols-5 gap-0 md:gap-6 border-b border-dispep-primary hover:bg-gray-50 transition-colors"
                    >
                      <div className="py-2 md:py-3 px-0 md:px-2">
                        <span className="text-gray-600 font-open-sans text-xs md:text-lg">
                          {product.codigo}
                        </span>
                      </div>
                      <div className="py-2 md:py-3 px-0 md:px-2">
                        <span className="text-gray-600 font-open-sans text-xs md:text-lg">
                          {product.ref}
                        </span>
                      </div>
                      <div className="py-2 md:py-3 px-0 md:px-2">
                        <span className="text-gray-600 font-open-sans text-xs md:text-lg">
                          {product.medida}
                        </span>
                      </div>
                      <div className="py-2 md:py-3 px-0 md:px-2">
                        <span className="text-gray-600 font-open-sans text-xs md:text-lg">
                          {product.color}
                        </span>
                      </div>
                      <div className="py-2 md:py-3 px-0 md:px-2">
                        <span className="text-gray-600 font-open-sans text-xs md:text-lg font-semibold">
                          {product.precio}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom padding */}
        <div className="pb-6"></div>
      </div>
    </div>
  );
}
