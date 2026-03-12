import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import ServiceLandingPage from './pages/ServiceLandingPage'

import molerskeUsluge from './data/pages/molerske-usluge'
import keramicerskiRadovi from './data/pages/keramicarski-radovi'
import adaptacijeStanova from './data/pages/adaptacije-stanova'

const pages = [molerskeUsluge, keramicerskiRadovi, adaptacijeStanova]

createRoot(document.getElementById('root')!).render(
  <StrictMode>
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
  </StrictMode>,
)
