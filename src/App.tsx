import Nav from './components/Nav'
import Hero from './components/Hero'
import Products from './components/Products'
import Platforms from './components/Platforms'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#101010]">
      <Nav />
      <Hero />
      <Products />
      <Platforms />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
