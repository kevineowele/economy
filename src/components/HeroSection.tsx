"use client";

import { Button } from "@/components/ui/button";
import { Mail, FileText, CalendarCheck } from "lucide-react"; // Icônes Lucide
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-white py-32 overflow-hidden border-b border-[#FFD700]">
      {/* Image de fond floutée */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Ministère de l'économie Gabon"
          className="w-full h-full object-cover object-center blur-sm scale-105 opacity-100"
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
        <div
          className="absolute inset-0 bg-[radial-gradient(#d1e6d8_1px,transparent_1px)] [background-size:28px_28px] opacity-10"
          aria-hidden="true"
        />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#002366] tracking-tight leading-tight drop-shadow-md">
          Moderniser l&apos;économie pour un Gabon prospère
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto drop-shadow-sm">
          Découvrez les actions, réformes et services proposés par le Ministère de l&apos;Économie et des Participations, pour soutenir les citoyens, les entreprises et les investisseurs.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Button className="bg-[#009639] hover:bg-[#007d2c] text-white text-base px-6 py-3">
            Nos priorités
          </Button>
          <Button
            variant="outline"
            className="border-[#009639] text-[#009639] hover:bg-[#009639]/10 text-base px-6 py-3"
          >
            Accès aux e-services
          </Button>
        </div>

        {/* Blocs informatifs */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {/* Bloc 1 : Publications des contrats */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition">
            <FileText className="text-[#009639] w-8 h-8 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Publications des contrats</h3>
            <p className="text-gray-700 mb-4">
              Retrouvez dans cette section la publication des contrats pétroliers, miniers et forestiers.
            </p>
            <Button variant="link" className="text-[#009639] p-0">Voir les contrats →</Button>
          </div>

          {/* Bloc 2 : Demande d'audience */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition">
            <CalendarCheck className="text-[#009639] w-8 h-8 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Demande d&apos;audience</h3>
            <p className="text-gray-700 mb-4">
              Réalisez en ligne votre demande d&apos;audience auprès du cabinet du Ministère de l&apos;Économie.
            </p>
            <Button variant="link" className="text-[#009639] p-0">Faire une demande →</Button>
          </div>

          {/* Bloc 3 : Contactez-nous */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition">
            <Mail className="text-[#009639] w-8 h-8 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Contactez-nous</h3>
            <p className="text-gray-700 mb-4">
              Cette section vous permet de contacter le Ministère de l&apos;Économie et des Participations.
            </p>
            <Button variant="link" className="text-[#009639] p-0">Envoyer un message →</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
