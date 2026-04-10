import { useRef } from 'react'
import { AtlasIcon, LegionIcon, AstraIcon } from './icons'

const products = [
  {
    name: 'Atlas',
    tagline: 'AI for Asset Management',
    description: 'Portfolio oversight, performance tracking, and NOI optimization across every property. Atlas carries the weight so your team can focus on strategy.',
    color: '#6366f1',
    icon: AtlasIcon,
  },
  {
    name: 'Legion',
    tagline: 'AI for Brokerage at Scale',
    description: 'Manage agents, listings, leads, and transactions in parallel. Legion coordinates your entire brokerage force as one.',
    color: '#3b82f6',
    icon: LegionIcon,
  },
  {
    name: 'Astra',
    tagline: 'AI for Investment Firms',
    description: 'Deal sourcing, underwriting, fund strategy, and LP reporting. Astra gives your investment team the vision to reach further.',
    color: '#8b5cf6',
    icon: AstraIcon,
  },
]

export default function Products() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="products" className="relative border-t border-white/5">
      {/* Section — horizontal scroll cards like Palantir's news carousel */}
      <div className="products-scroll" ref={scrollRef}>
        {products.map((product, i) => {
          const Icon = product.icon
          return (
            <div key={i} className="product-card group">
              <div className="p-8 md:p-12 h-[480px] flex flex-col justify-between">
                {/* Top: product label + icon */}
                <div>
                  <div
                    className="text-[11px] font-mono tracking-[0.2em] uppercase mb-6"
                    style={{ color: product.color, fontFamily: '"IBM Plex Mono", monospace' }}
                  >
                    Platform
                  </div>

                  {/* Icon container */}
                  <div className="w-full h-[200px] rounded-lg border border-white/5 overflow-hidden mb-8 relative bg-[#0d0d0d] flex items-center justify-center">
                    {/* Subtle background glow */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${product.color}15 0%, transparent 70%)`,
                      }}
                    />
                    {/* Icon */}
                    <Icon
                      className="w-16 h-16 opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                      color={product.color}
                    />
                  </div>
                </div>

                {/* Bottom: name + description */}
                <div>
                  <h3 className="text-[2.5rem] font-light tracking-tight text-white mb-3">
                    {product.name}
                  </h3>
                  <p className="text-[14px] text-white/40 leading-relaxed max-w-[340px]" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
                    {product.tagline}
                  </p>
                </div>
              </div>
            </div>
          )
        })}

        {/* "See All" card */}
        <div className="product-card flex items-center justify-center min-w-[250px]">
          <a href="#platforms" className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-[14px]">
            See All
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
