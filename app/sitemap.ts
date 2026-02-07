import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

/**
 * Sitemap para Google y otros buscadores.
 * Sitio de una sola página; la URL principal incluye todo el contenido (cítricos, limones, naranjas, contacto).
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
