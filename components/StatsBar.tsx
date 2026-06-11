'use client'

import { motion } from 'framer-motion'

const STATS = [
  { value: '120+', label: 'Formats Supported' },
  { value: '4K', label: 'Max Resolution' },
  { value: 'D3D11VA', label: 'Hardware Decode' },
  { value: 'HDR10', label: 'HDR Support' },
  { value: 'yt-dlp', label: 'Streaming Engine' },
  { value: '100%', label: 'Free & Open Source' },
]

export function StatsBar() {
  return (
    <section className="py-16 px-4 border-y border-white/[0.06] bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-black gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-white/35 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
