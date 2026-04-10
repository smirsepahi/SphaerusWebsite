import { motion } from 'framer-motion'
import InteractiveBackground from './InteractiveBackground'

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col overflow-hidden">
      {/* Interactive mouse-follow background */}
      <InteractiveBackground />

      {/* Gradient overlay at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent pointer-events-none" />

      {/* Headline — vertically centered between top and scroll indicator, left-aligned */}
      <div className="relative z-10 flex-1 flex items-center max-w-[1500px] mx-auto px-6 md:px-10 w-full pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-headline max-w-[1000px]">
            AI-Powered Automation
            <br />
            for Every Deal
          </h1>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#platforms"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="relative z-10 flex flex-col items-center gap-3 cursor-pointer group pb-8"
      >
        <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-white/30 group-hover:text-white/50 transition-colors" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
          Scroll to explore
        </span>
        <motion.svg
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-white/30 group-hover:text-white/50 transition-colors"
        >
          <path d="M3 6l5 5 5-5" />
        </motion.svg>
      </motion.a>
    </section>
  )
}
