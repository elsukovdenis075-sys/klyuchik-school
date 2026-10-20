# Архив фото из канала @klushikkk

**Правило:** посты в канале не удаляем, пока копии медиа не лежат здесь (или в облаке).

## Что уже сделано агентом

Скрипт `scripts/archive_channel_photos.py` декодирует `.b64` файлы в `.jpg`.

Файлы именуются по UUID blob из Telegram (или `photo-001.jpg` …).

## Добрать всё медиа вручную (100% надёжно)

### Telegram Desktop (рекомендуется)

1. Открой канал **Ключик** в Telegram Desktop.
2. ⋮ → **Export chat history**.
3. Формат: HTML или JSON, **с фото/файлами**.
4. Распакуй архив и скопируй **целиком** (и `photos/`, и `video_files/`, и остальное) сюда:  
   `sites/klyuchik/assets/archive-from-channel/desktop-export/`

### Облако (по желанию)

Залей папку `archive-from-channel` в Google Drive / Яндекс.Диск и дай маме ссылку «только чтение».

## После архива

Можно чистить канал по `telegram-pack/AUDIT-CLEANUP.md` и `CHANNEL-klushikkk-ACTIONS.md`.
