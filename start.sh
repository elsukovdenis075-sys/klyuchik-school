#!/bin/bash
# Локальный сервер «Ключик». Всегда из sites/klyuchik.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

PID_FILE="$ROOT/.server.pid"
PORT_FILE="$ROOT/.server.port"
LOG_FILE="$ROOT/.server.log"

pick_port() {
  local port=8080
  # Если на 8080 уже наш каталог — не уезжаем на 8083 (туннели ломаются)
  if lsof -nP -iTCP:8080 -sTCP:LISTEN >/dev/null 2>&1; then
    if curl -s --max-time 1 http://127.0.0.1:8080/ | grep -q "Ключик"; then
      echo 8080
      return
    fi
  fi
  while lsof -nP -iTCP:"$port" -sTCP:LISTEN >/dev/null 2>&1; do
    port=$((port + 1))
  done
  echo "$port"
}

serve_loop() {
  local port="$1"
  echo "$port" > "$PORT_FILE"
  echo ""
  echo "  Ключик: http://127.0.0.1:${port}/"
  echo "  Лог: ${LOG_FILE}"
  echo "  Остановка: ./start.sh stop"
  echo ""
  while true; do
    python3 -m http.server "$port" --bind 127.0.0.1 2>>"$LOG_FILE" || {
      echo "[$(date '+%H:%M:%S')] сервер упал, перезапуск через 1 с…" >>"$LOG_FILE"
      sleep 1
    }
  done
}

cmd="${1:-}"

case "$cmd" in
  stop)
    if [[ -f "$PID_FILE" ]]; then
      pid=$(cat "$PID_FILE")
      if kill -0 "$pid" 2>/dev/null; then
        kill "$pid" 2>/dev/null || true
        pkill -P "$pid" 2>/dev/null || true
        echo "Остановлен (pid $pid)."
      else
        echo "Процесс $pid не найден — удаляю pid-файл."
      fi
      rm -f "$PID_FILE"
    else
      echo "Pid-файл нет. Если порт занят: lsof -i :8080"
    fi
    exit 0
    ;;
  status)
    if [[ -f "$PID_FILE" ]] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
      port=$(cat "$PORT_FILE" 2>/dev/null || echo "?")
      echo "Работает (pid $(cat "$PID_FILE")), порт $port → http://127.0.0.1:${port}/"
    else
      echo "Не запущен. Старт: ./start.sh или ./start.sh --bg"
    fi
    exit 0
    ;;
  --bg|bg)
    if [[ -f "$PID_FILE" ]] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
      port=$(cat "$PORT_FILE" 2>/dev/null || echo "?")
      echo "Уже запущен (pid $(cat "$PID_FILE")) → http://127.0.0.1:${port}/"
      exit 0
    fi
    PORT=$(pick_port)
    nohup "$0" _serve "$PORT" >>"$LOG_FILE" 2>&1 &
    echo $! > "$PID_FILE"
    sleep 0.5
    echo "Фон: pid $(cat "$PID_FILE"), http://127.0.0.1:${PORT}/"
    if command -v open >/dev/null 2>&1; then
      open "http://127.0.0.1:${PORT}/"
    fi
    exit 0
    ;;
  _serve)
    serve_loop "${2:-8080}"
    ;;
  ""|run)
    PORT=$(pick_port)
    if command -v open >/dev/null 2>&1; then
      open "http://127.0.0.1:${PORT}/"
    fi
    serve_loop "$PORT"
    ;;
  *)
    echo "Использование: ./start.sh | ./start.sh --bg | ./start.sh stop | ./start.sh status"
    exit 1
    ;;
esac
