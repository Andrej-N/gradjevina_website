import type { ServicePageConfig } from '../servicePageConfig';
import heroAdaptacija from '../../assets/images/hero.PNG';
import beforeAfterAdaptacija from '../../assets/images/beforeafter_adaptacija.png';

const adaptacijeStanovaNis: ServicePageConfig = {
  slug: 'adaptacije-stanova-nis',
  metaTitle: 'Adaptacija stanova Niš | Renoviranje i adaptacije ključ u ruke',
  metaDescription: 'Kompletna adaptacija stanova i lokala u Nišu. Renoviranje po sistemu ključ u ruke sa garancijom kvaliteta. Pozovite za ponudu!',
  heroH1: 'Kompletne adaptacije stanova i lokala u Nišu.',
  heroSubhead:
    "Od rušenja do završnog premaza. Pouzdan tim majstora za renoviranje vašeg prostora po sistemu 'ključ u ruke' bez probijanja rokova.",
  trustBanner: 'Vaš partner za renoviranje u Nišu i okolini.',
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
      'Adaptirali su nam lokal na Medijani od nule. Sve je urađeno kvalitetno i u dogovorenom roku!',
    author: 'Nemanja, Niš',
  },
  heroImage: heroAdaptacija,
  heroImageAlt: 'Adaptacija stana u Nišu - kompletno renoviranje prostora',
  beforeAfterImage: beforeAfterAdaptacija,
  contactCta: 'Zatražite besplatnu ponudu za vaš projekat u Nišu.',
  address: 'Niš, Srbija',
  canonicalPath: '/gradjevina_website/adaptacije-stanova-nis',
  city: 'Niš',
  serviceType: 'adaptacija',
};

export default adaptacijeStanovaNis;
