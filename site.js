const PROGRAM_HOMEWORK =
  "Домашнее задание — закрепить изученный материал. Проверяем и даём обратную связь родителю.";

const PROGRAMS = [
  {
    icon: "🎒",
    title: "Подготовка к школе",
    age: "5–7 лет",
    lead: "Ирина Васильевна Елсукова",
    founder: true,
    format: "Группа до 6 чел., 2 раза в неделю, ~6 недель. Онлайн или очно (Н. Новгород).",
    when: "Перед 1 классом: трудно усидеть, слабое внимание; буквы знает, но к школе пока не готов.",
    do: "Внимание, рука, слух, игры — учимся учиться.",
  },
  {
    icon: "📖",
    title: "Осознанное чтение",
    age: "7–10 лет",
    lead: "Ирина Васильевна Елсукова",
    founder: true,
    format: "Индивидуально (группа по запросу). Онлайн или очно.",
    when: "Читает, но плохо понимает текст; путает слова; чтение даётся тяжело.",
    do: "Фонематический слух и понимание текста.",
  },
  {
    icon: "✍️",
    title: "Дисграфия и почерк",
    age: "8–11 лет",
    lead: "Ирина Васильевна Елсукова",
    founder: true,
    format: "Индивидуально. Онлайн или очно.",
    when: "Трудности с письмом: много ошибок, неразборчивый или корявый почерк.",
    do: "Разбор ошибок и тренировка руки.",
  },
  {
    icon: "⭐",
    title: "Репетитор 1–4 класс",
    age: "1–4 класс",
    lead: "Ирина Васильевна Елсукова",
    founder: true,
    format: "Индивидуально. Онлайн или очно.",
    when: "Возникают трудности с чтением, письмом или математикой.",
    do: "Подтягиваем школьную программу.",
  },
  {
    icon: "🎙️",
    title: "Школа оратора · радиоспектакли",
    age: "6–12 лет",
    lead: "Педагог команды",
    leadRole: "Направление в подготовке",
    coming: true,
    format: "Скоро: группа и индивидуально. Онлайн.",
    when: "Хочется уверенно говорить, играть голосом, участвовать в спектаклях.",
    do: "Дикция, интонация, радиоспектакли, запись сказок голосом «на ночь».",
  },
  {
    icon: "🔑",
    title: "Направление педагога",
    age: "уточним",
    lead: "Педагог команды",
    leadRole: "Слот для педагога",
    coming: true,
    format: "Скоро — после подключения педагога команды.",
    when: "Под запрос семьи и специализацию педагога.",
    do: "Карточку заполним, когда педагог присоединится к «Ключику».",
  },
];

const CHANNEL_URL = "https://t.me/klushikkk";

const REVIEWS = [
  {
    author: "Лидия Войник",
    topic: "Кубики Зайцева",
    lead: "Кубики Зайцева дали отличный результат",
    quote:
      "Школьные тетради чистые, без ошибок. Готовить ребёнка к школе — просто необходимо.",
    shot: "assets/reviews/post-66.jpg",
    shotPost: 66,
  },
  {
    author: "Мама ученицы",
    topic: "Подготовка к школе",
    lead: "Уверенно читает, пишет и считает",
    quote:
      "Пишет печатными буквами, считает до 20. Занятия в игре — интерес и мотивация сохранились.",
    shot: "assets/reviews/post-74.jpg",
    shotPost: 74,
  },
  {
    author: "Мама из канала «Ключик»",
    topic: "Атмосфера занятий",
    lead: "Спокойный педагог, понятные задания",
    quote:
      "Ребёнок не боится ошибиться — и это главное для нас.",
  },
  {
    author: "Родитель из канала",
    topic: "Лагерь «Нескучный»",
    lead: "Яркие эмоции, дети в восторге",
    quote:
      "Спасибо Ирине Васильевне за тепло, заботу и живой контакт с каждым.",
  },
  {
    author: "Мама первоклассника",
    topic: "Уверенность в школе",
    lead: "В школу пошёл спокойнее",
    quote:
      "За несколько месяцев домашние задания перестали быть борьбой каждый вечер.",
    beforeAfter: true,
  },
  {
    author: "Родитель из канала",
    topic: "Речь и чтение",
    lead: "Речь чище, чтение увереннее",
    quote:
      "Ирина объясняет спокойно: ребёнок не закрывается и охотно идёт в контакт.",
  },
];

const BEFORE_AFTER_STORIES = [
  {
    before: "Домашка каждый вечер со слезами",
    after: "15–20 минут спокойно, понятно что закрепить",
    note: "Мама первоклассника · канал «Ключик»",
  },
  {
    before: "Страх 1 класса и неуверенность",
    after: "Читает, считает, идёт в школу спокойнее",
    note: "Подготовка к школе · отзыв в канале",
  },
  {
    before: "Ошибки в тетради, ребёнок опустил руки",
    after: "Тетради чище, ребёнок не боится пробовать",
    note: "Чтение · Зайцев",
  },
];

const QUIZ_TOPIC_MAP = {
  school: { topic: "Подготовка к школе", direction: 0, title: "Подготовка к школе" },
  reading: { topic: "Чтение / понимание текста", direction: 1, title: "Осознанное чтение" },
  writing: { topic: "Дисграфия / почерк", direction: 2, title: "Дисграфия и почерк" },
  tutor: { topic: "Репетитор 1–4 класс", direction: 3, title: "Репетитор 1–4 класс" },
};

const FAQ_ITEMS = [
  {
    q: "Сколько длится диагностика?",
    a:
      "Обычно 40–50 минут: знакомство с ребёнком, задания по возрасту и короткая обратная связь Вам — что подтянуть и с чего начать. Без давления и «продажи в лоб».",
  },
  {
    q: "Онлайн или очно — что лучше?",
    a:
      "Зависит от ребёнка и Вашего графика. Онлайн — по всей России; очно — Н. Новгород, Приокский район. На диагностике обсудим оба варианта.",
  },
  {
    q: "Нужна ли подготовка «с нуля»?",
    a:
      "Нет. Важны возраст, Ваш запрос и настроение ребёнка. Подберём темп: от игр и внимания до букв, слогов и школьных тем.",
  },
  {
    q: "Проверяете ли домашнее задание?",
    a:
      "Да, по договорённости: задание даём дозированно, проверяем и разбираем ошибки. Родителю — понятная обратная связь, что поддержать дома 10–15 минут.",
  },
  {
    q: "Как оплачиваются занятия?",
    a:
      "Сначала диагностика уровня. Дальше группа «К школе» помесячно или индивидуально по занятиям. Способ оплаты уточним при записи — удобный для вас вариант.",
  },
  {
    q: "Где актуальные программы и набор?",
    a:
      "На этой странице — направления и тарифы. Актуальный набор и живые посты — в <a href=\"https://t.me/klushikkk\">Telegram</a> (и в Max, когда канал открыт).",
  },
  {
    q: "Занятия только у Ирины или есть другие педагоги?",
    a:
      "Занятия ведёт Ирина Васильевна Елсукова и педагоги команды «Ключик» — каждый со своей зоной, под единым стандартом. На диагностике заранее скажем, кто будет заниматься с Вашим ребёнком.",
  },
];

const DEFAULT_TEAM = [
  {
    name: "Ирина Васильевна Елсукова",
    role: "Основатель школы · ведёт занятия",
    photo: "assets/photos/irina-portrait-orange.jpg",
    focus: "Подготовка к школе, чтение, дисграфия, 1–4 класс",
    badge: "Основатель",
    founder: true,
  },
  {
    name: "Педагог команды",
    role: "Слот 1 · скоро",
    photo: "",
    focus: "Заполним завтра: имя, фото, направление, дипломы",
    badge: "Слот",
    open: true,
    slot: 1,
  },
  {
    name: "Педагог команды",
    role: "Слот 2 · скоро",
    photo: "",
    focus: "Заполним завтра: имя, фото, направление, дипломы",
    badge: "Слот",
    open: true,
    slot: 2,
  },
  {
    name: "Педагог команды",
    role: "Слот 3 · скоро",
    photo: "",
    focus: "Заполним завтра: имя, фото, направление, дипломы",
    badge: "Слот",
    open: true,
    slot: 3,
  },
];

const HERO_PHOTO = "assets/photos/irina-portrait-orange.jpg";

