const PROGRAM_HOMEWORK =
  "Домашнее задание — закрепить изученный материал. Проверяем и даём обратную связь родителю.";

const PROGRAMS = [
  {
    icon: "🎒",
    title: "Подготовка к школе",
    age: "5–7 лет",
    lead: "Ирина Васильевна Елсукова",
    founder: true,
    format: "Индивидуально. Онлайн или очно · Приокский район.",
    when: "Перед 1 классом: трудно усидеть, слабое внимание; буквы знает, но к школе пока не готов.",
    do: "Внимание, рука, слух, игры — учимся учиться.",
  },
  {
    icon: "📖",
    title: "Осознанное чтение",
    age: "7–10 лет",
    lead: "Ирина Васильевна Елсукова",
    founder: true,
    format: "Индивидуально. Онлайн или очно · Приокский район.",
    when: "Читает, но плохо понимает текст; путает слова; чтение даётся тяжело.",
    do: "Фонематический слух и понимание текста.",
  },
  {
    icon: "✍️",
    title: "Дисграфия и почерк",
    age: "8–11 лет",
    lead: "Ирина Васильевна Елсукова",
    founder: true,
    format: "Индивидуально. Онлайн или очно · Приокский район.",
    when: "Трудности с письмом: много ошибок, неразборчивый или корявый почерк.",
    do: "Разбор ошибок и тренировка руки.",
  },
  {
    icon: "⭐",
    title: "Репетитор 1–4 класс",
    age: "1–4 класс",
    lead: "Ирина Васильевна Елсукова",
    founder: true,
    format: "Индивидуально. Онлайн или очно · Приокский район.",
    when: "Возникают трудности с чтением, письмом или математикой.",
    do: "Подтягиваем школьную программу.",
  },
  {
    icon: "🎙️",
    title: "Школа оратора · радиоспектакли",
    age: "6–12 лет",
    lead: "Ирина Васильевна Елсукова",
    founder: true,
    coming: true,
    waitlist: true,
    waitlistId: "oratory",
    waitlistGoal: 10,
    format: "Индивидуально. Онлайн или очно — когда откроем.",
    when: "Хочется уверенно говорить, играть голосом, участвовать в спектаклях.",
    do: "Дикция, интонация, радиоспектакли. Пока не ведём: собираем 10 семей.",
  },
];

const CHANNEL_URL = "https://t.me/klushikkk";

const REVIEWS = [
  {
    author: "Лидия Войник",
    meta: "мама ученицы",
    topic: "Чтение · кубики Зайцева",
    lead: "Занятия по кубикам Зайцева принесли отличные результаты",
    quote:
      "Моя дочка успешно справляется с русским языком и чтением. Я очень довольна, особенно когда дочка показывает школьные тетради, а там чисто и без ошибок.",
    shot: "assets/reviews/review-lidiya-voynik.jpg",
    shotPost: 66,
  },
  {
    author: "Мама Маруси",
    meta: "подготовка к школе",
    topic: "Подготовка к школе",
    lead: "Научилась уверенно читать, писать печатными буквами, считать в пределах 20",
    quote:
      "Особенно хочется отметить индивидуальный подход к обучению. Занятия проходили в увлекательной игровой форме, что помогло сохранить интерес Маруси и мотивацию к учёбе.",
    shot: "assets/reviews/review-marusya.jpg",
    shotPost: 74,
  },
  {
    author: "Лилия",
    meta: "мама ученицы · 2 августа 2025",
    topic: "Индивидуальные занятия",
    stars: 5,
    lead: "Быстро выявила пробелы в знаниях и постепенно их устраняет",
    quote:
      "Нашла общий язык с дочкой с первого занятия. У дочки проявилось желание учиться. Обратная связь очень подробная после каждого занятия. Для меня, как для родителя, это очень важно.",
    shot: "assets/reviews/review-liliya.jpg",
    shotPost: 66,
  },
  {
    author: "Отзыв родителя",
    meta: "после консультации",
    topic: "Диагностика",
    lead: "Провела диагностику ребёнку, объяснила план наших действий",
    quote:
      "Настолько внимательный специалист! Чувствуется большой опыт и профессиональный подход и к диагностике, и к решению проблем. Я вижу результаты!",
    shot: "assets/reviews/review-diagnostika.jpg",
    shotPost: 74,
  },
  {
    author: "Мама ученицы",
    meta: "канал «Ключик»",
    topic: "Речь и кругозор",
    lead: "Она стала гораздо увереннее в себе, любознательнее",
    quote:
      "На каждое занятие мой ребёнок идёт с большим удовольствием. Значительно расширился кругозор, обогатилась речь, появилось желание учиться ещё чему-то.",
    shot: "assets/reviews/review-uverennost.jpg",
    shotPost: 66,
  },
  {
    author: "Мама ученика",
    meta: "занимаются с 3 лет, сейчас сыну 9",
    topic: "Вместе шесть лет",
    lead: "Мой сын готов бежать к ней на занятия первее тапок",
    quote:
      "Сначала ходили к ней в группу короткого пребывания, после этого — два года на подготовку к школе. После первого класса ходили на занятия по изучению таблицы умножения.",
    shot: "assets/reviews/review-s-3-let.jpg",
    shotPost: 66,
    tall: true,
  },
];

