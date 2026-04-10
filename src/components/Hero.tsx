import { motion } from 'framer-motion'
import InteractiveBackground from './InteractiveBackground'

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full flex flex-col justify-end pb-12 md:pb-16 overflow-hidden">
      {/* Interactive mouse-follow background */}
      <InteractiveBackground />

      {/* Gradient overlay at bottom for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent pointer-events-none" />

      {/* Headline — Palantir style: massive, overlapping the visual */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-10 w-full"
      >
        <h1 className="hero-headline max-w-[1000px]">
          AI-Powered Automation
          <br />
          for Every Deal
        </h1>
      </motion.div>
    </section>
  )
}
