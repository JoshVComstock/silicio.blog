import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Sobre ${siteConfig.name}`,
  description: `${siteConfig.name} es un medio digital independiente en español especializado en inteligencia artificial, ciencia, ciberseguridad y tecnología.`,
  alternates: { canonical: `${siteConfig.url}/sobre` },
};

const AboutPage = () => (
  <>
    <Header />
    <main className="flex-1 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 prose prose-neutral dark:prose-invert">
      <h1>Sobre {siteConfig.name}</h1>

      <p className="lead text-lg">
        {siteConfig.name} ({siteConfig.url}) es un medio digital independiente en
        español dedicado al análisis riguroso de la inteligencia artificial, la
        ciencia, la ciberseguridad y la tecnología. Nuestra misión es ayudar a
        nuestros lectores a entender los avances que están transformando el
        mundo, con contenido claro, contrastado y libre de sensacionalismo.
      </p>

      <h2>Nuestra misión</h2>
      <p>
        Vivimos una etapa de aceleración tecnológica sin precedentes. Cada
        semana surgen nuevos modelos de IA, descubrimientos científicos,
        vulnerabilidades de seguridad y avances en hardware que afectan a la
        forma en que vivimos y trabajamos. La mayoría de las noticias sobre
        estos temas son superficiales, especulativas o están escritas para
        generar clics, no para informar.
      </p>
      <p>
        Creemos que la tecnología merece un periodismo serio. Nuestro objetivo
        es traducir avances complejos a un lenguaje claro, contrastando fuentes
        primarias (papers, comunicados oficiales, documentación técnica) y
        aportando el contexto necesario para que el lector pueda formarse una
        opinión propia y bien informada.
      </p>

      <h2>Línea editorial</h2>
      <p>
        Cubrimos cuatro áreas principales:
      </p>
      <ul>
        <li>
          <strong>Inteligencia Artificial:</strong> nuevos modelos, herramientas,
          aplicaciones empresariales, agentes autónomos, ética y regulación.
        </li>
        <li>
          <strong>Ciencia:</strong> investigación reciente en biotecnología,
          neurociencia, computación cuántica, energía, materiales y física.
        </li>
        <li>
          <strong>Ciberseguridad:</strong> vulnerabilidades críticas, técnicas
          de ataque y defensa, privacidad, criptografía y normativa.
        </li>
        <li>
          <strong>Tecnología:</strong> hardware, semiconductores, gadgets,
          tendencias del sector, robótica y empresas tecnológicas.
        </li>
      </ul>

      <h2>Cómo trabajamos</h2>
      <p>
        Parte de nuestro contenido se produce con asistencia de modelos de
        lenguaje, lo que nos permite cubrir más temas con la profundidad que
        merecen. Sin embargo, <strong>todo artículo pasa por revisión editorial
        humana antes de publicarse</strong>: comprobamos hechos, verificamos
        fuentes y ajustamos el tono. Cuando una historia requiere verificación
        adicional, lo indicamos explícitamente en el propio artículo.
      </p>
      <p>
        Nunca publicamos información sin haber comprobado primero su
        procedencia. Si descubrimos un error después de publicar, lo corregimos
        de manera visible y lo señalamos con una nota de actualización.
      </p>

      <h2>Independencia editorial</h2>
      <p>
        Nuestra financiación proviene principalmente de la publicidad mostrada
        a través de redes como Google AdSense, además de patrocinios puntuales
        y suscripciones voluntarias al newsletter. En ningún caso la publicidad
        condiciona nuestra línea editorial.
      </p>
      <p>
        Si publicamos contenido patrocinado o producido en colaboración con un
        tercero, lo señalamos siempre de forma visible al inicio del artículo,
        de acuerdo con las recomendaciones de buenas prácticas periodísticas.
      </p>

      <h2>Equipo editorial</h2>
      <p>
        {siteConfig.name} es editado por <strong>{siteConfig.legal.owner}</strong>.
        Contamos con colaboradores especializados en cada una de las áreas que
        cubrimos. Si quieres formar parte del equipo o colaborar puntualmente
        con un artículo invitado, escríbenos a{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
      </p>

      <h2>Contacto</h2>
      <p>
        Para sugerencias, correcciones, pistas, prensa o colaboraciones, visita
        nuestra <Link href="/contacto">página de contacto</Link> o escríbenos
        directamente a{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
      </p>
    </main>
    <Footer />
  </>
);

export default AboutPage;
