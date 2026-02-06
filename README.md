# Agro SouthWest

Landing corporativa para **Agro SouthWest SpA** 🍋 — exportadora de limones chilenos premium. Construida con Next.js 14 (App Router), Tailwind CSS, Framer Motion y Lucide React. Incluye secciones de producto, mercados, certificaciones (Global G.A.P., Systems Approach) y formulario de contacto listo para Formspree.

## Requisitos

- Node.js 18+
- npm o pnpm

## Instalación y ejecución

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Despliegue en Vercel (si ves 404)

1. **Revisa la configuración del proyecto** en [Vercel Dashboard](https://vercel.com) → tu proyecto → **Settings**:
   - **General → Root Directory:** debe estar **vacío** (o `.`) para que la raíz del repo sea el proyecto.
   - **Build & Development:**
     - **Framework Preset:** **Next.js**
     - **Build Command:** `npm run build` (o vacío para que Vercel lo detecte)
     - **Output Directory:** vacío (Next.js usa `.next` por defecto)
     - **Install Command:** `npm install` (o vacío)

2. **Asegúrate de que todo el código está en GitHub:** carpetas `app/`, `components/`, `public/`, `package.json`, `next.config.js`, `tailwind.config.ts`, etc. Si solo subiste el README al principio, haz push de todos los archivos.

3. **Redeploy:** en el proyecto de Vercel, pestaña **Deployments** → los tres puntos del último deployment → **Redeploy**.

El repositorio incluye `vercel.json` para que Vercel detecte correctamente el framework Next.js.

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
- `Certifications` — Global G.A.P., Systems Approach, Sostenibilidad
- `ContactForm` — Formulario + datos de contacto
- `Footer` — Enlaces y copyright 2026
