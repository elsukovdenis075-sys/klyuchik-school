#!/bin/bash
# Папка для Netlify Drop (перетащи ПАПКУ, не весь репозиторий).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
DEST="$ROOT/NETLIFY-перетащи-эту-папку"

cd "$ROOT"
rm -rf "$DEST"
mkdir -p "$DEST/assets"
cp index.html about.html site.js styles.css config.json 404.html netlify.toml .nojekyll "$DEST/"
rsync -a assets/ "$DEST/assets/"

echo "Папка: $DEST"
echo "Размер: $(du -sh "$DEST" | cut -f1)"
echo "В Netlify Drop перетащи именно папку NETLIFY-перетащи-эту-папку"
