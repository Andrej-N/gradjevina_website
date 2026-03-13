import { useState, useEffect } from 'react';
import {
  MapPin,
  FileText,
  Wrench,
  Sparkles,
  Shield,
  ChevronRight,
  Quote,
} from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import CityNav from '../components/CityNav';
import Layout from '../components/Layout';
import SeoHead from '../components/SeoHead';
import OptimizedImage from '../components/OptimizedImage';
import type { ServicePageConfig } from '../data/servicePageConfig';

import imgSpavacaSoba from '../assets/images/spavaca-soba-1.jpg';
import imgDemoliranje from '../assets/images/demoliranje.jpg';
import imgKuhinjaLed from '../assets/images/kuhinja-led.jpg';
import imgKuhinjaBar from '../assets/images/kuhinja-bar.jpg';
import imgKupatiloOgledalo from '../assets/images/kupatilo-ogledalo.jpg';
import imgRenoviranje from '../assets/images/renoviranje.jpg';
import imgKupatiloSire from '../assets/images/kupatilo-sire.jpg';
import imgPostavljanjePlocica from '../assets/images/postavljanje-plocica.jpg';

/*
 * Collage layout (desktop 4-col grid):
 *  ┌──────────────┬────────┬────────┐
 *  │  kuhinja-bar │kupatilo│kuhinja │
 *  │   (2×2)      │ogledalo│  LED   │
 *  │              ├────────┼────────┤
 *  │              │spavaća │demoli- │
 *  │              │ soba   │ranje   │
 *  ├────────┬─────┴────────┴────────┤
 *  │renovi- │postav.│  kupatilo     │
 *  │ranje   │pločica│   šire (2×2)  │
 *  ├────────┴───────┤               │
 *  │                │               │
 *  └────────────────┴───────────────┘
 */
const galleryItems: {
  src: string;
  alt: string;
  label: string;
  tag: string;
  className: string;
}[] = [
  {
    src: imgKuhinjaBar,
    alt: 'Moderna kuhinja sa bar stolicama',
    label: 'Kuhinja',
    tag: 'Završeno',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    src: imgKupatiloOgledalo,
    alt: 'Kupatilo sa LED ogledalom',
    label: 'Kupatilo',
    tag: 'Završeno',
    className: '',
  },
  {
    src: imgKuhinjaLed,
    alt: 'Kuhinja sa LED osvetljenjem',
    label: 'Kuhinja sa LED',
    tag: 'Završeno',
    className: '',
  },
  {
    src: imgSpavacaSoba,
    alt: 'Elegantna spavaća soba',
    label: 'Spavaća soba',
    tag: 'Završeno',
    className: '',
  },
  {
    src: imgDemoliranje,
    alt: 'Demoliranje prostora',
    label: 'Demoliranje',
    tag: 'U toku',
    className: '',
  },
  {
    src: imgRenoviranje,
    alt: 'Renoviranje stana',
    label: 'Renoviranje',
    tag: 'U toku',
    className: '',
  },
  {
    src: imgPostavljanjePlocica,
    alt: 'Postavljanje pločica',
    label: 'Postavljanje pločica',
    tag: 'U toku',
    className: '',
  },
  {
    src: imgKupatiloSire,
    alt: 'Kupatilo - širi ugao',
    label: 'Kupatilo',
    tag: 'Završeno',
    className: 'md:col-span-2 md:row-span-2',
  },
];

function useSplitImage(src: string): { before: string; after: string } {
  const [images, setImages] = useState({ before: '', after: '' });

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const halfW = Math.floor(img.width / 2);
      const h = img.height;

      const cBefore = document.createElement('canvas');
      cBefore.width = halfW;
      cBefore.height = h;
      cBefore.getContext('2d')!.drawImage(img, 0, 0, halfW, h, 0, 0, halfW, h);

      const cAfter = document.createElement('canvas');
      cAfter.width = halfW;
      cAfter.height = h;
      cAfter.getContext('2d')!.drawImage(img, halfW, 0, halfW, h, 0, 0, halfW, h);

      setImages({
        before: cBefore.toDataURL('image/png'),
        after: cAfter.toDataURL('image/png'),
      });
    };
    img.src = src;
  }, [src]);

  return images;
}

// Service card accent colors rotate through these
const CARD_ICONS = ['01', '02', '03'];

interface ServiceLandingPageProps {
  page: ServicePageConfig;
}

