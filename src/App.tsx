import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Platforms from './components/Platforms'
import Integrations from './components/Integrations'
import Offerings from './components/Offerings'
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
      <Offerings />
      <CTA />
      <Footer />
    </>
  )
}

function ScrollToHash() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      // Small delay to let the page render before scrolling to the element
      setTimeout(() => {
        const el = document.querySelector(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <div className="min-h-screen bg-[#101010]">
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platforms/:slug" element={<PlatformPage />} />
      </Routes>
    </div>
  )
}

export default App
