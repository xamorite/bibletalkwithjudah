#!/usr/bin/env bash
# Generates resized WebP copies of the site's images into assets/optimized/.
# The originals are kept as masters; re-run this after adding or replacing an image.
# Requires ImageMagick (`magick` or `convert`).
set -euo pipefail

cd "$(dirname "$0")/.."

if command -v magick >/dev/null 2>&1; then IM=(magick); else IM=(convert); fi

OUT=assets/optimized
mkdir -p "$OUT/gallery"

# resize <src> <dest> <width> <quality>
resize() {
  # ">" only shrinks, so a source smaller than <width> is never upscaled
  "${IM[@]}" "$1" -auto-orient -strip -resize "${3}x>" -quality "$4" -define webp:method=6 "$2"
  echo "$2 ($(du -k "$2" | cut -f1) KB)"
}

# Gallery thumbnails (grid slots are at most ~360px wide)
for src in assets/gallery/*.webp; do
  name=$(basename "$src" .webp)
  for w in 400 800; do
    resize "$src" "$OUT/gallery/$name-$w.webp" "$w" 72
  done
done

# Home page images
for w in 640 1024 1600 2560; do resize vision.jpg "$OUT/vision-$w.webp" "$w" 75; done
for w in 480 960; do resize clients.jpg "$OUT/clients-$w.webp" "$w" 78; done
# Sits under a 60% black overlay, so it can be compressed harder
for w in 1280 1920; do resize contactus.jpg "$OUT/contactus-$w.webp" "$w" 65; done
