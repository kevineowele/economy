import React from 'react';

const ContactInfo: React.FC = () => {
  return (
    <div className="flex justify-end p-5 font-sans md:mr-10">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-6 mr-0 md:mr-10">
        <h2 className="text-blue-700 border-b-2 border-gray-100 pb-2 mb-5 text-2xl">Contact</h2>
        
        <div className="mb-6">
          <h3 className="text-slate-700 text-xl mb-4 font-medium">Ministère de l&lsquo;Economie et des Participations</h3>
          <div className="space-y-2">
            <p className="text-gray-600">Immeuble ARAMBO (Boulevard Triomphal)</p>
            <p className="text-gray-600">Libreville, Gabon</p>
            <p className="text-gray-600">Boîte Postal: 747 Libreville (Gabon)</p>
          </div>
        </div>
        
        <div className="mt-6 bg-gray-50 p-4 rounded-md space-y-3">
          <p className="text-gray-800">
            <span className="font-semibold text-green-700">Téléphone:</span> (+241) 060 32 93 36 / 076 28 91 58
          </p>
          <p className="text-gray-800">
            <span className="font-semibold text-green-700">Email:</span> contact@economie.gouv.ga
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;