// components/LogoTitle.tsx
import Image from "next/image";

export function LogoTitle() {
  return (
    <div className="flex items-center space-x-4">
      <Image
        src="/blason-gabon.png"
        alt="Blason du Gabon"
        width={50}
        height={50}
        className="object-contain"
      />
      <div>
        <h1 className="text-lg sm:text-xl font-bold text-[#002366]">
          Ministère de l'Économie
        </h1>
        <p className="text-sm text-[#009639] leading-none">
          et des Participations
        </p>
      </div>
    </div>
  );
}
