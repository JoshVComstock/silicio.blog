import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: `Información legal de ${siteConfig.name} y condiciones de uso del sitio.`,
  robots: { index: true, follow: true },
};

const LegalPage = () => (
  <>
    <Header />
    <main className="flex-1 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 prose prose-neutral dark:prose-invert">
      <h1>Aviso legal</h1>
      <p className="text-sm text-muted-foreground">
        Última actualización: {new Date().toLocaleDateString("es-ES")}
      </p>

      <h2>1. Datos identificativos</h2>
      <p>
        En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
        Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa de:
      </p>
      <ul>
        <li><strong>Titular:</strong> {siteConfig.legal.owner}</li>
        {siteConfig.legal.taxId && <li><strong>CIF/NIF:</strong> {siteConfig.legal.taxId}</li>}
        {siteConfig.legal.address && <li><strong>Domicilio:</strong> {siteConfig.legal.address}</li>}
        <li><strong>Email:</strong> <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></li>
        <li><strong>Sitio web:</strong> {siteConfig.url}</li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        El presente sitio web tiene como finalidad ofrecer contenido informativo sobre
        inteligencia artificial, ciencia, ciberseguridad y tecnología. El acceso al sitio es
        gratuito salvo en lo relativo al coste de conexión a internet.
      </p>

      <h2>3. Propiedad intelectual</h2>
      <p>
        Todos los contenidos del sitio (textos, imágenes, código, marca y diseño) son
        propiedad de {siteConfig.legal.owner} o de terceros con licencia, y están protegidos
        por la legislación nacional e internacional de propiedad intelectual. Queda prohibida
        la reproducción total o parcial sin autorización expresa.
      </p>

      <h2>4. Responsabilidad</h2>
      <p>
        El titular no se hace responsable de los daños derivados del uso del sitio, ni de la
        veracidad o actualidad permanente de los contenidos. Las opiniones expresadas son a
        título orientativo y no constituyen asesoramiento profesional.
      </p>

      <h2>5. Enlaces a terceros</h2>
      <p>
        El sitio puede contener enlaces a webs de terceros sobre los que el titular no tiene
        control. La inclusión de estos enlaces no implica respaldo de su contenido.
      </p>

      <h2>6. Legislación aplicable</h2>
      <p>
        Este aviso legal se rige por la legislación española. Para cualquier controversia, las
        partes se someten a los juzgados y tribunales del domicilio del titular.
      </p>
    </main>
    <Footer />
  </>
);

export default LegalPage;