const DEFAULT_CHANNEL = {
  reviews: [66, 74],
  photos: [
    { file: "assets/photos/lesson-whiteboard.jpg", alt: "Занятие у магнитной доски" },
    { file: "assets/photos/lesson-boy-whiteboard.jpg", alt: "Примеры и счёт у доски" },
    { file: "assets/photos/lesson-girl-math.jpg", alt: "Математика в игровой форме" },
    { file: "assets/photos/play-rainbow-blocks.jpg", alt: "Развивающие игры: радуга и конструктор" },
    { file: "assets/photos/kids-autumn-whiteboard.jpg", alt: "Осенние задания с детьми" },
    { file: "assets/photos/graduation-diplomas.jpg", alt: "Праздник и дипломы выпускников" },
    { file: "assets/photos/zanyatie-01.jpg", alt: "Дети на занятии" },
    { file: "assets/photos/kids-porch.jpg", alt: "Дети на веранде лагеря" },
    { file: "assets/photos/holiday-event.jpg", alt: "Праздник с детьми" },
    { file: "assets/photos/kids-play.jpg", alt: "Дружная атмосфера" },
    { post: 77, file: "assets/channel/post-77.jpg", alt: "Нескучный лагерь" },
  ],
  reviewFiles: [
    { post: 66, file: "assets/channel/post-66.jpg" },
    { post: 74, file: "assets/channel/post-74.jpg" },
  ],
  videoItems: [
    {
      post: 86,
      file: "assets/media/video-86.mp4",
      title: "Наше увлекательное лето · лагерь и занятия",
    },
    {
      post: 94,
      file: "assets/media/video-mama.mp4",
      title: "Ирина рассказывает о школе «Ключик»",
    },
  ],
};

/** Работает и без сервера (file://), если config.json не подгрузился */
const DEFAULT_CONFIG = {
  teacher: {
    name: "Ирина Васильевна Елсукова",
    title: "Ирина Васильевна Елсукова",
  },
  brand: {
    tagline: "Найдём ключик к сердцу и уму Вашего ребёнка",
  },
  team: DEFAULT_TEAM,
  programs: PROGRAMS,
  contacts: {
    telegramChannel: "https://t.me/klushikkk",
    telegramContact: "@irina_elsukova_0",
    maxChannel: "",
    phone: "+7 (903) 043-67-63",
    phoneTel: "+79030436763",
    city: "Нижний Новгород",
    district: "Приокский район",
  },
  site: {
    url: "",
  },
  media: {
    heroPhoto: HERO_PHOTO,
    heroVideo: "assets/media/video-mama.mp4",
    heroVoiceClip: "assets/media/video-mama.mp4",
    heroVoiceMaxSeconds: 25,
    channel: DEFAULT_CHANNEL,
  },
  pricing: {
    diagnosticLesson: "1 199 ₽",
    diagnosticPromo: "999 ₽",
    individualPerHour: "1 199 ₽ / час",
    individualPromo: "999 ₽ / час",
    groupPerMonth: "5 999 ₽ / мес",
    groupPromo: "4 999 ₽ / мес",
    promoLabel: "Скидка октября",
    promoUntil: "2026-10-31",
    note: "В октябре — цены со скидкой. С 1 ноября действуют обычные тарифы.",
  },
  legal: {
    entityName: "REPLACE_ENTITY",
    inn: "REPLACE_INN",
    ogrnip: "REPLACE_OGRNIP",
    address: "REPLACE_ADDRESS",
    email: "REPLACE_EMAIL",
  },
  referral: {
    bonusSelf: "500 ₽",
    bonusFriend: "500 ₽",
    text: "Приведите друга: Вам и другу по 500 ₽ скидки на диагностику.",
  },
  trust: [
    { value: "до 6", label: "детей в группе" },
    { value: "999 ₽", label: "диагностика · октябрь" },
    { value: "онлайн", label: "и очно в НН" },
    { value: "5–11", label: "лет" },
  ],
  launch: {
    product: "Подготовка к школе",
    age: "5–7 лет",
    startDate: "ноябрь 2026",
    spots: 6,
    spotsLeft: 4,
    durationWeeks: 6,
    format: "онлайн и очно (Н. Новгород, Приокский район)",
  },
  credentials: [
    {
      file: "assets/credentials/diploma-ngpu-filologiya-1999.jpg",
      title: "Диплом НГПУ",
      caption: "Учитель русского языка и литературы · филология · 1999",
    },
    {
      file: "assets/credentials/cert-zaitsev-pyatibratova-2019.jpg",
      title: "Кубики Зайцева",
      caption: "Чтение 2–7 лет · методика Зайцева и Пятибратовой · 2019",
    },
    {
      file: "assets/credentials/cert-kineziomyachi-72h-2025.jpg",
      title: "Кинезиомячи",
      caption: "72 ч · нейропедагогика, мячи и мешочки · 2025",
    },
    {
      file: "assets/credentials/cert-neuropedagogy-72h-2025.jpg",
      title: "Нейропедагогика",
      caption: "72 ч · нейропедагогика в работе с детьми · 2025",
    },
    {
      file: "assets/credentials/cert-bulakh-mozgovaya-revolyuciya-2024.jpg",
      title: "Булах · мозговая революция",
      caption: "Вебинар «Мозговая революция» · новые подходы к обучению · 2024",
    },
    {
      file: "assets/credentials/cert-neuro-school-2025.jpg",
      title: "Готовность к школе",
      caption: "Диагностика готовности к школе · 2025",
    },
    {
      file: "assets/credentials/cert-eco-preschool-2022.jpg",
      title: "Дошкольники",
      caption: "Познавательное развитие дошкольников · 2022",
    },
    {
      file: "assets/credentials/cert-first-aid-2026.jpg",
      title: "Первая помощь",
      caption: "16 ч · Н. Новгород · 2026",
    },
    {
      file: "assets/credentials/cert-povyshenie-kvalifikacii-2026.jpg",
      title: "Повышение квалификации",
      caption: "Удостоверение · Нижний Новгород · 2026",
    },
    {
      file: "assets/credentials/cert-gratitude-crtdiyu-2025.jpg",
      title: "Благодарность ЦРТДиЮ",
      caption: "Педагог доп. образования · Н. Новгород · 2025",
    },
  ],
  forms: {
    googleFormUrl: "",
    googleFormAction: "",
    submitMode: "auto",
    googleEntryIds: {
      parent: "",
      contact: "",
      age: "",
      topic: "",
      format: "",
    },
  },
};

let signupFormsCfg = null;
let signupTgContact = "irina_elsukova_0";

function formsPlaceholder(value) {
  return !value || String(value).includes("REPLACE");
}

function resolveGoogleViewUrl(forms) {
  const url = forms?.googleFormUrl;
  if (formsPlaceholder(url)) return "";
  return String(url).trim();
}

function deriveGoogleFormAction(forms) {
  if (forms?.googleFormAction && !formsPlaceholder(forms.googleFormAction)) {
    return String(forms.googleFormAction).trim();
  }
  const view = resolveGoogleViewUrl(forms);
  const m = view.match(/forms\/d\/e\/([^/]+)/);
  if (m) return `https://docs.google.com/forms/d/e/${m[1]}/formResponse`;
  const m2 = view.match(/forms\/d\/([^/]+)/);
  if (m2) return `https://docs.google.com/forms/d/${m2[1]}/formResponse`;
  return "";
}

function googleEntryIdsReady(forms) {
  const ids = forms?.googleEntryIds;
  if (!ids) return false;
  return ["parent", "contact", "age", "topic", "format"].every(
    (k) => ids[k] && !formsPlaceholder(ids[k])
  );
}

function resolveSubmitMode(forms) {
  const mode = forms?.submitMode || "auto";
  const hasGoogle = Boolean(resolveGoogleViewUrl(forms));
  if (mode === "telegram") return "telegram";
  if (mode === "google") {
    if (!hasGoogle) return "telegram";
    return googleEntryIdsReady(forms) ? "google_post" : "google_link";
  }
  if (hasGoogle) return googleEntryIdsReady(forms) ? "google_post" : "google_link";
  return "telegram";
}

function buildGooglePrefillUrl(forms, payload) {
  const view = resolveGoogleViewUrl(forms);
  if (!view) return "";
  const base = view.split("?")[0];
  const ids = forms.googleEntryIds || {};
  const params = new URLSearchParams();
  params.set("usp", "pp_url");
  const map = {
    parent: payload.parent,
    contact: payload.contact,
    age: payload.age,
    topic: payload.topic,
    format: payload.format,
  };
  Object.entries(map).forEach(([key, val]) => {
    if (ids[key] && val) params.set(ids[key], val);
  });
  return `${base}?${params.toString()}`;
}

function submitGooglePost(forms, payload) {
  const action = deriveGoogleFormAction(forms);
  const ids = forms.googleEntryIds;
  if (!action || !ids) return false;
  const hidden = document.createElement("form");
  hidden.method = "POST";
  hidden.action = action;
  hidden.target = "google-form-target";
  hidden.style.display = "none";
  const fields = {
    parent: payload.parent,
    contact: payload.contact,
    age: payload.age,
    topic: payload.topic,
    format: payload.format,
  };
  Object.entries(fields).forEach(([key, val]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = ids[key];
    input.value = val;
    hidden.appendChild(input);
  });
  document.body.appendChild(hidden);
  hidden.submit();
  setTimeout(() => hidden.remove(), 3000);
  return true;
}

