import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Colonne 1 : Logo + présentation */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-8 bg-green-800"></div>
            <h3 className="text-xl font-bold uppercase">
              Ministère de l&apos;Économie et des Participations
            </h3>
          </div>
          <p className="text-sm text-white/80">
            République Gabonaise — Bâtir une économie durable pour tous.
          </p>
        </div>

        {/* Colonne 2 : Liens utiles */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Liens utiles</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Présidence de la République</a></li>
            <li><a href="#" className="hover:underline">Gouvernement</a></li>
            <li><a href="#" className="hover:underline">Secrétariat Général du Gouvernement</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Colonne 3 : Contact + réseaux */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="text-sm text-white/80 mb-2">Libreville, Gabon</p>
          <p className="text-sm text-white/80 mb-2">Téléphone : +241 XX XX XX</p>
          <p className="text-sm text-white/80 mb-2">Email : contact@economie.gouv.ga</p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Facebook" className="hover:opacity-80">
              <Image 
                src="/icons/facebook.svg" 
                alt="Facebook" 
                width={20} 
                height={20}
                className="w-5 h-5"
              />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-80">
              <Image 
                src="/icons/twitter.svg" 
                alt="Twitter" 
                width={20} 
                height={20}
                className="w-5 h-5"
              />
            </a>
            <a href="#" aria-label="Youtube" className="hover:opacity-80">
              <Image 
                src="/icons/youtube.svg" 
                alt="Youtube" 
                width={20} 
                height={20}
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>

      </div>

      <hr className="my-6 border-white/30" />

      <div className="text-center text-sm text-white/70">
        © 2025 Ministère de l&apos;Économie et des Participations — Design et développement par l&apos;ANINF
      </div>
    </footer>
  );
};

export default Footer;
