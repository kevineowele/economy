import React from 'react';

const AdditionalInfoSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">Autres informations</h1>
      
      <section className="mb-12">
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Actions du Gouvernement
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Les actions du Gouvernement au quotidien sur des travaux de fond: suivez l&lsquo;ensemble des actions, 
            mesures et réformes classées par thématiques et par enjeux.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 transition-all hover:shadow-md">
            <h3 className="text-xl font-medium text-blue-800 mb-3 flex items-center">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Compte-rendus des conseils des Ministres
            </h3>
            <p className="text-gray-700 mb-4">
              Les compte-rendus du gouvernement au quotidien: suivez l&lsquo;ensemble des compte-rendus classées par thématiques.
            </p>
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Consulter les comptes-rendus
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdditionalInfoSection;