import { Helmet } from 'react-helmet-async';
import type { ServicePageConfig } from '../data/servicePageConfig';

const SITE_URL = 'https://reluxconcept.rs';

interface SeoHeadProps {
  page: ServicePageConfig;
}

export default function SeoHead({ page }: SeoHeadProps) {
  const canonicalUrl = `${SITE_URL}${page.canonicalPath}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Relux Concept',
    description: page.metaDescription,
    url: canonicalUrl,
    telephone: '+381631234567',
    email: 'info@reluxconcept.rs',
    address: {
      '@type': 'PostalAddress',
      addressLocality: page.city,
      addressCountry: 'RS',
    },
    areaServed: {
      '@type': 'City',
      name: page.city,
    },
    openingHours: ['Mo-Fr 08:00-18:00', 'Sa 09:00-14:00'],
  };

  return (
    <Helmet>
      <title>{page.metaTitle}</title>
      <meta name="description" content={page.metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={page.metaTitle} />
      <meta property="og:description" content={page.metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="sr_RS" />
      <meta property="og:site_name" content="Relux Concept" />

      {/* Geo Tags */}
      <meta name="geo.region" content="RS" />
      <meta name="geo.placename" content={page.city} />

      {/* Language */}
      <html lang="sr" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
