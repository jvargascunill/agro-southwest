"use client";

import { useEffect, useState } from "react";

const MOBILE_PORTRAIT = "(max-width: 768px) and (orientation: portrait)";

/**
 * True cuando la vista es móvil en orientación vertical (primer slide usa imagen vertical).
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
