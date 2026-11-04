# Публикация сайта

## Ссылка для друзей

**`127.0.0.1` и `localhost` с телефона и у друзей не откроются** — это только ваш Mac.

- **Сейчас (временно):** см. `PUBLIC-URL.txt` или `./tunnel-public.sh` (пока Mac включён).
- **Навсегда:** `./publish-github.sh` → GitHub Pages (один раз `gh auth login`).

## Локальный просмотр

**Важно:** сервер только из папки `sites/klyuchik`, не из корня `call-copilot`.

```bash
cd sites/klyuchik
chmod +x start.sh
./start.sh          # в терминале (если упал — сам перезапустится)
./start.sh --bg     # в фоне: не падает при закрытии окна терминала
./start.sh status   # проверить URL
./start.sh stop     # остановить фон
```

Не открывайте `index.html` двойным кликом (адрес `file://`) — так часто ломаются пути и обновления.

Если порт занят: `start.sh` сам возьмёт 8081, 8082… Лог фона: `.server.log`.

## GitHub Pages (рекомендуется)

1. Заполните `config.json` (см. `INPUTS.md`).
2. В настройках репозитория: **Pages** → Source: **GitHub Actions** или папка `/docs` / `/sites/klyuchik` — проще всего:
   - Создайте ветку `gh-pages` только с содержимым `sites/klyuchik/`, или
   - Используйте action `peaceiris/actions-gh-pages` с `publish_dir: sites/klyuchik`.
3. Ссылку вида `https://USER.github.io/klyuchik/` вставьте в канал и в `telegram-pack` (REPLACE_SITE_LINK).

## GitHub Pages (сейчас)

Репозиторий: `klyuchik-school`  
Ссылка: `https://elsukovdenis075-sys.github.io/klyuchik-school/`  
Обновление: `./publish-github.sh klyuchik-school`

## Свой домен (не github.io)

Пошагово: **[DOMAIN.md](./DOMAIN.md)** — покупка домена, DNS, файл `CNAME`, HTTPS.

Кратко: купить домен → Pages → Custom domain → CNAME `www` → `ЛОГИН.github.io` → создать `sites/klyuchik/CNAME` → обновить `config.json` → `site.url`.

## После деплоя

1. Обновите закреп канала (`telegram-pack/01-pinned-post.md`).
2. Добавьте ссылку в меню канала (`02-menu-items.md`).
