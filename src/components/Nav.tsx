import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SphaerusIcon } from './icons'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(16,16,16,0.95)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        {/* Logo — Palantir style: simple wordmark */}
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <SphaerusIcon className="w-[20px] h-[20px]" color="white" />
          <span className="text-[18px] font-medium tracking-[0.18em] uppercase text-white leading-none">
            Sphaerus
          </span>
        </Link>

        {/* Right side — Palantir style: CTA button + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full border border-white/20 text-white text-[13px] font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300"
          >
            Get Started
          </a>

          {/* Hamburger — always visible like Palantir */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
            aria-label="Menu"
          >
            <span className={`block w-[22px] h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-[22px] h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-[22px] h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Full-screen menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-[72px] bg-[#101010] z-40 px-10 py-16">
          <div className="max-w-[600px]">
            {[
              { href: '#platforms', label: 'Platforms' },
              { href: '#contact', label: 'Contact' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-[2.5rem] font-light text-white/80 hover:text-white transition-colors py-3 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
