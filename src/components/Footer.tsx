import { SphaerusIcon } from './icons'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <SphaerusIcon className="w-[16px] h-[16px]" color="rgba(255,255,255,0.4)" />
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
