import { motion } from 'framer-motion'

const testimonials = [
  {
    company: 'MERIDIAN CAPITAL',
    quote: 'Sphaerus cut our underwriting time by 80%. What used to take a full day now takes two hours.',
    name: 'Managing Director',
    role: 'Capital Markets',
  },
  {
    company: 'BLACKROCK REALTY',
    quote: 'Legion automated our entire LP reporting pipeline. We went from 3 analysts spending a week to a single click.',
    name: 'VP of Operations',
    role: 'Fund Management',
  },
  {
    company: 'GREYSTONE',
    quote: 'Atlas surfaced a deal opportunity in the Sunbelt that our team had completely missed. It paid for itself in one transaction.',
    name: 'Senior Analyst',
    role: 'Acquisitions',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-32 md:py-48 bg-[#0a0a0a]">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[1rem] font-medium tracking-[0.1em] uppercase text-white/40 mb-16"
        >
          What our partners say about us
        </motion.h2>

        {/* Testimonial cards — horizontal scroll like Palantir */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 w-[400px] md:w-[480px] snap-start bg-[#161616] rounded-lg p-10 border border-white/5"
            >
              <div
                className="text-[11px] tracking-[0.15em] uppercase text-white/30 mb-8 font-medium"
                style={{ fontFamily: '"IBM Plex Mono", monospace' }}
              >
                {t.company}
              </div>
              <p className="text-[1.1rem] font-light leading-[1.6] text-white/80 mb-10">
                "{t.quote}"
              </p>
              <div>
                <div className="text-[14px] text-white/60 font-medium">{t.name}</div>
                <div
                  className="text-[12px] text-white/30 mt-1"
                  style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                >
                  {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
