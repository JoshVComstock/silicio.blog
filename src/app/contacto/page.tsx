import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Clock, Shield } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Cómo contactar con ${siteConfig.name}: sugerencias, correcciones, prensa, publicidad o colaboraciones.`,
  alternates: { canonical: `${siteConfig.url}/contacto` },
};

const ContactPage = () => (
  <>
    <Header />
    <main className="flex-1 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 prose prose-neutral dark:prose-invert">
      <h1>Contacto</h1>
      <p className="lead">
        Estamos atentos a sugerencias, pistas, correcciones y oportunidades de
        colaboración. Todas las consultas son atendidas por el equipo editorial
        de {siteConfig.name}.
      </p>

      <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
        <div className="flex items-start gap-3 p-5 rounded-xl border border-border bg-muted/30">
          <Mail className="h-6 w-6 text-primary shrink-0 mt-1" />
          <div>
            <p className="font-semibold mb-1">Email</p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-primary hover:underline text-sm break-all"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3 p-5 rounded-xl border border-border bg-muted/30">
          <Clock className="h-6 w-6 text-primary shrink-0 mt-1" />
          <div>
            <p className="font-semibold mb-1">Tiempo de respuesta</p>
            <p className="text-sm text-muted-foreground">
              Habitualmente en 48 horas laborables.
            </p>
          </div>
        </div>
      </div>

      <h2>¿Sobre qué quieres escribirnos?</h2>
      <ul>
        <li>
          <strong>Sugerencias de temas:</strong> ¿conoces un avance, paper o
          herramienta que merezca cobertura? Indícanos enlaces y por qué te
          parece relevante.
        </li>
        <li>
          <strong>Pistas y filtraciones:</strong> si tienes información que
          pueda ser de interés periodístico, indica &ldquo;Pista&rdquo; en el
          asunto. Tratamos todas las fuentes con confidencialidad y
          protegemos su anonimato cuando así se solicita.
        </li>
        <li>
          <strong>Correcciones:</strong> si encuentras un error fáctico o
          tipográfico en un artículo, indícanos la URL exacta y la corrección
          concreta. Las correcciones materiales se reflejan visiblemente en
          el propio artículo.
        </li>
        <li>
          <strong>Derecho de réplica:</strong> si una persona o empresa
          mencionada en un artículo considera que la información no es
          correcta, puede solicitar una rectificación a través de este mismo
          canal.
        </li>
        <li>
          <strong>Prensa y entrevistas:</strong> atendemos peticiones de otros
          medios y solicitudes de entrevista en plazo de 48 horas
          laborables.
        </li>
        <li>
          <strong>Publicidad y patrocinios:</strong> contamos con espacios
          publicitarios y oportunidades de patrocinio para empresas del sector
          tecnológico. Escríbenos solicitando nuestro <em>media kit</em>.
        </li>
        <li>
          <strong>Colaboraciones editoriales:</strong> si eres especialista en
          alguna de las áreas que cubrimos y te interesa publicar un artículo
          invitado, envíanos una breve propuesta.
        </li>
      </ul>

      <div className="not-prose flex items-start gap-3 p-5 rounded-xl border border-border bg-primary/5 my-8">
        <Shield className="h-6 w-6 text-primary shrink-0 mt-1" />
        <div className="text-sm">
          <p className="font-semibold mb-1">Privacidad</p>
          <p className="text-muted-foreground">
            Los datos que nos proporciones por correo electrónico se utilizan
            exclusivamente para responder a tu consulta. No se ceden a
            terceros ni se incorporan a bases de datos comerciales. Consulta
            nuestra <Link href="/privacidad" className="text-primary hover:underline">política de privacidad</Link> para más
            información.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default ContactPage;
