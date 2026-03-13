import type { ServicePageConfig } from '../servicePageConfig';
import heroKeramika from '../../assets/images/hero_keramika.PNG';
import beforeAfterKeramika from '../../assets/images/beforeafter.PNG';

const keramicerskiRadoviBeograd: ServicePageConfig = {
  slug: 'keramicarski-radovi-beograd',
  metaTitle: 'Keramičarski radovi Beograd | Postavljanje pločica - Vrhunski kvalitet',
  metaDescription: 'Keramičarski radovi u Beogradu sa garancijom kvaliteta. Postavljanje pločica u kupatilima, kuhinjama i terasama. Pozovite!',
  heroH1: 'Precizni keramičarski radovi u Beogradu.',
  heroSubhead:
    'Milimetarska preciznost, savršene fuge i poštovanje rokova. Vaš pouzdan majstor za postavljanje keramike u kupatilima i kuhinjama širom Beograda.',
  trustBanner:
    'Izlazak na teren na celoj teritoriji Beograda i okoline (Vračar, Novi Beograd, Zemun, Čukarica...)',
  services: [
    {
      title: 'Kupatila i kuhinje',
      description: 'Skidanje starih pločica i postavljanje nove keramike po najsavremenijim standardima. Precizno sečenje, ravne fuge i pažljiva obrada svake ivice za savršen završni izgled vašeg prostora.',
    },
    {
      title: 'Terase i poslovni prostori',
      description: 'Postavljanje granitne keramike velikih formata za terase, lokale i poslovne objekte. Radimo sa svim tipovima podloga i garantujemo otpornost na vremenske uslove i veliko opterećenje.',
    },
    {
      title: 'Hidroizolacija',
      description: 'Stručna zaštita od vlage za dugotrajnost i sigurnost vašeg prostora. Koristimo proverene materijale i tehnike koje sprečavaju prodor vode i štite konstrukciju od oštećenja.',
    },
  ],
  testimonial: {
    quote:
      'Uradili su nam kompletno kupatilo na Novom Beogradu za nedelju dana. Sve pločice savršeno postavljene, fuge besprekorne!',
    author: 'Ana, Beograd',
  },
  heroImage: heroKeramika,
  heroImageAlt: 'Keramičarski radovi u Beogradu - postavljanje pločica u kupatilu',
  beforeAfterImage: beforeAfterKeramika,
  contactCta: 'Zatražite besplatnu ponudu za vaš projekat u Beogradu.',
  address: 'Beograd, Srbija',
  canonicalPath: '/gradjevina_website/keramicarski-radovi-beograd',
  city: 'Beograd',
  serviceType: 'keramika',
};

export default keramicerskiRadoviBeograd;
