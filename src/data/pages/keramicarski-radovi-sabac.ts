import type { ServicePageConfig } from '../servicePageConfig';
import heroKeramika from '../../assets/images/hero_keramika.PNG';
import beforeAfterKeramika from '../../assets/images/beforeafter.PNG';

const keramicerskiRadoviSabac: ServicePageConfig = {
  slug: 'keramicarski-radovi-sabac',
  metaTitle: 'Keramičarski radovi Šabac | Postavljanje pločica i keramike',
  metaDescription: 'Precizni keramičarski radovi u Šapcu. Postavljanje pločica za kupatila, kuhinje i terase uz garanciju kvaliteta. Pozovite!',
  heroH1: 'Precizni keramičarski radovi u Šapcu.',
  heroSubhead:
    'Milimetarska preciznost, savršene fuge i poštovanje rokova. Vaš pouzdan majstor za postavljanje keramike u kupatilima i kuhinjama u Šapcu.',
  trustBanner:
    'Izlazak na teren na celoj teritoriji Šapca i okoline.',
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
      'Odlični keramičari! Postavili su pločice u kupatilu i kuhinji brzo i precizno. Svaka preporuka!',
    author: 'Milica, Šabac',
  },
  heroImage: heroKeramika,
  heroImageAlt: 'Keramičarski radovi u Šapcu - postavljanje keramičkih pločica',
  beforeAfterImage: beforeAfterKeramika,
  contactCta: 'Zatražite besplatnu ponudu za vaš projekat u Šapcu.',
  address: 'Šabac, Srbija',
  canonicalPath: '/gradjevina_website/keramicarski-radovi-sabac',
  city: 'Šabac',
  serviceType: 'keramika',
};

export default keramicerskiRadoviSabac;
