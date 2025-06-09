"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "La 4ᵉ édition de la conférence Africa One Market",
    description:
      "Le Ministre de l’Économie a participé à l’Africa One Market 2025 à Libreville, du 5 au 7 mai, visant à renforcer l'intégration régionale.",
    image: "/africa-one-market.jpg",
  },
  {
    title: "Lancement du Fonds Souverain pour l'Innovation",
    description:
      "Le ministère a inauguré un fonds stratégique pour soutenir les startups locales et dynamiser l'écosystème entrepreneurial.",
    image: "/fonds-innovation.jpg",
  },
  {
    title: "Signature de l'accord commercial panafricain",
    description:
      "Un accord historique pour faciliter le commerce intra-africain a été signé, stimulant les PME et les investissements régionaux.",
    image: "/accord-commercial.jpg",
  },
];

export function AlaUneSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 7000);
    return () => clearInterval(interval);
  }, []);

  const { title, description, image } = slides[currentIndex];

  return (
    <section className="bg-gradient-to-br from-white via-[#f9f9f9] to-[#f5f5eb] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-b border-[#FFD700]/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#002366] mb-12">
          À la une
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-10 group transition-all">
          {/* Image */}
          <div className="relative w-full md:w-1/2 aspect-[16/9] rounded overflow-hidden shadow-xl border border-gray-200 transition-transform duration-500 group-hover:scale-[1.01]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transition-opacity duration-500"
              priority
            />
          </div>

          {/* Texte */}
          <div className="w-full md:w-1/2 bg-white/80 backdrop-blur-md rounded p-6 md:p-8 shadow-md border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              {title}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
            <button className="mt-4 inline-block text-sm font-medium text-[#009639] hover:text-[#006b2d] transition-colors underline">
              Lire la suite
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-center gap-6">
          <button
            onClick={prevSlide}
            aria-label="Précédent"
            className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full shadow hover:bg-[#FFD700]/20 transition"
          >
            <ChevronLeft className="w-5 h-5 text-[#002366]" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Suivant"
            className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 rounded-full shadow hover:bg-[#FFD700]/20 transition"
          >
            <ChevronRight className="w-5 h-5 text-[#002366]" />
          </button>
        </div>
      </div>
    </section>
  );
}
