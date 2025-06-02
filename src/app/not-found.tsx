"use client";

import Link from "next/link";
import { LogoTitle } from "../components/LogoTitle"; // ajuste le chemin selon ton projet

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6">
      <LogoTitle />

      <h2 className="mt-8 text-3xl font-bold text-[#002366]">
        Oups, cette page n&apos;existe pas.
      </h2>

      <p className="mt-4 text-gray-700 max-w-md text-center">
        Désolé, nous n&apos;avons pas pu trouver la page que vous cherchez.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-[#009639] text-white rounded hover:bg-[#007d2c] transition"
      >
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
