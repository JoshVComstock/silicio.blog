import type { Category, CategorySlug } from "./types";

export const CATEGORIES: Category[] = [
  {
    slug: "ia",
    name: "Inteligencia Artificial",
    shortName: "IA",
    tagline: "Modelos, herramientas y agentes",
    description:
      "Cobertura diaria de modelos de lenguaje, herramientas de IA, agentes autónomos y la carrera global por la inteligencia artificial general.",
    tags: [
      "modelos-llm",
      "herramientas-ia",
      "agentes",
      "prompting",
      "etica-ia",
      "ia-empresas",
      "openai",
      "anthropic",
      "google-ai",
      "meta-ai",
      "open-source-ia",
    ],
  },
  {
    slug: "ciencia",
    name: "Ciencia y Avances",
    shortName: "Ciencia",
    tagline: "Papers, biotech y descubrimientos",
    description:
      "Investigación científica, biotecnología, computación cuántica, espacio y los descubrimientos que están redefiniendo el conocimiento humano.",
    tags: [
      "papers",
      "biotech",
      "cuantica",
      "espacio",
      "neurociencia",
      "medicina",
      "energia",
      "materiales",
      "fisica",
      "matematicas",
    ],
  },
  {
    slug: "seguridad",
    name: "Ciberseguridad",
    shortName: "Seguridad",
    tagline: "Amenazas, vulnerabilidades y defensa",
    description:
      "Análisis de amenazas digitales, ransomware, vulnerabilidades zero-day, herramientas de defensa y el panorama legal de la seguridad informática.",
    tags: [
      "amenazas",
      "ransomware",
      "privacidad",
      "hackers",
      "herramientas",
      "leyes",
      "deepfakes",
      "phishing",
      "vulnerabilidades",
      "zero-trust",
    ],
  },
  {
    slug: "tecnologia",
    name: "Tecnología y Sociedad",
    shortName: "Tecnología",
    tagline: "Hardware, gaming, cripto y cultura digital",
    description:
      "El impacto de la tecnología en la sociedad: hardware, gadgets, gaming, criptomonedas, cultura digital y las tendencias que redefinen el trabajo y el ocio.",
    tags: [
      "apps",
      "gaming",
      "cripto",
      "redes",
      "cultura-digital",
      "trabajo",
      "hardware",
      "gadgets",
      "tendencias",
    ],
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined =>
  CATEGORIES.find((c) => c.slug === slug);

export const isValidCategorySlug = (slug: string): slug is CategorySlug =>
  CATEGORIES.some((c) => c.slug === slug);
