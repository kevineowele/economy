// components/ActualitesEvenements.tsx
import Image from "next/image";
import Link from "next/link";

const actualites = [
  {
    date: "09 Mai 2025",
    titre: "Passation de charges au Ministère de l’Économie",
    texte:
      "Le jeudi 8 mai 2025 s’est tenue à Libreville la cérémonie officielle de passation de charges entre les ministres sortants...",
    image: "/passation.jpg",
    lien: "#",
  },
  {
    date: "06 Mai 2025",
    titre:
      "La 4e édition de la conférence Africa One Market sous l’égide du Ministère",
    texte:
      "Le Ministre de l’Économie et des Participations a pris part aux travaux de l’Africa One Market 2025 à Libreville...",
    image: "/africa-one-market.jpg",
    lien: "#",
  },
];

const evenements = [
  { date: "31 Juil 2024", titre: "Sommet Chine-Afrique", lien: "#" },
  {
    date: "31 Juil 2024",
    titre: "XIXe Sommet de la Francophonie",
    lien: "#",
  },
  {
    date: "01 Avr 2020",
    titre: "Réunion des ministres de la zone franc",
    lien: "#",
  },
  { date: "04 Fév 2020", titre: "Sommet Afrique-France 2020", lien: "#" },
  {
    date: "01 Jan 2023",
    titre: "Formation sur le contrôle interne",
    lien: "#",
  },
];

export function ActualitesEvenements() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Colonne Actualités */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Actualités</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {actualites.map((actu, i) => (
                <div key={i} className="bg-white shadow rounded-lg overflow-hidden">
                  <Image
                    src={actu.image}
                    alt={actu.titre}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-500">{actu.date}</p>
                    <h3 className="text-lg font-semibold text-gray-800 mt-1">
                      {actu.titre}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2">{actu.texte}</p>
                    <Link
                      href={actu.lien}
                      className="text-green-700 font-medium text-sm mt-3 inline-block hover:underline"
                    >
                      Lire plus
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Colonne Évènements */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Évènements</h2>
            <ul className="space-y-4">
              {evenements.map((event, i) => (
                <li key={i} className="bg-blue-800 text-white p-4 rounded-lg shadow">
                  <p className="text-sm font-semibold">{event.date}</p>
                  <p className="text-base">{event.titre}</p>
                </li>
              ))}
              <li>
                <Link
                  href="#"
                  className="block bg-blue-900 text-white text-center py-2 rounded-lg hover:bg-blue-700 mt-2"
                >
                  Voir tous les évènements 📅
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
