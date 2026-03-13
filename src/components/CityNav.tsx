import { Link, useLocation } from 'react-router-dom';
import { MapPin } from 'lucide-react';

const SERVICE_BASES = [
  { base: 'molerske-usluge' },
  { base: 'keramicarski-radovi' },
  { base: 'adaptacije-stanova' },
];

const CITIES = [
  { label: 'Kragujevac', slug: 'kragujevac' },
  { label: 'Beograd', slug: 'beograd' },
  { label: 'Novi Sad', slug: 'novi-sad' },
  { label: 'Niš', slug: 'nis' },
  { label: 'Šabac', slug: 'sabac' },
];

export default function CityNav() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, '');

  // Extract current service base and city from URL
  let currentBase = '';
  let currentCity = '';
  for (const { base } of SERVICE_BASES) {
    if (slug.startsWith(base + '-')) {
      currentBase = base;
      currentCity = slug.slice(base.length + 1);
      break;
    }
  }

  if (!currentBase) return null;

  return (
    <div className="bg-navy border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
          <MapPin className="w-4 h-4 text-warm shrink-0" />
          <div className="flex items-center gap-2">
            {CITIES.map(({ label, slug: citySlug }) => (
              <Link
                key={citySlug}
                to={`/${currentBase}-${citySlug}`}
                className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors no-underline ${
                  currentCity === citySlug
                    ? 'bg-warm text-white'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
