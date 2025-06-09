"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 secondes
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-white flex items-center justify-center z-[9999]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#009639]/20 via-[#FFD700]/20 to-[#002366]/20" />
          <div className="relative w-24 h-24 z-10">
            <div className="absolute inset-0 animate-spin-slow rounded-full border-t-4 border-[#009639]" />
            <div className="absolute inset-2 animate-spin-slower rounded-full border-t-4 border-[#FFD700]" />
            <div className="absolute inset-4 animate-spin-slowest rounded-full border-t-4 border-[#002366]" />
          </div>
          <p className="mt-8 text-[#002366] text-lg font-medium animate-pulse z-10">
            Chargement en cours...
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
