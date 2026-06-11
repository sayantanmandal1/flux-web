import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/[0.06] bg-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                <span className="text-xs font-black text-white">F</span>
              </div>
              <span className="font-black gradient-text tracking-widest text-sm">FLUX</span>
            </div>
            <p className="text-xs text-white/30 leading-relaxed">
              The Ultimate Media Player.<br />Play Everything. Perfectly.
            </p>
          </div>

          {/* App */}
          <div>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">App</h3>
            <ul className="space-y-2">
              {[
                { href: '/download', label: 'Download' },
                { href: '/features', label: 'Features' },
                { href: '/changelog', label: 'Changelog' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-xs text-white/40 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Open Source */}
          <div>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">Open Source</h3>
            <ul className="space-y-2">
              {[
                { href: 'https://github.com/sayantanmandal1/flux', label: 'GitHub (App)' },
                { href: 'https://github.com/sayantanmandal1/flux-web', label: 'GitHub (Web)' },
                { href: 'https://github.com/sayantanmandal1/flux/releases', label: 'Releases' },
                { href: 'https://github.com/sayantanmandal1/flux/issues', label: 'Issues' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Powered by */}
          <div>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">Powered By</h3>
            <ul className="space-y-2">
              {[
                { href: 'https://mpv.io', label: 'mpv player' },
                { href: 'https://ffmpeg.org', label: 'FFmpeg' },
                { href: 'https://github.com/yt-dlp/yt-dlp', label: 'yt-dlp' },
                { href: 'https://www.electronjs.org', label: 'Electron' },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-xs text-white/40 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            © {year} sayantanmandal1. Released under the MIT License.
          </p>
          <p className="text-xs text-white/20">
            Built with Electron, mpv, FFmpeg, yt-dlp, React, Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
