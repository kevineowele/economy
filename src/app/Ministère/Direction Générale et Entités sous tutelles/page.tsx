// app/Direction Générale des imp/page.tsx

export default function GouvernancePage() {
  return (
    <main className="p-8 max-w-4xl mx-auto text-gray-800">
      <p className="text-sm text-gray-500 mb-4">
        Publié il y a 12 mois, le 13/06/2024
      </p>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Gouvernance :</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Directeur Général : <strong>Monsieur Eric BOUMAH</strong>
            </li>
            <li>
              Directeur Général Adjoint : <strong>Pamphile EYOUGA</strong>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold underline mb-2">Prérogatives :</h3>
          <p>
            La DGI a essentiellement cinq (5) grandes missions :
          </p>

          <ul className="list-disc list-inside space-y-4 mt-2">
            <li>
              <strong>ELABORATION DES TEXTES</strong><br />
              Mission de conception, de préparation des textes législatifs et réglementaires, des conventions internationales de nature fiscale ;
            </li>

            <li>
              <strong>GESTION, CONTROLE ET RECOUVREMENT</strong><br />
              <ul className="list-disc list-inside ml-6">
                <li>Missions d'assiette, de liquidation et de contrôle ;</li>
                <li>Missions de recouvrement ;</li>
                <li>Mission d'animation des services fiscaux et d'administration du personnel ;</li>
              </ul>
            </li>

            <li>
              <strong>DOMANIALE</strong><br />
              Il s'agit des missions de réformes des biens meubles de l'État.
            </li>

            <li>
              <strong>GESTION DU CONTENTIEUX FISCAL ET DOMANIALE</strong><br />
              La DGI instruit les contentieux fiscaux nés de l'exercice de ses missions.
            </li>

            <li>
              <strong>MISSIONS SPECIFIQUES</strong><br />
              Entre autres missions spécifiques, la DGI instruit les demandes d'agréments à la profession d'expert-comptable et de conseil fiscal agréés CEMAC, en vue de leur transmission, après avis, au Président de la Commission de la CEMAC via le Ministère de tutelle.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
