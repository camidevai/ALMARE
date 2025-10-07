export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export const defaultSEO: SEOData = {
  title: 'Almare - Cuidamos La Mente, Acompañamos El Alma.',
  description: 'Organización sin fines de lucro dedicada a mejorar la calidad de vida de comunidades vulnerables.',
  keywords: 'ONG, organización sin fines de lucro, ayuda social, donaciones, transparencia',
  ogImage: '/og-image.jpg',
};

export function generatePageSEO(pageSEO: Partial<SEOData>): SEOData {
  return {
    ...defaultSEO,
    ...pageSEO,
    title: pageSEO.title ? `${pageSEO.title} | Almare` : defaultSEO.title,
  };
}