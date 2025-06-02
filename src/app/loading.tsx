export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#009639]/10 via-[#FFD700]/10 to-[#002366]/10">
      <div className="relative w-24 h-24">
        {/* Cercles tournants */}
        <div className="absolute inset-0 animate-spin-slow rounded-full border-t-4 border-[#009639]" />
        <div className="absolute inset-2 animate-spin-slower rounded-full border-t-4 border-[#FFD700]" />
        <div className="absolute inset-4 animate-spin-slowest rounded-full border-t-4 border-[#002366]" />
      </div>
      <p className="mt-8 text-[#002366] text-lg font-medium animate-pulse">
        Chargement en cours...
      </p>
    </div>
  );
}
