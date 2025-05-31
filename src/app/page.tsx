// app/page.tsx

import { ActualitesEvenements } from "@/components/ActualitesEvenements";
import { AlaUneSection } from "@/components/AlaUneSection";
import { HeroSection } from "@/components/HeroSection";



export default function Home() {
  return (
    <>
      <HeroSection/> {/* déplacé ici */}
      <AlaUneSection/>
      <ActualitesEvenements/>

      {/* Placeholder pour d'autres sections */}
    </>
  );
}
