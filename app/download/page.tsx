import type { Metadata } from 'next'
import { DownloadButton } from '@/components/DownloadButton'

export const metadata: Metadata = {
  title: 'Download FLUX — Free Windows Media Player',
  description: 'Download the latest version of FLUX. Free, fast, and supports 120+ media formats.',
}

const SYSTEM_REQS = [
  ['OS', 'Windows 10 / 11 (64-bit)'],
  ['Processor', 'Intel Core i3 / AMD Ryzen 3 or better'],
  ['Memory', '4 GB RAM (8 GB recommended)'],
  ['Graphics', 'DirectX 11 compatible GPU'],
  ['Storage', '500 MB free space'],
  ['Network', 'Required for streaming & subtitle download'],
]

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      {/* Header */}
      <section className="text-center px-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-600/15 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          Latest Release
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-4">
          Download <span className="gradient-text">FLUX</span>
        </h1>
        <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto">
          100% free. No ads. No telemetry. Just perfect playback.
        </p>
        <DownloadButton size="lg" />
      </section>

      {/* Main download card */}
      <section className="max-w-2xl mx-auto px-4 mb-16">
        <div className="glass rounded-3xl p-8 text-center">
          <div className="w-20 h-20 mx-auto mb-5 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-[0_0_60px_rgba(124,58,237,0.4)]">
            <span className="text-4xl font-black text-white">F</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">FLUX for Windows</h2>
          <p className="text-white/40 text-sm mb-6">
            Windows 10 / 11 · x64 · NSIS Installer
          </p>
          <DownloadButton />
          <p className="text-xs text-white/25 mt-4">
            Installer includes mpv engine, FFmpeg codec library, yt-dlp streaming
          </p>
        </div>
      </section>

      {/* System requirements */}
      <section className="max-w-xl mx-auto px-4 mb-16">
        <h2 className="text-xl font-bold text-white mb-5 text-center">System Requirements</h2>
        <div className="glass rounded-2xl overflow-hidden">
          {SYSTEM_REQS.map(([label, value], i) => (
            <div
              key={label}
              className={`flex gap-4 px-5 py-3.5 ${i < SYSTEM_REQS.length - 1 ? 'border-b border-white/[0.06]' : ''}`}
            >
              <span className="text-sm text-white/40 w-28 flex-shrink-0">{label}</span>
              <span className="text-sm text-white/80">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Installation steps */}
      <section className="max-w-xl mx-auto px-4">
        <h2 className="text-xl font-bold text-white mb-5 text-center">Installation</h2>
        <ol className="space-y-4">
          {[
            ['Download', 'Click the download button above to get the FLUX-Setup.exe installer'],
            ['Run Installer', 'Double-click the installer. Windows may show a SmartScreen warning — click "More info" → "Run anyway" (file is safe)'],
            ['Choose Options', 'Select whether to register file associations and add context menu entries'],
            ['Launch FLUX', 'Start FLUX from your Desktop shortcut or Start Menu and enjoy!'],
          ].map(([title, desc], i) => (
            <li key={i} className="flex gap-4">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                {i + 1}
              </div>
              <div>
                <div className="text-sm font-semibold text-white mb-0.5">{title}</div>
                <div className="text-sm text-white/50">{desc}</div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  )
}
