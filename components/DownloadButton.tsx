'use client'

import { useEffect, useState } from 'react'
import { Download, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ReleaseAsset {
  name: string
  browser_download_url: string
  size: number
  download_count: number
}

interface ReleaseInfo {
  tag_name: string
  assets: ReleaseAsset[]
}

interface DownloadButtonProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function DownloadButton({ size = 'md', className }: DownloadButtonProps) {
  const [release, setRelease] = useState<ReleaseInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [downloading, setDownloading] = useState(false)

  useEffect(() => {
    fetch('https://api.github.com/repos/sayantanmandal1/flux/releases/latest', {
      headers: { 'User-Agent': 'flux-website' },
    })
      .then((r) => r.json())
      .then((data) => {
        setRelease(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const installerAsset = release?.assets?.find(
    (a) => a.name.endsWith('.exe') && a.name.includes('Setup')
  )

  // Fallback URL used when GitHub API is rate-limited or unavailable
  const FALLBACK_URL = 'https://github.com/sayantanmandal1/flux/releases/latest/download/FLUX-Setup-latest.exe'

  const handleDownload = () => {
    setDownloading(true)
    window.location.href = installerAsset?.browser_download_url ?? FALLBACK_URL
    setTimeout(() => setDownloading(false), 3000)
  }

  const formatSize = (bytes: number) => {
    if (!bytes) return ''
    const mb = bytes / (1024 * 1024)
    return `${mb.toFixed(0)} MB`
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-xl gap-2',
    md: 'px-6 py-3 text-sm rounded-xl gap-2.5',
    lg: 'px-8 py-4 text-base rounded-2xl gap-3',
  }

  const iconSizes = { sm: 14, md: 16, lg: 20 }

  return (
    <div className={cn('flex flex-col items-center gap-2', className)}>
      <button
        onClick={handleDownload}
        disabled={downloading}
        className={cn(
          'inline-flex items-center font-semibold text-white transition-all duration-200',
          'bg-gradient-to-r from-purple-600 to-indigo-600',
          'hover:from-purple-500 hover:to-indigo-500',
          'shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.6)]',
          'hover:-translate-y-0.5 active:translate-y-0',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0',
          sizeClasses[size]
        )}
      >
        {loading || downloading ? (
          <Loader2 size={iconSizes[size]} className="animate-spin" />
        ) : (
          <Download size={iconSizes[size]} />
        )}
        <span>
          {loading
            ? 'Loading…'
            : downloading
            ? 'Starting download…'
            : !installerAsset
            ? 'Download FLUX'
            : `Download FLUX ${release?.tag_name ?? ''}`}
        </span>
        {!loading && installerAsset && (
          <span className={cn('opacity-60', size === 'sm' ? 'text-xs' : 'text-sm')}>
            {formatSize(installerAsset.size)}
          </span>
        )}
      </button>

      {!loading && release && (
        <p className="text-xs text-white/30">
          Windows 10 / 11 · x64
          {installerAsset?.download_count ? ` · ${installerAsset.download_count.toLocaleString()} downloads` : ''}
        </p>
      )}
    </div>
  )
}