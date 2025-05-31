// components/HeroHeader.tsx
"use client";
import { useEffect, useState } from "react";
import { LogoTitle } from "./LogoTitle";
import { NavMenu } from "@/components/NavMenu";

export default function HeroHeader() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



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
