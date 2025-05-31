import Image from "next/image";

export default function SecretariatGeneralPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        LE SECRETARIAT GENERAL
      </h1>

      <div className="flex flex-wrap items-center gap-2 mb-4 text-sm text-gray-600">
        <button className="bg-gray-100 px-2 py-1 rounded border">🖨️ Imprimer</button>
        <button className="bg-blue-100 px-2 py-1 rounded border">Partager</button>
        <button className="bg-black text-white px-2 py-1 rounded border">Post</button>
        <span className="ml-auto text-xs text-gray-500">
          Publié il y a 12 mois, le 13/06/2024
        </span>
      </div>

      <div className="mb-6">
        <Image
          src="/images/secretariat-general.png"
          alt="Bâtiment du Secrétariat Général"
          width={700}
          height={400}
          className="rounded shadow"
        />
      </div>

      <div className="text-sm text-gray-800 space-y-2">
        <p><strong>Sigle :</strong> SG-MEF</p>
        <p>
          <strong>Création :</strong> Décret N° 1325/PR/MMFPRA du 20 octobre 1991
        </p>
        <p>
          <strong>Siège social :</strong> Immeuble ARAMBO du ministère de l’Economie et de la relance,
          boulevard triomphal Omar Bongo ONDIMBA
        </p>
        <p><strong>Adresse :</strong> BP 747</p>
        <p>
          <strong>Tél :</strong> 011.79.55.26 / 011.79.57.65 / 011.79.57.68
        </p>
        <p>
          <strong>Secrétaire Général :</strong>{" "}
          <span className="text-green-700 font-semibold">
            Monsieur Patrick Christian EBE
          </span>
        </p>
        <p>
          <strong>Secrétaire Général Adjoint :</strong>{" "}
          <span className="text-green-700 font-semibold">
            Monsieur Josselin NEMBE
          </span>
        </p>
        <div className="pt-4 space-y-2 text-justify">
          <p>
            <strong>Prérogatives :</strong> Le Secrétariat Général du Ministère, sous l’autorité du Secrétaire Général,
            est chargé de la coordination des activités des directions centrales et techniques ainsi que des organismes
            sous tutelle.
          </p>
          <p>
            Le Secrétaire Général exerce ses attributions assisté par un (01) Secrétaire Général Adjoint.
          </p>
          <p>
            Le Secrétariat Général est également chargé de l’administration générale du Ministère. A ce titre,
            il est en charge des questions administratives, financières et techniques.
          </p>
        </div>
      </div>
    </main>
  );
}
