import { useState, useEffect } from 'react';
import { initGA } from '../../analytics/ga4';

const STORAGE_KEY = 'cookies_aceptadas';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const decision = localStorage.getItem(STORAGE_KEY);
    if (!decision) setVisible(true);
    if (decision === 'true') initGA(import.meta.env.VITE_GA_TRACKING_ID);
  }, []);

  const handleAceptar = () => {
    localStorage.setItem(STORAGE_KEY, 'true');
    setVisible(false);
    initGA(import.meta.env.VITE_GA_TRACKING_ID);
  };

  const handleRechazar = () => {
    localStorage.setItem(STORAGE_KEY, 'false');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      aria-live="polite"
      className="fixed bottom-0 left-0 w-full z-50 bg-unicauca-verde px-6 py-4 shadow-lg"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-white text-sm leading-relaxed flex-1">
          Este sitio usa cookies de analytics para mejorar tu experiencia y medir el alcance
          del proyecto cultural. No compartimos tu información con terceros.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleRechazar}
            className="px-4 py-2 text-sm border border-white/60 text-white/80 rounded-md hover:border-white hover:text-white transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={handleAceptar}
            className="px-4 py-2 text-sm bg-white text-unicauca-verde font-semibold rounded-md hover:bg-white/90 transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
