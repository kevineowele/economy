"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const slides = [
  {
    title: "La 4ᵉ édition de la conférence Africa One Market, organisée[…] ",
    description:
      "Le Ministre de l’Économie et des Participations a pris part aux travaux de l’Africa One Market 2025 qui se tient actuellement à Libreville du 5 au 7 mai. Présent à[…]",
    image: "/africa-one-market.jpg",
  },
  {
    title: "Lancement du Fonds Souverain pour l'Innovation",
    description:
      "Un fonds destiné à stimuler les startups locales a été lancé avec le soutien du ministère de l'Économie et des Investissements stratégiques.",
    image: "/fonds-innovation.jpg",
  },
  {
    title: "Signature de l'accord commercial panafricain",
    description:
      "Un accord historique visant à renforcer le commerce intra-africain a été signé, ouvrant de nouvelles opportunités pour les PME.",
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
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { title, description, image } = slides[currentIndex];

  return (
    <section className="bg-gradient-to-br from-[#d4af37] via-[#f5f5f5] to-[#b0a160] py-16 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center tracking-wide">
          À la une
        </h2>

        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-10 transition-all duration-700 ease-in-out">
          {/* Texte principal */}
          <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-xl p-6 w-full md:w-1/2 transition-transform hover:scale-[1.02]">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-gray-700">{description}</p>
            <button className="mt-4 inline-block text-sm font-semibold text-[#d4af37] hover:text-[#b8860b] transition-colors underline">
              Lire la suite
            </button>
          </div>

          {/* Image illustrative */}
          <div className="relative w-full md:w-1/2 aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/40 hover:scale-[1.01] transition-transform duration-300">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Flèches de navigation */}
        <div className="mt-10 flex justify-center md:justify-end gap-4">
          <button
            onClick={prevSlide}
            className="p-2 bg-white/40 rounded-full hover:bg-[#d4af37]/70 transition"
            aria-label="Slide précédent"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 bg-white/40 rounded-full hover:bg-[#d4af37]/70 transition"
            aria-label="Slide suivant"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>
        </div>
      </div>
    </section>
  );
}
