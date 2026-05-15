import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: `Información sobre cómo ${siteConfig.name} recopila, utiliza y protege los datos personales de sus usuarios, conforme al RGPD y la LOPDGDD.`,
  alternates: { canonical: `${siteConfig.url}/privacidad` },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "14 de mayo de 2026";

const PrivacyPage = () => (
  <>
    <Header />
    <main className="flex-1 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 prose prose-neutral dark:prose-invert">
      <h1>Política de privacidad</h1>
      <p className="text-sm text-muted-foreground">
        Última actualización: {LAST_UPDATED}
      </p>

      <p>
        En {siteConfig.name} ({siteConfig.url}) nos tomamos muy en serio la
        privacidad de nuestros usuarios. Esta política explica qué datos
        personales recogemos, con qué finalidad, cuál es la base legal del
        tratamiento, con quién los compartimos y cuáles son tus derechos. Está
        redactada de conformidad con el Reglamento (UE) 2016/679 (RGPD), la
        Ley Orgánica 3/2018 de Protección de Datos y Garantía de los Derechos
        Digitales (LOPDGDD) y la Ley 34/2002 de Servicios de la Sociedad de la
        Información (LSSI-CE).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        El responsable del tratamiento de los datos recogidos a través de
        este sitio es:
      </p>
      <ul>
        <li><strong>Titular:</strong> {siteConfig.legal.owner}</li>
        {siteConfig.legal.taxId && <li><strong>NIF / CIF:</strong> {siteConfig.legal.taxId}</li>}
        {siteConfig.legal.address && <li><strong>Domicilio:</strong> {siteConfig.legal.address}</li>}
        <li>
          <strong>Email de contacto:</strong>{" "}
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
        </li>
        <li><strong>Sitio web:</strong> {siteConfig.url}</li>
      </ul>

      <h2>2. Datos personales que recogemos</h2>
      <p>
        Dependiendo de tu interacción con el sitio, podemos recoger las
        siguientes categorías de datos:
      </p>
      <ul>
        <li>
          <strong>Datos de navegación:</strong> dirección IP (anonimizada),
          tipo y versión de navegador, sistema operativo, páginas visitadas,
          tiempo de permanencia, sitio de procedencia (referer) y eventos de
          interacción. Estos datos se obtienen automáticamente mediante
          cookies y herramientas de analítica.
        </li>
        <li>
          <strong>Dirección de correo electrónico:</strong> únicamente si te
          suscribes voluntariamente a nuestro newsletter.
        </li>
        <li>
          <strong>Datos facilitados al contactarnos:</strong> nombre, email y
          contenido del mensaje cuando nos escribes por correo electrónico.
        </li>
        <li>
          <strong>Preferencia de consentimiento de cookies:</strong> tu
          decisión se guarda en el almacenamiento local de tu navegador para
          no volver a preguntarte.
        </li>
      </ul>

      <h2>3. Finalidad y base legal del tratamiento</h2>
      <ul>
        <li>
          <strong>Análisis estadístico del tráfico</strong> (Google
          Analytics 4). Base legal: <em>consentimiento</em> del interesado
          (Art. 6.1.a RGPD).
        </li>
        <li>
          <strong>Mostrar publicidad personalizada o no personalizada</strong>{" "}
          (Google AdSense y partners certificados de Google). Base legal:{" "}
          <em>consentimiento</em> del interesado (Art. 6.1.a RGPD).
        </li>
        <li>
          <strong>Envío del newsletter</strong> con novedades y artículos del
          sitio. Base legal: <em>consentimiento</em> explícito al suscribirte.
        </li>
        <li>
          <strong>Atender consultas, sugerencias o ejercicios de derechos</strong>{" "}
          recibidos por email. Base legal: <em>interés legítimo</em> en
          gestionar la comunicación (Art. 6.1.f RGPD).
        </li>
        <li>
          <strong>Cumplir obligaciones legales</strong> en caso de
          requerimientos judiciales o administrativos. Base legal: <em>
          obligación legal</em> (Art. 6.1.c RGPD).
        </li>
      </ul>

      <h2>4. Publicidad mediante Google AdSense</h2>
      <p>
        Este sitio utiliza Google AdSense para mostrar publicidad. AdSense es
        un servicio prestado por Google Ireland Limited (Gordon House, Barrow
        Street, Dublín 4, Irlanda).
      </p>
      <ul>
        <li>
          Google, como proveedor tercero, utiliza cookies y tecnologías
          similares (incluido el identificador de publicidad) para servir
          anuncios.
        </li>
        <li>
          Google puede combinar la información obtenida en este sitio con
          datos que ha recopilado en otros sitios o servicios para mostrar
          anuncios más relevantes.
        </li>
        <li>
          El uso de la cookie <strong>DoubleClick DART</strong> permite a
          Google y a sus partners servir anuncios basados en visitas a este
          sitio y a otros sitios de internet.
        </li>
        <li>
          Puedes desactivar la publicidad personalizada visitando{" "}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">la configuración de anuncios de Google</a>{" "}
          o, para opt-out a nivel sectorial, en{" "}
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">aboutads.info/choices</a>{" "}
          y{" "}
          <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer">youronlinechoices.com</a>.
        </li>
        <li>
          Más información sobre el tratamiento de datos por parte de Google
          en su{" "}
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">política de socios de Google</a>{" "}
          y en su{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">política de privacidad</a>.
        </li>
      </ul>

      <h2>5. Analítica web mediante Google Analytics</h2>
      <p>
        Utilizamos Google Analytics 4, también prestado por Google Ireland
        Limited, para conocer de forma agregada cómo se utiliza el sitio.
        Hemos activado la <strong>anonimización de IP</strong> y el modo de
        consentimiento (Consent Mode v2), de manera que no se cargan cookies
        analíticas sin tu autorización previa.
      </p>
      <p>
        Más información:{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de privacidad de Google</a>.
      </p>

      <h2>6. Destinatarios y transferencias internacionales</h2>
      <p>
        No vendemos tus datos. Únicamente compartimos datos con los siguientes
        encargados o destinatarios, en la medida estrictamente necesaria para
        prestar el servicio:
      </p>
      <ul>
        <li>
          <strong>Google Ireland Limited</strong> — Google Analytics y Google
          AdSense.
        </li>
        <li>
          <strong>Vercel Inc.</strong> — proveedor de hosting y CDN del sitio
          (Estados Unidos, adherido al Data Privacy Framework UE-EEUU).
        </li>
        <li>
          <strong>Seenode</strong> — proveedor de la base de datos y la API
          del sitio (Unión Europea).
        </li>
      </ul>
      <p>
        Las transferencias internacionales (principalmente a Estados Unidos)
        se realizan al amparo del Data Privacy Framework UE-EEUU o de las
        Cláusulas Contractuales Tipo aprobadas por la Comisión Europea.
      </p>

      <h2>7. Plazo de conservación</h2>
      <ul>
        <li>
          Email del newsletter: hasta que solicites la baja, ejercitable en
          cualquier momento mediante el enlace incluido en cada envío o
          escribiendo al email de contacto.
        </li>
        <li>
          Datos de navegación recopilados por Google Analytics: máximo 14
          meses.
        </li>
        <li>
          Datos derivados del contacto por email: durante el tiempo necesario
          para atender la consulta y, posteriormente, durante los plazos de
          prescripción legalmente exigibles.
        </li>
      </ul>

      <h2>8. Derechos del interesado</h2>
      <p>
        Como titular de los datos puedes ejercer los siguientes derechos:
      </p>
      <ul>
        <li><strong>Acceso</strong> a tus datos personales.</li>
        <li><strong>Rectificación</strong> de datos inexactos o incompletos.</li>
        <li><strong>Supresión</strong> (&ldquo;derecho al olvido&rdquo;).</li>
        <li><strong>Limitación</strong> del tratamiento.</li>
        <li><strong>Oposición</strong> al tratamiento.</li>
        <li><strong>Portabilidad</strong> de los datos.</li>
        <li><strong>Retirar el consentimiento</strong> en cualquier momento.</li>
        <li>
          <strong>Presentar una reclamación</strong> ante la Agencia Española
          de Protección de Datos (
          <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>) o ante la autoridad de
          control que corresponda en tu país.
        </li>
      </ul>
      <p>
        Para ejercer cualquiera de estos derechos, envía un correo a{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>{" "}
        indicando el derecho que deseas ejercer y adjuntando, si fuera
        necesario, copia de un documento que acredite tu identidad.
      </p>

      <h2>9. Seguridad de los datos</h2>
      <p>
        Adoptamos medidas técnicas y organizativas razonables para proteger
        los datos personales frente a la pérdida, mal uso, acceso no
        autorizado, divulgación, alteración o destrucción. Esto incluye, entre
        otras: cifrado TLS en todas las comunicaciones, almacenamiento en
        proveedores con certificaciones de seguridad reconocidas y control de
        acceso a la base de datos basado en roles.
      </p>

      <h2>10. Menores de edad</h2>
      <p>
        Este sitio no está dirigido a menores de 14 años, y no recogemos
        intencionalmente datos de menores. Si crees que un menor nos ha
        facilitado datos personales sin consentimiento de sus tutores legales,
        contáctanos para que procedamos a eliminarlos.
      </p>

      <h2>11. Cambios en esta política</h2>
      <p>
        Podemos modificar esta política de privacidad para adaptarla a cambios
        legales, técnicos o de servicio. Cualquier cambio relevante será
        notificado en esta misma página con la fecha de la actualización al
        principio del documento.
      </p>

      <h2>12. Cookies</h2>
      <p>
        Para conocer en detalle qué cookies utilizamos, su finalidad y cómo
        gestionarlas, consulta nuestra{" "}
        <Link href="/cookies">política de cookies</Link>.
      </p>
    </main>
    <Footer />
  </>
);

export default PrivacyPage;