const BEFORE_AFTER_STORIES = [
  {
    before: "Домашка каждый вечер со спором",
    after: "15–20 минут спокойно, понятно что закрепить",
    note: "Мама первоклассника · канал «Ключик»",
  },
  {
    before: "Страх 1 класса и неуверенность",
    after: "Читает, считает, идёт в школу спокойнее",
    note: "Подготовка к школе · отзыв в канале",
  },
  {
    before: "Ошибки в тетради, не хочет пробовать",
    after: "Тетради чище, снова берётся за задания",
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
    q: "Как записаться?",
    a:
      "Оставьте заявку в <a href=\"#signup\">форме</a>, напишите Ирине в <a href=\"https://t.me/irina_elsukova_0\">Telegram</a> или позвоните <a href=\"tel:+79030436763\">+7&nbsp;(903)&nbsp;043-67-63</a>.",
  },
  {
    q: "Сколько длится занятие?",
    a:
      "Диагностика и каждое занятие — 60 минут. На первой встрече знакомимся, смотрим уровень и даём понятный вывод.",
  },
  {
    q: "Сколько стоит занятие?",
    a:
      "Первая встреча и разовое занятие — 1 199 ₽. Четыре занятия — 3 999 ₽, восемь — 6 999 ₽. Онлайн или очно. Способ оплаты уточним при записи.",
  },
  {
    q: "Онлайн или очно — что лучше?",
    a:
      "Зависит от ребёнка и графика. Оба варианта доступны: онлайн по всей России, очно — Н. Новгород, Приокский район. Формат обсудим на первой встрече.",
  },
  {
    q: "Есть ли группы?",
    a:
      "Занятия проходят индивидуально — так эффективнее: темп и внимание только на вашего ребёнка.",
  },
  {
    q: "С какого возраста?",
    a:
      "Чаще всего 5–11 лет: подготовка к школе, чтение, почерк, поддержка 1–4 класса. Если сомневаетесь — напишите возраст и запрос, подскажем.",
  },
  {
    q: "Нужна ли подготовка «с нуля»?",
    a:
      "Нет. Важны возраст, ваш запрос и настроение ребёнка. Подберём темп: от игр и внимания до букв, слогов и школьных тем.",
  },
  {
    q: "Чем дисграфия отличается от «просто плохого почерка»?",
    a:
      "При дисграфии ошибки в письме устойчивые, ребёнок устаёт и избегает письма. На занятиях разбираем типичные ошибки и тренируем руку — спокойно и по шагам.",
  },
  {
    q: "Что нужно для онлайн-занятия?",
    a:
      "Стабильный интернет, камера, тихое место, лист и карандаш (или тетрадь). Для малышей рядом взрослый на первых встречах — по договорённости.",
  },
  {
    q: "Проверяете ли домашнее задание?",
    a:
      "Да, по договорённости: задание даём дозированно, проверяем и разбираем ошибки. Родителю — понятная обратная связь: что поддерживать дома по 10–15 минут.",
  },
  {
    q: "Как часто занятия?",
    a:
      "После первой встречи предложим ритм под ребёнка — обычно 1–2 раза в неделю. График согласуем с вами.",
  },
  {
    q: "Можно перенести или отменить?",
    a:
      "Да, если предупредить заранее: напишите в Telegram. Конкретные сроки переноса уточним при записи.",
  },
  {
    q: "Кубики Зайцева — это отдельный курс?",
    a:
      "Это методика в работе с чтением; формат и объём подбираем после первой встречи. Разовое занятие — 1 199 ₽.",
  },
  {
    q: "Ораторство и радиоспектакли — уже ведёте?",
    a:
      "Пока нет. Когда наберётся 10 семей, запустим индивидуально — если интересно, напишите Ирине в Telegram.",
  },
  {
    q: "Занятия только у Ирины?",
    a:
      "Да. Их ведёт Ирина Васильевна Елсукова — основатель «Ключика».",
  },
  {
    q: "Есть ли скидка «Приведи друга»?",
    a:
      "Да: вам и другу по 500 ₽ скидки на первую встречу, если друг при записи укажет, кто привёл.",
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
];

const TEACHER_PORTRAIT = "assets/photos/irina-portrait-orange.jpg";
const HERO_PHOTO = "assets/photos/lesson-whiteboard.jpg";

const DEFAULT_CHANNEL = {
  reviews: [66, 74],
  photos: [
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
      file: "assets/media/video-kinesio.mp4",
      title: "Игра на занятии · цветные мешочки",
      portrait: true,
    },
    {
      file: "assets/media/video-zaitsev.mp4",
      title: "Кубики Зайцева · склады",
      portrait: true,
    },
    {
      post: 86,
      file: "assets/media/video-86.mp4",
      title: "Лето в «Ключике» · лагерь и занятия",
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
    headline: "Подготовка к школе, чтение и почерк для детей 5–11 лет",
    eyebrow: "Онлайн по России · очно в Нижнем Новгороде",
    usp: "Занятия ведёт основатель — Ирина Елсукова",
    offer: "Диагностика · 60 минут · 1 199 ₽",
    tagline: "Подберём подход к вашему ребёнку",
  },
  analytics: {
    yandexMetrikaId: "",
  },
  team: DEFAULT_TEAM,
  programs: PROGRAMS,
  contacts: {
    telegramChannel: "https://t.me/klushikkk",
    telegramContact: "@irina_elsukova_0",
    maxChannel: "https://max.ru/channel_klyuchik_nn",
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
    diagnosticPromo: "",
    individualPerHour: "1 199 ₽ / занятие",
    individualPromo: "",
    course4: "3 999 ₽",
    course8: "6 999 ₽",
    familySingle: "1 599 ₽",
    familyCourse4: "5 800 ₽",
    familyCourse8: "10 800 ₽",
    familyGiftNote: "Подарок: видеоуроки и распечатки",
    groupPerMonth: "",
    groupPromo: "",
    promoLabel: "",
    promoUntil: "",
    note: "Диагностика и занятия — по 60 минут. 1 199 ₽, 4 занятия — 3 999 ₽, 8 — 6 999 ₽.",
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
    text: "Приведите друга: вам и другу по 500 ₽ скидки на первую встречу.",
  },
  trust: [
    { value: "5–11", label: "лет" },
    { value: "Онлайн", label: "по всей России" },
    { value: "Очно", label: "Н. Новгород" },
  ],
  launch: {
    product: "Подготовка к школе",
    age: "5–7 лет",
    startDate: "ноябрь 2026",
    spots: null,
    spotsLeft: null,
    durationWeeks: 6,
    format: "индивидуально · онлайн или очно",
  },
  credentials: [
    {
      file: "assets/credentials/diploma-ngpu-filologiya-1999.jpg",
      title: "Диплом НГПУ",
      caption: "Учитель русского языка и литературы · филология · 1999",
    },
    {
      file: "assets/credentials/cert-gratitude-gosduma-kavinov-2026.jpg",
      title: "Благодарность депутата Госдумы РФ",
      caption: "А.А. Кавинов · за работу по патриотическому воспитанию и сохранению исторической памяти · 2026",
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
      parent: "entry.261816972",
      contact: "entry.623631849",
      age: "entry.965604640",
      topic: "entry.1313191487",
      format: "entry.1785799249",
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

const GOOGLE_FORM_TOPICS = [
  "Подготовка к школе",
  "Чтение",
  "Почерк",
  "Дисграфия",
  "Репетитор 1–4 класс",
  "Другое",
];

function mapTopicForGoogle(topic) {
  const t = String(topic || "").trim();
  if (!t) return "Другое";
  if (GOOGLE_FORM_TOPICS.includes(t)) return t;
  if (t === "Дисграфия / почерк") return "Почерк";
  return "Другое";
}

function normalizeSignupPayload(payload) {
  const rawTopic = String(payload.topic || "").trim();
  const topic = mapTopicForGoogle(rawTopic);
  let age = String(payload.age || "").trim();
  if (!age) age = "уточним в переписке";
  if (rawTopic && !GOOGLE_FORM_TOPICS.includes(rawTopic) && rawTopic !== "Дисграфия / почерк") {
    const extra = `запрос: ${rawTopic}`;
    age = age === "уточним в переписке" ? extra : `${age}; ${extra}`;
  }
  return {
    parent: payload.parent,
    contact: payload.contact,
    age,
    topic,
    format: payload.format || "Пока не знаю",
    consent: payload.consent,
  };
}

function buildGooglePrefillUrl(forms, payload) {
  const view = resolveGoogleViewUrl(forms);
  if (!view) return "";
  const base = view.split("?")[0];
  const ids = forms.googleEntryIds || {};
  const params = new URLSearchParams();
  params.set("usp", "pp_url");
  const norm = normalizeSignupPayload(payload);
  const map = {
    parent: norm.parent,
    contact: norm.contact,
    age: norm.age,
    topic: norm.topic,
    format: norm.format,
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
  const norm = normalizeSignupPayload(payload);
  const hidden = document.createElement("form");
  hidden.method = "POST";
  hidden.action = action;
  hidden.target = "google-form-target";
  hidden.style.display = "none";
  const fields = {
    parent: norm.parent,
    contact: norm.contact,
    age: norm.age,
    topic: norm.topic,
    format: norm.format,
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

function trackEvent(name, params) {
  const id = window.__klyuchikMetrikaId;
  if (!id || typeof window.ym !== "function") return;
  try {
    window.ym(id, "reachGoal", name, params || {});
  } catch {
    /* ignore */
  }
}

function initYandexMetrika(cfg) {
  const raw = cfg?.analytics?.yandexMetrikaId || "";
  const id = String(raw).replace(/\D/g, "");
  if (!id) {
    window.__klyuchikMetrikaId = "";
    return;
  }
  window.__klyuchikMetrikaId = Number(id);
  if (window.ym) return;
  (function (m, e, t, r, i, k, a) {
    m[i] =
      m[i] ||
      function () {
        (m[i].a = m[i].a || []).push(arguments);
      };
    m[i].l = 1 * new Date();
    k = e.createElement(t);
    a = e.getElementsByTagName(t)[0];
    k.async = 1;
    k.src = r;
    a.parentNode.insertBefore(k, a);
  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  window.ym(id, "init", { clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: false });
}

function updateSignupFormUi(forms, contactHandle) {
  signupFormsCfg = forms || {};
  signupTgContact = contactHandle || "irina_elsukova_0";
  const mode = resolveSubmitMode(signupFormsCfg);
  const googleUrl = resolveGoogleViewUrl(signupFormsCfg);
  const tg = tgUrl(signupTgContact);
  const note = el("form-note");
  const submitBtn = el("signup-submit-btn");
  const btnContact = el("btn-contact");
  const lead = el("signup-lead");

  if (btnContact) btnContact.href = tg;

  if (lead && !isDirectLayout()) {
    lead.textContent = "Имя и телефон или Telegram.";
  }

  if (submitBtn) {
    submitBtn.textContent = "Отправить заявку";
  }

  // Без дублей «напишите / позвоните» — кнопки ниже формы уже есть.
  if (note) {
    note.textContent = "";
    note.hidden = true;
  }
}

function el(id) {
  return document.getElementById(id);
}

function waitlistKey(id) {
  return `klyuchik-waitlist-${id || "oratory"}`;
}

function isWaitlistMarked(id) {
  try {
    return localStorage.getItem(waitlistKey(id)) === "1";
  } catch {
    return false;
  }
}

function markWaitlist(id) {
  try {
    localStorage.setItem(waitlistKey(id), "1");
  } catch {
    /* private mode */
  }
}

function waitlistDotsHtml(goal, marked) {
  const n = Math.max(1, Number(goal) || 10);
  return Array.from({ length: n }, (_, i) => {
    const on = marked && i === 0;
    return `<span class="waitlist-dot${on ? " waitlist-dot--you" : ""}" title="${on ? "Вы" : ""}"></span>`;
  }).join("");
}

function renderPrograms(cfg) {
  const grid = el("programs-grid");
  if (!grid) return;
  let list = cfg?.programs?.length ? cfg.programs : PROGRAMS;
  list = list.filter((p) => p.title !== "Направление педагога" && !p.waitlist);
  const tg = String(cfg?.contacts?.telegramContact || "irina_elsukova_0").replace(/^@/, "");
  grid.dataset.tg = tg;
  grid.className = "directions-grid";
  grid.innerHTML = list
    .map(
      (p) => `<article class="dir-card">
        <span class="dir-card__icon" aria-hidden="true">${p.icon || "🔑"}</span>
        <h3 class="dir-card__title">${p.title}</h3>
        ${p.age && !String(p.title).includes(p.age) ? `<p class="dir-card__age">${p.age}</p>` : ""}
        ${p.when ? `<p class="dir-card__when">${p.when}</p>` : ""}
        ${p.do ? `<p class="dir-card__do"><span>Чем занимаемся:</span> ${p.do.charAt(0).toLowerCase() + p.do.slice(1)}</p>` : ""}
      </article>`
    )
    .join("");
  bindWaitlist(grid);
}

let waitlistBound = false;

function bindWaitlist(grid) {
  if (!grid || waitlistBound) return;
  waitlistBound = true;
  grid.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-waitlist]");
    if (!btn || btn.disabled) return;
    const id = btn.getAttribute("data-waitlist");
    const title = btn.getAttribute("data-title") || "Школа оратора";
    markWaitlist(id);
    btn.disabled = true;
    btn.textContent = "Вы уже отметились";
    const article = btn.closest(".direction-row");
    const hint = article?.querySelector(".waitlist__hint");
    if (hint) {
      hint.textContent =
        "Вы в списке. Сейчас откроется Telegram — отправьте сообщение, чтобы Ирина увидела отметку.";
    }
    const dots = article?.querySelector(".waitlist-dots");
    if (dots && !dots.querySelector(".waitlist-dot--you")) {
      const first = dots.querySelector(".waitlist-dot");
      if (first) first.classList.add("waitlist-dot--you");
    }
    const handle = grid.dataset.tg || "irina_elsukova_0";
    const text = `Здравствуйте! Интересно направление «${title}». Напишите, когда наберётся 10 семей — готовы обсудить старт.`;
    window.open(`https://t.me/${handle}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  });
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
  // 2026-11-10: на основном сайте показываем ролики в блоке «Фото и видео с занятий».
  const box = el("video-host");
  // В блоке — только лагерь/лето. Ролик Ирины уже в герое, дубль не нужен.
  const heroVideo = cfg.media?.heroVideo || "";
  const raw = cfg.media?.channel?.videoItems || DEFAULT_CHANNEL.videoItems;
  const items = raw.filter((v) => v?.file && v.file !== heroVideo && !String(v.file).includes("video-mama"));
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
      const isPortrait = !!v.portrait;
      const wrap = document.createElement("article");
      wrap.className =
        "video-stage" + (isPortrait ? " video-stage--soft" : " video-stage--cinema");
      const frame = document.createElement("div");
      frame.className = "video-stage__frame";
      const posterSrc = v.poster || "assets/photos/lesson-whiteboard.jpg";
      const poster = document.createElement("img");
      poster.className = "video-stage__poster";
      poster.src = posterSrc;
      poster.alt = "";
      poster.loading = "lazy";
      poster.decoding = "async";
      const video = document.createElement("video");
      video.controls = true;
      video.playsInline = true;
      video.preload = "none";
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");
      video.setAttribute("controlslist", "nodownload");
      video.poster = posterSrc;
      video.hidden = true;
      video.dataset.src = v.file;
      const play = document.createElement("button");
      play.type = "button";
      play.className = "media-play media-play--on-stage";
      play.setAttribute("aria-label", `Смотреть: ${v.title || "видео"}`);
      play.innerHTML =
        '<span class="media-play__paw" aria-hidden="true">🐾</span><span class="media-play__tri" aria-hidden="true">▶</span>';
      play.addEventListener("click", async () => {
        if (video.dataset.ready === "1") {
          video.hidden = false;
          poster.hidden = true;
          play.hidden = true;
          video.play().catch(() => {});
          return;
        }
        video.src = video.dataset.src;
        video.dataset.ready = "1";
        video.hidden = false;
        poster.hidden = true;
        play.hidden = true;
        try {
          await video.play();
        } catch {
          video.controls = true;
        }
      });
      frame.appendChild(poster);
      frame.appendChild(video);
      frame.appendChild(play);
      wrap.appendChild(frame);
      if (v.title) {
        const cap = document.createElement("p");
        cap.className = "video-stage__title";
        cap.textContent = v.title;
        wrap.appendChild(cap);
      }
      box.appendChild(wrap);
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
  const esc = (v) => String(v || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
  box.classList.add("reviews-grid");
  box.innerHTML = REVIEWS.map((r, i) => {
    const stars = r.stars
      ? `<span class="rv-card__stars" aria-label="Оценка ${r.stars} из 5">${"★".repeat(r.stars)}</span>`
      : "";
    const initial = esc(r.author.trim().charAt(0));
    return `<article class="rv-card${i >= 3 ? " rv-card--extra" : ""}">
      <div class="rv-card__top"><span class="rv-card__topic">${esc(r.topic)}</span>${stars}</div>
      <p class="rv-card__lead">«${esc(r.lead)}»</p>
      <blockquote class="rv-card__quote">${esc(r.quote)}</blockquote>
      <footer class="rv-card__foot">
        <span class="rv-card__avatar" aria-hidden="true">${initial}</span>
        <span class="rv-card__who"><span class="rv-card__author">${esc(r.author)}</span><span class="rv-card__meta">${esc(r.meta)}</span></span>
        <button type="button" class="rv-card__open" data-src="${esc(r.shot)}" data-post="${r.shotPost || ""}" data-tall="${r.tall ? "1" : ""}" data-alt="${esc("Отзыв: " + r.author)}">Читать оригинал</button>
      </footer>
    </article>`;
  }).join("");
  const more = document.createElement("p");
  more.className = "reviews__more";
  more.innerHTML = `<button type="button" class="reviews__more-btn" id="reviews-more-btn" aria-expanded="false">Показать ещё отзывы</button>`;
  box.after(more);
  el("reviews-more-btn")?.addEventListener("click", (e) => {
    const open = box.classList.toggle("reviews-grid--all");
    e.currentTarget.setAttribute("aria-expanded", open ? "true" : "false");
    e.currentTarget.textContent = open ? "Скрыть" : "Показать ещё отзывы";
    if (!open) document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth" });
  });
  box.addEventListener("click", (e) => {
    const btn = e.target.closest(".rv-card__open");
    if (!btn) return;
    openDaisyLightbox({
      src: btn.dataset.src,
      alt: btn.dataset.alt,
      post: btn.dataset.post ? Number(btn.dataset.post) : undefined,
      tall: btn.dataset.tall === "1",
    });
  });
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
      <p>Мы подсветили карточку в разделе «Направления». Оставьте заявку — подберём формат.</p>
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
  const playBtn = el("hero-play");
  const hint = el("hero-video-hint");
  const frame = el("hero-frame");
  const videoSrc = media.heroVideo;
  if (!videoEl || !videoSrc) return;

  const ok = await fileExists(videoSrc);
  if (!ok) {
    if (playBtn) playBtn.hidden = true;
    if (hint) hint.hidden = true;
    return;
  }

  // Без автозапуска: фото стабильно, видео только по клику на лапку.
  videoEl.removeAttribute("src");
  videoEl.preload = "none";
  videoEl.controls = true;
  videoEl.playsInline = true;
  videoEl.setAttribute("playsinline", "");
  videoEl.setAttribute("webkit-playsinline", "");
  videoEl.hidden = true;
  if (photo) {
    photo.hidden = false;
    photo.classList.remove("hero__photo--under-video");
  }
  if (playBtn) playBtn.hidden = false;
  if (hint) {
    hint.hidden = false;
    hint.textContent = "Нажмите лапку — откроется видео";
  }

  let started = false;
  const start = async () => {
    if (started) return;
    started = true;
    if (playBtn) playBtn.hidden = true;
    videoEl.src = videoSrc;
    videoEl.hidden = false;
    if (frame) frame.classList.add("hero__frame--playing");
    if (photo) photo.hidden = true;
    if (hint) hint.textContent = "Можно включить звук на панели ▶";
    try {
      videoEl.muted = false;
      await videoEl.play();
    } catch {
      videoEl.muted = true;
      videoEl.play().catch(() => {});
    }
  };

  playBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    void start();
  });
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
  if (isMainSite()) return;
  const bar = el("sticky-cta");
  const signup = el("signup");
  const hero = document.querySelector(".hero");
  if (!bar || !("IntersectionObserver" in window)) return;
  let heroVisible = !!hero;
  let blockVisible = false;
  let formFocus = false;
  const sync = () => {
    bar.classList.toggle("sticky-cta--hidden", heroVisible || blockVisible || formFocus);
  };
  if (hero) {
    const ioHero = new IntersectionObserver(
      (entries) => {
        heroVisible = entries.some((e) => e.isIntersecting);
        sync();
      },
      { threshold: 0.35 }
    );
    ioHero.observe(hero);
  }
  if (signup) {
    const ioBlock = new IntersectionObserver(
      (entries) => {
        blockVisible = entries.some((e) => e.isIntersecting);
        sync();
      },
      { rootMargin: "0px 0px 0px 0px", threshold: 0.08 }
    );
    ioBlock.observe(signup);
  }
  const form = el("signup-form");
  if (form) {
    form.addEventListener(
      "focusin",
      () => {
        formFocus = true;
        sync();
      },
      true
    );
    form.addEventListener(
      "focusout",
      () => {
        setTimeout(() => {
          formFocus = form.contains(document.activeElement);
          sync();
        }, 80);
      },
      true
    );
  }
  sync();
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
  const items = FAQ_ITEMS;
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
    return `<span class="price-card__was">${regular}</span><span class="price-card__sum">${priceLock(promo)}</span>`;
  }
  return `<span class="price-card__sum">${priceLock(regular)}</span>`;
}

function activePrice(regular, promo, p) {
  return isPromoActive(p) && promo ? promo : regular;
}

function isMainSite() {
  return document.body.classList.contains("layout-main");
}

function isDirectLayout() {
  return isMainSite();
}

function priceLock(text) {
  const s = String(text || "");
  return s.replace(/(\d(?:[\d\s]*\d)?)\s*₽/g, (m, num) => `<span class="price-lock">${num.replace(/\s+/g, "&nbsp;")}&nbsp;₽</span>`);
}

function priceCardCta() {
  // Кнопки записи в каждой карточке убраны: одна общая кнопка под тарифами.
  return "";
}

function renderFamilyPricingCards(p) {
  const single = p.familySingle || "1 599 ₽";
  const pack4 = p.familyCourse4 || "5 800 ₽";
  const pack8 = p.familyCourse8 || "10 800 ₽";
  const gift = p.familyGiftNote || "Подарок: видеоуроки и распечатки";
  return `
    <h3 class="pricing__family-title">Семейный формат</h3>
    <p class="pricing__family-lead">Двое детей, каждому — отдельные 45 минут. Подарок семье — бесплатные видеоуроки и распечатки.</p>
    <article class="price-card price-card--family price-card--ticket">
      <span class="price-card__emoji" aria-hidden="true">👫</span>
      <strong>За двоих — разово</strong>
      <p class="price-card__sum">${priceLock(single)}</p>
      <p class="price-card__unit">90 минут с педагогом на двоих</p>
      ${priceCardCta()}
    </article>
    <article class="price-card price-card--family price-card--ticket">
      <span class="price-card__emoji" aria-hidden="true">📦</span>
      <strong>Пакет из 4 встреч</strong>
      <p class="price-card__sum">${priceLock(pack4)}</p>
      <p class="price-card__unit">формат 45 + 45 минут</p>
      ${priceCardCta()}
    </article>
    <article class="price-card price-card--family price-card--accent price-card--ticket">
      <span class="price-card__promo">Выгоднее</span>
      <span class="price-card__emoji" aria-hidden="true">📦</span>
      <strong>Пакет из 8 встреч</strong>
      <p class="price-card__sum">${priceLock(pack8)}</p>
      <p class="price-card__unit">формат 45 + 45 минут</p>
      ${priceCardCta()}
    </article>
  `;
}

function renderPricingCards(p) {
  const diagReg = p.diagnosticLesson || "1 199 ₽";
  const diagPromo = p.diagnosticPromo || "";
  const indReg = p.individualPerHour || "1 199 ₽ / занятие";
  const indPromo = p.individualPromo || "";
  const course4 = p.course4 || "3 999 ₽";
  const course8 = p.course8 || "6 999 ₽";
  const chip =
    isPromoActive(p) && p.promoLabel
      ? `<span class="price-card__promo">${p.promoLabel}</span>`
      : "";
  return `
    <article class="price-card price-card--diag price-card--ticket">
      ${chip}
      <span class="price-card__emoji" aria-hidden="true">📋</span>
      <strong>Диагностика уровня</strong>
      ${priceHtml(diagReg, diagPromo, p)}
      <p class="price-card__unit">одна встреча · 60 минут</p>
      <ul class="price-card__features price-card__features--tight">
        <li>Знакомство и задания по возрасту</li>
        <li>Обратная связь вам устно после встречи</li>
        <li>Подойдёт, если нужно понять, с чего начать</li>
      </ul>
      ${priceCardCta()}
    </article>
    <article class="price-card price-card--ind price-card--ticket">
      <span class="price-card__emoji" aria-hidden="true">🎯</span>
      <strong>Индивидуально</strong>
      ${priceHtml(indReg, indPromo, p)}
      <p class="price-card__unit">60 минут</p>
      <ul class="price-card__features price-card__features--tight">
        <li>Онлайн или очно в Н. Новгороде</li>
        <li>Темп и домашнее закрепление 10–15 минут</li>
        <li>После диагностики или сразу по вашему запросу</li>
      </ul>
      ${priceCardCta()}
    </article>
    <article class="price-card price-card--course price-card--accent price-card--ticket">
      <span class="price-card__promo">Выгоднее</span>
      <span class="price-card__emoji" aria-hidden="true">📦</span>
      <strong>Курс индивидуально</strong>
      <p class="price-card__packs price-card__packs--inline">
        <span class="price-card__pack">${priceLock(course4)} · 4 занятия</span>
        <span class="price-card__pack price-card__pack--best">${priceLock(course8)} · 8 занятий</span>
      </p>
      <p class="price-card__unit">по 60 минут · 1–2 раза в неделю</p>
      <ul class="price-card__features price-card__features--tight">
        <li>Один ребёнок, занятия ведёт Ирина Васильевна</li>
        <li>8 занятий выгоднее двух пакетов по 4</li>
      </ul>
      ${priceCardCta()}
    </article>
  `;
}

function comparePriceCell(regular, promo, p) {
  if (isPromoActive(p) && promo) {
    return `<span class="price-compare__was">${regular}</span><strong class="price-compare__now">${promo}</strong>`;
  }
  return `<strong class="price-compare__now">${regular}</strong>`;
}

function renderPriceCompare(p) {
  const diagReg = p.diagnosticLesson || "1 199 ₽";
  const diagPromo = p.diagnosticPromo || "";
  const groupReg = p.groupPerMonth || "1 199 ₽ / занятие";
  const groupPromo = p.groupPromo || "";
  const indReg = p.individualPerHour || "1 199 ₽ / занятие";
  const indPromo = p.individualPromo || "";
  return `
    <div class="price-compare__scroll">
      <table class="price-compare__table">
        <thead>
          <tr>
            <th scope="col">Что</th>
            <th scope="col">Диагностика</th>
            <th scope="col">Группа «К школе»</th>
            <th scope="col">Индивидуально</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Цена</th>
            <td>${comparePriceCell(diagReg, diagPromo, p)}</td>
            <td>${comparePriceCell(groupReg, groupPromo, p)}</td>
            <td>${comparePriceCell(indReg, indPromo, p)}</td>
          </tr>
          <tr>
            <th scope="row">Кому</th>
            <td>Старт, ясность до курса</td>
            <td>Дошкольники 5–7 лет</td>
            <td>Свой темп или точечный запрос</td>
          </tr>
          <tr>
            <th scope="row">Формат</th>
            <td>1 встреча · 60 минут</td>
            <td>2 раза в неделю · ~6 недель</td>
            <td>По записи · 60 минут</td>
          </tr>
        </tbody>
      </table>
    </div>`;
}

function renderTeam(cfg) {
  const grid = el("team-grid");
  const items = (cfg.team?.length ? cfg.team : DEFAULT_TEAM).filter((t) => !t.open);
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
            : `<a class="team-card__link" href="#signup">Записаться</a>`
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
  if (!list.length) return;

  const centerSrc = cfg.media?.teacherPortrait || TEACHER_PORTRAIT;
  const count = list.length;

  // Та же ромашка, что у фото: крупные лепестки, без подписей НГПУ / Зайцев и т.п.
  grid.className = "daisy-gallery daisy-gallery--alive daisy-gallery--docs";
  grid.removeAttribute("aria-label");
  grid.setAttribute("aria-label", "Дипломы и сертификаты — нажмите лепесток");

  const petals = list
    .map((c, i) => {
      const title = c.title || "Документ";
      const cap = c.caption || "";
      const alt = cap ? `${title} — ${cap}` : title;
      const color = DAISY_PETAL_COLORS[i % DAISY_PETAL_COLORS.length];
      const angle = (360 / count) * i - 90;
      const src = String(c.file).replace(/"/g, "&quot;");
      const altEsc = alt.replace(/"/g, "&quot;");
      return `<button type="button" class="daisy-petal" style="--angle:${angle}deg;--petal-color:${color};--i:${i}" data-src="${src}" data-alt="${altEsc}" aria-label="Открыть документ">
        <span class="daisy-petal__stem" aria-hidden="true"></span>
        <span class="daisy-petal__shape">
          <img class="daisy-petal__thumb" src="${src}" alt="" loading="lazy" decoding="async" width="140" height="200" onerror="this.onerror=null;this.src='assets/placeholder.svg';" />
        </span>
        <span class="daisy-petal__tap" aria-hidden="true">+</span>
      </button>`;
    })
    .join("");

  grid.innerHTML = `
    <div class="daisy-gallery__aura" aria-hidden="true"></div>
    <div class="daisy-gallery__stage" style="--petal-count:${count}">
      <div class="daisy-gallery__grass" aria-hidden="true"></div>
      <div class="daisy-gallery__sparkles" aria-hidden="true">
        <span></span><span></span><span></span><span></span><span></span>
      </div>
      ${petals}
      <button type="button" class="daisy-gallery__center" data-src="${String(list[0].file).replace(/"/g, "&quot;")}" data-alt="${String(list[0].title || "Документ").replace(/"/g, "&quot;")}" aria-label="Открыть документ">
        <div class="daisy-gallery__center-disc" aria-hidden="true"></div>
        <img class="daisy-gallery__center-photo" src="${centerSrc}" alt="Ирина Васильевна Елсукова" width="128" height="128" decoding="async" onerror="this.onerror=null;this.src='assets/placeholder.svg';" />
      </button>
    </div>`;

  grid.onclick = (e) => {
    const btn = e.target.closest(".daisy-petal, .daisy-gallery__center");
    if (!btn || !grid.contains(btn)) return;
    e.preventDefault();
    openCredential(btn.getAttribute("data-src"), btn.getAttribute("data-alt"), "");
  };

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

function openDaisyLightbox({ src, alt, post, tall }) {
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
  root.classList.toggle("daisy-lightbox--tall", !!tall);
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

  // Ряд фото под ромашкой больше не нужен — только лепестки.
  if (thumbs) {
    thumbs.innerHTML = "";
    thumbs.hidden = true;
    thumbs.setAttribute("aria-hidden", "true");
  }

  const centerSrc = cfg.media?.teacherPortrait || TEACHER_PORTRAIT;
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
          <img class="daisy-petal__thumb" src="${src}" alt="" loading="lazy" decoding="async" width="120" height="180" />
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

  const navClose = el("nav-close");
  if (navClose) navClose.addEventListener("click", close);

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

    if (!payload.parent || !payload.contact || !form.querySelector('[name="consent"]')?.checked) {
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

    const norm = normalizeSignupPayload(payload);
    const text = [
      "Заявка с сайта Ключик",
      "",
      `Имя: ${norm.parent}`,
      `Связь: ${norm.contact}`,
      `Возраст ребёнка: ${norm.age}`,
      `Запрос: ${norm.topic}`,
      `Формат: ${norm.format}`,
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
      "Обратная связь с сайта «Ключик»",
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

function setupContactGoals() {
  const sel =
    "#btn-hero-irina, #btn-contact, #contacts-irina, #sticky-tg, a[href^='tel:']";
  document.querySelectorAll(sel).forEach((node) => {
    if (node.dataset.goalBound) return;
    node.dataset.goalBound = "1";
    node.addEventListener("click", () => {
      const href = node.getAttribute("href") || "";
      const goal = href.startsWith("tel:") ? "contact_phone" : "contact_telegram";
      trackEvent(goal);
    });
  });
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

function applyLegalPageDraft(cfg) {
  if (!document.body.classList.contains("page-legal")) return;
  const legal = cfg?.legal || {};
  const c = cfg?.contacts || {};
  const isPlaceholder = (v) => !v || String(v).includes("REPLACE");
  const teacher = cfg?.teacher?.name || "Ирина Васильевна Елсукова";
  const contact =
    !isPlaceholder(legal.email) ? legal.email : c.phone || "Telegram: @irina_elsukova_0";
  const map = {
    REPLACE_ENTITY: isPlaceholder(legal.entityName) ? teacher : legal.entityName,
    REPLACE_INN: isPlaceholder(legal.inn) ? "уточняется" : legal.inn,
    REPLACE_OGRNIP: isPlaceholder(legal.ogrnip) ? "уточняется" : legal.ogrnip,
    REPLACE_ADDRESS: isPlaceholder(legal.address)
      ? "Н. Новгород (уточняется при записи)"
      : legal.address,
    REPLACE_EMAIL: contact,
  };
  document.querySelectorAll(".legal-page__body").forEach((node) => {
    let html = node.innerHTML;
    Object.entries(map).forEach(([from, to]) => {
      html = html.split(from).join(to);
    });
    node.innerHTML = html;
  });
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
      footerLegal.hidden = false;
      footerLegal.textContent = `${entity} · ИНН ${inn}${
        !isPlaceholder(ogrn) ? ` · ${ogrn}` : ""
      }`;
    } else {
      footerLegal.textContent = "";
      footerLegal.hidden = true;
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

  // Hero: бренд крупно → УТП → мягкий слоган мелко (не наоборот).
  if (el("hero-title")) {
    el("hero-title").textContent = b.headline || "Онлайн-школа «Ключик»";
  }
  if (el("hero-usp")) {
    el("hero-usp").textContent =
      b.usp || "Ирина ведёт занятия сама";
  }
  if (b.tagline && el("hero-tagline")) el("hero-tagline").textContent = b.tagline;
  const heroEyebrow = el("hero-eyebrow");
  if (heroEyebrow) {
    heroEyebrow.textContent =
      b.eyebrow || "Подготовка к школе · чтение · почерк";
  }
  const heroOffer = el("hero-offer");
  if (heroOffer && isMainSite()) {
    heroOffer.innerHTML = `Первая встреча — диагностика уровня · 60 минут · <span class="price-lock">1&nbsp;199&nbsp;₽</span>`;
  } else if (heroOffer && b.offer) {
    heroOffer.textContent = b.offer;
  }
  const footerName = el("footer-name");
  if (t.name && footerName) footerName.textContent = t.name;

  // Город/формат — один раз в бейдже hero и в блоке адреса. Не дублируем под заголовком.
  const heroCity = el("hero-city");
  if (heroCity) {
    heroCity.textContent = "";
    heroCity.hidden = true;
  }

  const localText = el("local-nn-text");
  if (localText) {
    localText.textContent = "";
    localText.hidden = true;
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
  if (isDirectLayout()) {
    const schoolChannel = el("btn-channel");
    if (schoolChannel) schoolChannel.hidden = true;
  }

  const fc = el("footer-channel");
  if (fc) {
    fc.href = channel;
    fc.textContent = "Канал в Telegram";
  }

  // Каналы — один раз в подвале. В блоке контактов только личная связь с Ириной.
  ["nav-max", "btn-max", "btn-signup-max"].forEach((id) => {
    const node = el(id);
    if (node) node.hidden = true;
  });
  const footerMax = el("footer-max");
  if (footerMax) {
    if (maxChannel) {
      footerMax.href = maxChannel;
      footerMax.textContent = "Канал в Max";
      footerMax.hidden = false;
    } else {
      footerMax.hidden = true;
    }
  }
  const footerMaxSep = el("footer-max-sep");
  if (footerMaxSep) footerMaxSep.hidden = !maxChannel;
  const heroMaxSep = el("hero-max-sep");
  if (heroMaxSep) heroMaxSep.hidden = true;

  const custom =
    site.customDomain && !String(site.customDomain).includes("REPLACE")
      ? site.customDomain
      : "";
  const siteUrl =
    custom ||
    (site.url && !String(site.url).includes("REPLACE") ? site.url : "");
  const footerSite = el("footer-site");
  if (footerSite) {
    // На самом сайте ссылка «Сайт» не нужна — только canonical.
    footerSite.hidden = true;
    if (siteUrl) {
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
    else meta.push("Запись по свободным слотам");
    if (l.spotsLeft != null) meta.push(`Свободных слотов: ${l.spotsLeft}`);
    if (l.durationWeeks) meta.push(`Длительность блока: ${l.durationWeeks} недель`);
    if (l.format) meta.push(`Формат: ${l.format}`);
    if (launchMeta) launchMeta.innerHTML = meta.map((m) => `<li>${m}</li>`).join("");
    const urg = el("launch-urgency");
    if (urg) {
      urg.textContent = "Курс на 4 или 8 занятий выгоднее разовых. Слоты лучше бронировать заранее.";
    }
  }

  const diagnostic = activePrice(
    p.diagnosticLesson || "1 199 ₽",
    p.diagnosticPromo,
    p
  );
  const promoChip = el("promo-chip");
  const promoBanner = el("promo-banner");
  if (promoChip) promoChip.hidden = true;
  if (promoBanner) promoBanner.hidden = true;

  const pricing = el("pricing-grid");
  const familyHost = el("pricing-family");
  const note = el("pricing-note");
  if (pricing) {
    pricing.className = "pricing__grid pricing__grid--rich";
    pricing.innerHTML = renderPricingCards(p);
  }
  if (familyHost) {
    familyHost.className = "pricing__family-host";
    familyHost.innerHTML = isMainSite()
      ? `<div class="pricing__family-block">${renderFamilyPricingCards(p)}</div>`
      : "";
  }
  // Сравнительную таблицу не показываем — хватает трёх карточек тарифов.
  if (note) {
    note.textContent = "";
    note.hidden = true;
  }

  const badge = el("signup-badge");
  if (badge) {
    badge.innerHTML = isMainSite() ? priceLock(diagnostic) : diagnostic;
  }

  const signupCta = isDirectLayout() ? "Записаться на диагностику" : "Записаться";
  ["btn-pricing-signup", "sticky-signup", "btn-hero-signup", "btn-launch"].forEach((id) => {
    const node = el(id);
    if (!node || node.dataset.keepLabel) return;
    if (id === "sticky-signup" && isDirectLayout()) {
      node.textContent = "Диагностика";
    } else {
      node.textContent = signupCta;
    }
  });
  const navCta = el("nav-cta-signup");
  if (navCta && isDirectLayout()) navCta.textContent = signupCta;

  if (!isMainSite()) setupReferral(cfg);
  applyLegal(cfg);
  applyLegalPageDraft(cfg);

  const phoneDisplay = c.phone && !String(c.phone).includes("REPLACE") ? c.phone : "";
  let phoneTel = "";
  if (c.phoneTel && !String(c.phoneTel).includes("REPLACE")) {
    phoneTel = String(c.phoneTel);
  } else if (phoneDisplay) {
    phoneTel = String(phoneDisplay).replace(/[^\d+]/g, "").replace(/^8/, "+7");
  }

  const signupPhone = el("signup-phone");
  if (signupPhone) {
    signupPhone.textContent = "";
    signupPhone.hidden = true;
  }
  const btnPhone = el("btn-phone");
  if (btnPhone && phoneTel) {
    btnPhone.href = `tel:${phoneTel}`;
    if (phoneDisplay) btnPhone.textContent = phoneDisplay;
  }

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

  scheduleBelowFoldEnhancements(cfg);
}

let siteConfigLatest = DEFAULT_CONFIG;
let belowFoldIoScheduled = false;

function runAfterFirstPaint(fn) {
  if (typeof requestAnimationFrame === "function") {
    requestAnimationFrame(() => requestAnimationFrame(fn));
  } else {
    setTimeout(fn, 0);
  }
}

function runWhenIdle(fn, timeout = 2800) {
  if (typeof requestIdleCallback === "function") {
    requestIdleCallback(
      () => {
        try {
          fn();
        } catch (err) {
          console.warn("idle task", err);
        }
      },
      { timeout }
    );
  } else {
    setTimeout(() => {
      try {
        fn();
      } catch (err) {
        console.warn("idle task", err);
      }
    }, 420);
  }
}

function runWhenSectionVisible(sectionId, fn, rootMargin = "280px 0px 280px 0px") {
  const node = document.getElementById(sectionId);
  if (!node) {
    runWhenIdle(fn, 4000);
    return;
  }
  if (!("IntersectionObserver" in window)) {
    runWhenIdle(fn, 2000);
    return;
  }
  let done = false;
  const run = () => {
    if (done) return;
    done = true;
    try {
      fn();
    } catch (err) {
      console.warn(`section ${sectionId}`, err);
    }
    io.disconnect();
  };
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) run();
    },
    { rootMargin, threshold: 0.01 }
  );
  io.observe(node);
  setTimeout(run, 15000);
}

/** Якорная ссылка до блока — подгружаем контент до scroll, иначе секция пустая */
function prefetchSectionForId(id, cfg) {
  if (!id) return;
  const c = cfg || siteConfigLatest;
  switch (id) {
    case "reviews":
      renderReviews();
      break;
    case "faq":
      renderFaq();
      break;
    case "directions":
      renderPrograms(c);
      break;
    case "docs":
    case "teacher":
      renderCredentials(c);
      break;
    case "photos":
    case "lesson":
      renderPhotoGallery(c);
      void renderVideos(c);
      break;
    default:
      break;
  }
}

function scheduleBelowFoldEnhancements(cfg) {
  siteConfigLatest = cfg;

  const refreshFromConfig = () => {
    try {
      renderPrograms(cfg);
      renderCredentials(cfg);
      renderPhotoGallery(cfg);
      void renderVideos(cfg);
      renderTeam(cfg);
      setupRevealOnScroll();
    } catch (err) {
      console.warn("config refresh blocks", err);
    }
  };

  if (!belowFoldIoScheduled) {
    belowFoldIoScheduled = true;
    runWhenSectionVisible("reviews", () => renderReviews());
    runWhenSectionVisible("faq", () => renderFaq());
    runWhenSectionVisible("directions", () => renderPrograms(cfg));
    runWhenSectionVisible("docs", () => renderCredentials(cfg));
    runWhenSectionVisible("photos", () => {
      renderPhotoGallery(cfg);
      void renderVideos(cfg);
    });

    runWhenIdle(() => {
      renderTeam(cfg);
      mountChannelWidgets(cfg);
      if (!document.body.classList.contains("page-funnel") && !isDirectLayout()) {
        renderBeforeAfterStories();
        renderQuizPanel();
        setupScrollKey();
        setupNpsForm();
      }
      setupRevealOnScroll();
    });
    return;
  }

  runWhenIdle(refreshFromConfig, 1200);
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
function ensureMoreSectionOpenFor(target) {
  const details = el("funnel-more");
  if (details && target && details.contains(target) && !details.open) {
    details.open = true;
  }
}

function scrollToHashTarget(hash, behavior = "smooth") {
  if (!hash || hash === "#") return false;
  const id = decodeURIComponent(String(hash).replace(/^#/, "").trim());
  if (!id) return false;
  prefetchSectionForId(id, siteConfigLatest);
  const target = document.getElementById(id);
  if (!target) return false;
  ensureMoreSectionOpenFor(target);

  const headerH =
    parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) ||
    76;
  const top = target.getBoundingClientRect().top + window.scrollY - headerH - 12;
  window.scrollTo({ top: Math.max(0, top), behavior });
  // Картинки выше цели догружаются во время прокрутки и сдвигают блок — доводим позицию.
  [700, 1400, 2200].forEach((ms) => {
    setTimeout(() => {
      const want = target.getBoundingClientRect().top - headerH - 12;
      const maxY = document.documentElement.scrollHeight - window.innerHeight;
      if (Math.abs(want) > 4 && window.scrollY < maxY - 2) {
        window.scrollTo({ top: Math.max(0, window.scrollY + want), behavior: "auto" });
      }
    }, ms);
  });
  return true;
}

/**
 * Telegram/Max часто открывают ссылку без #якоря.
 * Рабочий глубокий линк: ?to=directions | signup | docs | faq | school
 * Старый #directions тоже поддерживаем.
 */
function getDeepLinkTarget() {
  try {
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to") || params.get("section") || params.get("go");
    if (to) return `#${String(to).replace(/^#/, "").trim()}`;
  } catch (_) {
    /* ignore */
  }
  return window.location.hash || "";
}

function scrollToDeepLink(behavior = "auto") {
  return scrollToHashTarget(getDeepLinkTarget(), behavior);
}

/** Несколько попыток: контент и шапка догружаются после config.json */
function scheduleDeepLinkScroll() {
  const delays = [0, 50, 150, 400, 900, 1600];
  delays.forEach((ms) => {
    setTimeout(() => scrollToDeepLink(ms === 0 ? "auto" : "smooth"), ms);
  });
}

function init() {
  try {
    setupAppViewport();
    setupFixedHeader();
    setupImageFallbacks();
    const year = el("year");
    if (year) year.textContent = String(new Date().getFullYear());
    setupNav();
    setupStickyCta();
    setupSignupForm();
    setupMagnetForm();
    applyConfig(DEFAULT_CONFIG);
    runAfterFirstPaint(() => scheduleDeepLinkScroll());
    window.addEventListener("hashchange", () => scrollToDeepLink("smooth"));
    const configUrl = "config.json";
    fetchProbe(configUrl, { method: "GET" })
      .then((res) => (res.ok ? res.json() : null))
      .then((cfg) => {
        if (cfg) applyConfig(cfg);
        scheduleDeepLinkScroll();
      })
      .catch(() => {
        scheduleDeepLinkScroll();
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
