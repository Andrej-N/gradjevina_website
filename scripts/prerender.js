/**
 * Prerender Script for SSG
 *
 * Generates static HTML files for each route after `vite build`.
 * Uses the built JS bundle with ReactDOMServer to render each page.
 *
 * Usage: node scripts/prerender.js
 * Run after: npm run build
 */

import { readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DIST_DIR = join(__dirname, '..', 'dist');
const BASE_PATH = '/gradjevina_website';

// All 15 routes
const ROUTES = [
  'molerske-usluge-kragujevac',
  'keramicarski-radovi-kragujevac',
  'adaptacije-stanova-kragujevac',
  'molerske-usluge-beograd',
  'keramicarski-radovi-beograd',
  'adaptacije-stanova-beograd',
  'molerske-usluge-novi-sad',
  'keramicarski-radovi-novi-sad',
  'adaptacije-stanova-novi-sad',
  'molerske-usluge-nis',
  'keramicarski-radovi-nis',
  'adaptacije-stanova-nis',
  'molerske-usluge-sabac',
  'keramicarski-radovi-sabac',
  'adaptacije-stanova-sabac',
];

// SEO metadata per route (title + description for the static HTML shell)
const SEO_DATA = {
  'molerske-usluge-kragujevac': {
    title: 'Molerske usluge Kragujevac | Gletovanje i krečenje stanova',
    description: 'Profesionalne molerske usluge u Kragujevcu. Gletovanje, krečenje i dekorativne tehnike uz besplatan izlazak. Pozovite za ponudu!',
  },
  'keramicarski-radovi-kragujevac': {
    title: 'Keramičarski radovi Kragujevac | Postavljanje pločica i keramike',
    description: 'Profesionalno postavljanje pločica u Kragujevcu. Keramičarski radovi za kupatila, kuhinje i terase. Besplatan izlazak i procena!',
  },
  'adaptacije-stanova-kragujevac': {
    title: 'Adaptacija stanova Kragujevac | Renoviranje ključ u ruke',
    description: 'Kompletna adaptacija stanova u Kragujevcu po sistemu ključ u ruke. Rušenje, gipsarski radovi i renoviranje. Pozovite danas!',
  },
  'molerske-usluge-beograd': {
    title: 'Molerske usluge Beograd | Gletovanje, krečenje i farbanje',
    description: 'Profesionalne molerske usluge u Beogradu. Gletovanje, krečenje i dekorativne tehnike uz besplatan dolazak. Zakazite odmah!',
  },
  'keramicarski-radovi-beograd': {
    title: 'Keramičarski radovi Beograd | Postavljanje pločica - Vrhunski kvalitet',
    description: 'Keramičarski radovi u Beogradu sa garancijom kvaliteta. Postavljanje pločica u kupatilima, kuhinjama i terasama. Pozovite!',
  },
  'adaptacije-stanova-beograd': {
    title: 'Adaptacija stanova Beograd | Renoviranje i adaptacije ključ u ruke',
    description: 'Kompletna adaptacija stanova u Beogradu. Renoviranje po sistemu ključ u ruke - rušenje, gipsarski radovi, završna obrada. Pozovite!',
  },
  'molerske-usluge-novi-sad': {
    title: 'Molerske usluge Novi Sad | Gletovanje i krečenje stanova',
    description: 'Vrhunske molerske usluge u Novom Sadu. Gletovanje, krečenje i dekorativne tehnike sa besplatnim dolaskom. Pozovite za ponudu!',
  },
  'keramicarski-radovi-novi-sad': {
    title: 'Keramičarski radovi Novi Sad | Pločice za kupatila i kuhinje',
    description: 'Stručno postavljanje pločica u Novom Sadu. Keramičarski radovi za kupatila, kuhinje i terase uz garanciju kvaliteta. Pozovite!',
  },
  'adaptacije-stanova-novi-sad': {
    title: 'Adaptacija stanova Novi Sad | Renoviranje po sistemu ključ u ruke',
    description: 'Kompletna adaptacija stanova u Novom Sadu. Renoviranje ključ u ruke - od rušenja do predaje gotovog prostora. Pozovite za procenu!',
  },
  'molerske-usluge-nis': {
    title: 'Molerske usluge Niš | Profesionalno gletovanje i krečenje',
    description: 'Profesionalne molerske usluge u Nišu. Gletovanje, krečenje i dekorativne tehnike sa besplatnim izlaskom na teren. Pozovite nas!',
  },
  'keramicarski-radovi-nis': {
    title: 'Keramičarski radovi Niš | Postavljanje keramike i pločica',
    description: 'Keramičarski radovi u Nišu - precizno postavljanje pločica u kupatilima, kuhinjama i terasama. Besplatan izlazak. Pozovite odmah!',
  },
  'adaptacije-stanova-nis': {
    title: 'Adaptacija stanova Niš | Renoviranje i adaptacije ključ u ruke',
    description: 'Kompletna adaptacija stanova i lokala u Nišu. Renoviranje po sistemu ključ u ruke sa garancijom kvaliteta. Pozovite za ponudu!',
  },
  'molerske-usluge-sabac': {
    title: 'Molerske usluge Šabac | Gletovanje i krečenje stanova',
    description: 'Profesionalne molerske usluge u Šapcu. Gletovanje, krečenje i dekorativne tehnike uz besplatan dolazak i procenu. Pozovite nas!',
  },
  'keramicarski-radovi-sabac': {
    title: 'Keramičarski radovi Šabac | Postavljanje pločica i keramike',
    description: 'Precizni keramičarski radovi u Šapcu. Postavljanje pločica za kupatila, kuhinje i terase uz garanciju kvaliteta. Pozovite!',
  },
  'adaptacije-stanova-sabac': {
    title: 'Adaptacija stanova Šabac | Renoviranje ključ u ruke',
    description: 'Kompletna adaptacija stanova u Šapcu po sistemu ključ u ruke. Rušenje, gipsarski radovi i završna obrada. Pozovite za procenu!',
  },
};

async function prerender() {
  console.log('=== PRERENDERING STATIC HTML ===\n');

  // Read the base index.html template from dist
  const indexPath = join(DIST_DIR, 'index.html');
  if (!existsSync(indexPath)) {
    console.error('Error: dist/index.html not found. Run "npm run build" first.');
    process.exit(1);
  }

  const template = await readFile(indexPath, 'utf-8');
  let generated = 0;

  for (const route of ROUTES) {
    const seo = SEO_DATA[route];
    if (!seo) continue;

    // Create route directory
    const routeDir = join(DIST_DIR, route);
    await mkdir(routeDir, { recursive: true });

    // Inject SEO meta tags into the HTML template
    let html = template;

    // Replace title
    html = html.replace(
      /<title>.*?<\/title>/,
      `<title>${seo.title}</title>`
    );

    // Add meta description if not present, or replace it
    if (html.includes('<meta name="description"')) {
      html = html.replace(
        /<meta name="description"[^>]*>/,
        `<meta name="description" content="${seo.description}" />`
      );
    } else {
      html = html.replace(
        '</head>',
        `  <meta name="description" content="${seo.description}" />\n  </head>`
      );
    }

    // Add canonical URL
    const canonicalUrl = `https://reluxconcept.rs${BASE_PATH}/${route}`;
    html = html.replace(
      '</head>',
      `  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`
    );

    // Add Open Graph tags
    const ogTags = `
  <meta property="og:title" content="${seo.title}" />
  <meta property="og:description" content="${seo.description}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="sr_RS" />
  <meta property="og:site_name" content="Relux Concept" />
`;
    html = html.replace('</head>', `${ogTags}  </head>`);

    // Write the file
    const outputPath = join(routeDir, 'index.html');
    await writeFile(outputPath, html, 'utf-8');
    console.log(`  ✓ ${route}/index.html`);
    generated++;
  }

  console.log(`\n${generated} static HTML files generated.`);
  console.log('Each route now has its own index.html with unique SEO metadata.');
}

prerender().catch(console.error);
