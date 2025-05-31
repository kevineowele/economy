// components/AlaUneSection.tsx
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function AlaUneSection() {
  return (
    <section className="bg-[#2b7a2b] py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-6">À la une</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Texte principal */}
          <div className="bg-white/10 rounded-lg p-6 md:w-1/2 relative">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              La 4<sup>e</sup> édition de la conférence Africa One Market, organisée[…]
            </h3>
            <p className="text-white text-sm sm:text-base">
              Le Ministre de l’Économie et des Participations a pris part aux travaux
              de l’Africa One Market 2025 qui se tient actuellement à Libreville du
              5 au 7 mai. Présent à[…]
            </p>
            <button className="mt-4 underline text-sm hover:text-yellow-300">
              Lire la suite
            </button>
          </div>

          {/* Image illustrative */}
          <div className="relative md:w-1/2 w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/africa-one-market.jpg"
              alt="Africa One Market"
              width={800}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Navigation flèches (visibles sur mobile si tu veux slider) */}
        <div className="mt-6 flex justify-between md:justify-end gap-4">
          <button className="p-2 bg-white/20 rounded-full hover:bg-white/30">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-2 bg-white/20 rounded-full hover:bg-white/30">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
