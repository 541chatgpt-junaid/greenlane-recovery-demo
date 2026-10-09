#!/usr/bin/env bash
# Converts source photos in images/src/ into the optimised WebP files the site uses.
#
#   1. Download each photo listed in CREDITS.md from Unsplash/Pexels.
#   2. Save it as images/src/<name>.jpg (names below).
#   3. Run: bash scripts/optimise-images.sh
#
# Hero is cropped to 1600x1067 (3:2) and gallery images to 800x600 (4:3), or
# smaller at the same ratio when the source is smaller (no upscaling).
# Keep the width/height attributes in index.html in step with the output. Quality is stepped down until
# each file is under 200KB. Requires ImageMagick with WebP support.
set -euo pipefail
cd "$(dirname "$0")/.."

SRC=images/src
MAX_BYTES=200000

optimise() { # name width height [gravity] [offset, e.g. +0-80]
  local name=$1 w=$2 h=$3 g=${4:-center} off=${5:-} in out q sw sh tw th
  in=$(ls "$SRC/$name".* 2>/dev/null | head -1 || true)
  if [[ -z "$in" ]]; then echo "skip  $name (no file in $SRC/)"; return; fi
  out="images/$name.webp"
  # Never upscale: if the source is smaller than the target, keep the
  # target's aspect ratio but shrink the output to what the source supports.
  read -r sw sh < <(identify -format '%w %h\n' "$in[0]")
  tw=$w; th=$h
  if (( sw * h < sh * w )); then   # source is taller than target ratio
    if (( sw < w )); then tw=$sw; th=$(( sw * h / w )); fi
  else
    if (( sh < h )); then th=$sh; tw=$(( sh * w / h )); fi
  fi
  for q in 82 76 70 64 58 52; do
    convert "$in" -auto-orient -resize "${tw}x${th}^" -gravity "$g" -extent "${tw}x${th}${off}" \
      -strip -quality "$q" -define webp:method=6 "$out"
    if (( $(stat -c%s "$out") <= MAX_BYTES )); then break; fi
  done
  printf 'done  %-30s %sx%s  q=%s  %sKB\n' "$out" "$tw" "$th" "$q" $(( $(stat -c%s "$out") / 1024 ))
}

optimise hero                1600 1067
optimise flatbed-car          800  600
optimise recovery-truck       800  600 center +0-85
optimise motorcycle-recovery  800  600
optimise van-recovery         800  600
optimise motorway-night       800  600
optimise jump-start           800  600 north
