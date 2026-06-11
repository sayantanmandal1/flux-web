# FLUX Website

> Official website for FLUX — The Ultimate Media Player

Built with **Next.js 16** + **Shadcn UI** + **Tailwind CSS v4** + **Framer Motion**. Frontend-only static site — no backend, no database.

[![Deploy](https://img.shields.io/badge/Deploy-Static%20Export-brightgreen)](https://github.com/sayantanmandal1/flux-web)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)

**Live site:** [fluxplayer.app](https://fluxplayer.app)

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page — Hero, Features, Format badges, Screenshots, Stats |
| `/download` | Download page — GitHub Releases API auto-trigger |
| `/features` | Full feature breakdown |
| `/changelog` | GitHub Releases markdown rendered live |

## Design System

- **Background**: Pure black `#000000`
- **Glass cards**: `bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl`
- **Accent gradient**: `from-purple-600 to-indigo-600`  
- **Font**: Geist Display + Inter
- **Animations**: Framer Motion with viewport-triggered stagger

## Development

```bash
npm install
npm run dev       # → localhost:3000
npm run build     # → out/ (static export)
```

## Download Button

The `<DownloadButton>` component fetches:
```
GET https://api.github.com/repos/sayantanmandal1/flux/releases/latest
```
Finds the `FLUX-Setup-*.exe` asset, reads its size, triggers `window.location.href` download on click.

No backend — 100% client-side.

## Deployment

The site exports as static HTML (`output: 'export'`). Deploy to any static host:
- Vercel: `vercel --prod`
- GitHub Pages: push `out/` to `gh-pages` branch
- Netlify: drag & drop `out/` folder

## License

[MIT](LICENSE) © 2024 sayantanmandal1
