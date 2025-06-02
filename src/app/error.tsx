'use client';
 
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="p-6 text-center">
      <h2 className="text-red-600 text-xl font-bold">Une erreur est survenue</h2>
      <p className="my-2">{error.message}</p>
      <button onClick={reset} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        Réessayer
      </button>
    </div>
  );
}
