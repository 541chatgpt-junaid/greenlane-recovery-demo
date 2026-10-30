# VAR Solutions – Mobile Smart Repairs (demo)

Single-page marketing site built with Next.js (App Router), TypeScript, Tailwind CSS and lucide-react.
Fully static, so it deploys to Vercel with zero config.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Editing content

All business content (phone, WhatsApp links, areas, services, reviews, FAQs, image URLs) is in
`lib/content.ts`. Components live in `components/`. Theme colours are defined in `app/globals.css`.

## Images

The before/after photos load from Pexels (allowed via `images.remotePatterns` in `next.config.ts`).
To use local files, add `public/before.jpg` and `public/after.jpg` and change `images.before.src` /
`images.after.src` in `lib/content.ts` to `/before.jpg` and `/after.jpg`.

## Deploy to Vercel

Import the repo in Vercel and set **Root Directory** to `var-solutions-demo`, or run `npx vercel`
from this folder.
