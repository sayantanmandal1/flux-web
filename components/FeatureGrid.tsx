'use client'

import { motion } from 'framer-motion'

const FEATURES = [
  {
    icon: '🎬',
    title: '120+ Media Formats',
    description: 'MKV, MP4, AVI, MOV, WebM, RM, RMVB, FLV, VOB, TS, M2TS, 3GP, DIVX — every container and codec known to exist.',
  },
  {
    icon: '⚡',
    title: 'Hardware Acceleration',
    description: 'D3D11VA → DXVA2 → CPU fallback. Zero-copy GPU decode for H.264, H.265, AV1, VP9, MPEG-2, VC-1 and more.',
  },
  {
    icon: '🌐',
    title: 'Stream Anything',
    description: 'YouTube, Twitch, Vimeo, Dailymotion via yt-dlp. Direct HTTP/HLS/DASH/RTSP/RTMP streams. Just paste a URL.',
  },
  {
    icon: '🎧',
    title: '15-Band Equalizer',
    description: '25Hz–16kHz parametric EQ with 10 presets. Bass Boost, Cinema, Vocal, Electronic, and more. Save custom presets.',
  },
  {
    icon: '🔠',
    title: 'Advanced Subtitles',
    description: 'SRT, ASS, SSA, VTT, SMI, SUB — external and embedded. Delay control, font/color editor, OpenSubtitles API search.',
  },
  {
    icon: '🖥️',
    title: 'Windows Native',
    description: 'Taskbar thumbnail toolbar, Jump List, System Tray, file associations, "Open with FLUX" context menu, UAC-aware installer.',
  },
  {
    icon: '🌈',
    title: 'HDR & 4K',
    description: 'HDR10 and Dolby Vision tone mapping. EWA Lanczos super-sampling. Temporal dithering. Debanding. Zero quality loss.',
  },
  {
    icon: '📺',
    title: 'Picture-in-Picture',
    description: 'Detach video into a compact always-on-top overlay. Keep watching while working in other apps.',
  },
  {
    icon: '📚',
    title: 'Media Library',
    description: 'Scan folders, auto-extract metadata via FFprobe, track watch progress, cover art, search and filter.',
  },
  {
    icon: '🔁',
    title: 'A-B Loop',
    description: 'Set loop start and end points to the frame. Perfect for learning, review, and repeated segments.',
  },
  {
    icon: '🎨',
    title: 'Video Filters',
    description: 'Brightness, contrast, saturation, hue, gamma. Denoise, sharpen, deinterlace, flip, rotate, super-res upscale.',
  },
  {
    icon: '🚀',
    title: 'Auto-Updates',
    description: 'Silent background updates. Always on the latest version. Powered by electron-updater and GitHub Releases.',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export function FeatureGrid() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
            Everything you need.
            <br />
            <span className="gradient-text">And then some.</span>
          </h2>
          <p className="text-white/40 text-lg">More features than VLC. Zero compromises.</p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="glass glass-hover p-5 rounded-2xl"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-sm font-semibold text-white mb-1.5">{feature.title}</h3>
              <p className="text-xs text-white/45 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
