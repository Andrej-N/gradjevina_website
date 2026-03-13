import type { ServicePageConfig } from '../servicePageConfig';
import heroMoleraj from '../../assets/images/hero_moleraj.PNG';
import beforeAfterMoleraj from '../../assets/images/beforeafter_moleraj.png';

const molerskeUslugeBeograd: ServicePageConfig = {
  slug: 'molerske-usluge-beograd',
  metaTitle: 'Molerske usluge Beograd | Gletovanje, krečenje i farbanje',
  metaDescription: 'Profesionalne molerske usluge u Beogradu. Gletovanje, krečenje i dekorativne tehnike uz besplatan dolazak. Zakazite odmah!',
  heroH1: 'Vrhunske molerske usluge u Beogradu.',
  heroSubhead:
    'Besprekorno gletovanje, krečenje i dekorativne tehnike. Osvežite svoj prostor uz pedantne majstore na teritoriji celog Beograda.',
  trustBanner:
    'Besplatan dolazak i procena radova - Beograd (Vračar, Novi Beograd, Zemun, Čukarica, Voždovac...)',
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
      'Odradili su kompletno gletovanje i krečenje trosobnog stana na Vračaru. Sve je urađeno pedantno i u roku!',
    author: 'Marko, Beograd',
  },
  heroImage: heroMoleraj,
  heroImageAlt: 'Profesionalni moleraj u Beogradu - gletovanje i krečenje stana',
  beforeAfterImage: beforeAfterMoleraj,
  contactCta: 'Zatražite besplatnu ponudu za vaš projekat u Beogradu.',
  address: 'Beograd, Srbija',
  canonicalPath: '/gradjevina_website/molerske-usluge-beograd',
  city: 'Beograd',
  serviceType: 'moleraj',
};

export default molerskeUslugeBeograd;