export default function ServiceLandingPage({ page }: ServiceLandingPageProps) {
  const { before: beforeImg, after: afterImg } = useSplitImage(page.beforeAfterImage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page.slug]);

  return (
    <Layout contactCta={page.contactCta} address={page.address}>
      <SeoHead page={page} />

      {/* ============ HERO + OVERLAPPING CARDS ============ */}
      <section className="relative">
        {/* Hero background */}
        <div className="relative min-h-screen flex items-center pb-40 lg:pb-48">
          <div className="absolute inset-0">
            <OptimizedImage
              src={page.heroImage}
              alt={page.heroImageAlt}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-20">
            <div className="max-w-3xl">
              <p className="text-warm font-semibold text-sm tracking-widest uppercase mb-6">
                Vaš prostor. Naša strast.
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-white leading-[1.15] mb-6 tracking-tight">
                {page.heroH1}
              </h1>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
                {page.heroSubhead}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-warm text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-warm/90 transition-colors cursor-pointer no-underline"
                >
                  Zakažite besplatnu procenu
                  <ChevronRight className="w-5 h-5" />
                </a>
                <a
                  href="#usluge"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base hover:bg-white/10 transition-colors cursor-pointer no-underline"
                >
                  Pogledajte usluge
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Overlapping service cards */}
        <div className="relative -mt-32 lg:-mt-36 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div id="usluge" className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {page.services.map((service, i) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-warm/10 rounded-full flex items-center justify-center group-hover:bg-warm/20 transition-colors">
                    <span className="text-warm font-bold text-xl">{CARD_ICONS[i]}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-navy mb-3 text-center uppercase tracking-wider">{service.title}</h3>
                <p className="text-charcoal/60 leading-relaxed text-[15px] text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CITY NAV PILLS ============ */}
      <CityNav />

      {/* ============ LOCAL TRUST BANNER ============ */}
      <section className="bg-navy border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-white/90 text-sm sm:text-base font-medium tracking-wide">
            <MapPin className="w-4 h-4 inline-block mr-2 text-warm align-text-bottom" />
            {page.trustBanner}
          </p>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="py-24 lg:py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-warm font-semibold text-sm tracking-widest uppercase mb-4">Naš proces rada</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Četiri koraka do savršenog prostora
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                step: '01',
                icon: MapPin,
                title: 'Besplatan izlazak',
                desc: 'Besplatan izlazak na teren i procena.',
              },
              {
                step: '02',
                icon: FileText,
                title: 'Transparentna ponuda',
                desc: 'Transparentna ponuda bez skrivenih troškova.',
              },
              {
                step: '03',
                icon: Wrench,
                title: 'Precizno izvođenje',
                desc: 'Precizno izvođenje uz maksimalnu zaštitu nameštaja.',
              },
              {
                step: '04',
                icon: Sparkles,
                title: 'Čišćenje i predaja',
                desc: 'Detaljno čišćenje i primopredaja ključeva.',
              },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="relative">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors h-full">
                  <span className="text-warm font-extrabold text-5xl opacity-20 absolute top-4 right-6">
                    {step}
                  </span>
                  <div className="w-12 h-12 bg-warm/15 rounded-xl flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-warm" />
                  </div>
                  <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
                  <p className="text-white/60 text-[15px] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BEFORE & AFTER ============ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-warm font-semibold text-sm tracking-widest uppercase mb-4">Pre i posle</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Transformacije koje govore same za sebe
            </h2>
            <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
              Prevucite klizač da vidite razliku koju pravimo.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {beforeImg && afterImg ? (
              <BeforeAfterSlider
                beforeSrc={beforeImg}
                afterSrc={afterImg}
                beforeLabel="Pre"
                afterLabel="Posle"
              />
            ) : (
              <div className="aspect-[4/3] md:aspect-[16/10] rounded-2xl bg-cream animate-pulse" />
            )}
          </div>
        </div>
      </section>

      {/* ============ GALLERY - NAŠI RADOVI ============ */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-warm font-semibold text-sm tracking-widest uppercase mb-4">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-6">
              Naši radovi
            </h2>
            <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
              Pogledajte primere završenih projekata i radova u toku — od kuhinja i kupatila do kompletnih adaptacija.
            </p>
          </div>

          {/* Collage grid — large hero images span 2×2, rest 1×1 */}
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:auto-rows-[240px] lg:auto-rows-[280px] gap-3 lg:gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${item.className}`}
              >
                <OptimizedImage
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Permanent subtle gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Label — always visible at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2 ${
                    item.tag === 'Završeno'
                      ? 'bg-emerald-500/90 text-white'
                      : 'bg-warm/90 text-white'
                  }`}>
                    {item.tag}
                  </span>
                  <p className="text-white font-semibold text-sm lg:text-base drop-shadow-lg">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GUARANTEE ============ */}
      <section className="py-20 lg:py-24 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="w-14 h-14 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Garancija kvaliteta
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
            100% garancija na izvedene radove. Poštujemo vaš prostor, vaše vreme i vaš budžet.
          </p>
        </div>
      </section>

      {/* ============ TESTIMONIAL ============ */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <p className="text-warm font-semibold text-sm tracking-widest uppercase mb-4">Iskustva klijenata</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
              Šta kažu naši klijenti
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-warm/10 text-center">
              <Quote className="w-12 h-12 text-warm/30 mx-auto mb-8" />
              <p className="text-charcoal/80 text-lg lg:text-xl leading-relaxed mb-8 italic">
                &ldquo;{page.testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {page.testimonial.author.split(',')[0].trim().charAt(0)}
                  </span>
                </div>
                <p className="text-navy font-semibold">
                  &mdash; {page.testimonial.author}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
