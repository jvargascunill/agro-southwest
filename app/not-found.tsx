import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-dark sm:text-8xl">404</h1>
        <p className="mt-4 text-xl text-secondary">
          Página no encontrada
        </p>
        <p className="mt-2 text-secondary/80">
          El enlace que seguiste no existe o fue movido.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-secondary shadow-lg transition hover:bg-primary-light hover:shadow-xl"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
