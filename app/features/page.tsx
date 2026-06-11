import type { Metadata } from 'next'
import { DownloadButton } from '@/components/DownloadButton'

export const metadata: Metadata = {
  title: 'Features — FLUX',
  description: 'Every feature of FLUX Media Player explained in detail.',
}

const FEATURE_SECTIONS = [
  {
    category: 'Playback',
    items: [
      { name: 'Hardware Decoding', desc: 'D3D11VA and DXVA2 GPU-accelerated decode for H.264, H.265, AV1, VP9, MPEG-2, VC-1. Zero-copy pipeline. Automatic fallback to software decode for unsupported codecs.' },
      { name: '4K & 8K Support', desc: 'Smooth 4K/8K playback on modern GPUs. EWA Lanczos scaling with anti-ringing for perfect upscale quality.' },
      { name: 'HDR10 + Dolby Vision', desc: 'Full HDR metadata passthrough. Hable tone mapping for SDR displays. Toggle in video filters panel.' },
      { name: 'Frame Stepping', desc: 'Step forward or backward one frame at a time. Perfect for video analysis and precise seeking.' },
      { name: 'A-B Loop', desc: 'Set loop start and end points to the exact frame. Loops seamlessly. Clear with one keypress.' },
      { name: '0.01×–10× Speed', desc: 'ScaleTempo2 pitch correction at any speed. Sounds natural at 2×, 3×, even 0.5×.' },
      { name: 'Resume Playback', desc: 'Automatically saves position. Asks to resume on reopen. Stored per-file in SQLite database.' },
    ],
  },
  {
    category: 'Formats',
    items: [
      { name: '120+ Container Formats', desc: 'MKV, MP4, AVI, MOV, WMV, FLV, WebM, TS, MTS, M2TS, MPG, VOB, RM, RMVB, ASF, 3GP, F4V, OGV, DIVX, and dozens more.' },
      { name: 'All Video Codecs', desc: 'H.264, H.265/HEVC, AV1, VP8, VP9, MPEG-2, MPEG-4, VC-1, DivX, Xvid, WMV, Theora, MJPEG, ProRes, DNxHD, HAP, RealVideo, Cineform, and more.' },
      { name: 'All Audio Codecs', desc: 'MP3, AAC, FLAC, Vorbis, Opus, WAV, WMA, AC3, DTS, TrueHD, ALAC, APE, Speex, AMR, G.711, and more.' },
      { name: 'Audio-Only Formats', desc: 'FLAC, MP3, OGG, OPUS, M4A, AIFF, WV, TTA, APE, MKA, AC3, DTS, and more. With waveform visualizer.' },
    ],
  },
  {
    category: 'Streaming',
    items: [
      { name: 'yt-dlp Integration', desc: 'Paste a YouTube, Twitch, Vimeo, Dailymotion, or 1000+ other site URL. FLUX resolves the best quality stream automatically.' },
      { name: 'Network Protocols', desc: 'Direct HTTP/HTTPS, HLS, MPEG-DASH, RTSP, RTMP streams. Authentication headers supported.' },
      { name: 'Adaptive Bitrate', desc: 'HLS and DASH adaptive streaming. Automatic quality selection based on bandwidth.' },
    ],
  },
  {
    category: 'Audio & Subtitles',
    items: [
      { name: '15-Band Equalizer', desc: '25Hz to 16kHz parametric EQ. 10 built-in presets. Custom preset save/load. Real-time adjustment.' },
      { name: 'Audio Normalizer', desc: 'Dynamic audio normalization (dynaudnorm). Balances quiet and loud content automatically.' },
      { name: 'Multi-track Audio', desc: 'Switch between any audio track while playing. Supports dozens of simultaneous audio streams.' },
      { name: 'Audio Delay', desc: 'Fine-tune audio-video sync with ±500ms slider and keyboard shortcuts.' },
      { name: 'Subtitle Search', desc: 'OpenSubtitles API v3 integration. Search by title, auto-detect language, one-click download.' },
      { name: 'Subtitle Styles', desc: 'Font, size, color, border, shadow all customizable. Full ASS/SSA style override.' },
    ],
  },
  {
    category: 'Windows Integration',
    items: [
      { name: 'File Associations', desc: 'Register 120+ extensions. Double-click any media file to open in FLUX. Set as default player from Windows Settings.' },
      { name: '"Open with FLUX" Menu', desc: 'Right-click any media file in Explorer → Open with FLUX. Context menu registered for all media types.' },
      { name: 'Taskbar Controls', desc: 'Thumbnail toolbar shows Previous / Play-Pause / Next. Progress shown on taskbar icon.' },
      { name: 'Jump List', desc: 'Right-click FLUX in taskbar → recent files + Open File and Open URL tasks.' },
      { name: 'System Tray', desc: 'FLUX lives in the tray. Control playback, see now-playing, minimize/restore from the tray icon.' },
      { name: 'Single Instance', desc: 'Launching a second instance passes the file to the existing window. No duplicate processes.' },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-3">
            <span className="gradient-text">Features</span>
          </h1>
          <p className="text-white/40 text-lg">Everything FLUX can do.</p>
        </div>

        <div className="space-y-12">
          {FEATURE_SECTIONS.map((section) => (
            <section key={section.category}>
              <h2 className="text-xl font-bold text-white mb-5 pb-3 border-b border-white/[0.06]">
                {section.category}
              </h2>
              <div className="grid gap-3">
                {section.items.map((item) => (
                  <div key={item.name} className="glass rounded-xl p-4">
                    <h3 className="text-sm font-semibold text-white mb-1">{item.name}</h3>
                    <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-black text-white mb-3">
            Ready to try it?
          </h2>
          <p className="text-white/40 mb-6">Download FLUX for free today.</p>
          <DownloadButton size="lg" />
        </div>
      </div>
    </div>
  )
}
