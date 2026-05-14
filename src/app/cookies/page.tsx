import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: `Información sobre las cookies que utiliza ${siteConfig.name} y cómo gestionarlas.`,
  robots: { index: true, follow: true },
};

const CookiesPage = () => (
  <>
    <Header />
    <main className="flex-1 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 prose prose-neutral dark:prose-invert">
      <h1>Política de cookies</h1>
      <p className="text-sm text-muted-foreground">
        Última actualización: {new Date().toLocaleDateString("es-ES")}
      </p>

      <h2>¿Qué son las cookies?</h2>
      <p>
        Una cookie es un pequeño fichero de texto que un sitio web guarda en tu navegador
        cuando lo visitas. Sirven para recordar preferencias, analizar el uso del sitio y
        mostrar publicidad relevante.
      </p>

      <h2>Cookies que utilizamos</h2>

      <h3>Cookies estrictamente necesarias</h3>
      <p>
        Permiten el funcionamiento básico del sitio (preferencia de tema claro/oscuro,
        consentimiento de cookies). No requieren tu consentimiento.
      </p>

      <h3>Cookies analíticas</h3>
      <p>
        <strong>Google Analytics</strong> mide el tráfico y el comportamiento de los usuarios
        de forma agregada y anónima (IP enmascarada). Se cargan solo si las aceptas.
      </p>

      <h3>Cookies publicitarias</h3>
      <p>
        <strong>Google AdSense</strong> muestra anuncios y mide su rendimiento. Pueden usarse
        para personalizar la publicidad según tus intereses. Se cargan solo si las aceptas.
      </p>

      <h2>Cómo gestionar tus preferencias</h2>
      <p>
        En tu primera visita aparece un banner donde puedes aceptar o rechazar las cookies no
        esenciales. Puedes cambiar tu decisión en cualquier momento borrando las cookies de
        este sitio en la configuración de tu navegador.
      </p>
      <p>
        También puedes configurar tu navegador para que rechace cookies por defecto:
      </p>
      <ul>
        <li>
          <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a>
        </li>
        <li>
          <a href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank" rel="noopener noreferrer">Firefox</a>
        </li>
        <li>
          <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a>
        </li>
        <li>
          <a href="https://support.microsoft.com/es-es/microsoft-edge" target="_blank" rel="noopener noreferrer">Edge</a>
        </li>
      </ul>

      <p>
        Para más información sobre cómo tratamos tus datos, consulta nuestra{" "}
        <Link href="/privacidad">política de privacidad</Link>.
      </p>
    </main>
    <Footer />
  </>
);

export default CookiesPage;
