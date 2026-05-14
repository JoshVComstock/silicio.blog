import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Cómo ${siteConfig.name} recopila y trata los datos personales de sus usuarios.`,
  robots: { index: true, follow: true },
};

const PrivacyPage = () => (
  <>
    <Header />
    <main className="flex-1 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 prose prose-neutral dark:prose-invert">
      <h1>Política de privacidad</h1>
      <p className="text-sm text-muted-foreground">
        Última actualización: {new Date().toLocaleDateString("es-ES")}
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        Los datos personales recogidos a través de {siteConfig.url} son tratados por{" "}
        <strong>{siteConfig.legal.owner}</strong>
        {siteConfig.legal.taxId && <> (CIF/NIF: {siteConfig.legal.taxId})</>}
        {siteConfig.legal.address && <>, con domicilio en {siteConfig.legal.address}</>}.
        Para cualquier consulta puedes escribirnos a{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
      </p>

      <h2>2. Datos que recogemos</h2>
      <ul>
        <li>
          <strong>Datos de navegación:</strong> dirección IP anonimizada, tipo de navegador,
          páginas visitadas y tiempo de permanencia. Se obtienen mediante cookies y herramientas
          de análisis (Google Analytics).
        </li>
        <li>
          <strong>Email del newsletter:</strong> únicamente si te suscribes voluntariamente.
        </li>
        <li>
          <strong>Datos de contacto:</strong> nombre y mensaje cuando usas nuestro formulario de
          contacto.
        </li>
      </ul>

      <h2>3. Finalidad y base legal</h2>
      <ul>
        <li>
          <strong>Análisis estadístico</strong> del tráfico (interés legítimo / consentimiento).
        </li>
        <li>
          <strong>Envío del newsletter</strong> (consentimiento explícito al suscribirte).
        </li>
        <li>
          <strong>Publicidad personalizada</strong> a través de Google AdSense
          (consentimiento del banner de cookies).
        </li>
        <li>
          <strong>Atender consultas</strong> recibidas por email o el formulario de contacto.
        </li>
      </ul>

      <h2>4. Cesión a terceros</h2>
      <p>
        No vendemos tus datos. Algunos servicios procesan información en nuestro nombre:
      </p>
      <ul>
        <li>
          <strong>Google Analytics</strong> (Google Ireland Ltd.) — análisis de tráfico con IP
          anonimizada.
        </li>
        <li>
          <strong>Google AdSense</strong> (Google Ireland Ltd.) — servicio de publicidad.
        </li>
        <li>
          <strong>Proveedor de hosting</strong> — almacenamiento técnico del sitio.
        </li>
      </ul>
      <p>
        Algunos de estos proveedores pueden transferir datos fuera del EEE bajo las cláusulas
        contractuales tipo aprobadas por la Comisión Europea.
      </p>

      <h2>5. Conservación</h2>
      <p>
        Los datos del newsletter se conservan hasta que solicites la baja. Los datos de
        navegación se conservan según los plazos de Google Analytics (máximo 14 meses).
      </p>

      <h2>6. Tus derechos</h2>
      <p>
        Tienes derecho a acceder, rectificar, suprimir, limitar el tratamiento, oponerte y
        portar tus datos. Puedes ejercerlos escribiendo a{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
        También puedes presentar una reclamación ante la Agencia Española de Protección de
        Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">aepd.es</a>).
      </p>

      <h2>7. Cookies</h2>
      <p>
        Para más detalle sobre las cookies que usamos, consulta nuestra{" "}
        <Link href="/cookies">política de cookies</Link>.
      </p>
    </main>
    <Footer />
  </>
);

export default PrivacyPage;
