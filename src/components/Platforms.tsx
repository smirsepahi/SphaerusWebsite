import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AtlasIcon, LegionIcon, AstraIcon } from './icons'

const platforms = [
  {
    name: 'Atlas',
    slug: 'atlas',
    description: 'Portfolio intelligence and performance tracking for asset managers.',
    icon: AtlasIcon,
    color: '#6366f1',
  },
  {
    name: 'Legion',
    slug: 'legion',
    description: 'Coordinate agents, listings, and transactions at brokerage scale.',
    icon: LegionIcon,
    color: '#3b82f6',
  },
  {
    name: 'Astra',
    slug: 'astra',
    description: 'Deal sourcing, underwriting, and fund strategy for investors.',
    icon: AstraIcon,
    color: '#8b5cf6',
  },
]

export default function Platforms() {
  return (
    <section id="platforms" className="relative pt-16 md:pt-24 pb-8 md:pb-12">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[1rem] font-medium tracking-[0.1em] uppercase text-white mb-12"
        >
          Our Platforms
        </motion.h2>

        {/* Platform rows */}
        <div className="border-t border-white/10">
          {platforms.map((platform, i) => {
            const Icon = platform.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={`/platforms/${platform.slug}`}
                  className="group flex items-center justify-between py-8 border-b border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <Icon
                      className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                      color={platform.color}
                    />
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-12">
                      <h3 className="text-[2rem] md:text-[3rem] font-light tracking-tight text-white transition-colors whitespace-nowrap">
                        {platform.name}
                      </h3>
                      <p className="hidden md:block text-[14px] text-white max-w-[400px]" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
                        {platform.description}
                      </p>
                    </div>
                  </div>
                  <svg
                    className="w-6 h-6 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
