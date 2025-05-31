// components/HeroHeader.tsx
"use client";

import { LogoTitle } from "./LogoTitle";
import { NavMenu } from "@/components/NavMenu";

export default function HeroHeader() {



  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-[#FFD700]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-20">
          <LogoTitle />
            <NavMenu />
          </div>
        </div>
       
      </header>
    </>


  );
}
