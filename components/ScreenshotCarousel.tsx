'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SPECTRUM = Array.from({ length: 52 }, (_, i) =>
  Math.min(92, Math.max(6, 18 + Math.abs(Math.sin(i * 0.45) * 52) + Math.abs(Math.cos(i * 0.23) * 26)))
)

function PlayerSlide() {
  return (
    <div className="absolute inset-0 flex flex-col bg-black">
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] via-[#0d0d1f] to-black" />
        <video src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-md border border-white/10 whitespace-nowrap">
          <span className="text-[11px] text-white font-medium">Big Buck Bunny</span>
          <span className="text-[10px] text-white/35 ml-2">Blender Foundation · CC BY 3.0</span>
        </div>
        <div className="absolute top-2 right-2 flex gap-1">
          <div className="px-1.5 py-0.5 bg-black/60 backdrop-blur-sm rounded text-[8px] text-white/50 border border-white/10">4K HDR</div>
          <div className="px-1.5 py-0.5 bg-black/60 backdrop-blur-sm rounded text-[8px] text-white/50 border border-white/10">⧉ PiP</div>
        </div>
      </div>
      <div className="bg-black/95 border-t border-white/[0.06] px-4 py-2.5 flex-shrink-0 flex flex-col gap-2">
        <div className="relative h-1 bg-white/10 rounded-full">
          {[18, 42, 67, 88].map((p) => (
            <div key={p} className="absolute top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-purple-400/50 z-10" style={{ left: `${p}%` }} />
          ))}
          <div className="h-full w-[38%] bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full" />
          <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_8px_rgba(139,92,246,0.9)] z-20" style={{ left: 'calc(38% - 6px)' }} />
        </div>
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            {['⏮', '⏸', '⏭'].map((b) => (<div key={b} className="w-7 h-7 rounded-lg bg-white/[0.07] flex items-center justify-center text-[11px] text-white/60">{b}</div>))}
          </div>
          <div className="flex items-center gap-1.5 ml-1">
            <span className="text-[11px] text-white/30">🔊</span>
            <div className="w-16 h-0.5 bg-white/10 rounded-full"><div className="w-[70%] h-full bg-white/35 rounded-full" /></div>
          </div>
          <span className="font-mono text-[9px] text-white/25 ml-auto">9:56 / 9:56</span>
          <span className="text-[9px] text-white/25">HD</span><span className="text-[9px] text-white/25">CC</span><span className="text-[9px] text-white/25">⛶</span>
        </div>
      </div>
    </div>
  )
}

function EqualizerSlide() {
  const PRESETS = ['Flat', 'Rock', 'Jazz', 'Cinema', 'Bass Boost', 'Vocal', 'Electronic']
  const bands = [
    { freq: '25', gain: 4 }, { freq: '50', gain: 6 }, { freq: '100', gain: 7 },
    { freq: '200', gain: 5 }, { freq: '400', gain: 2 }, { freq: '800', gain: -1 },
    { freq: '1k', gain: -2 }, { freq: '2k', gain: 1 }, { freq: '4k', gain: 3 },
    { freq: '6k', gain: 5 }, { freq: '8k', gain: 7 }, { freq: '10k', gain: 8 },
    { freq: '12k', gain: 6 }, { freq: '14k', gain: 4 }, { freq: '16k', gain: 2 },
  ]
  return (
    <div className="absolute inset-0 flex flex-col bg-gradient-to-b from-[#080818] to-black p-4 overflow-hidden select-none">
      <div className="flex items-end gap-[1.5px] mb-3 flex-shrink-0" style={{ height: '32%' }}>
        {SPECTRUM.map((h, i) => (<div key={i} className="flex-1 rounded-t-[1px]" style={{ height: `${h}%`, background: 'linear-gradient(to top, rgba(124,58,237,0.9) 0%, rgba(99,102,241,0.2) 100%)' }} />))}
      </div>
      <div className="flex gap-0.5 flex-1 mb-3 min-h-0">
        {bands.map(({ freq, gain }) => {
          const thumbPct = 50 - (gain / 12) * 44
          const isPos = gain >= 0
          const barHeight = Math.abs(gain / 12) * 44
          return (
            <div key={freq} className="flex flex-col items-center flex-1">
              <div className="flex-1 relative w-full min-h-0">
                <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-white/10" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-px bg-white/20" />
                {gain !== 0 && <div className="absolute left-1/2 -translate-x-1/2 w-[3px] rounded-sm" style={{ top: isPos ? `${thumbPct}%` : '50%', height: `${barHeight}%`, background: 'linear-gradient(to bottom, #8b5cf6, #6366f1)', minHeight: 2 }} />}
                <div className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white z-10" style={{ top: `calc(${thumbPct}% - 5px)`, boxShadow: '0 0 6px rgba(139,92,246,0.7)' }} />
              </div>
              <span className="text-[5.5px] text-white/25 mt-1 text-center">{freq}</span>
            </div>
          )
        })}
      </div>
      <div className="flex flex-wrap gap-1.5 justify-center flex-shrink-0">
        {PRESETS.map((p, i) => (<div key={p} className={`px-3 py-0.5 rounded-full text-[9px] font-medium border ${i === 3 ? 'bg-purple-600/25 border-purple-500/40 text-purple-300' : 'bg-white/[0.03] border-white/[0.08] text-white/30'}`}>{p}</div>))}
      </div>
    </div>
  )
}

