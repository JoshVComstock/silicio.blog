import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const NotFound = () => (
  <>
    <Header />
    <main className="flex-1 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-4">
        Error 404
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
        Página no encontrada
      </h1>
      <p className="text-muted-foreground max-w-md mx-auto mb-8">
        El artículo o sección que buscas no existe o ha sido movida. Quizá te interese
        explorar las últimas noticias.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Volver al inicio
        </Link>
        <Link
          href="/ia"
          className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-accent transition-colors"
        >
          Explorar IA
        </Link>
      </div>
    </main>
    <Footer />
  </>
);

export default NotFound;
