"use client";

import { useEffect, useState } from "react";

/** Solo teléfono en vertical; tablets en portrait quedan fuera (misma vista que desktop). */
const MOBILE_PORTRAIT = "(max-width: 480px) and (orientation: portrait)";

/**
 * True en pantallas estrechas en vertical (p. ej. iPhone), no en tablet en portrait.
 * En servidor y antes de montar devuelve false para evitar hydration mismatch.
 */
export function useIsMobilePortrait(): boolean {
  const [isMobilePortrait, setIsMobilePortrait] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(MOBILE_PORTRAIT);
    const handler = () => setIsMobilePortrait(media.matches);
    handler(); // valor inicial
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return isMobilePortrait;
}