function LibrarySlide() {
  const movies = [
    { title: 'Inception', year: 2010, progress: 72, from: '#1e3a5f', accent: '#3b82f6' },
    { title: 'Dune: Part Two', year: 2024, progress: 100, from: '#5c3a1e', accent: '#f59e0b' },
    { title: 'Interstellar', year: 2014, progress: 45, from: '#1a1a3e', accent: '#6366f1' },
    { title: 'The Matrix', year: 1999, progress: 0, from: '#0a2e0a', accent: '#22c55e' },
    { title: 'Blade Runner', year: 2017, progress: 88, from: '#2e1a0a', accent: '#f97316' },
    { title: 'Oppenheimer', year: 2023, progress: 33, from: '#2e0a0a', accent: '#ef4444' },
  ]
  return (
    <div className="absolute inset-0 flex flex-col bg-[#080808] p-3 select-none">
      <div className="flex gap-2 mb-2.5 flex-shrink-0">
        <div className="flex-1 h-7 bg-white/[0.04] border border-white/[0.07] rounded-lg flex items-center px-2.5 gap-2">
          <svg className="w-3 h-3 text-white/20 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <span className="text-[9px] text-white/20">Search 127 items...</span>
        </div>
        <div className="h-7 px-2.5 bg-purple-600/15 border border-purple-500/20 rounded-lg flex items-center gap-1 text-[9px] text-purple-400"><span>⊞</span><span>Grid</span></div>
      </div>
      <div className="flex gap-2 mb-2.5 flex-shrink-0">
        {['All', 'Movies', 'Series', 'Music', 'Recent'].map((t, i) => (<div key={t} className={`px-2.5 py-0.5 rounded-full text-[8px] font-medium ${i === 0 ? 'bg-purple-600/25 text-purple-300 border border-purple-500/30' : 'text-white/25'}`}>{t}</div>))}
        <span className="ml-auto text-[8px] text-white/15">127 items</span>
      </div>
      <div className="grid grid-cols-3 gap-2 flex-1 overflow-hidden min-h-0">
        {movies.map((m) => (
          <div key={m.title} className="rounded-xl overflow-hidden flex flex-col border border-white/[0.05] cursor-pointer hover:border-purple-500/30 transition-colors">
            <div className="flex-1 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${m.from} 0%, #050505 100%)`, minHeight: 48 }}>
              <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-20">🎬</div>
              <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at 35% 35%, ${m.accent}38 0%, transparent 65%)` }} />
              {m.progress === 100 && <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-green-500/80 flex items-center justify-center text-[8px] font-bold text-white">✓</div>}
              {m.progress > 0 && m.progress < 100 && (<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black/50"><div className="h-full" style={{ width: `${m.progress}%`, backgroundColor: m.accent }} /></div>)}
            </div>
            <div className="bg-black/80 px-2 py-1.5 flex-shrink-0">
              <p className="text-[8px] font-semibold text-white/80 truncate">{m.title}</p>
              <p className="text-[7px] text-white/25">{m.year}{m.progress > 0 && m.progress < 100 ? ` · ${m.progress}%` : ''}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FiltersSlide() {
  const controls = [
    { name: 'Brightness', value: 120, base: 100, max: 200, color: '#f59e0b' },
    { name: 'Contrast',   value: 135, base: 100, max: 200, color: '#6366f1' },
    { name: 'Saturation', value: 150, base: 100, max: 200, color: '#ec4899' },
    { name: 'Gamma',      value: 110, base: 100, max: 200, color: '#22c55e' },
    { name: 'Sharpness',  value: 65,  base: 0,   max: 100, color: '#f97316' },
    { name: 'Denoise',    value: 40,  base: 0,   max: 100, color: '#14b8a6' },
  ]
  return (
    <div className="absolute inset-0 flex bg-black overflow-hidden select-none">
      <div className="w-[42%] flex flex-col border-r border-white/[0.06] flex-shrink-0">
        <div className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-950" />
          <div className="absolute inset-3 rounded-lg bg-slate-700/20 border border-white/5 flex items-center justify-center"><span className="text-white/10 text-[10px]">Original</span></div>
          <div className="absolute bottom-2 left-2 px-1.5 py-0.5 bg-black/60 rounded text-[8px] text-white/35 border border-white/10">Before</div>
        </div>
        <div className="flex-1 relative overflow-hidden border-t border-white/[0.05]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] to-[#0d0d1f]" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.3) 0%, transparent 70%)' }} />
          <div className="absolute inset-3 rounded-lg bg-purple-500/15 border border-purple-500/25 flex items-center justify-center"><span className="text-purple-400/40 text-[10px]">Enhanced</span></div>
          <div className="absolute bottom-2 left-2 px-1.5 py-0.5 bg-purple-600/50 rounded text-[8px] text-purple-200">After</div>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-3 gap-2 overflow-hidden">
        <div className="flex flex-wrap gap-1 mb-0.5 flex-shrink-0">
          {([['Denoise', true], ['Sharpen', true], ['Deinterlace', false], ['HDR Map', false], ['Super-res', false]] as [string, boolean][]).map(([n, on]) => (<div key={n} className={`px-2 py-0.5 rounded-md text-[8px] font-medium border ${on ? 'bg-purple-600/20 border-purple-500/30 text-purple-300' : 'bg-white/[0.03] border-white/[0.07] text-white/25'}`}>{n}</div>))}
        </div>
        {controls.map(({ name, value, base, max, color }) => {
          const pct = (value / max) * 100
          const label = value === base ? '0' : value > base ? `+${value - base}` : `${value - base}`
          return (
            <div key={name} className="flex-shrink-0">
              <div className="flex justify-between items-center mb-0.5">
                <span className="text-[9px] text-white/50">{name}</span>
                <span className="text-[9px] font-mono text-white/30">{label}</span>
              </div>
              <div className="relative h-1.5 bg-white/[0.07] rounded-full overflow-visible">
                <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: color, opacity: 0.75 }} />
                <div className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow" style={{ left: `calc(${pct}% - 5px)` }} />
              </div>
            </div>
          )
        })}
        <div className="flex gap-1.5 mt-auto pt-1 flex-shrink-0">
          {([['Reset', false], ['Save Preset', false], ['Apply', true]] as [string, boolean][]).map(([label, primary]) => (<div key={label} className={`flex-1 py-1.5 rounded-lg text-[8px] text-center font-medium border cursor-pointer ${primary ? 'bg-purple-600/30 border-purple-500/40 text-purple-300' : 'bg-white/[0.04] border-white/[0.08] text-white/30'}`}>{label}</div>))}
        </div>
      </div>
    </div>
  )
}

const SLIDES = [
  { title: 'Beautiful Player UI', description: 'Glassmorphic controls, chapter markers, HDR playback & subtitle overlay', bg: 'from-purple-950/30 to-black', Component: PlayerSlide },
  { title: '15-Band Equalizer', description: 'Spectrum analyzer + parametric EQ — Rock, Jazz, Cinema, Bass Boost & more', bg: 'from-indigo-950/30 to-black', Component: EqualizerSlide },
  { title: 'Media Library', description: 'Auto-scan folders, extract metadata, track watch progress & cover art', bg: 'from-violet-950/30 to-black', Component: LibrarySlide },
  { title: 'Video Filters & Color', description: 'Brightness, contrast, denoise, sharpen, HDR tone mapping — real-time', bg: 'from-fuchsia-950/30 to-black', Component: FiltersSlide },
]

export function ScreenshotCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const navigate = (idx: number) => {
    setCurrent(((idx % SLIDES.length) + SLIDES.length) % SLIDES.length)
    setPaused(true)
    setTimeout(() => setPaused(false), 8000)
  }

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 6000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused])

  const slide = SLIDES[current]

  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-white mb-2">Built for <span className="gradient-text">perfectionists</span></h2>
          <p className="text-white/40">Every detail crafted with obsessive care.</p>
        </div>
        <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className={`rounded-3xl border border-white/10 overflow-hidden bg-gradient-to-br ${slide.bg} aspect-video relative shadow-[0_0_80px_rgba(124,58,237,0.1)]`}>
            <div className="absolute top-0 left-0 right-0 h-9 z-30 bg-black/85 border-b border-white/[0.06] flex items-center px-4 gap-2.5">
              <div className="w-5 h-5 rounded-md bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0"><span className="text-[8px] font-black text-white leading-none">F</span></div>
              <span className="text-[10px] font-bold text-purple-300 tracking-widest">FLUX</span>
              <div className="flex gap-1.5 ml-3">{['bg-red-500/50', 'bg-yellow-500/50', 'bg-green-500/50'].map((c, i) => (<div key={i} className={`w-2 h-2 rounded-full ${c}`} />))}</div>
              <span className="ml-auto text-[10px] text-white/20">{slide.title}</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={current} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="absolute left-0 right-0 bottom-0" style={{ top: 36 }}>
                <slide.Component />
              </motion.div>
            </AnimatePresence>
            <button onClick={() => navigate(current - 1)} className="absolute left-3 top-[calc(50%+18px)] -translate-y-1/2 z-40 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/15 transition-colors"><ChevronLeft size={16} className="text-white/70" /></button>
            <button onClick={() => navigate(current + 1)} className="absolute right-3 top-[calc(50%+18px)] -translate-y-1/2 z-40 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-white/15 transition-colors"><ChevronRight size={16} className="text-white/70" /></button>
          </div>
          <div className="text-center mt-6">
            <motion.p key={`t-${current}`} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-white/80 font-semibold">{slide.title}</motion.p>
            <motion.p key={`d-${current}`} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="text-white/35 text-sm mt-1">{slide.description}</motion.p>
            <div className="flex justify-center gap-2 mt-4">
              {SLIDES.map((_, i) => (<button key={i} onClick={() => navigate(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-purple-500 w-6' : 'bg-white/20 w-1.5 hover:bg-white/40'}`} />))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}