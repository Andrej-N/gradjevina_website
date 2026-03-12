import type { ServicePageConfig } from '../servicePageConfig';
import beforeAfterMoleraj from '../../assets/images/beforeafter_moleraj.png';

const molerskeUsluge: ServicePageConfig = {
  slug: 'molerske-usluge-kragujevac',
  metaTitle: 'Molerske usluge Kragujevac | Gletovanje i krečenje',
  heroH1: 'Vrhunske molerske usluge u Kragujevcu.',
  heroSubhead:
    'Besprekorno gletovanje, krečenje i dekorativne tehnike. Osvežite svoj prostor uz pedantne majstore na teritoriji cele Šumadije.',
  trustBanner:
    'Besplatan dolazak i procena radova - Kragujevac (Aerodrom, Bubanj, Pivara, Centar...)',
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
      'Zidovi su savršeno ravni, a majstori su sve zaštitili folijama. Nije bilo ni kapi boje na parketu!',
    author: 'Milan, Kragujevac',
  },
  beforeAfterImage: beforeAfterMoleraj,
  contactCta: 'Zatražite besplatnu ponudu za vaš projekat u Kragujevcu.',
  address: 'Kragujevac, Srbija',
};

export default molerskeUsluge;
