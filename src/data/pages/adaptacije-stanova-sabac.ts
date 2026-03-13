import type { ServicePageConfig } from '../servicePageConfig';
import heroAdaptacija from '../../assets/images/hero.PNG';
import beforeAfterAdaptacija from '../../assets/images/beforeafter_adaptacija.png';

const adaptacijeStanovaSabac: ServicePageConfig = {
  slug: 'adaptacije-stanova-sabac',
  metaTitle: 'Adaptacija stanova Šabac | Renoviranje ključ u ruke',
  metaDescription: 'Kompletna adaptacija stanova u Šapcu po sistemu ključ u ruke. Rušenje, gipsarski radovi i završna obrada. Pozovite za procenu!',
  heroH1: 'Kompletne adaptacije stanova i lokala u Šapcu.',
  heroSubhead:
    "Od rušenja do završnog premaza. Pouzdan tim majstora za renoviranje vašeg prostora po sistemu 'ključ u ruke' bez probijanja rokova.",
  trustBanner: 'Vaš partner za renoviranje u Šapcu i okolini.',
  services: [
    {
      title: 'Rušenje i odvoz šuta',
      description: 'Bezbedno uklanjanje starih zidova, podova i instalacija uz kompletno čišćenje prostora. Organizujemo odvoz građevinskog otpada i pripremu terena za početak renoviranja.',
    },
    {
      title: 'Gipsarski radovi',
      description: 'Spušteni plafoni, pregradni zidovi i skrivena LED rasveta. Kreiramo moderne prostorne rešenja sa gips-karton pločama koje transformišu svaki prostor u funkcionalno okruženje.',
    },
    {
      title: 'Sistem ključ u ruke',
      description: 'Koordinacija svih majstora od početka do kraja projekta. Vi nam date ključ, mi vam vratimo potpuno renoviran prostor — bez stresa, bez kašnjenja i bez skrivenih troškova.',
    },
  ],
  testimonial: {
    quote:
      'Renovirali su nam stan kompletno — od podova do plafona. Sve urađeno kako treba, cena fer!',
    author: 'Branko, Šabac',
  },
  heroImage: heroAdaptacija,
  heroImageAlt: 'Adaptacija stana u Šapcu - kompletno renoviranje prostora',
  beforeAfterImage: beforeAfterAdaptacija,
  contactCta: 'Zatražite besplatnu ponudu za vaš projekat u Šapcu.',
  address: 'Šabac, Srbija',
  canonicalPath: '/gradjevina_website/adaptacije-stanova-sabac',
  city: 'Šabac',
  serviceType: 'adaptacija',
};

export default adaptacijeStanovaSabac;
