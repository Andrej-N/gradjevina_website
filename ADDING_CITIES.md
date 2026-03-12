# Dodavanje novih gradova

## Brzi vodič

Dodavanje novog grada se svodi na 2 koraka: kreiranje config fajla i registracija rute.

---

### 1. Kreirajte config fajl

Kopirajte `src/data/cities/kragujevac.ts` i preimenujte ga po slug-u novog grada:

```
src/data/cities/beograd.ts
```

Ažurirajte sva polja unutar fajla:

```ts
import type { CityConfig } from '../cityConfig';

const beograd: CityConfig = {
  slug: 'beograd',              // URL putanja → /beograd
  cityName: 'Beograd',          // Koristi se u naslovima i tekstovima
  regionName: 'Beogradu',       // Za rečenicu "teško naći majstore u ___"

  metaTitle: 'Molerske usluge, Keramičari i Adaptacije stanova Beograd',
  metaDescription: 'Vrhunski majstori za moleraj... u Beogradu...',

  heroHeadline: 'Vrhunske adaptacije i završni radovi u Beogradu.',
  heroSubheadline: 'Vaš pouzdan tim... na teritoriji Beograda i okoline.',
  heroCta: 'Zakažite besplatan izlazak na teren',

  trustBannerText: 'Besplatan dolazak i procena radova za sve opštine u Beogradu (Vračar, Novi Beograd, Zemun...)',

  services: [
    { title: 'Molerske usluge Beograd', text: '...' },
    { title: 'Keramičarski radovi Beograd', text: '...' },
    { title: 'Adaptacije stanova Beograd', text: '...' },
  ],

  whyChooseUsText: 'Znamo koliko je teško naći dobre majstore u Beogradu...',

  testimonials: [
    { quote: '...', name: 'Marko', location: 'Vračar, Beograd' },
    { quote: '...', name: 'Ana', location: 'Novi Beograd' },
  ],

  contactHeading: 'Zatražite ponudu za vaš projekat u Beogradu',
  address: 'Beograd, Srbija',
};

export default beograd;
```

Kompletna lista polja je definisana u `src/data/cityConfig.ts`.

---

### 2. Registrujte rutu

Otvorite `src/main.tsx` i dodajte import + grad u niz:

```ts
import kragujevac from './data/cities/kragujevac.ts'
import beograd from './data/cities/beograd.ts'      // ← novo

const cities = [kragujevac, beograd]                 // ← dodajte ovde
```

To je sve. Nova stranica je dostupna na `/<slug>` (npr. `/beograd`).

---

## Struktura fajlova

```
src/
├── data/
│   ├── cityConfig.ts          # TypeScript interfejs (ne menjajte)
│   └── cities/
│       ├── kragujevac.ts      # Config za Kragujevac
│       └── beograd.ts         # Config za Beograd (novi)
├── pages/
│   └── CityLandingPage.tsx    # Šablon stranice (ne menjajte)
└── main.tsx                   # Routing
```

## Napomene

- **Slug** mora biti URL-safe (mala slova, bez razmaka). Primer: `novi-sad`, `nis`, `subotica`.
- **cityName** se koristi unutar rečenica pa obratite pažnju na deklinaciju (npr. "u Beogradu", "u Nišu").
- Svi gradovi dele iste slike, boje i layout. Samo se tekst menja.
