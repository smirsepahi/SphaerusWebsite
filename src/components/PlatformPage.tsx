import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AtlasIcon, LegionIcon, AstraIcon } from './icons'
import Nav from './Nav'
import CTA from './CTA'
import Footer from './Footer'

const platformData: Record<string, {
  name: string
  tagline: string
  description: string
  icon: typeof AtlasIcon
  color: string
  features: { title: string; description: string }[]
  useCases: string[]
}> = {
  atlas: {
    name: 'Atlas',
    tagline: 'The Operating System for Asset Management',
    description: 'Atlas gives asset managers complete visibility across their portfolio. Track performance, optimize NOI, and make data-driven decisions at the property level — all from one platform.',
    icon: AtlasIcon,
    color: '#6366f1',
    features: [
      {
        title: 'Portfolio Dashboards',
        description: 'Real-time performance metrics across every property in your portfolio.',
      },
      {
        title: 'NOI Optimization',
        description: 'AI-driven insights to maximize net operating income at scale.',
      },
      {
        title: 'Variance Analysis',
        description: 'Automated budget-to-actual tracking with instant anomaly detection.',
      },
      {
        title: 'Disposition Memos',
        description: 'Generate institutional-quality disposition materials in minutes.',
      },
    ],
    useCases: [
      'Multi-family portfolio managers',
      'Commercial asset managers',
      'Institutional owners',
      'REITs',
    ],
  },
  legion: {
    name: 'Legion',
    tagline: 'The Command Center for Brokerage Operations',
    description: 'Legion coordinates your entire brokerage force. Manage agents, automate listings, and close deals faster with AI-powered workflows built for scale.',
    icon: LegionIcon,
    color: '#3b82f6',
    features: [
      {
        title: 'Agent Coordination',
        description: 'Assign leads, track performance, and manage teams from one place.',
      },
      {
        title: 'Listing Automation',
        description: 'Auto-generate listing descriptions, comps, and marketing materials.',
      },
      {
        title: 'Deal Pipeline',
        description: 'Full visibility into every transaction from prospect to close.',
      },
      {
        title: 'CRM Enrichment',
        description: 'AI-powered contact scoring and relationship intelligence.',
      },
    ],
    useCases: [
      'Commercial brokerage firms',
      'Residential brokerage teams',
      'Leasing operations',
      'Tenant representation',
    ],
  },
  astra: {
    name: 'Astra',
    tagline: 'Intelligence for Investment Decisions',
    description: 'Astra gives investment firms the edge. From deal sourcing to LP reporting, every decision is backed by AI-driven analysis and automated workflows.',
    icon: AstraIcon,
    color: '#8b5cf6',
    features: [
      {
        title: 'Deal Sourcing',
        description: 'Surface off-market opportunities with proprietary data signals.',
      },
      {
        title: 'Underwriting Automation',
        description: 'Build pro formas and financial models in a fraction of the time.',
      },
      {
        title: 'Fund Strategy',
        description: 'Scenario modeling and waterfall calculations for fund managers.',
      },
      {
        title: 'LP Reporting',
        description: 'Automated investor reports with institutional-grade formatting.',
      },
    ],
    useCases: [
      'Private equity real estate',
      'Family offices',
      'Fund managers',
      'Development firms',
    ],
  },
}

export default function PlatformPage() {
  const { slug } = useParams<{ slug: string }>()
  const platform = platformData[slug || '']

  if (!platform) {
    return (
      <div className="min-h-screen bg-[#101010] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[2rem] font-light text-white mb-4">Platform not found</h1>
          <Link to="/" className="text-white/60 hover:text-white transition-colors text-[14px]" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  const Icon = platform.icon

  return (
    <div className="min-h-screen bg-[#101010]">
      <Nav />

      {/* Hero */}
      <section className="relative pt-32 md:pt-44 pb-24 md:pb-32">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <Link to="/" className="text-[12px] text-white/50 hover:text-white transition-colors" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
              Home
            </Link>
            <span className="text-white/30 mx-2">/</span>
            <span className="text-[12px] text-white/50" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
              Platforms
            </span>
            <span className="text-white/30 mx-2">/</span>
            <span className="text-[12px] text-white" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
              {platform.name}
            </span>
          </motion.div>

          {/* Icon + Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6 md:gap-8 mb-8"
          >
            <Icon className="w-12 h-12 md:w-16 md:h-16" color={platform.color} />
            <h1 className="text-[3rem] md:text-[5rem] font-light tracking-tight text-white leading-none">
              {platform.name}
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[1.3rem] md:text-[1.6rem] font-light text-white/80 max-w-[700px] leading-[1.4] mb-6"
          >
            {platform.tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15px] text-white/70 max-w-[600px] leading-[1.8]"
            style={{ fontFamily: '"IBM Plex Mono", monospace' }}
          >
            {platform.description}
          </motion.p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="border-t border-white/10" />
      </div>

      {/* Features */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[1rem] font-medium tracking-[0.1em] uppercase text-white mb-16"
          >
            Capabilities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {platform.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#101010] p-10 md:p-14"
              >
                <h3 className="text-[1.5rem] md:text-[2rem] font-light tracking-tight text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-[14px] text-white/70 leading-[1.8]" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 md:py-32 bg-[#0a0a0a]">
        <div className="max-w-[1500px] mx-auto px-6 md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[1rem] font-medium tracking-[0.1em] uppercase text-white mb-16"
          >
            Built For
          </motion.h2>

          <div className="border-t border-white/10">
            {platform.useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="py-6 border-b border-white/10 flex items-center gap-4"
              >
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: platform.color }} />
                <span className="text-[1.1rem] md:text-[1.3rem] font-light text-white">
                  {useCase}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  )
}
