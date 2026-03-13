import type { ServicePageConfig } from '../servicePageConfig';
import heroAdaptacija from '../../assets/images/hero.PNG';
import beforeAfterAdaptacija from '../../assets/images/beforeafter_adaptacija.png';

const adaptacijeStanovaBeograd: ServicePageConfig = {
  slug: 'adaptacije-stanova-beograd',
  metaTitle: 'Adaptacija stanova Beograd | Renoviranje i adaptacije ključ u ruke',
  metaDescription: 'Kompletna adaptacija stanova u Beogradu. Renoviranje po sistemu ključ u ruke - rušenje, gipsarski radovi, završna obrada. Pozovite!',
  heroH1: 'Kompletne adaptacije stanova i lokala u Beogradu.',
  heroSubhead:
    "Od rušenja do završnog premaza. Pouzdan tim majstora za renoviranje vašeg prostora po sistemu 'ključ u ruke' bez probijanja rokova.",
  trustBanner: 'Vaš partner za renoviranje širom Beograda.',
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
      'Renovirali su nam ceo stan na Vračaru od temelja. Profesionalan pristup, korektna cena i završili su pre roka!',
    author: 'Stefan, Beograd',
  },
  heroImage: heroAdaptacija,
  heroImageAlt: 'Adaptacija stana u Beogradu - kompletno renoviranje prostora',
  beforeAfterImage: beforeAfterAdaptacija,
  contactCta: 'Zatražite besplatnu ponudu za vaš projekat u Beogradu.',
  address: 'Beograd, Srbija',
  canonicalPath: '/gradjevina_website/adaptacije-stanova-beograd',
  city: 'Beograd',
  serviceType: 'adaptacija',
};

export default adaptacijeStanovaBeograd;
