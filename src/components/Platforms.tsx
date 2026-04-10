import { motion } from 'framer-motion'

const platforms = [
  {
    name: 'Atlas',
    description: 'The stewardship layer for asset managers — portfolio tracking, performance analytics, and property-level intelligence.',
    href: '#',
  },
  {
    name: 'Legion',
    description: 'Brokerage command center — coordinate agents, automate listings, manage leads and transactions at scale.',
    href: '#',
  },
  {
    name: 'Astra',
    description: 'Investment intelligence — deal sourcing, underwriting automation, fund strategy, and LP reporting.',
    href: '#',
  },
]

export default function Platforms() {
  return (
    <section id="platforms" className="relative py-32 md:py-48">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        {/* Intro text — Palantir style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[700px] mb-20"
        >
          <p className="text-[1.4rem] md:text-[1.8rem] font-light leading-[1.4] text-white/70">
            Our software powers{' '}
            <span className="text-white">real-time, AI-driven</span>{' '}
            decisions across every stage of the commercial real estate lifecycle.
          </p>
        </motion.div>

        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[1rem] font-medium tracking-[0.1em] uppercase text-white/40 mb-12"
        >
          Our Platforms
        </motion.h2>

        {/* Platform links — Palantir style: large clickable rows */}
        <div className="border-t border-white/10">
          {platforms.map((platform, i) => (
            <motion.a
              key={i}
              href={platform.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center justify-between py-8 border-b border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-baseline gap-8 md:gap-16">
                <h3 className="text-[2rem] md:text-[3rem] font-light tracking-tight text-white group-hover:text-white/80 transition-colors">
                  {platform.name}
                </h3>
                <p className="hidden md:block text-[14px] text-white/30 max-w-[400px]" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
                  {platform.description}
                </p>
              </div>
              <svg
                className="w-6 h-6 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
