import { motion } from 'framer-motion'

const integrations = [
  { name: 'RedIQ', logo: '/redIQ.png' },
  { name: 'Zillow', logo: '/zillow.png' },
  { name: 'CoStar', logo: '/costar.png' },
]

export default function Integrations() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[1rem] font-medium tracking-[0.1em] uppercase text-white mb-6"
        >
          Data Integrations
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[15px] text-white/70 max-w-[500px] mb-16"
          style={{ fontFamily: '"IBM Plex Mono", monospace' }}
        >
          Our platforms pull directly from the sources your team already relies on.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {integrations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#101010] p-10 md:p-14 flex flex-col items-center justify-center gap-6 group"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-10 md:h-12 object-contain brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
              <span
                className="text-[12px] text-white/50 tracking-[0.15em] uppercase"
                style={{ fontFamily: '"IBM Plex Mono", monospace' }}
              >
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
