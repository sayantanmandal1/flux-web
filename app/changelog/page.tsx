import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Changelog — FLUX',
  description: 'FLUX release history and version notes.',
}

async function getChangelog() {
  try {
    const res = await fetch(
      'https://api.github.com/repos/sayantanmandal1/flux/releases',
      {
        headers: { 'User-Agent': 'flux-website' },
        next: { revalidate: 3600 },
      }
    )
    if (!res.ok) return []
    return await res.json()
  } catch {
    return []
  }
}

export default async function ChangelogPage() {
  const releases = await getChangelog()

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black mb-3">
            <span className="gradient-text">Changelog</span>
          </h1>
          <p className="text-white/40">Every release, every improvement.</p>
        </div>

        {releases.length === 0 ? (
          <div className="glass rounded-2xl p-8 text-center">
            <p className="text-white/40">No releases yet. Check back after the first tag push.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {releases.map((r: Record<string, unknown>) => (
              <div key={r.id as number} className="glass rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/15 border border-purple-500/20 text-purple-300 text-xs font-mono font-semibold mb-2">
                      {r.tag_name as string}
                    </span>
                    <h2 className="text-lg font-bold text-white">{r.name as string}</h2>
                    <p className="text-xs text-white/30 mt-1">
                      {new Date(r.published_at as string).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                  <a
                    href={r.html_url as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-white/40 hover:text-white transition-colors flex-shrink-0"
                  >
                    GitHub ↗
                  </a>
                </div>
                {r.body && (
                  <div
                    className="prose prose-invert prose-sm max-w-none text-white/70
                               [&_h2]:text-white [&_h3]:text-white/80 [&_li]:marker:text-purple-400
                               [&_code]:bg-white/10 [&_code]:px-1 [&_code]:rounded [&_code]:text-purple-300
                               [&_strong]:text-white"
                    dangerouslySetInnerHTML={{
                      __html: markdownToHtml(r.body as string),
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function markdownToHtml(md: string): string {
  return md
    .replace(/^### (.+)$/gm, '<h3 class="text-sm font-semibold mt-4 mb-1">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-base font-bold mt-5 mb-2">$1</h2>')
    .replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p class="mt-2">')
}
