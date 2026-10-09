#!/usr/bin/env bash
# Converts source photos in images/src/ into the optimised WebP files the site uses.
#
#   1. Download each photo listed in CREDITS.md from Unsplash/Pexels.
#   2. Save it as images/src/<name>.jpg (names below).
#   3. Run: bash scripts/optimise-images.sh
#
# Hero is cropped to 1600x1000, gallery images to 800x600 (matching the
# width/height attributes in index.html). Quality is stepped down until
# each file is under 200KB. Requires ImageMagick with WebP support.
set -euo pipefail
cd "$(dirname "$0")/.."

SRC=images/src
MAX_BYTES=200000

optimise() { # name width height
  local name=$1 w=$2 h=$3 in out q
  in=$(ls "$SRC/$name".* 2>/dev/null | head -1 || true)
  if [[ -z "$in" ]]; then echo "skip  $name (no file in $SRC/)"; return; fi
  out="images/$name.webp"
  for q in 82 76 70 64 58 52; do
    convert "$in" -auto-orient -resize "${w}x${h}^" -gravity center -extent "${w}x${h}" \
      -strip -quality "$q" -define webp:method=6 "$out"
    (( $(stat -c%s "$out") <= MAX_BYTES )) && break
  done
  printf 'done  %-22s %sx%s  q=%s  %sKB\n' "$out" "$w" "$h" "$q" $(( $(stat -c%s "$out") / 1024 ))
}

optimise hero                1600 1000
optimise flatbed-car          800  600
optimise roadside-assistance  800  600
optimise motorway-night       800  600
optimise van-recovery         800  600
optimise motorcycle-recovery  800  600
optimise jump-start           800  600
