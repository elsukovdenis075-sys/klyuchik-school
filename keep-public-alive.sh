#!/bin/bash
# Держит сайт в интернете, пока Mac включён (перезапускает туннель, если упал).
set -uo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"
PORT=8080
URL_FILE="$ROOT/PUBLIC-URL.txt"
LOG="$ROOT/.keep-public.log"
CF="$(command -v cloudflared || echo /opt/homebrew/bin/cloudflared)"

log() { echo "[$(date '+%H:%M:%S')] $*" | tee -a "$LOG"; }

ensure_local() {
  if curl -s -o /dev/null --max-time 2 "http://127.0.0.1:${PORT}/"; then
    return 0
  fi
  log "Локальный :${PORT} не отвечает — ./start.sh --bg"
  ./start.sh --bg
  sleep 2
  PORT=$(cat .server.port 2>/dev/null || echo 8080)
}

log "Старт keep-public-alive (PID $$)"
while true; do
  ensure_local
  pkill -f "cloudflared tunnel --url" 2>/dev/null || true
  sleep 2
  TMPLOG=$(mktemp)
  "$CF" tunnel --url "http://127.0.0.1:${PORT}" >"$TMPLOG" 2>&1 &
  CFPID=$!
  URL=""
  for _ in $(seq 1 45); do
    sleep 1
    URL=$(grep -oE 'https://[a-z0-9-]+\.trycloudflare\.com' "$TMPLOG" 2>/dev/null | head -1)
    [[ -n "$URL" ]] && break
  done
  if [[ -z "$URL" ]]; then
    log "Не дождались URL cloudflared, повтор…"
    kill "$CFPID" 2>/dev/null || true
    rm -f "$TMPLOG"
    sleep 5
    continue
  fi
  echo "$URL" > "$URL_FILE"
  log "Публичная ссылка: $URL"
  # ждём, пока процесс cloudflared жив; если упал — цикл заново
  while kill -0 "$CFPID" 2>/dev/null; do
    sleep 15
    CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 "${URL}/" 2>/dev/null || echo 000)
    if [[ "$CODE" != "200" ]]; then
      log "Проверка HTTP $CODE — перезапуск туннеля"
      kill "$CFPID" 2>/dev/null || true
      break
    fi
  done
  rm -f "$TMPLOG"
  sleep 3
done
