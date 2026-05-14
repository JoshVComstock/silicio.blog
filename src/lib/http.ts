// Wrapper centralizado para fetch hacia el server Express.
// Aquí vive la URL base, la política de revalidación de Next.js y el
// manejo de errores. Las features no deberían usar fetch directamente.

const API_URL = process.env.API_URL ?? 'http://localhost:4000/api/v1';
const DEFAULT_REVALIDATE_SECONDS = 60;

interface FetchJsonOptions {
  query?: Record<string, string | number | undefined>;
  revalidate?: number;
}

export async function fetchJson<T>(
  path: string,
  { query, revalidate = DEFAULT_REVALIDATE_SECONDS }: FetchJsonOptions = {}
): Promise<T | null> {
  const params = new URLSearchParams();
  if (query) {
    for (const [k, v] of Object.entries(query)) {
      if (v !== undefined && v !== '') params.append(k, String(v));
    }
  }
  const qs = params.toString();
  const url = `${API_URL}${path}${qs ? `?${qs}` : ''}`;

  try {
    const res = await fetch(url, { next: { revalidate } });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}
