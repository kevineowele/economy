// components/HeroSection.tsx
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#009639]/10 via-[#FFD700]/10 to-[#002366]/10 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#002366] animate-fade-in-down">
          Pour une économie forte, inclusive et durable
        </h2>
        <p className="mt-4 text-lg text-gray-800">
          Bienvenue sur le site officiel du Ministère de l'Économie et des Participations du Gabon
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button className="bg-[#009639] hover:bg-[#007d2c] text-white">
            Découvrir nos missions
          </Button>
          <Button variant="outline" className="border-[#009639] text-[#009639] hover:bg-[#009639]/10">
            Accéder aux services
          </Button>
        </div>
      </div>
    </section>
  );
}
