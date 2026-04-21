import { motion } from 'framer-motion'

const integrations = [
  { label: '#1 Single Family Listing Site' },
  { label: '#1 Real Estate Listing Tracker' },
  { label: '#1 Commercial Property Database' },
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
          We connect your team to the tools they already use — pulling from the top housing data sources.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {integrations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#101010] p-10 md:p-14 flex flex-col items-center justify-center gap-4 group"
            >
              <span
                className="text-[14px] text-white/70 tracking-[0.05em] text-center group-hover:text-white transition-colors duration-500"
                style={{ fontFamily: '"IBM Plex Mono", monospace' }}
              >
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
