import type { ServicePageConfig } from '../servicePageConfig';
import beforeAfterKeramika from '../../assets/images/beforeafter.PNG';

const keramicerskiRadovi: ServicePageConfig = {
  slug: 'keramicarski-radovi-kragujevac',
  metaTitle: 'Keramičarski radovi Kragujevac | Postavljanje pločica',
  heroH1: 'Precizni keramičarski radovi u Kragujevcu.',
  heroSubhead:
    'Milimetarska preciznost, savršene fuge i poštovanje rokova. Vaš pouzdan majstor za postavljanje keramike u kupatilima i kuhinjama.',
  trustBanner:
    'Izlazak na teren na celoj teritoriji Kragujevca i okoline.',
  services: [
    {
      title: 'Kupatila i kuhinje',
      description: 'Skidanje starih pločica i postavljanje nove keramike.',
    },
    {
      title: 'Terase i poslovni prostori',
      description: 'Postavljanje granitne keramike velikih formata.',
    },
    {
      title: 'Hidroizolacija',
      description: 'Stručna zaštita od vlage za dugotrajnost i sigurnost.',
    },
  ],
  testimonial: {
    quote:
      'Odradili su celo kupatilo na Aerodromu za nekoliko dana. Fuge su savršene, sve u milimetar pravo.',
    author: 'Jelena, naselje Aerodrom',
  },
  beforeAfterImage: beforeAfterKeramika,
  contactCta: 'Zatražite besplatnu ponudu za vaš projekat u Kragujevcu.',
  address: 'Kragujevac, Srbija',
};

export default keramicerskiRadovi;
