import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import ServiceLandingPage from './pages/ServiceLandingPage'

import molerskeUsluge from './data/pages/molerske-usluge'
import keramicerskiRadovi from './data/pages/keramicarski-radovi'
import adaptacijeStanova from './data/pages/adaptacije-stanova'

import molerskeUslugeBeograd from './data/pages/molerske-usluge-beograd'
import keramicerskiRadoviBeograd from './data/pages/keramicarski-radovi-beograd'
import adaptacijeStanovaBeograd from './data/pages/adaptacije-stanova-beograd'

import molerskeUslugeNoviSad from './data/pages/molerske-usluge-novi-sad'
import keramicerskiRadoviNoviSad from './data/pages/keramicarski-radovi-novi-sad'
import adaptacijeStanovaNoviSad from './data/pages/adaptacije-stanova-novi-sad'

import molerskeUslugeNis from './data/pages/molerske-usluge-nis'
import keramicerskiRadoviNis from './data/pages/keramicarski-radovi-nis'
import adaptacijeStanovaNis from './data/pages/adaptacije-stanova-nis'

import molerskeUslugeSabac from './data/pages/molerske-usluge-sabac'
import keramicerskiRadoviSabac from './data/pages/keramicarski-radovi-sabac'
import adaptacijeStanovaSabac from './data/pages/adaptacije-stanova-sabac'

const pages = [
  molerskeUsluge,
  keramicerskiRadovi,
  adaptacijeStanova,
  molerskeUslugeBeograd,
  keramicerskiRadoviBeograd,
  adaptacijeStanovaBeograd,
  molerskeUslugeNoviSad,
  keramicerskiRadoviNoviSad,
  adaptacijeStanovaNoviSad,
  molerskeUslugeNis,
  keramicerskiRadoviNis,
  adaptacijeStanovaNis,
  molerskeUslugeSabac,
  keramicerskiRadoviSabac,
  adaptacijeStanovaSabac,
]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter basename="/gradjevina_website">
        <Routes>
          {pages.map((page) => (
            <Route
              key={page.slug}
              path={`/${page.slug}`}
              element={<ServiceLandingPage page={page} />}
            />
          ))}
          {/* Default redirect to first service page */}
          <Route path="*" element={<Navigate to="/molerske-usluge-kragujevac" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
