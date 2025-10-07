import React from 'react';
import { Helmet } from 'react-helmet-async';
import type { SEOData } from '../types';

interface SEOHeadProps {
  seo: SEOData;
}

export default function SEOHead({ seo }: SEOHeadProps) {
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      {seo.canonicalUrl && <link rel="canonical" href={seo.canonicalUrl} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {seo.ogImage && <meta name="twitter:image" content={seo.ogImage} />}
    </Helmet>
  );
}