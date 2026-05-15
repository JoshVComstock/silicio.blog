import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Aviso legal y términos de uso",
  description: `Información legal, condiciones de uso y términos del servicio de ${siteConfig.name}.`,
  alternates: { canonical: `${siteConfig.url}/aviso-legal` },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "14 de mayo de 2026";

const LegalPage = () => (
  <>
    <Header />
    <main className="flex-1 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 prose prose-neutral dark:prose-invert">
      <h1>Aviso legal y términos de uso</h1>
      <p className="text-sm text-muted-foreground">
        Última actualización: {LAST_UPDATED}
      </p>

      <p>
        El presente Aviso Legal y los siguientes Términos de Uso regulan el
        acceso y la utilización del sitio web {siteConfig.url} (en adelante,
        &ldquo;el Sitio&rdquo;), de conformidad con la Ley 34/2002 de
        Servicios de la Sociedad de la Información y de Comercio Electrónico
        (LSSI-CE) y demás normativa aplicable.
      </p>

      <h2>1. Datos identificativos del titular</h2>
      <p>
        En cumplimiento del deber de información recogido en el artículo 10
        de la LSSI-CE, se informa de los siguientes datos del titular del
        Sitio:
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

      <h2>2. Objeto</h2>
      <p>
        {siteConfig.name} es un medio digital cuyo objeto es la publicación
        de contenido informativo, análisis y opinión sobre inteligencia
        artificial, ciencia, ciberseguridad y tecnología. El acceso al
        contenido es gratuito y no requiere registro previo, salvo en
        funcionalidades específicas (como la suscripción al newsletter) que
        así lo indiquen expresamente.
      </p>

      <h2>3. Aceptación de los términos</h2>
      <p>
        El acceso al Sitio atribuye la condición de usuario e implica la
        aceptación plena y sin reservas de todas las disposiciones del
        presente Aviso Legal, de la{" "}
        <Link href="/privacidad">política de privacidad</Link> y de la{" "}
        <Link href="/cookies">política de cookies</Link>. Si no estás de
        acuerdo con cualquiera de estos documentos, te rogamos no continuar
        utilizando el Sitio.
      </p>

      <h2>4. Condiciones de uso</h2>
      <p>El usuario se compromete a:</p>
      <ul>
        <li>
          Hacer un uso del Sitio conforme a la ley, la moral, el orden
          público y los presentes Términos.
        </li>
        <li>
          No utilizar el Sitio con fines fraudulentos, ilícitos o lesivos
          para los derechos e intereses del titular o de terceros.
        </li>
        <li>
          No realizar ninguna acción que pueda dañar, sobrecargar,
          deteriorar o impedir la normal utilización del Sitio (denegación
          de servicio, intentos de intrusión, scraping masivo no
          autorizado, etc.).
        </li>
        <li>
          Respetar los derechos de propiedad intelectual e industrial del
          titular y de terceros.
        </li>
      </ul>

      <h2>5. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del Sitio (textos, imágenes, ilustraciones,
        diseño gráfico, código fuente, logotipo, marca y cualquier otro
        elemento susceptible de protección) son titularidad de{" "}
        {siteConfig.legal.owner} o, en su caso, de terceros que han
        autorizado su uso. Estos contenidos están protegidos por la Ley de
        Propiedad Intelectual y los tratados internacionales suscritos por
        España.
      </p>
      <p>
        Queda expresamente prohibida la reproducción, distribución,
        comunicación pública, transformación o cualquier otro acto de
        explotación, total o parcial, de los contenidos del Sitio, sin la
        autorización previa y por escrito del titular, salvo:
      </p>
      <ul>
        <li>
          Cuando se trate de un uso personal y privado, sin finalidad
          comercial.
        </li>
        <li>
          Citas en otros medios siempre que se identifique claramente la
          fuente y se incluya un enlace al artículo original (cita conforme
          al art. 32 de la Ley de Propiedad Intelectual).
        </li>
      </ul>

      <h2>6. Enlaces a sitios de terceros</h2>
      <p>
        El Sitio puede contener enlaces a páginas web de terceros. Estos
        enlaces se proporcionan únicamente para facilitar la consulta de
        información adicional. El titular no es responsable del contenido,
        del cumplimiento legal, ni de las políticas de privacidad de los
        sitios enlazados, ni respalda necesariamente la información en
        ellos publicada.
      </p>

      <h2>7. Publicidad y contenido patrocinado</h2>
      <p>
        El Sitio incluye espacios publicitarios servidos a través de redes
        de publicidad como Google AdSense. Los anuncios son seleccionados
        por estas redes y no necesariamente reflejan la opinión editorial
        del medio. El titular no se hace responsable del contenido de los
        anuncios ni de los productos o servicios anunciados.
      </p>
      <p>
        Cuando un artículo sea contenido patrocinado o haya sido producido
        en colaboración con un tercero, se identificará visiblemente como
        tal al inicio del propio artículo.
      </p>

      <h2>8. Exclusión de responsabilidad</h2>
      <p>
        El titular hace todo lo razonablemente posible para que los
        contenidos sean veraces, actuales y de calidad. No obstante:
      </p>
      <ul>
        <li>
          La información publicada tiene fines informativos y no
          constituye asesoramiento profesional (técnico, financiero,
          jurídico, médico o de otro tipo).
        </li>
        <li>
          El titular no garantiza la inexistencia de errores, ni la
          actualización permanente de los contenidos.
        </li>
        <li>
          El titular no será responsable de los daños y perjuicios de
          cualquier naturaleza derivados del uso del Sitio, incluyendo, sin
          limitación, los derivados de la presencia de virus o de fallos en
          la disponibilidad técnica del servicio.
        </li>
        <li>
          El titular se reserva el derecho a suspender, interrumpir o
          dejar de operar el Sitio en cualquier momento, sin previo aviso.
        </li>
      </ul>

      <h2>9. Modificaciones</h2>
      <p>
        El titular se reserva el derecho a modificar en cualquier momento
        las condiciones del presente Aviso Legal, así como cualquier otro
        contenido del Sitio. Los cambios entrarán en vigor desde su
        publicación en esta misma página, indicando la fecha de la última
        actualización al principio del documento.
      </p>

      <h2>10. Legislación aplicable y jurisdicción</h2>
      <p>
        El presente Aviso Legal se rige por la legislación española. Para la
        resolución de cualquier controversia que pudiera surgir, las partes
        se someten a los Juzgados y Tribunales del domicilio del titular,
        salvo que la normativa aplicable disponga otra cosa.
      </p>

      <h2>11. Contacto</h2>
      <p>
        Para cualquier consulta relacionada con este Aviso Legal, puedes
        escribirnos a{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>{" "}
        o utilizar nuestra <Link href="/contacto">página de contacto</Link>.
      </p>
    </main>
    <Footer />
  </>
);

export default LegalPage;
