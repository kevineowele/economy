// app/page.tsx
import HeroHeader from "@/components/HeroHeader";

export default function Home() {
  return (
    <main>
      <HeroHeader />
      {/* Ajoute ici les autres sections : actualités, publications, etc. */}
      <section id="actualites" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Actualités</h2>
          <p className="text-gray-600">Dernières informations économiques et initiatives en cours.</p>
        </div>
      </section>

      {/* Placeholder pour d'autres sections */}
    </main>
  );
}
