/**
 * Constantes y listas SEO para Google, buscadores e IA.
 * Uso: metadata, JSON-LD, Open Graph, descripciones largas para crawlers.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.agrosouthwest.com";

/** Palabras clave principales y long-tail (ES, EN, ZH) para indexación y respuestas IA */
export const SEO_KEYWORDS = [
  // Cítricos (general)
  "cítricos",
  "citricos",
  "cítricos Chile",
  "cítricos chilenos",
  "cítricos premium",
  "exportación de cítricos",
  "exportacion de citricos",
  "exportador de cítricos",
  "cítricos frescos",
  "citrus Chile",
  "citrus export",
  "Chilean citrus",
  "柑橘",
  "智利柑橘",
  "柑橘出口",
  // Limones
  "limones",
  "limones Chile",
  "limones chilenos",
  "exportación de limones",
  "exportacion de limones",
  "comprar limones",
  "limones para exportación",
  "limones premium",
  "limones frescos",
  "limón chileno",
  "lemon export",
  "lemon export Chile",
  "Chilean lemons",
  "柠檬",
  "智利柠檬",
  "智利柠檬出口",
  "柠檬出口",
  "exportação de limões",
  // Naranjas
  "naranjas",
  "naranjas Chile",
  "naranjas chilenos",
  "exportación de naranjas",
  "exportacion de naranjas",
  "comprar naranjas",
  "naranjas premium",
  "naranjas frescas",
  "orange export",
  "Chilean oranges",
  "橘子",
  "智利橙子",
  "橙子出口",
  // Mandarinas
  "mandarinas",
  "mandarinas Chile",
  "mandarinas chilenos",
  "exportación de mandarinas",
  "exportacion de mandarinas",
  "comprar mandarinas",
  "mandarinas premium",
  "tangerine export",
  "Chilean mandarins",
  "蜜橘",
  "智利柑橘",
  // Fruta y exportación
  "exportación de fruta",
  "exportacion de fruta",
  "fruta chilena",
  "fruta de Chile",
  "fruta fresca Chile",
  "exportación frutícola Chile",
  "exportacion fruticola",
  "fruta premium Chile",
  "fruit export Chile",
  "Chilean fruit export",
  "fresh fruit Chile",
  // Temporada y origen
  "temporada cítricos Chile",
  "temporada limones Chile",
  "cosecha limones Chile",
  "cítricos mayo diciembre",
  "contraestación cítricos",
  "zona norte Chile cítricos",
  "zona central Chile limones",
  // Destinos y logística
  "Cono Sur cítricos",
  "Argentina limones",
  "Uruguay cítricos",
  "logística terrestre cítricos",
  "importador cítricos",
  "cotizar limones",
  "cotización cítricos",
  // Certificaciones
  "Global G.A.P. cítricos",
  "Global G.A.P. Chile",
  "Systems Approach Chile",
  "trazabilidad cítricos",
  "documentación fitosanitaria",
  // Marca (una palabra, dos palabras y tres palabras para todas las búsquedas)
  "Agro SouthWest",
  "Agro South West",
  "agro south west",
  "Agro SouthWest Chile",
  "Agro SouthWest cítricos",
  "Agro SouthWest limones",
  "agrosouthwest",
];

/** Descripción corta para meta description (≈155–160 caracteres). Incluye "Agro South West" para búsquedas con 3 palabras. */
export const SEO_META_DESCRIPTION =
  "Agro South West: exportación de cítricos desde Chile. Limones, naranjas y mandarinas con Global G.A.P. y Systems Approach. Conectando Chile con el mundo. Cotiza ya.";

/**
 * Descripción larga para crawlers de IA, rich snippets y Open Graph.
 * Responde: qué es el sitio, qué vende, a quién, dónde, certificaciones.
 */
export const SEO_LONG_DESCRIPTION =
  "Agro SouthWest es una empresa chilena de exportación de cítricos frescos: limones, naranjas y mandarinas desde Chile. " +
  "Exportamos limones chilenos, naranjas y mandarinas con certificación Global G.A.P. y Systems Approach (SAG/USDA). " +
  "Temporada de exportación de mayo a diciembre; destino Cono Sur (Argentina, Uruguay) por tierra y preparados para otros mercados. " +
  "Comprar limones, cotizar exportación de cítricos, fruta chilena premium con trazabilidad y documentación fitosanitaria. " +
  "Contacto: Santiago, Chile. Citrus export, Chilean lemons, orange and tangerine export.";

/** Título principal para SEO y redes. Incluye "Agro South West" para búsquedas con 3 palabras. */
export const SEO_TITLE =
  "Agro South West | Exportación de Cítricos Chile | Limones, Naranjas y Mandarinas";

/** Título alternativo más corto (redes, share) */
export const SEO_TITLE_SHORT = "Agro South West | Cítricos Chile - Limones y Naranjas";

export const SEO_SITE_NAME = "Agro South West";
export const SEO_DEFAULT_IMAGE_ALT =
  "Agro SouthWest - Exportación de cítricos, limones, naranjas y mandarinas desde Chile";

export { SITE_URL };
