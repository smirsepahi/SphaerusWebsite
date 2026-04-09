import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#services', label: 'Solutions' },
    { href: '#process', label: 'Process' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 border-b ${
        scrolled
          ? 'bg-[rgba(10,10,10,0.95)] backdrop-blur-xl border-[rgba(255,255,255,0.06)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-site mx-auto px-10 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <svg className="w-[22px] h-[30px]" viewBox="0 0 40 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="48" width="36" height="3" fill="white" opacity="0.9"/>
            <rect x="5" y="44" width="30" height="4" fill="white" opacity="0.9"/>
            <rect x="8"  y="14" width="2.5" height="30" rx="1" fill="white" opacity="0.85"/>
            <rect x="12" y="14" width="2.5" height="30" rx="1" fill="white" opacity="0.85"/>
            <rect x="16" y="14" width="2.5" height="30" rx="1" fill="white" opacity="0.85"/>
            <rect x="20" y="14" width="2.5" height="30" rx="1" fill="white" opacity="0.85"/>
            <rect x="24" y="14" width="2.5" height="30" rx="1" fill="white" opacity="0.85"/>
            <rect x="28" y="14" width="2.5" height="30" rx="1" fill="white" opacity="0.85"/>
            <rect x="1"  y="9"  width="38" height="3" fill="white" opacity="0.9"/>
            <rect x="4"  y="12" width="32" height="2" fill="white" opacity="0.9"/>
            <path d="M4 10 Q4 4 10 4 Q14 4 14 8" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.9"/>
            <path d="M36 10 Q36 4 30 4 Q26 4 26 8" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.9"/>
            <circle cx="10" cy="6" r="1.5" fill="white" opacity="0.85"/>
            <circle cx="30" cy="6" r="1.5" fill="white" opacity="0.85"/>
          </svg>
          <span className="font-heading text-[20px] font-medium tracking-[0.22em] uppercase text-white leading-none">
            Sphaerus
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-200 ${
                  link.label === 'Contact'
                    ? 'text-accent hover:text-white'
                    : 'text-[rgba(255,255,255,0.5)] hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          aria-label="Menu"
        >
          <span className={`block w-[20px] h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-[20px] h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[20px] h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[rgba(10,10,10,0.98)] backdrop-blur-xl border-t border-[rgba(255,255,255,0.06)] px-10 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-[12px] tracking-[0.1em] uppercase text-[rgba(255,255,255,0.6)] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
