import ContactForm from "@/components/honey/ContactForm";
import ContactInfo from "@/components/honey/ContactInfo";
import SocialLinks from "@/components/honey/SocialLinks";
import AdditionalInfoSection from '@/components/honey/AdditionalInfoSection';

export default function ContactPage() {
  return (
    <main className="container mx-auto p-6">
      {/* Titre principal */}
      <h1 className="text-3xl font-bold mb-8 text-cyan-500 text-center md:text-left">Contact</h1>

      {/* Grille principale */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Colonne gauche - Formulaire */}
        <div className="lg:col-span-2 space-y-8">
          <ContactForm />
          <SocialLinks />
        </div>

        {/* Colonne droite - Informations */}
        <div className="space-y-8">
          <ContactInfo />
          <AdditionalInfoSection />
        </div>
      </div>
    </main>
  );
}