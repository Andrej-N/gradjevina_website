import type { ServicePageConfig } from '../servicePageConfig';
import heroKeramika from '../../assets/images/hero_keramika.PNG';
import beforeAfterKeramika from '../../assets/images/beforeafter.PNG';

const keramicerskiRadoviNis: ServicePageConfig = {
  slug: 'keramicarski-radovi-nis',
  metaTitle: 'Keramičarski radovi Niš | Postavljanje keramike i pločica',
  metaDescription: 'Keramičarski radovi u Nišu - precizno postavljanje pločica u kupatilima, kuhinjama i terasama. Besplatan izlazak. Pozovite odmah!',
  heroH1: 'Precizni keramičarski radovi u Nišu.',
  heroSubhead:
    'Milimetarska preciznost, savršene fuge i poštovanje rokova. Vaš pouzdan majstor za postavljanje keramike u kupatilima i kuhinjama širom Niša.',
  trustBanner:
    'Izlazak na teren na celoj teritoriji Niša i okoline (Medijana, Palilula, Pantelej, Niška Banja...)',
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
      'Keramiku u kupatilu su postavili za dva dana, sve izgleda savršeno. Preporučujem svima u Nišu!',
    author: 'Aleksandar, Niš',
  },
  heroImage: heroKeramika,
  heroImageAlt: 'Keramičarski radovi u Nišu - postavljanje pločica u kupatilu',
  beforeAfterImage: beforeAfterKeramika,
  contactCta: 'Zatražite besplatnu ponudu za vaš projekat u Nišu.',
  address: 'Niš, Srbija',
  canonicalPath: '/gradjevina_website/keramicarski-radovi-nis',
  city: 'Niš',
  serviceType: 'keramika',
};

export default keramicerskiRadoviNis;
