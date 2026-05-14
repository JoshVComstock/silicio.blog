import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Cómo contactar con ${siteConfig.name}: sugerencias, correcciones, prensa o publicidad.`,
};

const ContactPage = () => (
  <>
    <Header />
    <main className="flex-1 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 prose prose-neutral dark:prose-invert">
      <h1>Contacto</h1>
      <p className="lead">
        ¿Tienes algo que contarnos? Estamos atentos a sugerencias, pistas, correcciones y
        oportunidades de colaboración.
      </p>

      <div className="not-prose flex items-center gap-3 my-8 p-5 rounded-xl border border-border bg-muted/30">
        <Mail className="h-6 w-6 text-primary shrink-0" />
        <div>
          <p className="font-semibold">Email general</p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="text-primary hover:underline"
          >
            {siteConfig.contact.email}
          </a>
        </div>
      </div>

      <h2>¿De qué quieres hablarnos?</h2>
      <ul>
        <li>
          <strong>Pistas y filtraciones:</strong> escríbenos al email general indicando
          &ldquo;Pista&rdquo; en el asunto. Tratamos todas las fuentes con confidencialidad.
        </li>
        <li>
          <strong>Correcciones:</strong> si encuentras un error en un artículo, indica el
          enlace y la corrección concreta.
        </li>
        <li>
          <strong>Prensa y entrevistas:</strong> respondemos a peticiones de medios en un
          plazo de 48 horas laborables.
        </li>
        <li>
          <strong>Publicidad y patrocinios:</strong> consulta nuestras tarifas escribiéndonos
          directamente.
        </li>
      </ul>

      <p className="text-sm text-muted-foreground">
        Para más información sobre el tratamiento de tus datos al contactarnos, consulta
        nuestra <Link href="/privacidad">política de privacidad</Link>.
      </p>
    </main>
    <Footer />
  </>
);

export default ContactPage;
