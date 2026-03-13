import type { ServicePageConfig } from '../servicePageConfig';
import heroKeramika from '../../assets/images/hero_keramika.PNG';
import beforeAfterKeramika from '../../assets/images/beforeafter.PNG';

const keramicerskiRadoviNoviSad: ServicePageConfig = {
  slug: 'keramicarski-radovi-novi-sad',
  metaTitle: 'Keramičarski radovi Novi Sad | Pločice za kupatila i kuhinje',
  metaDescription: 'Stručno postavljanje pločica u Novom Sadu. Keramičarski radovi za kupatila, kuhinje i terase uz garanciju kvaliteta. Pozovite!',
  heroH1: 'Precizni keramičarski radovi u Novom Sadu.',
  heroSubhead:
    'Milimetarska preciznost, savršene fuge i poštovanje rokova. Vaš pouzdan majstor za postavljanje keramike u kupatilima i kuhinjama širom Novog Sada.',
  trustBanner:
    'Izlazak na teren na celoj teritoriji Novog Sada i okoline (Liman, Detelinara, Grbavica, Petrovaradin...)',
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
      'Postavljali su keramiku u kupatilu i kuhinji na Grbavici. Izuzetno precizni, sve čisto za sobom ostavili!',
    author: 'Dragan, Novi Sad',
  },
  heroImage: heroKeramika,
  heroImageAlt: 'Keramičarski radovi u Novom Sadu - postavljanje keramičkih pločica',
  beforeAfterImage: beforeAfterKeramika,
  contactCta: 'Zatražite besplatnu ponudu za vaš projekat u Novom Sadu.',
  address: 'Novi Sad, Srbija',
  canonicalPath: '/gradjevina_website/keramicarski-radovi-novi-sad',
  city: 'Novi Sad',
  serviceType: 'keramika',
};

export default keramicerskiRadoviNoviSad;
