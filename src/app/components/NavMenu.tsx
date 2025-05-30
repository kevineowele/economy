"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // bloquer scroll
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const menuItems = [
    { label: "Actualités", href: "#actualites" },
    { label: "Publications", href: "#publications" },
    { label: "Ministère", href: "#ministere" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[#002366] hover:text-[#009639] font-semibold transition duration-300"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Burger Menu Toggle */}
      <div className="md:hidden z-50 relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#002366] hover:text-[#009639] focus:outline-none"
          aria-label="Menu mobile"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Overlay + Slide Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Overlay flouté */}
        <div
          className="absolute w-full h-full bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu container */}
        <div className="absolute top-0 left-0 w-full bg-white p-6 shadow-lg rounded-b-2xl z-50">
          <nav className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#002366] text-lg font-semibold hover:text-[#009639] transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
