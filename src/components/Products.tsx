import { useRef } from 'react'

const products = [
  {
    name: 'Atlas',
    tagline: 'AI for Asset Management',
    description: 'Portfolio oversight, performance tracking, and NOI optimization across every property. Atlas carries the weight so your team can focus on strategy.',
    color: '#6366f1',
  },
  {
    name: 'Legion',
    tagline: 'AI for Brokerage at Scale',
    description: 'Manage agents, listings, leads, and transactions in parallel. Legion coordinates your entire brokerage force as one.',
    color: '#3b82f6',
  },
  {
    name: 'Astra',
    tagline: 'AI for Investment Firms',
    description: 'Deal sourcing, underwriting, fund strategy, and LP reporting. Astra gives your investment team the vision to reach further.',
    color: '#8b5cf6',
  },
]

export default function Products() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="products" className="relative border-t border-white/5">
      {/* Section — horizontal scroll cards like Palantir's news carousel */}
      <div className="products-scroll" ref={scrollRef}>
        {products.map((product, i) => (
          <div key={i} className="product-card group">
            <div className="p-8 md:p-12 h-[480px] flex flex-col justify-between">
              {/* Top: product name + visual */}
              <div>
                <div
                  className="text-[11px] font-mono tracking-[0.2em] uppercase mb-6"
                  style={{ color: product.color, fontFamily: '"IBM Plex Mono", monospace' }}
                >
                  Platform
                </div>

                {/* Abstract visual — grid pattern unique to each product */}
                <div className="w-full h-[200px] rounded-lg border border-white/5 overflow-hidden mb-8 relative bg-[#0d0d0d]">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: i === 0
                        ? 'radial-gradient(circle at 30% 40%, rgba(99,102,241,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(99,102,241,0.2) 0%, transparent 40%)'
                        : i === 1
                        ? 'repeating-linear-gradient(90deg, rgba(59,130,246,0.1) 0px, rgba(59,130,246,0.1) 1px, transparent 1px, transparent 30px), repeating-linear-gradient(0deg, rgba(59,130,246,0.1) 0px, rgba(59,130,246,0.1) 1px, transparent 1px, transparent 30px)'
                        : 'conic-gradient(from 180deg at 50% 50%, rgba(139,92,246,0.15) 0deg, transparent 60deg, rgba(139,92,246,0.1) 120deg, transparent 180deg, rgba(139,92,246,0.15) 240deg, transparent 300deg)',
                    }}
                  />
                  {/* Animated dots/nodes */}
                  {Array.from({ length: 8 }).map((_, j) => (
                    <div
                      key={j}
                      className="absolute w-1.5 h-1.5 rounded-full"
                      style={{
                        background: product.color,
                        opacity: 0.4 + Math.random() * 0.3,
                        left: `${10 + (j * 11)}%`,
                        top: `${20 + Math.sin(j) * 30}%`,
                      }}
                    />
                  ))}
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
        ))}

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
