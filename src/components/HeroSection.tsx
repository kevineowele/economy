"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [points, setPoints] = useState<
    {
      cx: number;
      cy: number;
      r: number;
      duration: number;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    const generatedPoints = Array.from({ length: 120 }, () => ({
      cx: Math.random() * 1000,
      cy: Math.random() * 1000,
      r: Math.random() * 50 + 1,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 5,
    }));
    setPoints(generatedPoints);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#009639]/10 via-[#FFD700]/10 to-[#002366]/10 py-36 overflow-hidden">
      {/* Animations CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        @keyframes flicker {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>

      {/* SVG décoratif */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1000 1000"
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#009639" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#002366" />
          </linearGradient>
        </defs>

        {points.map((point, index) => (
          <circle
            key={index}
            cx={point.cx}
            cy={point.cy}
            r={point.r}
            fill="url(#gradient)"
            style={{
              opacity: 0.5,
              animation: `float ${point.duration}s ease-in-out ${point.delay}s infinite, flicker ${point.duration + 1}s ease-in-out ${point.delay}s infinite`,
              transformOrigin: `${point.cx}px ${point.cy}px`,
            }}
          />
        ))}
      </svg>

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002366] animate-fade-in-down">
          Pour une économie forte, inclusive et durable
        </h2>
        <p className="mt-3 text-base text-gray-800">
          Bienvenue sur le site officiel du Ministère de l’Économie et des Participations du Gabon
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <Button className="bg-[#009639] hover:bg-[#007d2c] text-white">
            Découvrir nos missions
          </Button>
          <Button
            variant="outline"
            className="border-[#009639] text-[#009639] hover:bg-[#009639]/10"
          >
            Accéder aux services
          </Button>
        </div>
      </div>
    </section>
  );
}
