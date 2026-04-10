import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Platforms from './components/Platforms'
import Integrations from './components/Integrations'
import CTA from './components/CTA'
import Footer from './components/Footer'
import PlatformPage from './components/PlatformPage'

function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Platforms />
      <Integrations />
      <CTA />
      <Footer />
    </>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="min-h-screen bg-[#101010]">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platforms/:slug" element={<PlatformPage />} />
      </Routes>
    </div>
  )
}

export default App
