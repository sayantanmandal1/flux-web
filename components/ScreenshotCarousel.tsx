'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SCREENSHOTS = [
  {
    title: 'Beautiful Player UI',
    description: 'Glassmorphic controls with chapter markers and subtitle overlay',
    bg: 'from-purple-900/30 to-indigo-900/20',
  },
  {
    title: '15-Band Equalizer',
    description: 'Fine-tune audio with 10 presets and custom band control',
    bg: 'from-indigo-900/30 to-purple-900/20',
  },
  {
    title: 'Media Library',
    description: 'Scan, organize, and search all your media in one place',
    bg: 'from-violet-900/30 to-blue-900/20',
  },
  {
    title: 'Video Filters & Color',
    description: 'Brightness, contrast, denoise, sharpen, HDR tone mapping',
    bg: 'from-fuchsia-900/25 to-indigo-900/20',
  },
]

export function ScreenshotCarousel() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + SCREENSHOTS.length) % SCREENSHOTS.length)
  const next = () => setCurrent((c) => (c + 1) % SCREENSHOTS.length)

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-white mb-2">
            Built for <span className="gradient-text">perfectionists</span>
          </h2>
          <p className="text-white/40">Every detail crafted with obsessive care.</p>
        </div>

        <div className="relative">
          {/* Main screenshot frame */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className={`rounded-3xl border border-white/10 overflow-hidden bg-gradient-to-br ${SCREENSHOTS[current].bg} aspect-video relative`}
            >
              {/* Simulated UI screenshot */}
              <div className="absolute inset-0 flex flex-col">
                {/* Title bar */}
                <div className="h-9 bg-black/60 border-b border-white/[0.05] flex items-center px-4 gap-2">
                  <div className="w-6 h-6 rounded bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                    <span className="text-[8px] font-black text-white">F</span>
                  </div>
                  <span className="text-[10px] font-bold text-purple-300 tracking-widest">FLUX</span>
                  <span className="ml-auto text-[10px] text-white/30">{SCREENSHOTS[current].title}</span>
                </div>
                {/* Video area placeholder */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-6xl opacity-20">▶</div>
                </div>
                {/* Controls bar */}
                <div className="h-16 bg-black/70 border-t border-white/[0.05] px-4 flex items-center gap-3">
                  <div className="flex gap-2">
                    {['⏮', '⏸', '⏭'].map((btn) => (
                      <div key={btn} className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[10px] text-white/60">
                        {btn}
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 h-1 bg-white/10 rounded-full mx-2">
                    <div className="w-2/5 h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
                  </div>
                  <span className="text-[10px] text-white/30 font-mono">1:24:07</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/15 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/15 transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Caption */}
        <div className="text-center mt-6">
          <p className="text-white/70 font-medium">{SCREENSHOTS[current].title}</p>
          <p className="text-white/35 text-sm mt-1">{SCREENSHOTS[current].description}</p>
          <div className="flex justify-center gap-2 mt-4">
            {SCREENSHOTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? 'bg-purple-500 w-5' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
