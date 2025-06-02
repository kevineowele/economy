"use client";

import { Link } from "lucide-react";



export default function Error500() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-white text-[#002366]">
      <h1 className="text-6xl font-bold mb-4">500</h1>
      <p className="text-xl mb-6">Une erreur est survenue sur le serveur.</p>
      <Link href="/" className="text-[#009639] underline hover:text-[#007d2c]">
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
