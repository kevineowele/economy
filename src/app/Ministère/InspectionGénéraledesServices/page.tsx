import { NavMenu } from '@/components/NavMenu';

export default function inspectionGeneraledesServices() {
  return (
    <>
      <NavMenu />
      <main className="px-4 py-8 max-w-3xl mx-auto text-justify">
        <p className="text-sm text-gray-500 mb-2">
          Publié il y a 17 mois, le 13/01/2021
        </p>

        <section className="space-y-4 text-[15px] leading-relaxed">
          <p><strong>SIGLE :</strong> IGS - <strong>MEFAN</strong></p>

          <p><strong>Création :</strong></p>
          <p>Siège social : Pont de Ga-GaL, Libreville, 1°64 impasse André MBA OBAME.</p>

          <p><strong>Personnalités :</strong></p>
          <ul className="list-disc pl-6">
            <li>Inspecteur Général : Mme Rose MBOUALA épouse BETENG NDJAVE.</li>
            <li>Inspecteur Général Adjoint : M. Alain NDOUTA.</li>
          </ul>

          <p><strong>Attributions :</strong></p>
          <ul className="list-disc pl-6">
            <li>Contrôler et évaluer la régularité et l'efficacité de l'ensemble des services relevant du ministère ;</li>
            <li>Élaborer et proposer l'exécution des politiques publiques, des actions et projets du ministère ;</li>
            <li>Évaluer les résultats atteints des structures placées dans l'organigramme du ministère ;</li>
            <li>Effectuer des missions d'audit, de contrôle et d'appui au travail ;</li>
            <li>Élaborer les normes de qualité requises sur les services.</li>
          </ul>
        </section>
      </main>
    </>
  );
}
