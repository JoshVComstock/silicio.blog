import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: `Información detallada sobre las cookies que utiliza ${siteConfig.name}, su finalidad, duración y cómo gestionarlas.`,
  alternates: { canonical: `${siteConfig.url}/cookies` },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "14 de mayo de 2026";

const CookiesPage = () => (
  <>
    <Header />
    <main className="flex-1 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 prose prose-neutral dark:prose-invert">
      <h1>Política de cookies</h1>
      <p className="text-sm text-muted-foreground">
        Última actualización: {LAST_UPDATED}
      </p>

      <p>
        Esta política de cookies forma parte de la{" "}
        <Link href="/privacidad">política de privacidad</Link> de{" "}
        {siteConfig.name} ({siteConfig.url}) y describe el uso que hacemos de
        cookies y tecnologías de almacenamiento similares en este sitio, en
        cumplimiento del artículo 22 de la Ley 34/2002 (LSSI-CE) y del
        Reglamento (UE) 2016/679 (RGPD).
      </p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Una cookie es un pequeño fichero de texto que un sitio web guarda en
        tu navegador o dispositivo cuando lo visitas. Permiten recordar
        preferencias, mantener sesiones iniciadas, analizar el uso del sitio
        y mostrar publicidad personalizada. También usamos tecnologías
        similares como <code>localStorage</code>, que cumple funciones
        parecidas.
      </p>

      <h2>2. Tipos de cookies que utilizamos</h2>

      <h3>2.1 Cookies estrictamente necesarias</h3>
      <p>
        Permiten el funcionamiento básico del sitio. No requieren tu
        consentimiento porque sin ellas el sitio no podría funcionar
        correctamente.
      </p>
      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse border border-border">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-3 py-2 text-left">Nombre</th>
              <th className="border border-border px-3 py-2 text-left">Finalidad</th>
              <th className="border border-border px-3 py-2 text-left">Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-3 py-2 font-mono text-xs">silicio_cookie_consent</td>
              <td className="border border-border px-3 py-2">Guarda tu decisión sobre el banner de cookies</td>
              <td className="border border-border px-3 py-2">12 meses</td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-mono text-xs">theme</td>
              <td className="border border-border px-3 py-2">Recuerda la preferencia de tema (claro/oscuro)</td>
              <td className="border border-border px-3 py-2">Persistente</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>2.2 Cookies analíticas (requieren tu consentimiento)</h3>
      <p>
        Nos permiten conocer de forma agregada y anónima cómo se usa el
        sitio para mejorarlo. Solo se activan si las aceptas en el banner de
        cookies.
      </p>
      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse border border-border">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-3 py-2 text-left">Nombre</th>
              <th className="border border-border px-3 py-2 text-left">Proveedor</th>
              <th className="border border-border px-3 py-2 text-left">Finalidad</th>
              <th className="border border-border px-3 py-2 text-left">Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-3 py-2 font-mono text-xs">_ga</td>
              <td className="border border-border px-3 py-2">Google</td>
              <td className="border border-border px-3 py-2">Distinguir usuarios únicos</td>
              <td className="border border-border px-3 py-2">2 años</td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-mono text-xs">_ga_*</td>
              <td className="border border-border px-3 py-2">Google</td>
              <td className="border border-border px-3 py-2">Almacenar el estado de sesión de GA4</td>
              <td className="border border-border px-3 py-2">2 años</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>2.3 Cookies publicitarias (requieren tu consentimiento)</h3>
      <p>
        Permiten mostrar anuncios relevantes y medir su rendimiento. Las
        utiliza <strong>Google AdSense</strong> y, en su caso, los partners
        publicitarios certificados de Google. Solo se activan si aceptas las
        cookies de publicidad.
      </p>
      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse border border-border">
          <thead>
            <tr className="bg-muted/50">
              <th className="border border-border px-3 py-2 text-left">Nombre</th>
              <th className="border border-border px-3 py-2 text-left">Proveedor</th>
              <th className="border border-border px-3 py-2 text-left">Finalidad</th>
              <th className="border border-border px-3 py-2 text-left">Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-3 py-2 font-mono text-xs">__gads, __gpi</td>
              <td className="border border-border px-3 py-2">Google</td>
              <td className="border border-border px-3 py-2">Servir anuncios y limitar su frecuencia</td>
              <td className="border border-border px-3 py-2">13 meses</td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-mono text-xs">IDE, DSID</td>
              <td className="border border-border px-3 py-2">Google (DoubleClick)</td>
              <td className="border border-border px-3 py-2">Medir el rendimiento de los anuncios y personalizarlos</td>
              <td className="border border-border px-3 py-2">13 meses</td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 font-mono text-xs">NID</td>
              <td className="border border-border px-3 py-2">Google</td>
              <td className="border border-border px-3 py-2">Recordar preferencias del usuario para los anuncios</td>
              <td className="border border-border px-3 py-2">6 meses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>3. Cookies de terceros</h2>
      <p>
        Tanto Google Analytics como Google AdSense son servicios prestados
        por terceros (Google Ireland Limited). Estos terceros pueden
        instalar sus propias cookies a través de nuestro sitio cuando das
        tu consentimiento. {siteConfig.name} no controla directamente esas
        cookies. Puedes consultar sus políticas en:
      </p>
      <ul>
        <li>
          <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer">Tecnologías de cookies de Google</a>
        </li>
        <li>
          <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Cómo usa Google la información de tu actividad</a>
        </li>
      </ul>

      <h2>4. ¿Cómo gestionar tu consentimiento?</h2>
      <p>
        En tu primera visita aparece un banner desde el que puedes:
      </p>
      <ul>
        <li><strong>Aceptar todo:</strong> se activan las cookies analíticas y publicitarias.</li>
        <li><strong>Rechazar:</strong> solo se mantienen las cookies estrictamente necesarias.</li>
      </ul>
      <p>
        Tu decisión se guarda durante 12 meses. Puedes cambiarla en cualquier
        momento borrando los datos del sitio en tu navegador, lo que
        provocará que el banner vuelva a aparecer en la siguiente visita.
      </p>

      <h2>5. Cómo desactivar cookies en el navegador</h2>
      <p>
        También puedes configurar tu navegador para que rechace cookies por
        defecto o te avise antes de instalarlas:
      </p>
      <ul>
        <li>
          <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a>
        </li>
        <li>
          <a href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a>
        </li>
        <li>
          <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a>
        </li>
        <li>
          <a href="https://support.microsoft.com/es-es/microsoft-edge" target="_blank" rel="noopener noreferrer">Microsoft Edge</a>
        </li>
      </ul>
      <p>
        Ten en cuenta que desactivar todas las cookies puede afectar al
        correcto funcionamiento del sitio.
      </p>

      <h2>6. Opt-out de publicidad personalizada</h2>
      <p>
        Si quieres dejar de recibir publicidad personalizada a nivel global
        (no solo en este sitio), puedes hacerlo desde:
      </p>
      <ul>
        <li>
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Configuración de anuncios de Google</a>
        </li>
        <li>
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance (EE. UU.)</a>
        </li>
        <li>
          <a href="https://www.youronlinechoices.com/es/" target="_blank" rel="noopener noreferrer">Your Online Choices (Europa)</a>
        </li>
      </ul>

      <h2>7. Cambios en esta política</h2>
      <p>
        Podemos modificar esta política para adaptarla a cambios legales o
        técnicos. La fecha de la última actualización figura al principio
        del documento.
      </p>
    </main>
    <Footer />
  </>
);

export default CookiesPage;
