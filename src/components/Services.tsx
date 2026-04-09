import { motion } from 'framer-motion'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'AI-Powered Analytics',
    description:
      'Portfolio dashboards, scenario modeling, variance analysis, and disposition memos — built to surface insights your spreadsheets can\'t.',
    link: '#',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3M9 7h1m-1 4h1m4-4h1m-1 4h1M9 21v-4a2 2 0 012-2h2a2 2 0 012 2v4" />
      </svg>
    ),
    title: 'Workflow Automation',
    description:
      'Lease abstraction, tenant communication triage, NOI reporting, and work order dispatch — intelligent automation that fits your operation.',
    link: '#',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10">
        <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Deal Intelligence',
    description:
      'LP reporting automation, capital call workflows, IRR modeling, and waterfall calculations — the infrastructure your fund operations demand.',
    link: '#',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function Services() {
  return (
    <section id="services" className="relative py-[120px] radial-bg">
      <div className="max-w-site mx-auto px-10">
        {/* Section header */}
        <div className="mb-20 max-w-[600px]">
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent mb-4">
            Built for every seat at the table
          </div>
          <h2 className="font-heading text-[2.5rem] md:text-[3rem] font-bold tracking-tight text-white leading-[1.1] mb-5">
            Solutions by role
          </h2>
          <p className="font-mono text-[13px] leading-[1.9] text-[rgba(255,255,255,0.4)]">
            Whether you're structuring a deal or managing a fund, we build AI tools
            that fit the way you actually work.
          </p>
        </div>

        {/* Cards grid — CSS Grid, 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px]">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariants}
              className="group relative bg-card border border-[rgba(255,255,255,0.1)] p-10 transition-all duration-500 hover:border-[rgba(0,102,255,0.3)]"
              style={{ backdropFilter: 'blur(12px)' }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-px bg-[rgba(255,255,255,0.15)] transition-all duration-500 group-hover:w-8 group-hover:bg-accent" />
              <div className="absolute top-0 left-0 w-px h-4 bg-[rgba(255,255,255,0.15)] transition-all duration-500 group-hover:h-8 group-hover:bg-accent" />
              <div className="absolute bottom-0 right-0 w-4 h-px bg-[rgba(255,255,255,0.15)] transition-all duration-500 group-hover:w-8 group-hover:bg-accent" />
              <div className="absolute bottom-0 right-0 w-px h-4 bg-[rgba(255,255,255,0.15)] transition-all duration-500 group-hover:h-8 group-hover:bg-accent" />

              {/* Icon */}
              <div className="text-[rgba(255,255,255,0.3)] mb-8 transition-colors duration-500 group-hover:text-accent">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading text-[1.5rem] font-bold text-white tracking-tight mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-[12px] leading-[1.9] text-[rgba(255,255,255,0.4)] mb-8">
                {service.description}
              </p>

              {/* Learn More */}
              <a
                href={service.link}
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.12em] uppercase text-[rgba(255,255,255,0.4)] hover:text-accent transition-colors duration-300"
              >
                Learn More
                <svg
                  className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 12 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M1 6h10M7 2l4 4-4 4" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
