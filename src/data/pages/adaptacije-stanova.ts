import type { ServicePageConfig } from '../servicePageConfig';
import beforeAfterAdaptacija from '../../assets/images/beforeafter_adaptacija.png';

const adaptacijeStanova: ServicePageConfig = {
  slug: 'adaptacije-stanova-kragujevac',
  metaTitle: 'Adaptacije stanova i lokala Kragujevac | Ključ u ruke',
  heroH1: 'Kompletne adaptacije stanova i lokala u Kragujevcu.',
  heroSubhead:
    "Od rušenja do završnog premaza. Pouzdan tim majstora za renoviranje vašeg prostora po sistemu 'ključ u ruke' bez probijanja rokova.",
  trustBanner: 'Vaš partner za renoviranje u srcu Šumadije.',
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
      'Kupili smo star stan kod Velikog parka i ova ekipa ga je potpuno transformisala. Ispoštovali su dogovorenu cenu u dinar.',
    author: 'Nikola, Kragujevac',
  },
  beforeAfterImage: beforeAfterAdaptacija,
  contactCta: 'Zatražite besplatnu ponudu za vaš projekat u Kragujevcu.',
  address: 'Kragujevac, Srbija',
};

export default adaptacijeStanova;
