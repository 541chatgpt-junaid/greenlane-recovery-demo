# Greenlane Breakdown Recovery Service: demo site

A single-page static site built with plain HTML, CSS and vanilla JS. There's no build step.

```
index.html          page markup, SEO meta, Open Graph, LocalBusiness JSON-LD
css/style.css       mobile-first styles, animations, reduced-motion support
js/main.js          header, mobile menu, smooth scroll, scroll reveal
favicon.svg
images/             optimised WebP photos + og-image.png + apple-touch-icon.png
images/src/         original downloads (not deployed)
scripts/optimise-images.sh   converts images/src/* to sized WebP under 200KB
CREDITS.md          photo sources and authors
```

## Preview locally

```bash
python3 -m http.server 8000     # or: npx serve .
# open http://localhost:8000
```

Opening `index.html` directly also works.

## Adding the photos

1. Download each photo listed in `CREDITS.md` from Unsplash or Pexels and save it as
   `images/src/<name>.jpg` (for example `images/src/hero.jpg`).
2. Run `bash scripts/optimise-images.sh`. It needs ImageMagick with WebP support.
3. Fill in the source URL and author in `CREDITS.md`.

Until a photo is present, its slot shows a dark green placeholder rather than a broken image.

## Deploy to Vercel

Import the repo in Vercel with Framework Preset **Other**, leave the build command empty and keep the output directory as the root.
Or run `npx vercel` from this folder.

Once the site has a domain, change `og:image` and the JSON-LD `image` in `index.html` to
absolute URLs (e.g. `https://example.co.uk/images/og-image.png`), and add `og:url` and the
JSON-LD `url`.
