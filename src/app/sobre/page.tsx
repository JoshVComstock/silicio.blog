import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `Sobre ${siteConfig.name}`,
  description: `Conoce más sobre ${siteConfig.name}, nuestro equipo y nuestra línea editorial.`,
};

const AboutPage = () => (
  <>
    <Header />
    <main className="flex-1 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 prose prose-neutral dark:prose-invert">
      <h1>Sobre {siteConfig.name}</h1>

      <p className="lead text-lg">
        {siteConfig.name} es un medio digital en español dedicado al análisis de inteligencia
        artificial, ciencia, ciberseguridad y tecnología.
      </p>

      <h2>Nuestra línea editorial</h2>
      <p>
        Creemos que la tecnología merece un periodismo riguroso y sin ruido. Nuestro objetivo
        es traducir avances complejos a un lenguaje claro, contrastando fuentes y aportando
        contexto técnico. Cubrimos desde nuevos modelos de IA y hardware hasta investigación
        científica y tendencias de seguridad.
      </p>

      <h2>Cómo trabajamos</h2>
      <p>
        Parte del contenido se produce con asistencia de modelos de lenguaje, y todo es
        revisado por el equipo editorial antes de publicarse. Cuando una historia requiere
        verificación adicional, lo indicamos explícitamente. Nunca publicamos información sin
        comprobar antes su procedencia.
      </p>

      <h2>Independencia</h2>
      <p>
        Nuestra financiación proviene de publicidad y suscripciones voluntarias al newsletter.
        Si publicamos contenido patrocinado, lo señalamos siempre de forma visible.
      </p>

      <h2>Contacto</h2>
      <p>
        ¿Tienes una sugerencia, una pista o una corrección? Escríbenos a{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a> o usa
        nuestra <Link href="/contacto">página de contacto</Link>.
      </p>
    </main>
    <Footer />
  </>
);

export default AboutPage;