function showSignupSuccess() {
  const ok = el("signup-success");
  const form = el("signup-form");
  if (ok) ok.hidden = false;
  if (form) form.reset();
}

function updateSignupFormUi(forms, contactHandle) {
  signupFormsCfg = forms || {};
  signupTgContact = contactHandle || "irina_elsukova_0";
  const mode = resolveSubmitMode(signupFormsCfg);
  const googleUrl = resolveGoogleViewUrl(signupFormsCfg);
  const tg = tgUrl(signupTgContact);
  const note = el("form-note");
  const submitBtn = el("signup-submit-btn");
  const btnGoogle = el("btn-google-form");
  const btnContact = el("btn-contact");
  const lead = el("signup-lead");

  if (btnContact) btnContact.href = tg;

  // Google-форму не показываем в UI — только тихая отправка. Родителю: заявка + связь.
  if (btnGoogle) btnGoogle.hidden = true;

  if (lead) {
    lead.textContent =
      "Оставьте заявку на диагностику — свяжемся в ближайшее время. Или напишите / позвоните.";
  }

  if (submitBtn) {
    submitBtn.textContent = "Отправить заявку";
  }

  if (note) {
    note.textContent = "";
    note.hidden = true;
  }
}

function el(id) {
  return document.getElementById(id);
}

function renderPrograms(cfg) {
  const grid = el("programs-grid");
  if (!grid) return;
  let list = cfg?.programs?.length ? cfg.programs : PROGRAMS;
  if (document.body.classList.contains("page-funnel")) {
    list = list.filter((p) => !p.coming);
  }
  grid.className = "directions-rows";
  grid.innerHTML = list
    .map((p, i) => {
      const coming = !!p.coming;
      const stepLabel = coming ? "Скоро" : "Открыто";
      const cta = coming
        ? `<a class="btn btn--ghost btn--sm direction-row__cta" href="#signup">Узнать, когда откроем</a>`
        : `<a class="btn btn--primary btn--sm direction-row__cta" href="#signup">Запись на диагностику</a>`;
      const lead = p.lead
        ? `<p class="direction-row__lead">Педагог: <strong>${p.lead}</strong></p>`
        : "";
      return `<article class="direction-row direction-row--${i % 4}${coming ? " direction-row--coming" : ""}${p.founder ? " direction-row--founder" : ""} reveal-on-scroll">
        <div class="direction-row__head">
          <span class="direction-row__icon" aria-hidden="true">${p.icon || "🔑"}</span>
          <div>
            <span class="direction-row__badge">${stepLabel}</span>
            <h3 class="direction-row__title">${p.title}</h3>
            <p class="direction-row__age">${p.age || ""}</p>
          </div>
        </div>
        ${lead}
        <div class="direction-row__meta">
          <div class="direction-row__cell"><span>Формат</span><p>${p.format || ""}</p></div>
          <div class="direction-row__cell"><span>Кому подойдёт</span><p>${p.when || ""}</p></div>
          <div class="direction-row__cell"><span>Чем занимаемся</span><p>${p.do || ""}</p></div>
          ${coming ? "" : `<div class="direction-row__cell direction-row__cell--hw"><span>Домашнее задание</span><p>${p.homework || PROGRAM_HOMEWORK}</p></div>`}
        </div>
        <div class="direction-row__foot">${cta}</div>
      </article>`;
    })
    .join("");
}

function tgUrl(handle) {
  if (!handle) return "#";
  const h = handle.replace("@", "").trim();
  if (h.startsWith("http")) return h;
  return `https://t.me/${h}`;
}

function telegramPostEmbed(postUrl) {
  if (!postUrl || !postUrl.includes("t.me/")) return;
  const m = postUrl.match(/t\.me\/([^/]+)\/(\d+)/);
  if (!m) return;
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://telegram.org/js/telegram-widget.js?22";
  script.setAttribute("data-telegram-post", `${m[1]}/${m[2]}`);
  script.setAttribute("data-width", "100%");
  return script;
}

function mountPostEmbeds(containerId, postIds) {
  const box = el(containerId);
  if (!box || box.dataset.mounted === "1" || !postIds?.length) return;
  postIds.forEach((id) => {
    const wrap = document.createElement("div");
    wrap.className = "telegram-embed";
    const embed = telegramPostEmbed(`https://t.me/klushikkk/${id}`);
    if (embed) wrap.appendChild(embed);
    box.appendChild(wrap);
  });
  box.dataset.mounted = "1";
}

const FETCH_PROBE_MS = 4000;

async function fetchProbe(url, init) {
  const opts = { cache: "no-store", ...init };
  if (typeof AbortSignal !== "undefined" && AbortSignal.timeout) {
    opts.signal = AbortSignal.timeout(FETCH_PROBE_MS);
  }
  return fetch(url, opts);
}

async function fileExists(url) {
  if (!url) return false;
  if (window.location.protocol === "file:") return true;
  try {
    const res = await fetchProbe(url, { method: "HEAD" });
    if (res.ok) return true;
  } catch {
    /* HEAD иногда недоступен на хостинге — пробуем короткий GET */
  }
  try {
    const res = await fetchProbe(url, {
      method: "GET",
      headers: { Range: "bytes=0-1" },
    });
    return res.ok || res.status === 206;
  } catch {
    return false;
  }
}

async function renderVideos(cfg) {
  const box = el("video-host");
  const items = cfg.media?.channel?.videoItems || DEFAULT_CHANNEL.videoItems;
  if (!box || !items?.length) return;
  if (box.dataset.mounted === "1") return;
  box.dataset.mounted = "1";

  try {
    box.innerHTML = "";
    const usedFiles = new Set();

    for (const v of items) {
      if (v.file && usedFiles.has(v.file)) continue;

      const hasFile = v.file && (await fileExists(v.file));
      if (!hasFile) {
        console.warn("video missing on host", v.file);
        continue;
      }

      usedFiles.add(v.file);
      const wrap = document.createElement("div");
      wrap.className = "video-card";
      const fig = document.createElement("figure");
      const video = document.createElement("video");
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("width", "100%");
      const source = document.createElement("source");
      source.src = v.file;
      source.type = "video/mp4";
      video.appendChild(source);
      fig.appendChild(video);
      if (v.title) {
        const cap = document.createElement("figcaption");
        cap.textContent = v.title;
        fig.appendChild(cap);
      }
      wrap.appendChild(fig);
      box.appendChild(wrap);
      if (window.matchMedia("(max-width: 767px)").matches) break;
    }

    if (!box.children.length) {
      box.innerHTML =
        `<p class="reviews__hint">Видео не загрузилось. Откройте канал <a href="${CHANNEL_URL}">t.me/klushikkk</a>.</p>`;
    }
  } catch (err) {
    console.warn("video block", err);
    box.dataset.mounted = "0";
    box.innerHTML =
      `<p class="reviews__hint">Видео временно недоступно. Канал: <a href="${CHANNEL_URL}">t.me/klushikkk</a>.</p>`;
  }
}

function setupImageFallbacks() {
  const placeholder = "assets/placeholder.svg";
  document.querySelectorAll("img:not([data-no-fallback])").forEach((img) => {
    if (img.dataset.fallbackBound === "1") return;
    img.addEventListener("error", () => {
      if (!img.src.includes("placeholder.svg")) img.src = placeholder;
    });
    img.dataset.fallbackBound = "1";
  });
}

function mountChannelWidgets() {
  /* Отзывы — карточки на странице, без тяжёлых Telegram-виджетов */
}

function renderReviews() {
  const box = el("reviews-showcase");
  if (!box || box.dataset.mounted === "1") return;
  const funnel = document.body.classList.contains("page-funnel");
  const mobile = window.matchMedia("(max-width: 767px)").matches;
  const items = funnel ? REVIEWS.slice(0, 3) : mobile ? REVIEWS.slice(0, 4) : REVIEWS;
  const tilts = [-2.5, 1.8, -1.2, 2.4, -1.8, 1.5];
  box.innerHTML = items.map(
    (r, i) => {
      const shotBlock =
        r.shot
          ? `<a class="review-tile__shot" href="https://t.me/klushikkk/${r.shotPost || ""}" target="_blank" rel="noopener">
        <img src="${r.shot}" alt="Скрин отзыва из канала" loading="lazy" width="400" height="280" />
        <span class="review-tile__shot-label">Смотреть в канале →</span>
      </a>`
          : "";
      const lead = r.lead ? `<p class="review-tile__lead">${r.lead}</p>` : "";
      return `<article class="review-tile review-tile--polaroid reveal-on-scroll" style="--tilt:${tilts[i % tilts.length]}deg">
      <span class="review-tile__glow" aria-hidden="true"></span>
      <p class="review-tile__topic">${r.topic}</p>
      ${lead}
      <blockquote class="review-tile__quote"><span class="review-tile__mark" aria-hidden="true">«</span>${r.quote}<span class="review-tile__mark review-tile__mark--end" aria-hidden="true">»</span></blockquote>
      ${shotBlock}
      <footer class="review-tile__foot">
        <span class="review-tile__author">${r.author}</span>
      </footer>
    </article>`;
    }
  ).join("");
  box.dataset.mounted = "1";
}

