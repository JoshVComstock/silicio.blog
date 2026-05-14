"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  useEffect(() => {
    // Aquí podrías reportar a Sentry/Datadog si lo configuras más adelante
    console.error(error);
  }, [error]);

  return (
    <main className="flex-1 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-4">
        Error 500
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
        Algo ha fallado
      </h1>
      <p className="text-muted-foreground max-w-md mx-auto mb-8">
        Hemos tenido un problema cargando esta página. Inténtalo de nuevo en unos segundos.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Reintentar
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-accent transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;
