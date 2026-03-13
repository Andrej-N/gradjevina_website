import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  MapPin,
} from 'lucide-react';
import logo from '../assets/images/logo.JPG';

const SERVICE_BASES = [
  { label: 'Molerske usluge', base: 'molerske-usluge' },
  { label: 'Keramičarski radovi', base: 'keramicarski-radovi' },
  { label: 'Adaptacije stanova', base: 'adaptacije-stanova' },
];

function getNavLinks(pathname: string) {
  // Extract city suffix from current path, e.g. "/molerske-usluge-beograd" -> "beograd"
  const slug = pathname.replace(/^\//, '');
  for (const { base } of SERVICE_BASES) {
    if (slug.startsWith(base + '-')) {
      const city = slug.slice(base.length + 1);
      return SERVICE_BASES.map(({ label, base: b }) => ({
        label,
        href: `/${b}-${city}`,
      }));
    }
  }
  // Fallback to Kragujevac
  return SERVICE_BASES.map(({ label, base: b }) => ({
    label,
    href: `/${b}-kragujevac`,
  }));
}

interface LayoutProps {
  children: React.ReactNode;
  contactCta: string;
  address: string;
}

export default function Layout({ children, contactCta, address }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navLinks = getNavLinks(location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ============ HEADER ============ */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to={navLinks[0].href} className="flex items-center gap-2 no-underline">
              <img src={logo} alt="Relux Concept" className="h-9 lg:h-10 w-auto rounded-lg" />
              <span
                className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-navy' : 'text-white'
                }`}
              >
                Relux Concept
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  to={href}
                  className={`text-sm font-medium transition-colors duration-300 no-underline ${
                    location.pathname === href
                      ? 'text-warm'
                      : scrolled
                        ? 'text-charcoal/70 hover:text-navy'
                        : 'text-white/80 hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href="#kontakt"
                className="hidden sm:inline-flex items-center bg-navy text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-navy-light transition-colors cursor-pointer no-underline"
              >
                Zatražite ponudu
              </a>
              <button
                className={`lg:hidden p-2 bg-transparent border-none transition-colors duration-300 ${
                  scrolled ? 'text-charcoal' : 'text-white'
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div
              className={`lg:hidden pb-6 border-t pt-4 rounded-b-xl backdrop-blur-sm ${
                scrolled
                  ? 'bg-white/95 border-gray-100'
                  : 'bg-navy/90 border-white/10'
              }`}
            >
              <nav className="flex flex-col gap-4 px-4">
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    to={href}
                    className={`text-base font-medium transition-colors no-underline ${
                      location.pathname === href
                        ? 'text-warm'
                        : scrolled
                          ? 'text-charcoal/70 hover:text-navy'
                          : 'text-white/80 hover:text-white'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center bg-navy text-white text-sm font-semibold px-6 py-3 rounded-full no-underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Zatražite ponudu
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ============ PAGE CONTENT ============ */}
      {children}

      {/* ============ FOOTER ============ */}
      <footer id="kontakt" className="bg-navy pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-16 pb-16 border-b border-white/10">
            {/* Contact Info */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-6">
                <img src={logo} alt="Relux Concept" className="h-9 w-auto rounded-lg" />
                <span className="text-xl font-bold text-white tracking-tight">Relux Concept</span>
              </div>
              <p className="text-white/50 leading-relaxed mb-8">
                {contactCta}
              </p>
              <div className="space-y-4 inline-flex flex-col items-start">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-warm" />
                  <span className="text-white/80">+381 63 123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-warm" />
                  <span className="text-white/80">info@reluxconcept.rs</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-warm" />
                  <span className="text-white/80">{address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-warm" />
                  <div>
                    <span className="text-white/80 block">Pon - Pet: 08:00 - 18:00</span>
                    <span className="text-white/80 block">Sub: 09:00 - 14:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Links */}
            <div className="text-center">
              <h4 className="text-white font-semibold text-lg mb-6">Naše usluge</h4>
              <nav className="flex flex-col gap-3">
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    to={href}
                    className="text-white/50 hover:text-warm transition-colors no-underline text-[15px]"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="pt-8 text-center">
            <p className="text-white/30 text-sm">
              &copy; 2026 Relux Concept. Sva prava zadržana.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
