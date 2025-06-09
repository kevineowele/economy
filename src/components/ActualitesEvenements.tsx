"use client";

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
  { date: "31 Juil 2024", titre: "XIXe Sommet de la Francophonie", lien: "#" },
  { date: "01 Avr 2020", titre: "Réunion des ministres de la zone franc", lien: "#" },
  { date: "04 Fév 2020", titre: "Sommet Afrique-France 2020", lien: "#" },
  { date: "01 Jan 2023", titre: "Formation sur le contrôle interne", lien: "#" },
];

export function ActualitesEvenements() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Actualités */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Actualités</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {actualites.map((actu, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-xl overflow-hidden transform transition hover:scale-[1.02]"
                >
                  <Image
                    src={actu.image}
                    alt={actu.titre}
                    width={600}
                    height={300}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-5">
                    <p className="text-xs text-gray-500">{actu.date}</p>
                    <h3 className="text-lg font-semibold text-gray-800 mt-1 line-clamp-2">
                      {actu.titre}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {actu.texte}
                    </p>
                    <Link
                      href={actu.lien}
                      className="text-green-700 font-medium text-sm mt-3 inline-block hover:underline"
                    >
                      Lire plus →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Événements - Timeline verticale */}
<div>
  <h2 className="text-3xl font-bold text-gray-900 mb-6">Évènements</h2>
  <div className="relative border-l border-blue-300 space-y-8 pl-4">
    {evenements.map((event, i) => (
      <div
        key={i}
        className="relative pl-6 group"
      >
        {/* Point de timeline */}
        <span className="absolute left-[-10px] top-1 w-4 h-4 bg-blue-800 rounded-full border-2 border-white group-hover:scale-110 transition-transform duration-200"></span>

        <div className="bg-blue-800 text-white rounded-xl shadow-md p-4 hover:bg-blue-700 transition">
          <p className="text-sm font-semibold">{event.date}</p>
          <p className="text-base mt-1">{event.titre}</p>
        </div>
      </div>
    ))}

    {/* Lien vers tous les événements */}
    <div className="pt-4">
      <Link
        href="#"
        className="inline-block bg-blue-900 text-white text-center px-6 py-2 rounded-xl hover:bg-blue-700 transition font-medium"
      >
        Voir tous les évènements 📅
      </Link>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
