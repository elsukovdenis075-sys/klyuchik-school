#!/bin/bash
# Только сайт (без telegram-pack, google-doc и мусора) — для Netlify Drop.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
OUT="$ROOT/klyuchik-SITE-ONLY.zip"

cd "$ROOT"
rm -f "$OUT"
zip -r "$OUT" \
  index.html about.html oferta.html privacy.html consent.html site.js styles.css config.json 404.html netlify.toml .nojekyll \
  assets \
  -x "assets/media/video-94.mp4" \
  -x "*.DS_Store"

echo "Готово: $OUT ($(du -h "$OUT" | cut -f1))"
echo "Перетащи на https://app.netlify.com/drop"