function renderBeforeAfterStories() {
  const grid = el("stories-grid");
  if (!grid || grid.dataset.mounted === "1") return;
  grid.innerHTML = BEFORE_AFTER_STORIES.map(
    (s) => `<article class="story-card reveal-on-scroll">
      <div class="story-card__col story-card__col--before">
        <span class="story-card__label">Было</span>
        <p>${s.before}</p>
      </div>
      <div class="story-card__arrow" aria-hidden="true">→</div>
      <div class="story-card__col story-card__col--after">
        <span class="story-card__label">Стало</span>
        <p>${s.after}</p>
      </div>
      <p class="story-card__note">${s.note}</p>
    </article>`
  ).join("");
  grid.dataset.mounted = "1";
}

function renderTrustStats(items) {
  const box = el("hero-trust-stats");
  if (!box || !items?.length) return;
  box.innerHTML = items
    .map(
      (t) => `<div class="hero-stat">
        <span class="hero-stat__value">${t.value}</span>
        <span class="hero-stat__label">${t.label}</span>
      </div>`
    )
    .join("");
}

let quizState = { age: "", concern: "" };

function renderQuizPanel() {
  const panel = el("quiz-panel");
  if (!panel || panel.dataset.mounted === "1") return;
  panel.innerHTML = `
    <fieldset class="quiz__group">
      <legend>Возраст ребёнка</legend>
      <div class="quiz__options">
        <button type="button" class="quiz__opt" data-quiz="age" data-value="5-7">5–7 лет</button>
        <button type="button" class="quiz__opt" data-quiz="age" data-value="7-10">7–10 лет</button>
        <button type="button" class="quiz__opt" data-quiz="age" data-value="8-11">8–11 лет</button>
      </div>
    </fieldset>
    <fieldset class="quiz__group">
      <legend>Что волнует сейчас?</legend>
      <div class="quiz__options">
        <button type="button" class="quiz__opt" data-quiz="concern" data-value="school">Боится школы / готовность</button>
        <button type="button" class="quiz__opt" data-quiz="concern" data-value="reading">Чтение и понимание</button>
        <button type="button" class="quiz__opt" data-quiz="concern" data-value="writing">Почерк и ошибки</button>
        <button type="button" class="quiz__opt" data-quiz="concern" data-value="tutor">Школьная программа 1–4</button>
      </div>
    </fieldset>
    <p class="quiz__hint" id="quiz-hint">Выберите возраст и запрос — Ключик подскажет направление.</p>
    <button type="button" class="btn btn--primary quiz__submit" id="quiz-submit" disabled>Показать направление</button>`;
  panel.dataset.mounted = "1";

  panel.querySelectorAll(".quiz__opt").forEach((btn) => {
    btn.addEventListener("click", () => {
      const kind = btn.dataset.quiz;
      const val = btn.dataset.value;
      panel.querySelectorAll(`[data-quiz="${kind}"]`).forEach((b) => b.classList.remove("is-selected"));
      btn.classList.add("is-selected");
      quizState[kind] = val;
      const submit = el("quiz-submit");
      if (submit) submit.disabled = !(quizState.age && quizState.concern);
    });
  });

  el("quiz-submit")?.addEventListener("click", () => finishQuiz());
}

function finishQuiz() {
  const map = QUIZ_TOPIC_MAP[quizState.concern];
  if (!map) return;
  const result = el("quiz-result");
  const panel = el("quiz-panel");
  if (!result || !panel) return;

  result.hidden = false;
  result.innerHTML = `
    <div class="quiz__result-box reveal-on-scroll">
      <img class="quiz__mascot quiz__mascot--sm" src="assets/icons/key.svg" width="40" height="40" alt="" />
      <h3>Вам ближе: «${map.title}»</h3>
      <p>Мы подсветили карточку в разделе «Направления». Запишитесь на диагностику.</p>
      <div class="quiz__result-actions">
        <a class="btn btn--primary" href="#signup" id="quiz-goto-signup">Записаться</a>
        <a class="btn btn--ghost" href="#directions" id="quiz-goto-directions">Смотреть направление</a>
      </div>
    </div>`;

  const topicSelect = document.querySelector('#signup-form select[name="topic"]');
  if (topicSelect) topicSelect.value = map.topic;

  document.querySelectorAll(".direction-card").forEach((card) => card.classList.remove("direction-card--highlight"));
  const target = document.querySelector(`.direction-card--${map.direction}`);
  if (target) {
    target.classList.add("direction-card--highlight");
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  el("quiz-goto-signup")?.addEventListener("click", () => {
    el("signup")?.scrollIntoView({ behavior: "smooth" });
  });
}

async function setupHeroMedia(cfg) {
  const media = cfg.media || {};
  const videoEl = el("hero-video");
  const photo = el("hero-photo");
  const videoSrc = media.heroVideo;
  const preferPhoto = window.matchMedia("(max-width: 767px)").matches;

  if (videoEl && videoSrc && !preferPhoto) {
    const ok = await fileExists(videoSrc);
    if (ok) {
      videoEl.src = videoSrc;
      videoEl.hidden = false;
      if (photo) photo.classList.add("hero__photo--under-video");
      videoEl.addEventListener("loadeddata", () => {
        videoEl.play().catch(() => {});
      });
    }
  }

  const voiceBtn = el("hero-voice-btn");
  const voiceClip = el("hero-voice-clip");
  const voiceSrc = media.heroVoiceClip || media.heroVideo;
  const maxSec = media.heroVoiceMaxSeconds || 25;
  if (voiceBtn && voiceClip && voiceSrc && !preferPhoto) {
    const ok = await fileExists(voiceSrc);
    if (ok) {
      voiceBtn.hidden = false;
      voiceClip.src = voiceSrc;
      let voiceTimer;
      voiceBtn.addEventListener("click", () => {
        if (voiceClip.paused) {
          voiceClip.currentTime = 0;
          voiceClip.play().catch(() => {});
          voiceBtn.textContent = "⏸ Пауза";
          clearTimeout(voiceTimer);
          voiceTimer = setTimeout(() => {
            voiceClip.pause();
            voiceBtn.innerHTML = '<span aria-hidden="true">🎧</span> Послушать Ирину';
          }, maxSec * 1000);
        } else {
          voiceClip.pause();
          voiceBtn.innerHTML = '<span aria-hidden="true">🎧</span> Послушать Ирину';
          clearTimeout(voiceTimer);
        }
      });
    }
  }
}

function setupScrollKey() {
  const fill = el("scroll-key-fill");
  if (!fill) return;
  const onScroll = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const p = max > 0 ? (window.scrollY / max) * 100 : 0;
    fill.style.width = `${Math.min(100, p)}%`;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function setupStickyCta() {
  const bar = el("sticky-cta");
  const signup = el("signup");
  if (!bar || !signup || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        bar.classList.toggle("sticky-cta--hidden", e.isIntersecting);
      });
    },
    { threshold: 0.15 }
  );
  io.observe(signup);
}

function updateSchemaOrg(cfg) {
  const node = el("schema-local-business");
  if (!node) return;
  try {
    const data = JSON.parse(node.textContent);
    const c = cfg.contacts || {};
    if (cfg.site?.url) data.url = cfg.site.url;
    if (c.city) data.areaServed = c.city;
    if (c.phoneTel) data.telephone = c.phoneTel;
    node.textContent = JSON.stringify(data);
  } catch {
    /* ignore */
  }
}

function renderFaq() {
  const list = el("faq-list");
  if (!list || list.dataset.mounted === "1") return;
  const mobile = window.matchMedia("(max-width: 767px)").matches;
  const items = mobile ? FAQ_ITEMS.slice(0, 4) : FAQ_ITEMS;
  list.innerHTML = items.map(
    (item) => `
    <article class="faq-card">
      <h3 class="faq-card__q">${item.q}</h3>
      <p class="faq-card__a">${item.a}</p>
    </article>`
  ).join("");
  list.dataset.mounted = "1";
}

function isPromoActive(p) {
  const until = p?.promoUntil;
  if (!until) return false;
  const end = new Date(`${until}T23:59:59`);
  if (Number.isNaN(end.getTime())) return false;
  return Date.now() <= end.getTime();
}

function priceHtml(regular, promo, p) {
  if (isPromoActive(p) && promo) {
    return `<span class="price-card__was">${regular}</span><span class="price-card__sum">${promo}</span>`;
  }
  return `<span class="price-card__sum">${regular}</span>`;
}

function activePrice(regular, promo, p) {
  return isPromoActive(p) && promo ? promo : regular;
}

