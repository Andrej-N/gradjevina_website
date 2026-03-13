import type { ServicePageConfig } from '../servicePageConfig';
import heroMoleraj from '../../assets/images/hero_moleraj.PNG';
import beforeAfterMoleraj from '../../assets/images/beforeafter_moleraj.png';

const molerskeUslugeSabac: ServicePageConfig = {
  slug: 'molerske-usluge-sabac',
  metaTitle: 'Molerske usluge Šabac | Gletovanje i krečenje stanova',
  metaDescription: 'Profesionalne molerske usluge u Šapcu. Gletovanje, krečenje i dekorativne tehnike uz besplatan dolazak i procenu. Pozovite nas!',
  heroH1: 'Vrhunske molerske usluge u Šapcu.',
  heroSubhead:
    'Besprekorno gletovanje, krečenje i dekorativne tehnike. Osvežite svoj prostor uz pedantne majstore na teritoriji celog Šapca.',
  trustBanner:
    'Besplatan dolazak i procena radova - Šabac i okolina',
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
      'Gletovanje i krečenje u celom stanu završili su za dva dana. Zidovi kao ogledalo, odlična ekipa!',
    author: 'Dejan, Šabac',
  },
  heroImage: heroMoleraj,
  heroImageAlt: 'Molerske usluge u Šapcu - profesionalno krečenje i gletovanje',
  beforeAfterImage: beforeAfterMoleraj,
  contactCta: 'Zatražite besplatnu ponudu za vaš projekat u Šapcu.',
  address: 'Šabac, Srbija',
  canonicalPath: '/gradjevina_website/molerske-usluge-sabac',
  city: 'Šabac',
  serviceType: 'moleraj',
};

export default molerskeUslugeSabac;
