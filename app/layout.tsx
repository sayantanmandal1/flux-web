import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://fluxplayer.app'),
  title: {
    default: 'FLUX — The Ultimate Media Player',
    template: '%s | FLUX',
  },
  description: 'Play Everything. Perfectly. FLUX is the ultimate Windows media player — 120+ formats, hardware-accelerated 4K, HDR, yt-dlp streaming, equalizer, subtitles, and beyond.',
  keywords: ['media player', 'video player', 'mkv player', 'Windows media player', 'VLC alternative', '4K player', 'HDR player', 'FLUX'],
  authors: [{ name: 'sayantanmandal1' }],
  creator: 'sayantanmandal1',
  openGraph: {
    type: 'website',
    url: 'https://fluxplayer.app',
    siteName: 'FLUX Media Player',
    title: 'FLUX — The Ultimate Media Player',
    description: 'Play Everything. Perfectly. Free download for Windows.',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'FLUX Media Player' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FLUX — The Ultimate Media Player',
    description: 'Play Everything. Perfectly.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.svg',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-black text-white antialiased overflow-x-hidden" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
