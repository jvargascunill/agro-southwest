import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Sitemap para Google y otros buscadores.
 * Las imágenes del carrusel se declaran en el JSON-LD ImageGallery del layout para la búsqueda de Imágenes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
  ];
}
