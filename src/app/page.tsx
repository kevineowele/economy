// app/page.tsx
import { ActualitesEvenements } from "@/components/ActualitesEvenements";
import { AlaUneSection } from "@/components/AlaUneSection";
import Footer from "@/components/Footer";
import HeroHeader from "@/components/HeroHeader";
import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroHeader />
      <HeroSection/> {/* déplacé ici */}
      <AlaUneSection/>
      <ActualitesEvenements/>
      <Footer/>

      {/* Placeholder pour d'autres sections */}
    </>
  );
}
