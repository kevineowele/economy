import Image from "next/image";
import Link from "next/link";

export default async function CabinetPage() {
  // Simuler une attente de 3 secondes
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">CABINET DU MINISTRE</h1>

      <div className="flex flex-wrap items-center gap-2 mb-4 text-sm text-gray-600">
        <span>🖨️ Imprimer</span>
        <span>|</span>
        <span>📤 Envoyer</span>
        <span>|</span>
        <span className="ml-auto">Publié il y a 17 ans, le 13/08/2008</span>
      </div>

      <div className="mb-6">
        <Image
          src="/immeuble.jpg"
          alt="Bâtiment du cabinet du ministre"
          width={600}
          height={400}
          className="rounded shadow"
        />
      </div>

      <div className="text-sm text-gray-800 space-y-1 mb-6">
        <p className="font-semibold">Siège : CAD-MER</p>
        <p>
          <span className="font-semibold">Siège social :</span> Immeuble Avento Boulevard Triomphal · BP: 747 Libreville-GABON ·
          Tél: 01.79.25.77, 01.79.27.650 · Fax: 01.72.18.13 ·
          Site web :{" "}
          <Link
            href="https://www.economie.gouv.ga"
            target="_blank"
            className="text-blue-600 underline"
          >
            www.economie.gouv.ga
          </Link>
        </p>
      </div>

      <div className="mb-6">
        <Image
          src="/Ministre.jpg"
          alt="Le ministre"
          width={600}
          height={400}
          className="rounded shadow"
        />
      </div>

      <div className="text-sm text-gray-800 space-y-1">
        <p>
          Le Ministre de l&apos;Économie, des Finances, de la Dette et des Participations chargé de la lutte contre la vie chère : <strong>Henri-Claude Oyima</strong>
        </p>
      </div>
    </main>
  );
}
