import { lazy, Suspense, useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import 'tachyons';
import './App.css';
import './Fonts.css';

const OPENING_PROGRESS_MS = 2600
const OPENING_HOLD_MS = 800

function openingLazy(importPage) {
  const progressDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : OPENING_PROGRESS_MS
  return lazy(() => Promise.all([
    importPage(),
    new Promise((resolve) => window.setTimeout(resolve, progressDuration)),
  ]).then(([pageModule]) => new Promise((resolve) => {
    window.setTimeout(() => resolve(pageModule), OPENING_HOLD_MS)
  })))
}

const Home = openingLazy(() => import('./Pages/Home'))
const DownloadPage = openingLazy(() => import('./Pages/Download'))
const DownloadGroupPage = openingLazy(() => import('./Pages/DownloadGroup'))
const ProductPage = openingLazy(() => import('./Pages/Product'))
const DigiDeskPage = openingLazy(() => import('./Pages/DigiDesk'))
const DigiDeskLocationsPage = openingLazy(() => import('./Pages/DigiDeskLocations'))
const LoginPage = openingLazy(() => import('./Pages/Login'))
const RegisterPage = openingLazy(() => import('./Pages/Register'))
const DashboardPage = openingLazy(() => import('./Pages/Dashboard'))
const NotFoundPage = openingLazy(() => import('./Pages/NotFound'))
const InquiryPage = openingLazy(() => import('./Pages/Inquiry'))
const DigiLinePage = openingLazy(() => import('./Pages/DigiLine'))
const DigiLineDemoPage = openingLazy(() => import('./Pages/DigiLineDemo'))
const ServicePage = openingLazy(() => import('./Pages/Service'))
const MicroServicePage = openingLazy(() => import('./Pages/MicroService'))
const InformationPage = openingLazy(() => import('./Pages/InformationPage'))
const SearchResultsPage = openingLazy(() => import('./Pages/SearchResults'))

function routeElement(Page, props = {}) {
  return (
    <Suspense fallback={<RouteLoading />}>
      <RouteReveal Page={Page} props={props} />
    </Suspense>
  )
}

function RouteReveal({ Page, props }) {
  return (
    <>
      <div className="route-reveal" aria-hidden="true">
        <span className="route-reveal__panel route-reveal__panel--left" />
        <span className="route-reveal__panel route-reveal__panel--right" />
        <div className="route-reveal__content">
          <span className="route-loading__label">Opening Huge<span>…</span></span>
          <span className="route-loading__track"><span className="route-loading__fill" style={{ transform: 'scaleX(1)' }} /></span>
          <span className="route-loading__percent">100%</span>
        </div>
      </div>
      <Page {...props} />
    </>
  )
}

function RouteLoading() {
  const [progress, setProgress] = useState(1)

  useEffect(() => {
    const startedAt = performance.now()
    const duration = OPENING_PROGRESS_MS
    let frame
    const advance = (now) => {
      const nextProgress = Math.min(100, Math.round(1 + ((now - startedAt) / duration) * 99))
      setProgress(nextProgress)
      if (nextProgress < 100) frame = requestAnimationFrame(advance)
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(100)
    } else {
      frame = requestAnimationFrame(advance)
    }

    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="route-loading" role="status" aria-live="polite">
      <span className="route-loading__label">Opening Huge<span aria-hidden="true">…</span></span>
      <span className="route-loading__track" role="progressbar" aria-label="Opening Huge" aria-valuemin="1" aria-valuemax="100" aria-valuenow={progress}>
        <span className="route-loading__fill" style={{ transform: `scaleX(${progress / 100})` }} />
      </span>
      <span className="route-loading__percent">{progress}%</span>
    </div>
  )
}

function BioRedirect() {
  useEffect(() => {
    window.location.replace('https://bio.hugecompany.in/')
  }, [])
  return null
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={routeElement(Home)} />
        <Route path="/download" element={routeElement(DownloadPage)} />
        <Route path="/download/:group/:letter" element={routeElement(DownloadGroupPage)} />
        <Route path="/download/:group" element={routeElement(DownloadGroupPage)} />
        <Route path="/product" element={routeElement(ProductPage)} />
        <Route path="/product/digidesk" element={routeElement(DigiDeskPage)} />
        <Route path="/digidesk" element={<Navigate to="/product/digidesk" replace />} />
        <Route path="/product/digidesk/locate" element={routeElement(DigiDeskLocationsPage)} />
        <Route path="/login" element={routeElement(LoginPage)} />
        <Route path="/register" element={routeElement(RegisterPage)} />
        <Route path="/dashboard" element={routeElement(DashboardPage)} />
        <Route path="/service" element={routeElement(ServicePage)} />
        <Route path="/service/" element={routeElement(ServicePage)} />
        <Route path="/service/micro/:serviceName" element={routeElement(MicroServicePage)} />
        <Route path="/about" element={routeElement(InformationPage, { page: 'about' })} />
        <Route path="/platform" element={routeElement(InformationPage, { page: 'platform' })} />
        <Route path="/market" element={routeElement(InformationPage, { page: 'market' })} />
        <Route path="/contact" element={routeElement(InquiryPage)} />
        <Route path="/search" element={routeElement(SearchResultsPage)} />
        <Route path="/bio" element={<BioRedirect />} />
        <Route path="/inquiry" element={routeElement(InquiryPage)} />
        <Route path="/product/digiline" element={routeElement(DigiLinePage)} />
        <Route path="/product/digiline/demo" element={routeElement(DigiLineDemoPage)} />
        <Route path="/digiline" element={<Navigate to="/product/digiline" replace />} />
        <Route path="/digiline/demo" element={<Navigate to="/product/digiline/demo" replace />} />
        <Route path="*" element={routeElement(NotFoundPage)} />
      </Routes>
    </>
  )
}

export default App
