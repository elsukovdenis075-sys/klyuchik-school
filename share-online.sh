#!/bin/bash
# Публичная ссылка для друзей (пока Mac включён). Перезапускает туннель, если упал.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"
LOG="$ROOT/.tunnel-serveo.log"
URL_FILE="$ROOT/PUBLIC-URL.txt"
PORT=8080

if ! curl -s -o /dev/null --max-time 2 "http://127.0.0.1:${PORT}/"; then
  echo "Локальный сайт на :${PORT} не отвечает — запускаю сервер…"
  ./start.sh --bg
  sleep 2
  PORT=$(cat .server.port 2>/dev/null || echo 8080)
fi

pkill -f "ssh.*serveo.net" 2>/dev/null || true
sleep 1

nohup ssh -o StrictHostKeyChecking=no \
  -o ServerAliveInterval=15 -o ServerAliveCountMax=3 \
  -R "80:127.0.0.1:${PORT}" serveo.net >>"$LOG" 2>&1 &

echo "Жду публичный URL (до 20 с)…"
URL=""
for _ in $(seq 1 20); do
  sleep 1
  URL=$(grep -oE 'https://[a-zA-Z0-9.-]+\.serveousercontent\.com' "$LOG" 2>/dev/null | tail -1)
  [[ -n "$URL" ]] && break
done

if [[ -z "$URL" ]]; then
  echo "Не получил ссылку. Смотри $LOG"
  exit 1
fi

{
  echo "Обновлено: $(date '+%Y-%m-%d %H:%M')"
  echo ""
  echo "$URL"
  echo ""
  echo "Локально: http://127.0.0.1:${PORT}/"
  echo "Перезапуск туннеля: ./share-online.sh"
} > "$URL_FILE"

CODE=$(curl -s -o /dev/null -w "%{http_code}" --max-time 15 "${URL}/" || echo "000")
echo ""
echo "Ссылка для друзей:"
echo "  $URL"
echo "Проверка: HTTP $CODE"
echo "(сохранено в PUBLIC-URL.txt)"
