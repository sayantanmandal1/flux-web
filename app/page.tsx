'use client'

import { Hero } from '@/components/Hero'
import { FeatureGrid } from '@/components/FeatureGrid'
import { FormatBadges } from '@/components/FormatBadges'
import { StatsBar } from '@/components/StatsBar'
import { ScreenshotCarousel } from '@/components/ScreenshotCarousel'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeatureGrid />
      <FormatBadges />
      <ScreenshotCarousel />

      {/* CTA section */}
      <section className="py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">Ready to experience</span>
            <br />
            <span className="text-white/90">perfect playback?</span>
          </h2>
          <p className="text-white/50 text-lg mb-8">
            Download FLUX for free. No ads, no subscriptions, no compromises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/download"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-semibold
                         bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500
                         text-white transition-all duration-200 shadow-[0_0_40px_rgba(124,58,237,0.4)]
                         hover:shadow-[0_0_60px_rgba(124,58,237,0.6)] hover:-translate-y-0.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Free Download for Windows
            </a>
            <a
              href="https://github.com/sayantanmandal1/flux"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl text-sm font-medium
                         border border-white/10 text-white/60 hover:text-white hover:border-white/20
                         transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
