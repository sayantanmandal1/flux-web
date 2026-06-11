const FORMATS = [
  'MKV', 'MP4', 'AVI', 'MOV', 'WMV', 'FLV', 'WebM', 'TS', 'MTS', 'M2TS',
  'MPG', 'MPEG', 'M4V', 'VOB', 'RMVB', 'RM', 'ASF', '3GP', 'F4V', 'OGV',
  'DIVX', 'XVID', 'MP3', 'FLAC', 'AAC', 'WAV', 'OGG', 'OPUS', 'M4A', 'WMA',
  'AC3', 'DTS', 'ALAC', 'APE', 'TTA', 'WV', 'AIFF', 'MKA', 'OGM',
  'H.264', 'H.265', 'HEVC', 'AV1', 'VP8', 'VP9', 'MPEG-2', 'VC-1',
  'ProRes', 'DNxHD', 'HAP', 'Theora', 'TrueHD', 'Dolby', 'AAC-LC',
  'HLS', 'DASH', 'RTSP', 'RTMP', 'HTTP', 'FTP', 'YouTube', 'Twitch',
]

export function FormatBadges() {
  // Duplicate for seamless loop
  const doubled = [...FORMATS, ...FORMATS]

  return (
    <section className="py-20 overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl font-black text-white/80 mb-2">
          If it plays, FLUX plays it.
        </h2>
        <p className="text-white/35">Every format. Every codec. No exceptions.</p>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

        <div className="overflow-hidden">
          <div className="marquee-track flex gap-3 w-max">
            {doubled.map((fmt, i) => (
              <span
                key={i}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-mono font-medium
                           bg-white/[0.05] border border-white/[0.08] text-white/60 whitespace-nowrap
                           hover:bg-purple-600/15 hover:text-purple-300 hover:border-purple-500/20
                           transition-all cursor-default"
              >
                {fmt}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
