import type { ServicePageConfig } from '../servicePageConfig';
import heroMoleraj from '../../assets/images/hero_moleraj.PNG';
import beforeAfterMoleraj from '../../assets/images/beforeafter_moleraj.png';

const molerskeUslugeNis: ServicePageConfig = {
  slug: 'molerske-usluge-nis',
  metaTitle: 'Molerske usluge Niš | Profesionalno gletovanje i krečenje',
  metaDescription: 'Profesionalne molerske usluge u Nišu. Gletovanje, krečenje i dekorativne tehnike sa besplatnim izlaskom na teren. Pozovite nas!',
  heroH1: 'Vrhunske molerske usluge u Nišu.',
  heroSubhead:
    'Besprekorno gletovanje, krečenje i dekorativne tehnike. Osvežite svoj prostor uz pedantne majstore na teritoriji celog Niša.',
  trustBanner:
    'Besplatan dolazak i procena radova - Niš (Medijana, Palilula, Pantelej, Crveni Krst, Niška Banja...)',
  services: [
    {
      title: 'Gletovanje i priprema',
      description: 'Savršeno ravnanje zidova pre krečenja. Koristimo profesionalne mase za gletovanje koje garantuju trajnost i glatku površinu. Svaki zid prolazi kroz više faza obrade kako bi krajnji rezultat bio besprekoran.',
    },
    {
      title: 'Klasično krečenje',
      description: 'Upotreba najkvalitetnijih perivih i poluperivih boja vodećih proizvođača. Pažljivo štitimo vaš nameštaj i podove, a radimo brzo i efikasno bez kompromisa u kvalitetu završne obrade.',
    },
    {
      title: 'Dekorativne tehnike',
      description: 'Sahara, Travertino i druge moderne dekorativne tehnike koje vašem prostoru daju jedinstven i luksuzan izgled. Naši majstori su obučeni za najnovije trendove u unutrašnjem dizajnu.',
    },
  ],
  testimonial: {
    quote:
      'Majstori su odlično odradili gletovanje i krečenje u našem stanu na Medijani. Brzo, čisto i profesionalno!',
    author: 'Jovana, Niš',
  },
  heroImage: heroMoleraj,
  heroImageAlt: 'Molerske usluge u Nišu - gletovanje i krečenje stana',
  beforeAfterImage: beforeAfterMoleraj,
  contactCta: 'Zatražite besplatnu ponudu za vaš projekat u Nišu.',
  address: 'Niš, Srbija',
  canonicalPath: '/gradjevina_website/molerske-usluge-nis',
  city: 'Niš',
  serviceType: 'moleraj',
};

export default molerskeUslugeNis;
