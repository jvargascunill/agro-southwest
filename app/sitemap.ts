import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/** Imágenes del carrusel para que Google las indexe en Imágenes (al menos 5). */
const CAROUSEL_IMAGE_URLS = [
  `${SITE_URL}/carousel/01.png`,
  `${SITE_URL}/carousel/02.png`,
  `${SITE_URL}/carousel/03.png`,
  `${SITE_URL}/carousel/04.png`,
  `${SITE_URL}/carousel/05.png`,
];

/**
 * Sitemap para Google y otros buscadores.
 * Incluye imágenes del carrusel para que aparezcan en la búsqueda de Imágenes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
      images: CAROUSEL_IMAGE_URLS,
    },
  ];
}