function renderPricingCards(p) {
  const diagReg = p.diagnosticLesson || "1 199 ₽";
  const diagPromo = p.diagnosticPromo || "";
  const groupReg = p.groupPerMonth || "5 999 ₽ / мес";
  const groupPromo = p.groupPromo || "";
  const indReg = p.individualPerHour || "1 199 ₽ / час";
  const indPromo = p.individualPromo || "";
  const chip =
    isPromoActive(p) && p.promoLabel
      ? `<span class="price-card__promo">${p.promoLabel}</span>`
      : "";
  return `
    <article class="price-card price-card--diag price-card--accent price-card--ticket">
      ${chip}
      <span class="price-card__emoji" aria-hidden="true">📋</span>
      <strong>Диагностика уровня</strong>
      ${priceHtml(diagReg, diagPromo, p)}
      <ul class="price-card__features">
        <li>По направлению: к школе, чтение, письмо или 1–4 класс</li>
        <li>Понятный вывод: что уже ок и что подтянуть</li>
        <li>Рекомендация формата: группа или индивидуально</li>
      </ul>
      <p class="price-card__who"><strong>Кому:</strong> не знаете, с чего начать / хотите ясность до покупки курса</p>
    </article>
    <article class="price-card price-card--group price-card--ticket">
      ${chip}
      <span class="price-card__emoji" aria-hidden="true">👫</span>
      <strong>Группа «К школе»</strong>
      ${priceHtml(groupReg, groupPromo, p)}
      <ul class="price-card__features">
        <li>До 6 детей · 5–7 лет · 2 раза в неделю · ~6 недель</li>
        <li>Внимание, рука, буквы и счёт — в игре</li>
        <li>Домашнее задание на закрепление + обратная связь родителю</li>
      </ul>
      <p class="price-card__who"><strong>Кому:</strong> дошкольник 5–7 лет, нужна компания сверстников и ритм</p>
    </article>
    <article class="price-card price-card--ind price-card--ticket">
      ${chip}
      <span class="price-card__emoji" aria-hidden="true">🎯</span>
      <strong>Индивидуально</strong>
      ${priceHtml(indReg, indPromo, p)}
      <ul class="price-card__features">
        <li>Чтение, письмо или 1–4 класс — под Ваш запрос</li>
        <li>План и темп под Вашего ребёнка</li>
        <li>Домашнее задание на закрепление + обратная связь после занятия</li>
      </ul>
      <p class="price-card__who"><strong>Кому:</strong> свой темп, стыд за ошибки в группе, узкий запрос</p>
    </article>
  `;
}

function renderPriceCompare(p) {
  const diag = activePrice(p.diagnosticLesson || "1 199 ₽", p.diagnosticPromo, p);
  const group = activePrice(p.groupPerMonth || "5 999 ₽ / мес", p.groupPromo, p);
  const ind = activePrice(p.individualPerHour || "1 199 ₽ / час", p.individualPromo, p);
  return `
    <div class="price-compare__scroll">
      <table class="price-compare__table">
        <thead>
          <tr>
            <th></th>
            <th>Диагностика</th>
            <th>Группа</th>
            <th>Индив</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Цена сейчас</th>
            <td>${diag}</td>
            <td>${group}</td>
            <td>${ind}</td>
          </tr>
          <tr>
            <th scope="row">Кому</th>
            <td>Старт, ясность</td>
            <td>5–7 лет к школе</td>
            <td>Свой темп / узкий запрос</td>
          </tr>
          <tr>
            <th scope="row">Формат</th>
            <td>1 встреча</td>
            <td>2× в неделю</td>
            <td>По записи</td>
          </tr>
        </tbody>
      </table>
    </div>`;
}

