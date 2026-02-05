import Link from "next/link";
import { Mail, Phone, Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/Agro_southwest/";

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#mercados", label: "Mercados" },
  { href: "#sostenibilidad", label: "Sostenibilidad" },
  { href: "#instagram", label: "Instagram" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-accent-gray bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold uppercase tracking-tight">
              Agro SouthWest SpA
            </p>
            <p className="mt-2 text-sm text-white/80">
              Exportación de limones frescos desde Chile.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Contacto
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <a
                  href="mailto:contacto@agrosouthwest.cl"
                  className="flex items-center gap-2 transition hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                  contacto@agrosouthwest.cl
                </a>
              </li>
              <li>
                <a
                  href="tel:+56912345678"
                  className="flex items-center gap-2 transition hover:text-primary"
                >
                  <Phone className="h-4 w-4" />
                  +56 9 1234 5678
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition hover:text-primary"
                >
                  <Instagram className="h-4 w-4" />
                  @Agro_southwest
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Enlaces
            </p>
            <ul className="mt-3 flex flex-wrap gap-4 text-sm text-white/80">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-white/20 pt-8 text-center text-sm text-white/70">
          © 2026 Agro SouthWest SpA. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
