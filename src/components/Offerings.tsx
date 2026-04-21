import { motion } from 'framer-motion'

const phases = [
  {
    phase: 'Phase 1',
    title: 'Discovery',
    items: [
      { name: 'Rapid Assessment', detail: '1 week' },
      { name: 'Full AI Readiness Audit', detail: '2–4 weeks' },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Build',
    items: [
      { name: 'Claude Enterprise Onboarding', detail: null },
      { name: 'Workflow Automation', detail: null },
      { name: 'AI Tool Integration', detail: 'all major platforms' },
      { name: 'Custom AI Tool Build', detail: null },
      { name: 'Full AI Transformation', detail: null },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Support',
    items: [
      { name: 'Essential', detail: '8–10 hrs / mo' },
      { name: 'Growth', detail: '20–25 hrs / mo', popular: true },
      { name: 'Enterprise', detail: '40+ hrs / mo' },
    ],
  },
]

const addOns = [
  'Half-Day Workshop',
  'Full-Day Workshop',
  'Executive Strategy Session',
  'Custom Prompt Library',
  'Advisory Retainer',
  'Ad-Hoc Projects',
  'In-House Software Development',
  'Bespoke AI Agents',
]

export default function Offerings() {
  return (
    <section className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[1rem] font-medium tracking-[0.1em] uppercase text-white mb-6"
        >
          What We Offer
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-[600px]"
        >
          <p className="text-[1.3rem] md:text-[1.5rem] font-light text-white leading-[1.4] mb-3">
            Start where it makes sense.
          </p>
          <p
            className="text-[14px] text-white/70"
            style={{ fontFamily: '"IBM Plex Mono", monospace' }}
          >
            Every engagement is scoped to your needs. Reach out to discuss what's right for your operation.
          </p>
        </motion.div>

        {/* Phases grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 mb-16">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#101010] p-8 md:p-10"
            >
              {/* Phase label */}
              <div
                className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-2"
                style={{ fontFamily: '"IBM Plex Mono", monospace' }}
              >
                {phase.phase}
              </div>
              <h3 className="text-[1.8rem] font-light tracking-tight text-white mb-8">
                {phase.title}
              </h3>

              {/* Items */}
              <div className="space-y-0">
                {phase.items.map((item, j) => (
                  <div
                    key={j}
                    className="py-4 border-t border-white/10 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[14px] text-white">
                        {item.name}
                      </span>
                      {'popular' in item && item.popular && (
                        <span
                          className="text-[9px] tracking-[0.15em] uppercase px-2 py-0.5 border border-white/20 text-white/60"
                          style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                        >
                          Popular
                        </span>
                      )}
                    </div>
                    {item.detail && (
                      <span
                        className="text-[12px] text-white/50 whitespace-nowrap"
                        style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                      >
                        {item.detail}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h3
            className="text-[11px] tracking-[0.2em] uppercase text-white/40 mb-6"
            style={{ fontFamily: '"IBM Plex Mono", monospace' }}
          >
            Add-on Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-white/10">
            {addOns.map((addon, i) => (
              <div key={i} className="bg-[#101010] px-6 py-5">
                <span className="text-[14px] text-white">{addon}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