function renderTeam(cfg) {
  const grid = el("team-grid");
  const items = cfg.team?.length ? cfg.team : DEFAULT_TEAM;
  if (!grid) return;
  grid.innerHTML = items
    .map((t) => {
      const open = t.open;
      const photo = t.photo || "assets/placeholder.svg";
      const badge = t.badge
        ? `<span class="team-card__badge${t.founder ? " team-card__badge--founder" : ""}${open ? " team-card__badge--open" : ""}">${t.badge}</span>`
        : "";
      return `<article class="team-card reveal-on-scroll${open ? " team-card--open" : ""}${t.founder ? " team-card--founder" : ""}">
        ${badge}
        <div class="team-card__photo-wrap">
          ${
            open
              ? `<div class="team-card__photo team-card__photo--placeholder" aria-hidden="true">🔑</div>`
              : `<img class="team-card__photo" src="${photo}" alt="${t.name || "Педагог"}" width="200" height="200" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='assets/placeholder.svg';" />`
          }
        </div>
        <h3 class="team-card__name">${t.name || ""}</h3>
        <p class="team-card__role">${t.role || ""}</p>
        <p class="team-card__focus">${t.focus || ""}</p>
        ${
          open
            ? `<span class="team-card__soon">Заполним профиль педагога</span>`
            : `<a class="team-card__link" href="#signup">Запись на диагностику</a>`
        }
      </article>`;
    })
    .join("");
}

function openCredential(src, title, caption) {
  if (!src) return;
  openDaisyLightbox({
    src,
    alt: `${title || "Документ"}${caption ? " — " + caption : ""}`,
  });
}

function renderCredentials(cfg) {
  const grid = el("credentials-grid");
  const items = cfg.credentials;
  if (!grid || !items?.length) return;

  const list = items.filter((c) => c && c.file);
  const useKeyring = grid.classList.contains("keyring") || grid.closest(".trust-strip");

  if (useKeyring) {
    const count = list.length;
    grid.classList.add("keyring");
    grid.innerHTML = `
      <div class="keyring__stage" style="--key-count:${count}">
        <div class="keyring__ring" aria-hidden="true"></div>
        <div class="keyring__core" aria-hidden="true">🔑</div>
        ${list
          .map((c, i) => {
            const angle = (360 / count) * i - 90;
            const title = String(c.title || "Документ");
            const cap = String(c.caption || "");
            const file = String(c.file);
            return `<button type="button" class="keyring__medal" style="--angle:${angle}deg;--i:${i};z-index:${10 + i}" data-src="${file.replace(/"/g, "&quot;")}" data-alt="${title.replace(/"/g, "&quot;")}" data-cap="${cap.replace(/"/g, "&quot;")}" aria-label="Открыть: ${title.replace(/"/g, "&quot;")}">
              <img src="${file}" alt="" loading="eager" decoding="async" width="72" height="72" onerror="this.onerror=null;this.src='assets/placeholder.svg';" />
              <span class="keyring__label">${title.replace(/</g, "&lt;")}</span>
            </button>`;
          })
          .join("")}
      </div>
      <ul class="keyring__list">
        ${list
          .map((c) => {
            const title = String(c.title || "Документ");
            const cap = String(c.caption || "");
            const file = String(c.file);
            return `<li><button type="button" class="keyring__list-btn" data-src="${file.replace(/"/g, "&quot;")}" data-alt="${title.replace(/"/g, "&quot;")}" data-cap="${cap.replace(/"/g, "&quot;")}">${title.replace(/</g, "&lt;")}</button></li>`;
          })
          .join("")}
      </ul>`;

    const openFromBtn = (btn) => {
      openCredential(btn.getAttribute("data-src"), btn.getAttribute("data-alt"), btn.getAttribute("data-cap"));
    };
    grid.querySelectorAll(".keyring__medal, .keyring__list-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        openFromBtn(btn);
      });
    });
    bindDaisyLightbox();
    return;
  }

  const tilts = [-4, 2.5, -2];
  grid.innerHTML = list
    .map(
      (c, i) => `<figure class="credential-card reveal-on-scroll" style="--cred-tilt:${tilts[i % tilts.length]}deg">
      <span class="credential-card__clip" aria-hidden="true"></span>
      <span class="credential-card__medal" aria-hidden="true">🏅</span>
      <button type="button" class="credential-card__link" data-src="${String(c.file).replace(/"/g, "&quot;")}" data-alt="${String(c.title || "").replace(/"/g, "&quot;")}" data-cap="${String(c.caption || "").replace(/"/g, "&quot;")}">
        <img src="${c.file}" alt="${c.title || "Документ"}" loading="eager" width="400" height="560" onerror="this.onerror=null;this.src='assets/placeholder.svg';" />
      </button>
      <figcaption>
        <strong>${c.title || ""}</strong>
        ${c.caption ? `<span>${c.caption}</span>` : ""}
      </figcaption>
    </figure>`
    )
    .join("");
  grid.querySelectorAll(".credential-card__link").forEach((btn) => {
    btn.addEventListener("click", () => {
      openCredential(btn.getAttribute("data-src"), btn.getAttribute("data-alt"), btn.getAttribute("data-cap"));
    });
  });
  bindDaisyLightbox();
}

const DAISY_PETAL_COLORS = [
  "#ff6b9d",
  "#ffe66d",
  "#4ecdc4",
  "#c9b6ff",
  "#a8e6ff",
  "#ff8a65",
  "#b8f5e8",
  "#ffc93c",
  "#e84d87",
  "#2fb8ae",
  "#f5a623",
];

let daisyLightboxBound = false;

let lightboxScrollY = 0;

function openDaisyLightbox({ src, alt, post }) {
  const root = el("daisy-lightbox");
  const img = el("daisy-lightbox-img");
  const cap = el("daisy-lightbox-caption");
  const tg = el("daisy-lightbox-tg");
  if (!root || !img || !cap || !src) return;
  bindDaisyLightbox();
  img.onerror = () => {
    img.onerror = null;
    img.src = "assets/placeholder.svg";
    cap.textContent = `${alt || "Фото"} (файл не загрузился — напишите нам)`;
  };
  img.src = src;
  img.alt = alt || "";
  cap.textContent = alt || "";
  if (tg) {
    if (post) {
      tg.href = `https://t.me/klushikkk/${post}`;
      tg.hidden = false;
    } else {
      tg.hidden = true;
    }
  }
  lightboxScrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${lightboxScrollY}px`;
  document.body.style.width = "100%";
  root.removeAttribute("hidden");
  root.setAttribute("aria-hidden", "false");
  document.body.classList.add("daisy-lightbox-open");
  requestAnimationFrame(() => el("daisy-lightbox-close")?.focus());
}

function closeDaisyLightbox() {
  const root = el("daisy-lightbox");
  if (!root || root.hasAttribute("hidden")) return;
  root.setAttribute("hidden", "");
  root.setAttribute("aria-hidden", "true");
  document.body.classList.remove("daisy-lightbox-open");
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  window.scrollTo(0, lightboxScrollY);
  const img = el("daisy-lightbox-img");
  if (img) img.src = "";
}

function bindDaisyLightbox() {
  if (daisyLightboxBound) return;
  daisyLightboxBound = true;
  el("daisy-lightbox-close")?.addEventListener("click", closeDaisyLightbox);
  el("daisy-lightbox-backdrop")?.addEventListener("click", closeDaisyLightbox);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDaisyLightbox();
  });
}

function openPhotoFromDataset(node) {
  if (!node) return;
  const src = node.getAttribute("data-src") || node.dataset.src;
  if (!src) return;
  openDaisyLightbox({
    src,
    alt: node.getAttribute("data-alt") || node.dataset.alt || "",
    post: node.dataset.post ? Number(node.dataset.post) : undefined,
  });
}

function renderPhotoGallery(cfg) {
  const root = el("photo-gallery");
  const thumbs = el("photo-thumbs");
  const photos = cfg.media?.channel?.photos;
  if (!photos?.length) return;

  const centerSrc = cfg.media?.heroPhoto || HERO_PHOTO;
  const count = photos.length;

  if (root) {
    const petals = photos
      .map((p, i) => {
        const alt = p.alt || "Фото с занятий";
        const color = DAISY_PETAL_COLORS[i % DAISY_PETAL_COLORS.length];
        const angle = (360 / count) * i - 90;
        const src = String(p.file).replace(/"/g, "&quot;");
        const altEsc = alt.replace(/"/g, "&quot;");
        const postAttr = p.post ? ` data-post="${p.post}"` : "";
        return `<button type="button" class="daisy-petal" style="--angle:${angle}deg;--petal-color:${color};--i:${i}" data-src="${src}" data-alt="${altEsc}"${postAttr} aria-label="Открыть фото: ${altEsc}">
        <span class="daisy-petal__stem" aria-hidden="true"></span>
        <span class="daisy-petal__shape">
          <img class="daisy-petal__thumb" src="${src}" alt="" loading="lazy" decoding="async" width="96" height="144" />
        </span>
        <span class="daisy-petal__tap" aria-hidden="true">+</span>
      </button>`;
      })
      .join("");

    root.classList.add("daisy-gallery--alive");
    root.innerHTML = `
    <div class="daisy-gallery__aura" aria-hidden="true"></div>
    <div class="daisy-gallery__stage" style="--petal-count:${count}">
      <div class="daisy-gallery__grass" aria-hidden="true"></div>
      <div class="daisy-gallery__sparkles" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
      ${petals}
      <button type="button" class="daisy-gallery__center" data-src="${String(photos[0].file).replace(/"/g, "&quot;")}" data-alt="${String(photos[0].alt || "Фото с занятий").replace(/"/g, "&quot;")}" aria-label="Открыть фото">
        <div class="daisy-gallery__center-disc" aria-hidden="true"></div>
        <img class="daisy-gallery__center-photo" src="${centerSrc}" alt="Ирина Васильевна Елсукова" width="128" height="128" decoding="async" onerror="this.onerror=null;this.src='assets/placeholder.svg';" />
      </button>
    </div>`;

    root.onclick = (e) => {
      const btn = e.target.closest(".daisy-petal, .daisy-gallery__center");
      if (!btn || !root.contains(btn)) return;
      e.preventDefault();
      openPhotoFromDataset(btn);
    };
  }

  if (thumbs) {
    thumbs.innerHTML = photos
      .map((p) => {
        const alt = p.alt || "Фото с занятий";
        const src = String(p.file).replace(/"/g, "&quot;");
        const altEsc = alt.replace(/"/g, "&quot;");
        const postAttr = p.post ? ` data-post="${p.post}"` : "";
        return `<button type="button" class="photo-thumbs__btn" data-src="${src}" data-alt="${altEsc}"${postAttr} aria-label="${altEsc}">
          <img src="${src}" alt="" loading="lazy" decoding="async" width="160" height="120" onerror="this.onerror=null;this.src='assets/placeholder.svg';" />
        </button>`;
      })
      .join("");
    thumbs.onclick = (e) => {
      const btn = e.target.closest(".photo-thumbs__btn");
      if (!btn || !thumbs.contains(btn)) return;
      e.preventDefault();
      openPhotoFromDataset(btn);
    };
  }

  bindDaisyLightbox();
}

function renderReviewShots(cfg) {
  const box = el("reviews-shots");
  const items = cfg.media?.channel?.reviewFiles;
  if (!box || !items?.length) return;
  box.innerHTML = items
    .map(
      (r) => `<a class="review-shot" href="https://t.me/klushikkk/${r.post}" target="_blank" rel="noopener">
        <img src="${r.file}" alt="Отзыв родителя" loading="lazy" />
      </a>`
    )
    .join("");
}

function revealNodeIfInView(node) {
  const vh = window.innerHeight || document.documentElement.clientHeight;
  const rect = node.getBoundingClientRect();
  if (rect.top < vh * 0.9 && rect.bottom > vh * 0.05) {
    node.classList.add("is-visible");
    return true;
  }
  return false;
}

function setupRevealOnScroll() {
  const nodes = document.querySelectorAll(".reveal-on-scroll:not(.is-visible)");
  if (!nodes.length) return;

  const show = (node) => node.classList.add("is-visible");

  if (!("IntersectionObserver" in window)) {
    nodes.forEach(show);
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          show(entry.target);
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
  );

  nodes.forEach((node) => {
    if (!revealNodeIfInView(node)) io.observe(node);
  });

  requestAnimationFrame(() => {
    document.querySelectorAll(".reveal-on-scroll:not(.is-visible)").forEach((node) => {
      if (revealNodeIfInView(node)) io.unobserve(node);
    });
  });
}

function setupNav() {
  const toggle = el("nav-toggle");
  const nav = el("site-nav");
  const backdrop = el("nav-backdrop");
  if (!toggle || !nav) return;

  let scrollLockY = 0;
  const isMobileNav = () => window.matchMedia("(max-width: 860px)").matches;

  const setNavInteractive = (interactive) => {
    try {
      if (interactive) nav.removeAttribute("inert");
      else nav.setAttribute("inert", "");
    } catch {
      /* старые WebView без inert */
    }
    nav.setAttribute("aria-hidden", interactive ? "false" : "true");
  };

  /** На десктопе меню всегда кликабельно; inert только у закрытого мобильного drawer */
  const syncNavAccess = () => {
    if (!isMobileNav()) {
      setNavInteractive(true);
      return;
    }
    setNavInteractive(document.body.classList.contains("nav-open"));
  };

  const close = () => {
    document.body.classList.remove("nav-open");
    document.body.style.top = "";
    document.body.style.position = "";
    document.body.style.width = "";
    window.scrollTo(0, scrollLockY);
    toggle.setAttribute("aria-expanded", "false");
    if (backdrop) backdrop.setAttribute("hidden", "");
    syncNavAccess();
  };

  const open = () => {
    scrollLockY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollLockY}px`;
    document.body.style.width = "100%";
    document.body.classList.add("nav-open");
    toggle.setAttribute("aria-expanded", "true");
    if (backdrop) backdrop.removeAttribute("hidden");
    syncNavAccess();
  };

  syncNavAccess();
  window.addEventListener("resize", syncNavAccess, { passive: true });

  toggle.addEventListener("click", () => {
    if (document.body.classList.contains("nav-open")) close();
    else open();
  });

  if (backdrop) backdrop.addEventListener("click", close);

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href") || "";
      if (href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        if (isMobileNav()) close();
        const go = () => {
          scrollToHashTarget(href);
          if (history.replaceState) history.replaceState(null, "", href);
        };
        /* После закрытия drawer на iOS даём телу вернуться из position:fixed */
        if (isMobileNav()) setTimeout(go, 60);
        else go();
      } else if (isMobileNav()) {
        close();
      }
    });
  });
}

