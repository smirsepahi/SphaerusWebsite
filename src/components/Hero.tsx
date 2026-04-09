import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 bg-[#0d0d0d] flex items-center justify-center">
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-[rgba(255,255,255,0.08)]">
          Video Background
        </span>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]" />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(0,102,255,0.06)_0%,transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-site mx-auto px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-accent mb-6">
            Commercial Real Estate AI
          </div>

          {/* Headline */}
          <h1 className="font-heading text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold tracking-tight leading-[1.05] text-white mb-6">
            The AI layer
            <br />
            your deals deserve.
          </h1>

          {/* Subheadline */}
          <p className="font-mono text-[14px] md:text-[15px] leading-[1.8] text-[rgba(255,255,255,0.5)] max-w-[640px] mx-auto mb-10">
            Custom automations and intelligent tools built for CRE professionals —
            across every role, every deal, every stage of the lifecycle.
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 bg-accent text-white font-mono text-[12px] tracking-[0.08em] uppercase border border-accent hover:bg-transparent hover:border-accent transition-all duration-300"
            >
              Book a Discovery Call
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-8 py-3.5 bg-transparent text-white font-mono text-[12px] tracking-[0.08em] uppercase border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.4)] transition-all duration-300"
            >
              See What We Build
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 flex items-center justify-center gap-0 flex-wrap"
        >
          {[
            { num: '80%', label: 'Faster Underwriting' },
            { num: '10+', label: 'Hours Saved / Analyst / Week' },
            { num: '60%', label: 'Less LP Reporting Time' },
          ].map((stat, i) => (
            <div key={i} className="flex items-center">
              {i > 0 && (
                <div className="w-px h-10 bg-[rgba(255,255,255,0.1)] mx-8 hidden sm:block" />
              )}
              <div className="text-center px-4 py-2">
                <div className="font-heading text-[28px] font-bold text-white tracking-tight">
                  {stat.num}
                </div>
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[rgba(255,255,255,0.35)] mt-1">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-[rgba(255,255,255,0.2)] animate-pulse" />
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-[rgba(255,255,255,0.2)]">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
