import type { ServicePageConfig } from '../servicePageConfig';
import heroAdaptacija from '../../assets/images/hero.PNG';
import beforeAfterAdaptacija from '../../assets/images/beforeafter_adaptacija.png';

const adaptacijeStanovaNoviSad: ServicePageConfig = {
  slug: 'adaptacije-stanova-novi-sad',
  metaTitle: 'Adaptacija stanova Novi Sad | Renoviranje po sistemu ključ u ruke',
  metaDescription: 'Kompletna adaptacija stanova u Novom Sadu. Renoviranje ključ u ruke - od rušenja do predaje gotovog prostora. Pozovite za procenu!',
  heroH1: 'Kompletne adaptacije stanova i lokala u Novom Sadu.',
  heroSubhead:
    "Od rušenja do završnog premaza. Pouzdan tim majstora za renoviranje vašeg prostora po sistemu 'ključ u ruke' bez probijanja rokova.",
  trustBanner: 'Vaš partner za renoviranje širom Novog Sada i Vojvodine.',
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
      'Kompletna adaptacija stana na Detelinari — od rušenja do useljenja za mesec dana. Sve po dogovoru!',
    author: 'Maja, Novi Sad',
  },
  heroImage: heroAdaptacija,
  heroImageAlt: 'Adaptacija stana u Novom Sadu - renoviranje prostora od početka do kraja',
  beforeAfterImage: beforeAfterAdaptacija,
  contactCta: 'Zatražite besplatnu ponudu za vaš projekat u Novom Sadu.',
  address: 'Novi Sad, Srbija',
  canonicalPath: '/gradjevina_website/adaptacije-stanova-novi-sad',
  city: 'Novi Sad',
  serviceType: 'adaptacija',
};

export default adaptacijeStanovaNoviSad;
