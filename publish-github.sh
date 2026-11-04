#!/bin/bash
# Постоянная ссылка github.io — не падает как туннель.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
GH="$(command -v gh || echo /opt/homebrew/bin/gh)"

if ! "$GH" auth status >/dev/null 2>&1; then
  echo ""
  echo "Нужен вход в GitHub один раз (откроется браузер)."
  echo "Выбери: GitHub.com → HTTPS → Login with a web browser"
  echo ""
  "$GH" auth login -h github.com -p https -w
fi

"$GH" auth setup-git >/dev/null 2>&1 || true

REPO_NAME="${1:-klyuchik-school}"
OWNER="$("$GH" api user -q .login)"
SITE_URL="https://${OWNER}.github.io/${REPO_NAME}/"

TMP=$(mktemp -d)
trap 'rm -rf "$TMP"' EXIT
rsync -a \
  --exclude '.git' \
  --exclude '.github' \
  --exclude '.server.*' \
  --exclude '.tunnel*' \
  --exclude '.tools' \
  --exclude '.keep*' \
  --exclude '_params*.json' \
  --exclude '.cdp*' \
  --exclude '.gdocs*' \
  --exclude '.expr*' \
  --exclude '*.zip' \
  --exclude 'NETLIFY-*' \
  --exclude 'telegram-pack' \
  --exclude 'google-doc' \
  --exclude 'max-pack' \
  --exclude 'launch' \
  --exclude 'content' \
  --exclude 'docs' \
  --exclude 'forms' \
  --exclude 'scripts' \
  --exclude '.DS_Store' \
  --exclude 'assets/media/video-94.mp4' \
  "$ROOT/" "$TMP/"

touch "$TMP/.nojekyll"

cd "$TMP"
git init -b main
git -c user.email="${OWNER}@users.noreply.github.com" -c user.name="${OWNER}" add -A
git -c user.email="${OWNER}@users.noreply.github.com" -c user.name="${OWNER}" commit -m "Klyuchik site"

if "$GH" repo view "${OWNER}/${REPO_NAME}" >/dev/null 2>&1; then
  git remote add origin "https://github.com/${OWNER}/${REPO_NAME}.git" 2>/dev/null || \
    git remote set-url origin "https://github.com/${OWNER}/${REPO_NAME}.git"
  git push -u origin main --force
else
  "$GH" repo create "$REPO_NAME" --public --description "Ключик — онлайн-школа Ирины Елсуковой" --source=. --remote=origin --push
fi

"$GH" api -X POST "/repos/${OWNER}/${REPO_NAME}/pages" \
  -f build_type=legacy \
  -f 'source[branch]=main' \
  -f 'source[path]=/' >/dev/null 2>&1 || \
"$GH" api -X PUT "/repos/${OWNER}/${REPO_NAME}/pages" \
  -f build_type=legacy \
  -f 'source[branch]=main' \
  -f 'source[path]=/' >/dev/null 2>&1 || true

python3 <<PY
import json, pathlib
p = pathlib.Path("$ROOT/config.json")
j = json.loads(p.read_text(encoding="utf-8"))
j.setdefault("site", {})["url"] = "$SITE_URL"
p.write_text(json.dumps(j, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
PY

{
  echo "Постоянная ссылка (GitHub Pages):"
  echo "  $SITE_URL"
  echo ""
  echo "Репозиторий: https://github.com/${OWNER}/${REPO_NAME}"
} | tee "$ROOT/PUBLIC-URL.txt"
