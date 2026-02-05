# Agro SouthWest

Landing corporativa para **Agro SouthWest SpA** 🍋 — exportadora de limones chilenos premium. Construida con Next.js 14 (App Router), Tailwind CSS, Framer Motion y Lucide React. Incluye secciones de producto, mercados, certificaciones (GlobalG.A.P., Systems Approach) y formulario de contacto listo para Formspree.

## Requisitos

- Node.js 18+
- npm o pnpm

## Instalación y ejecución

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Logo

Para mostrar el logo en el header, coloca tu archivo de logo como `public/logo.png`. Si no existe, el header muestra solo el texto "AGRO SOUTHWEST".

## Formulario de contacto (Formspree)

En `components/ContactForm.tsx` reemplaza `YOUR_FORM_ID` por el ID de tu formulario de Formspree:

```ts
const FORMSPREE_URL = "https://formspree.io/f/TU_FORM_ID";
```

## Estructura de componentes

- `Header` — Navegación y CTA Cotizar / Quote
- `Hero` — Título, subtítulo y CTAs
- `AboutUs` — Sobre nosotros y misión
- `ProductSpecs` — Ficha técnica del limón premium
- `Markets` — Mercados (Argentina, Uruguay, Brasil, Panamá) y logística
- `Certifications` — GlobalG.A.P., Systems Approach, Sostenibilidad
- `ContactForm` — Formulario + datos de contacto
- `Footer` — Enlaces y copyright 2026
