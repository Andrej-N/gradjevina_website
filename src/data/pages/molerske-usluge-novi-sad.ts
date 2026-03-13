import type { ServicePageConfig } from '../servicePageConfig';
import heroMoleraj from '../../assets/images/hero_moleraj.PNG';
import beforeAfterMoleraj from '../../assets/images/beforeafter_moleraj.png';

const molerskeUslugeNoviSad: ServicePageConfig = {
  slug: 'molerske-usluge-novi-sad',
  metaTitle: 'Molerske usluge Novi Sad | Gletovanje i krečenje stanova',
  metaDescription: 'Vrhunske molerske usluge u Novom Sadu. Gletovanje, krečenje i dekorativne tehnike sa besplatnim dolaskom. Pozovite za ponudu!',
  heroH1: 'Vrhunske molerske usluge u Novom Sadu.',
  heroSubhead:
    'Besprekorno gletovanje, krečenje i dekorativne tehnike. Osvežite svoj prostor uz pedantne majstore na teritoriji celog Novog Sada.',
  trustBanner:
    'Besplatan dolazak i procena radova - Novi Sad (Liman, Detelinara, Grbavica, Petrovaradin...)',
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
      'Ekipa je stigla na vreme i odradila gletovanje i krečenje celog stana na Limanu za tri dana. Prezadovoljna sam!',
    author: 'Ivana, Novi Sad',
  },
  heroImage: heroMoleraj,
  heroImageAlt: 'Molerske usluge u Novom Sadu - profesionalno krečenje i gletovanje',
  beforeAfterImage: beforeAfterMoleraj,
  contactCta: 'Zatražite besplatnu ponudu za vaš projekat u Novom Sadu.',
  address: 'Novi Sad, Srbija',
  canonicalPath: '/gradjevina_website/molerske-usluge-novi-sad',
  city: 'Novi Sad',
  serviceType: 'moleraj',
};

export default molerskeUslugeNoviSad;
