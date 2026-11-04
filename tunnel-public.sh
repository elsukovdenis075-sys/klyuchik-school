#!/bin/bash
# Публичная ссылка на локальный сайт (пока Mac включён).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

# Стабильный порт: если уже крутится python http.server — используем его
if lsof -nP -iTCP:8080 -sTCP:LISTEN >/dev/null 2>&1; then
  PORT=8080
else
  ./start.sh --bg
  PORT=$(cat .server.port 2>/dev/null || echo 8080)
fi

echo "Локально: http://127.0.0.1:${PORT}/"
echo "Поднимаю туннель serveo.net (Ctrl+C — остановить)…"
echo ""

exec ssh -o StrictHostKeyChecking=no -o ServerAliveInterval=30 \
  -R 80:127.0.0.1:"${PORT}" serveo.net
