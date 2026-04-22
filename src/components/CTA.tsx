import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 md:py-48">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          {/* Left — like Palantir's dual CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:sam@sphaerus.ai"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-black text-[14px] font-medium hover:bg-white/90 transition-colors"
            >
              Request a Demo
            </a>
            <a
              href="/#platforms"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-white/20 text-white text-[14px] font-medium hover:bg-white/5 transition-colors"
            >
              Explore Platforms
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
