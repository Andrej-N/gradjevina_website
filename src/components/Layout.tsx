import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  MapPin,
} from 'lucide-react';

const NAV_LINKS = [
  { label: 'Molerske usluge', href: '/molerske-usluge-kragujevac' },
  { label: 'Keramičarski radovi', href: '/keramicarski-radovi-kragujevac' },
  { label: 'Adaptacije stanova', href: '/adaptacije-stanova-kragujevac' },
];

interface LayoutProps {
  children: React.ReactNode;
  contactCta: string;
  address: string;
}

export default function Layout({ children, contactCta, address }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ============ HEADER ============ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/molerske-usluge-kragujevac" className="flex items-center gap-2 no-underline">
              <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-navy tracking-tight">MajstorPro</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  to={href}
                  className={`text-sm font-medium transition-colors no-underline ${
                    location.pathname === href
                      ? 'text-warm'
                      : 'text-charcoal/70 hover:text-navy'
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
                className="lg:hidden p-2 text-charcoal bg-transparent border-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden pb-6 border-t border-gray-100 pt-4">
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map(({ label, href }) => (
                  <Link
                    key={href}
                    to={href}
                    className={`text-base font-medium transition-colors no-underline ${
                      location.pathname === href
                        ? 'text-warm'
                        : 'text-charcoal/70 hover:text-navy'
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 pb-16 border-b border-white/10">
            {/* Contact Info */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-9 h-9 bg-warm rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">MajstorPro</span>
              </div>
              <p className="text-white/50 leading-relaxed mb-8">
                {contactCta}
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-warm" />
                  <span className="text-white/80">+381 63 123 4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-warm" />
                  <span className="text-white/80">info@majstorpro.rs</span>
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
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Naše usluge</h4>
              <nav className="flex flex-col gap-3">
                {NAV_LINKS.map(({ label, href }) => (
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

            {/* Contact Form */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Pošaljite upit</h4>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Vaše ime"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-warm/50 transition-colors text-[15px]"
                />
                <input
                  type="tel"
                  placeholder="Broj telefona"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-warm/50 transition-colors text-[15px]"
                />
                <textarea
                  placeholder="Opišite vaš projekat..."
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-warm/50 transition-colors resize-none text-[15px]"
                />
                <button
                  type="submit"
                  className="w-full bg-warm text-white font-semibold py-3 rounded-xl hover:bg-warm/90 transition-colors cursor-pointer border-none text-[15px]"
                >
                  Zatražite ponudu
                </button>
              </form>
            </div>
          </div>

          <div className="pt-8 text-center">
            <p className="text-white/30 text-sm">
              &copy; 2026 MajstorPro. Sva prava zadržana.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
