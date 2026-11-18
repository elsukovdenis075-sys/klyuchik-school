# Свой домен для сайта «Ключик»

Сайт — статика в `sites/klyuchik`, деплой через **GitHub Pages** (workflow `.github/workflows/klyuchik-pages.yml`).

Я **не могу купить домен за вас** (нужна оплата и аккаунт у регистратора). Могу настроить репозиторий и подсказать DNS — вы покупаете домен и вносите записи.

## 1. Выбрать и купить домен

Удобные регистраторы для РФ: [REG.RU](https://www.reg.ru), [Nic.ru](https://www.nic.ru), [Timeweb](https://timeweb.com), Cloudflare Registrar.

Идеи (проверьте свободность):

| Вариант | Зачем |
|---------|--------|
| `klyuchik-nn.ru` | бренд + город |
| `klyuchik-school.ru` | понятно родителям |
| `klyuchik.online` | дешевле, без «школа» в зоне |

Рекомендация: **`www.klyuchik-….ru`** на сайт, корень `@` — редирект на `www` (так проще с GitHub Pages).

## 2. Включить GitHub Pages (если ещё нет)

1. Репозиторий `call-copilot` на GitHub → **Settings** → **Pages**.
2. **Source:** GitHub Actions (уже есть workflow `Deploy Klyuchik site`).
3. Запустить деплой: push в `main` с изменениями в `sites/klyuchik/` или **Actions** → workflow → **Run workflow**.
4. Дождаться URL вида `https://<user>.github.io/<repo>/` — сайт должен открываться.

## 3. Привязать домен в GitHub

1. **Settings** → **Pages** → **Custom domain**.
2. Ввести, например: `www.klyuchik-nn.ru`.
3. GitHub предложит DNS-записи — не закрывайте эту страницу.

## 4. DNS у регистратора

Для поддомена **`www`** (рекомендуется):

| Тип | Имя | Значение |
|-----|-----|----------|
| CNAME | `www` | `<ваш-логин>.github.io` |

Для корня **`@`** (если нужен без www) — у GitHub в справке актуальные **A**-записи на IP Pages (часто 4 адреса `185.199.x.x`). Либо у регистратора «редирект @ → www».

Включите в GitHub **Enforce HTTPS** (после выпуска сертификата, обычно до 24 ч).

## 5. Файл CNAME в репозитории

После того как домен выбран, в корне сайта должен лежать файл:

```
sites/klyuchik/CNAME
```

С одной строкой (без `https://`):

```
www.klyuchik-nn.ru
```

Шаблон: `CNAME.example` → скопировать в `CNAME` и подставить свой домен.

Закоммитить и запушить — workflow задеплоит снова.

## 6. Обновить ссылки

1. `config.json` → `site.url`: `https://www.klyuchik-nn.ru/`
2. Закреп и меню Telegram: заменить `REPLACE_SITE_LINK`.
3. Проверить: открывается ли сайт, canonical в `<head>`, OG-теги.

## 7. Альтернатива без GitHub

**Netlify / Vercel / Timeweb** — publish directory: `sites/klyuchik`, там же привязка домена в панели (часто проще для `.ru`).

---

Когда купите домен — напишите точное имя (например `www.klyuchik-nn.ru`), можно добавить `CNAME` и `site.url` в конфиг в репозитории.
