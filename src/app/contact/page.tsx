import ContactForm from "@/components/honey/ContactForm";
import ContactInfo from "@/components/honey/ContactInfo";
import SocialLinks from "@/components/honey/SocialLinks";
import AdditionalInfoSection from '@/components/honey/AdditionalInfoSection';

export default async function ContactPage() {

  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <main className="container mx-auto p-6 max-w-7xl">
      <h1 className="text-3xl font-bold mb-8 text-cyan-500 text-center md:text-left">Contact</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Colonne gauche - Formulaire (2/3 de largeur) */}
        <div className="lg:col-span-2 space-y-8">
          <ContactForm />
          <SocialLinks />
        </div>

        {/* Colonne droite - Informations (1/3 de largeur) */}
        <div className="lg:h-full lg:flex lg:flex-col">
          <ContactInfo />
          <AdditionalInfoSection/>
        </div>
      </div>
    </main>
  );
}