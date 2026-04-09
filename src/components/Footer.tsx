export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <svg className="w-[18px] h-[24px]" viewBox="0 0 40 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="48" width="36" height="3" fill="white" opacity="0.4"/>
              <rect x="5" y="44" width="30" height="4" fill="white" opacity="0.4"/>
              <rect x="8"  y="14" width="2.5" height="30" rx="1" fill="white" opacity="0.35"/>
              <rect x="12" y="14" width="2.5" height="30" rx="1" fill="white" opacity="0.35"/>
              <rect x="16" y="14" width="2.5" height="30" rx="1" fill="white" opacity="0.35"/>
              <rect x="20" y="14" width="2.5" height="30" rx="1" fill="white" opacity="0.35"/>
              <rect x="24" y="14" width="2.5" height="30" rx="1" fill="white" opacity="0.35"/>
              <rect x="28" y="14" width="2.5" height="30" rx="1" fill="white" opacity="0.35"/>
              <rect x="1"  y="9"  width="38" height="3" fill="white" opacity="0.4"/>
              <rect x="4"  y="12" width="32" height="2" fill="white" opacity="0.4"/>
            </svg>
            <span className="text-[14px] font-medium tracking-[0.18em] uppercase text-white/40">
              Sphaerus
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            {['Platforms', 'Products', 'Contact'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="text-[12px] text-white/30 hover:text-white/60 transition-colors"
                style={{ fontFamily: '"IBM Plex Mono", monospace' }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div
            className="text-[11px] text-white/20"
            style={{ fontFamily: '"IBM Plex Mono", monospace' }}
          >
            &copy; {new Date().getFullYear()} Sphaerus AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