function setupSignupForm() {
  const form = el("signup-form");
  if (!form || form.dataset.bound === "1") return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const payload = {
      parent: String(data.get("parent") || "").trim(),
      contact: String(data.get("contact") || "").trim(),
      age: String(data.get("age") || "").trim(),
      topic: String(data.get("topic") || "").trim(),
      format: String(data.get("format") || "").trim(),
      consent: data.get("consent") === "on" || data.get("consent") === "true",
    };

    if (
      !payload.parent ||
      !payload.contact ||
      !payload.age ||
      !payload.topic ||
      !payload.format ||
      !form.querySelector('[name="consent"]')?.checked
    ) {
      form.reportValidity();
      return;
    }

    const forms = signupFormsCfg || {};
    const mode = resolveSubmitMode(forms);
    const tg = tgUrl(signupTgContact);

    if (mode === "google_post") {
      if (submitGooglePost(forms, payload)) {
        showSignupSuccess();
        return;
      }
    }

    if (mode === "google_link" || mode === "google_post") {
      const prefill = buildGooglePrefillUrl(forms, payload);
      const openUrl = prefill || resolveGoogleViewUrl(forms);
      if (openUrl) {
        window.open(openUrl, "_blank", "noopener");
        return;
      }
    }

    const text = [
      "Заявка с сайта Ключик",
      "",
      `Имя: ${payload.parent}`,
      `Связь: ${payload.contact}`,
      `Возраст ребёнка: ${payload.age}`,
      `Запрос: ${payload.topic}`,
      `Формат: ${payload.format}`,
    ].join("\n");
    window.open(`${tg}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  });
  form.dataset.bound = "1";
}

function setupMagnetForm() {
  const form = el("magnet-form");
  if (!form || form.dataset.bound === "1") return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const parent = String(data.get("parent") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    if (!parent || !contact || !form.querySelector('[name="consent"]')?.checked) {
      form.reportValidity();
      return;
    }
    const tg = tgUrl(signupTgContact || "irina_elsukova_0");
    const text = [
      "Чек-лист «Готов ли к 1 классу» — заявка с сайта Ключик",
      "",
      `Имя: ${parent}`,
      `Связь: ${contact}`,
    ].join("\n");
    window.open(`${tg}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    const ok = el("magnet-success");
    if (ok) ok.hidden = false;
    form.reset();
  });
  form.dataset.bound = "1";
}

