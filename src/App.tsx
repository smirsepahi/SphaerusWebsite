import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Platforms from './components/Platforms'
import CTA from './components/CTA'
import Footer from './components/Footer'
import PlatformPage from './components/PlatformPage'

function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Platforms />
      <CTA />
      <Footer />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#101010]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platforms/:slug" element={<PlatformPage />} />
      </Routes>
    </div>
  )
}

export default App
