#!/bin/bash
# Архив для Netlify Drop или загрузки на GitHub — постоянная ссылка, не туннель.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
OUT="$ROOT/klyuchik-site-deploy.zip"

cd "$ROOT"
rm -f "$OUT"
zip -r "$OUT" . \
  -x "*.git*" \
  -x ".server.*" \
  -x ".tunnel*" \
  -x ".keep-public.log" \
  -x ".tools/*" \
  -x "_params*.json" \
  -x ".cdp*" \
  -x ".gdocs*" \
  -x ".expr*" \
  -x "klyuchik-site-deploy.zip" \
  -x "assets/media/video-94.mp4" \
  -x "google-doc/_from-word-mama.txt"

echo ""
echo "Готово: $OUT"
echo "Размер: $(du -h "$OUT" | cut -f1)"
echo ""
echo "Дальше: открой https://app.netlify.com/drop и перетащи этот zip."
echo "Через минуту будет постоянная ссылка вида https://....netlify.app"