function setupNpsForm() {
  const form = el("nps-form");
  if (!form || form.dataset.bound === "1") return;
  const input = el("nps-score-input");
  const submit = el("nps-submit");
  form.querySelectorAll(".nps-score").forEach((btn) => {
    btn.addEventListener("click", () => {
      form.querySelectorAll(".nps-score").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      if (input) input.value = btn.dataset.score || "";
      if (submit) submit.disabled = !input?.value;
    });
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const score = String(data.get("score") || "").trim();
    if (!score) return;
    const comment = String(data.get("comment") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const tg = tgUrl(signupTgContact || "irina_elsukova_0");
    const text = [
      "NPS / обратная связь с сайта Ключик",
      "",
      `Оценка: ${score}/10`,
      comment ? `Комментарий: ${comment}` : "",
      contact ? `Связь: ${contact}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`${tg}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    const ok = el("nps-success");
    if (ok) ok.hidden = false;
  });
  form.dataset.bound = "1";
}

function setupReferral(cfg) {
  const textNode = el("referral-text");
  const ref = cfg?.referral || DEFAULT_CONFIG.referral || {};
  if (textNode && ref.text) textNode.textContent = ref.text;

  const copyBtn = el("btn-referral-copy");
  if (copyBtn && copyBtn.dataset.bound !== "1") {
    copyBtn.addEventListener("click", async () => {
      const url =
        cfg?.site?.customDomain ||
        cfg?.site?.url ||
        window.location.origin + window.location.pathname.replace(/[^/]*$/, "");
      const share = `${url}`.replace(/\/?$/, "/");
      try {
        await navigator.clipboard.writeText(share);
        const hint = el("referral-copied");
        if (hint) {
          hint.hidden = false;
          setTimeout(() => {
            hint.hidden = true;
          }, 2500);
        }
      } catch {
        window.prompt("Скопируйте ссылку:", share);
      }
    });
    copyBtn.dataset.bound = "1";
  }
}

function applyLegal(cfg) {
  const legal = cfg?.legal || {};
  const isPlaceholder = (v) => !v || String(v).includes("REPLACE");
  const entity = legal.entityName;
  const inn = legal.inn;
  const ogrn = legal.ogrnip;
  const address = legal.address;
  const email = legal.email;

  const map = {
    "legal-entity": entity,
    "legal-inn": inn,
    "legal-ogrn": ogrn,
    "legal-address": address,
    "legal-email": email,
  };
  Object.entries(map).forEach(([id, val]) => {
    const node = el(id);
    if (node && !isPlaceholder(val)) node.textContent = val;
  });

  const footerLegal = el("footer-legal");
  if (footerLegal) {
    if (!isPlaceholder(entity) && !isPlaceholder(inn)) {
      footerLegal.textContent = `${entity} · ИНН ${inn}${
        !isPlaceholder(ogrn) ? ` · ${ogrn}` : ""
      }`;
    } else {
      footerLegal.textContent = "Реквизиты появятся после карточки предприятия";
    }
  }
}

function applyConfig(cfg) {
  if (!cfg || typeof cfg !== "object") return;
  const c = cfg.contacts || {};
  const p = cfg.pricing || {};
  const l = cfg.launch || {};
  const b = cfg.brand || {};
  const t = cfg.teacher || {};
  const site = cfg.site || {};

  if (b.tagline && el("hero-title")) el("hero-title").textContent = b.tagline;
  const heroEyebrow = el("hero-eyebrow");
  if (heroEyebrow) {
    // Коротко: бренд. Роль — в стикере и в 1–2 фразах под заголовком, без дублей.
    heroEyebrow.textContent = "Онлайн-школа «Ключик»";
  }
  const footerName = el("footer-name");
  if (t.name && footerName) footerName.textContent = t.name;

  let cityLine = "";
  if (c.city && c.city !== "REPLACE_ME") {
    cityLine = `${c.city}`;
    if (c.district) cityLine += `, ${c.district}`;
    cityLine += " · онлайн по России";
  }
  if (el("hero-city")) el("hero-city").textContent = cityLine;

  const localText = el("local-nn-text");
  if (localText && c.city && c.district) {
    localText.textContent = `${c.district}, ${c.city} · или онлайн по всей России.`;
  }

  renderTrustStats(cfg.trust || DEFAULT_CONFIG.trust);

  const channel = tgUrl(c.telegramChannel || "https://t.me/klushikkk");
  const contact = tgUrl(c.telegramContact || "irina_elsukova_0");
  const maxChannel =
    c.maxChannel && !String(c.maxChannel).includes("REPLACE")
      ? String(c.maxChannel).trim()
      : "";

  ["btn-telegram", "btn-channel", "reviews-channel-link", "nav-telegram"].forEach((id) => {
    const node = el(id);
    if (node) node.href = channel;
  });

  const fc = el("footer-channel");
  if (fc) fc.href = channel;

  ["nav-max", "btn-max", "footer-max"].forEach((id) => {
    const node = el(id);
    if (!node) return;
    if (maxChannel) {
      node.href = maxChannel;
      node.hidden = false;
    } else {
      node.hidden = true;
    }
  });
  ["footer-max-sep", "hero-max-sep"].forEach((id) => {
    const sep = el(id);
    if (sep) sep.hidden = !maxChannel;
  });

  const custom =
    site.customDomain && !String(site.customDomain).includes("REPLACE")
      ? site.customDomain
      : "";
  const siteUrl =
    custom ||
    (site.url && !String(site.url).includes("REPLACE") ? site.url : "");
  const footerSite = el("footer-site");
  if (footerSite) {
    if (siteUrl) {
      footerSite.href = siteUrl;
      footerSite.textContent = "Сайт";
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = siteUrl;
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (!ogUrl) {
        const m = document.createElement("meta");
        m.setAttribute("property", "og:url");
        m.content = siteUrl;
        document.head.appendChild(m);
      } else ogUrl.content = siteUrl;
    } else {
      footerSite.hidden = true;
    }
  }

  ["btn-hero-signup", "btn-launch", "btn-pricing-signup", "sticky-signup"].forEach((id) => {
    const node = el(id);
    if (node) node.href = "#signup";
  });

  const btnContact = el("btn-contact");
  if (btnContact) btnContact.href = contact;

  const launchTitle = el("launch-title");
  const launchMeta = el("launch-meta");
  if (l.product && launchTitle) {
    launchTitle.textContent = `${l.product} · ${l.age || ""}`.trim();
    const meta = [];
    if (l.startDate && !String(l.startDate).includes("REPLACE"))
      meta.push(`Ближайший набор: ${l.startDate}`);
    else meta.push("Ближайший набор: по мере набора группы");
    if (l.spotsLeft != null) meta.push(`Свободных мест: ${l.spotsLeft}`);
    else if (l.spots) meta.push(`Группа до ${l.spots} детей`);
    if (l.durationWeeks) meta.push(`Длительность: ${l.durationWeeks} недель`);
    if (l.format) meta.push(`Формат: ${l.format}`);
    if (launchMeta) launchMeta.innerHTML = meta.map((m) => `<li>${m}</li>`).join("");
    const urg = el("launch-urgency");
    if (urg) {
      urg.textContent =
        l.spotsLeft != null
          ? `Свободных мест: ${l.spotsLeft} из ${l.spots || l.spotsLeft}. Лучше занять место до старта.`
          : l.spots
            ? `Группа небольшая — до ${l.spots} детей. Место лучше занять до старта.`
            : "Мест в группе немного — лучше занять место до старта.";
    }
  }

  const diagnostic = activePrice(
    p.diagnosticLesson || "1 199 ₽",
    p.diagnosticPromo,
    p
  );
  const offerPill = el("hero-offer-pill");
  if (offerPill) {
    offerPill.textContent = isPromoActive(p)
      ? `${p.promoLabel || "Акция"}: диагностика ${diagnostic}`
      : `Диагностика — ${diagnostic}`;
  }

  const promoChip = el("promo-chip");
  const promoBanner = el("promo-banner");
  if (isPromoActive(p)) {
    if (promoChip) {
      promoChip.hidden = false;
      promoChip.textContent = p.promoLabel || "Скидка";
    }
    if (promoBanner) {
      promoBanner.hidden = false;
      promoBanner.textContent = p.note
        ? p.note
        : `${p.promoLabel || "Скидка"} до ${p.promoUntil || "конца месяца"}: цены ниже обычных.`;
    }
  } else {
    if (promoChip) promoChip.hidden = true;
    if (promoBanner) promoBanner.hidden = true;
  }

  const pricing = el("pricing-grid");
  const note = el("pricing-note");
  const compare = el("price-compare");
  if (pricing) {
    pricing.className = "pricing__grid pricing__grid--rich";
    pricing.innerHTML = renderPricingCards(p);
  }
  if (compare) compare.innerHTML = renderPriceCompare(p);
  if (note) {
    if (p.note) {
      note.textContent = p.note;
      note.hidden = false;
    } else {
      note.textContent = "";
      note.hidden = true;
    }
  }

  const badge = el("signup-badge");
  if (badge) badge.textContent = `🔑 Диагностика · ${diagnostic}`;

  ["btn-pricing-signup", "sticky-signup", "btn-hero-signup", "btn-launch"].forEach((id) => {
    const node = el(id);
    if (!node) return;
    if (id === "sticky-signup") node.textContent = `Диагностика · ${diagnostic}`;
    else if (id === "btn-hero-signup" || id === "btn-pricing-signup" || id === "btn-launch") {
      if (!node.dataset.keepLabel) node.textContent = `Запись на диагностику — ${diagnostic}`;
    }
  });

  setupReferral(cfg);
  applyLegal(cfg);

  const phoneDisplay = c.phone && !String(c.phone).includes("REPLACE") ? c.phone : "";
  let phoneTel = "";
  if (c.phoneTel && !String(c.phoneTel).includes("REPLACE")) {
    phoneTel = String(c.phoneTel);
  } else if (phoneDisplay) {
    phoneTel = String(phoneDisplay).replace(/[^\d+]/g, "").replace(/^8/, "+7");
  }

  if (phoneDisplay && el("signup-phone")) {
    el("signup-phone").innerHTML = `Телефон: <a href="tel:${phoneTel}">${phoneDisplay}</a>`;
  }
  const btnPhone = el("btn-phone");
  if (btnPhone && phoneTel) btnPhone.href = `tel:${phoneTel}`;

  const stickyTg = el("sticky-tg");
  if (stickyTg) stickyTg.href = contact;
  const fab = el("fab-telegram");
  if (fab) fab.href = contact;

  updateSchemaOrg(cfg);
  updateSignupFormUi(cfg.forms, c.telegramContact || "irina_elsukova_0");

  const heroSrc = cfg.media?.heroPhoto || HERO_PHOTO;
  const photo = el("hero-photo");
  if (photo) {
    const img = new Image();
    img.onload = () => {
      photo.src = heroSrc;
    };
    img.onerror = () => {
      photo.src = "assets/placeholder.svg";
    };
    img.src = heroSrc;
  }

  void setupHeroMedia(cfg);

  try {
    renderPrograms(cfg);
    renderTeam(cfg);
    renderCredentials(cfg);
    renderPhotoGallery(cfg);
    mountChannelWidgets(cfg);
    setupRevealOnScroll();
  } catch (err) {
    console.warn("media blocks", err);
  }
}

/** Высота окна для Android Chrome (адресная строка меняет 100vh) */
function setupAppViewport() {
  const setVh = () => {
    const h = window.visualViewport?.height || window.innerHeight;
    document.documentElement.style.setProperty("--app-vh", `${Math.round(h)}px`);
  };
  setVh();
  window.addEventListener("resize", setVh, { passive: true });
  window.visualViewport?.addEventListener("resize", setVh, { passive: true });
  window.addEventListener("orientationchange", () => setTimeout(setVh, 120), {
    passive: true,
  });
}

/** Высота фиксированной шапки → отступ main + scroll-padding для якорей */
function setupFixedHeader() {
  const header = document.querySelector(".header");
  if (!header) return;

  const setHeaderH = () => {
    const h = Math.ceil(header.getBoundingClientRect().height);
    if (h > 0) {
      document.documentElement.style.setProperty("--header-h", `${h}px`);
    }
  };

  setHeaderH();
  window.addEventListener("resize", setHeaderH, { passive: true });
  window.visualViewport?.addEventListener("resize", setHeaderH, { passive: true });
  window.addEventListener("orientationchange", () => setTimeout(setHeaderH, 140), {
    passive: true,
  });

  if (typeof ResizeObserver !== "undefined") {
    new ResizeObserver(setHeaderH).observe(header);
  }
}

/** Плавный скролл к якорю с учётом фиксированной шапки */
function scrollToHashTarget(hash, behavior = "smooth") {
  if (!hash || hash === "#") return false;
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const target = document.getElementById(id);
  if (!target) return false;

  const headerH =
    parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) ||
    76;
  const top = target.getBoundingClientRect().top + window.scrollY - headerH - 12;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

function init() {
  try {
    setupAppViewport();
    setupFixedHeader();
    setupImageFallbacks();
    const year = el("year");
    if (year) year.textContent = String(new Date().getFullYear());
    renderPrograms(DEFAULT_CONFIG);
    renderReviews();
    renderFaq();
    renderTeam(DEFAULT_CONFIG);
    renderCredentials(DEFAULT_CONFIG);
    renderPhotoGallery(DEFAULT_CONFIG);
    if (!document.body.classList.contains("page-funnel")) {
      renderBeforeAfterStories();
      renderQuizPanel();
      setupScrollKey();
    }
    setupNav();
    setupStickyCta();
    setupRevealOnScroll();
    setupSignupForm();
    setupMagnetForm();
    setupNpsForm();
    applyConfig(DEFAULT_CONFIG);
    if (location.hash) {
      requestAnimationFrame(() => scrollToHashTarget(location.hash, "auto"));
    }
    const configUrl = "config.json";
    fetchProbe(configUrl, { method: "GET" })
      .then((res) => (res.ok ? res.json() : null))
      .then((cfg) => {
        if (cfg) applyConfig(cfg);
        void renderVideos(cfg || DEFAULT_CONFIG);
      })
      .catch(() => {
        void renderVideos(DEFAULT_CONFIG);
      });
  } catch (err) {
    console.error("init", err);
  }
}

window.addEventListener("error", (ev) => {
  console.warn("page error (site still usable)", ev.error || ev.message);
});
window.addEventListener("unhandledrejection", (ev) => {
  console.warn("async error (ignored)", ev.reason);
  ev.preventDefault();
});

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
