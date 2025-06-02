"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export function LogoTitle() {
  const [showAlt, setShowAlt] = useState(false);

  // 🔁 Change automatiquement toutes les 4 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setShowAlt((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-4">
      <Link
        href="/"
        className="flex items-center space-x-4 relative"
        onMouseEnter={() => setShowAlt(true)} // 👈 Active fade au survol
        onMouseLeave={() => setShowAlt(false)} // 👈 Reviens au logo principal
      >
        <div className="relative w-[50px] h-[50px]">
          {/* Logo principal */}
          <Image
            src="/blason-gabon.png"
            alt="Blason du Gabon"
            fill
            className={`object-contain absolute inset-0 transition-opacity duration-700 ease-in-out ${
              showAlt ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Logo alternatif */}
          <Image
            src="/maternite.jpg"
            alt="Maternité alaitante"
            fill
            className={`object-contain absolute inset-0 transition-opacity duration-700 ease-in-out ${
              showAlt ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div>
          <h1 className="text-lg sm:text-xl font-bold text-[#002366]">
            Ministère de l&apos;Économie
          </h1>
          <p className="text-sm text-[#009639] leading-none">
            et des Participations
          </p>
        </div>
      </Link>
    </div>
  );
}
