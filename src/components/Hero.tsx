import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-end pb-16 md:pb-24 overflow-hidden">
      {/* Background — dark with subtle gradient like Palantir */}
      <div className="absolute inset-0 bg-[#101010]">
        {/* Dashboard mockup placeholder — centered laptop visual */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[80%] max-w-[900px] aspect-[16/10] mt-[-5%]">
            {/* Laptop frame */}
            <div className="absolute inset-0 bg-[#1a1a1a] rounded-lg border border-white/10 overflow-hidden shadow-2xl">
              {/* Screen content — grid of fake dashboard elements */}
              <div className="absolute inset-2 rounded bg-[#0d0d0d] p-4 grid grid-cols-4 grid-rows-3 gap-2">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-white/5 flex items-center justify-center"
                  >
                    <div className="w-full h-full p-2 flex flex-col gap-1">
                      <div className="h-1 w-8 bg-white/10 rounded" />
                      <div className="flex-1 flex items-end gap-[2px]">
                        {Array.from({ length: 6 }).map((_, j) => (
                          <div
                            key={j}
                            className="flex-1 rounded-t"
                            style={{
                              height: `${20 + Math.random() * 70}%`,
                              background: i % 3 === 0
                                ? `rgba(99, 102, 241, ${0.3 + Math.random() * 0.4})`
                                : `rgba(255, 255, 255, ${0.05 + Math.random() * 0.1})`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Laptop base */}
            <div className="absolute -bottom-2 left-[10%] right-[10%] h-3 bg-[#1a1a1a] rounded-b-xl border-x border-b border-white/10" />
          </div>
        </div>
        {/* Gradient overlay — text readable over laptop */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/60 to-transparent" />
      </div>

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
