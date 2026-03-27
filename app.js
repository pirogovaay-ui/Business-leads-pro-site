const courseData = {
  meetings: [
    {
      id: "meeting-qa-session",
      tag: "Q&A Session",
      title: "AI Assistant Q&A Session",
      text: "Сессия вопросов и ответов, которую нужно подготовить к апрельскому хакатону.",
      meta: "Запись встречи",
      link: "https://avito.ktalk.ru/recordings/nxAlbWYbmknYCIqfnzz4"
    },
    {
      id: "meeting-n8n-1",
      tag: "n8n",
      title: "Intro to n8n 13.03, часть 1",
      text: "Первая часть вводной встречи по n8n с Сашей Прокопьевым.",
      meta: "Спикер: Саша Прокопьев",
      link: "https://avito.ktalk.ru/recordings/88JhY9lFfYMw4mQxlcox"
    },
    {
      id: "meeting-n8n-2",
      tag: "n8n",
      title: "Intro to n8n 13.03, часть 2",
      text: "Вторая часть встречи по n8n с продолжением разбора и примеров.",
      meta: "Спикер: Саша Прокопьев",
      link: "https://avito.ktalk.ru/recordings/piPVbUJFjrfAzvAf6trz"
    },
    {
      id: "meeting-genai-avito",
      tag: "Вебинар",
      title: "GenAI в Авито и ассистент для частных пользователей",
      text: "Запись вебинара от 11 февраля с Фархатом Аминовым и Екатериной Давыдовой.",
      meta: "11.02",
      link: "https://avito.ktalk.ru/recordings/PTRzGKFRIo5L4Y59GmW3"
    },
    {
      id: "meeting-6pager-avi",
      tag: "Разбор",
      title: "Встреча по 6-pager и Avi Assistant",
      text: "Разбор материалов вместе с А. Рыбинцевым.",
      meta: "Спикер: А. Рыбинцев, ссылка будет добавлена",
      link: "#"
    }
  ],
  resources: [
    {
      id: "resource-6pager",
      tag: "Основной материал",
      title: "6-pager",
      text: "Ключевой документ программы, с которого удобно начинать погружение в тему.",
      meta: "Google Docs",
      link: "https://docs.google.com/document/d/1Uibw_l6ZwNUF9kC42l4lDcdhDxlcRTvLhhfGaIjppbg/edit?tab=t.knyxdh5c40fe"
    },
    {
      id: "resource-ai-first-steps",
      tag: "LMS",
      title: "Первые Шаги в AI",
      text: "Внутренний курс LMS, который нужно было пройти до 2 марта.",
      meta: "Дедлайн: до 2 марта",
      link: "https://lms.avito.ru/student/dashboard/loadCurs/6722"
    },
    {
      id: "resource-genai-course",
      tag: "LMS",
      title: "Курс по Gen AI",
      text: "Второй обязательный курс в LMS по теме генеративного ИИ.",
      meta: "Дедлайн: до 2 марта",
      link: "https://lms.avito.ru/student/dashboard/program/1086/"
    },
    {
      id: "resource-avito-ai-materials",
      tag: "Доп. ресурс",
      title: "Полезности Авито AI",
      text: "Подборка внутренних материалов и наработок по AI внутри Авито.",
      meta: "Внутренний ресурс",
      link: "https://cf.avito.ru/spaces/AVITOAI/pages/737148075/%D0%9F%D0%BE%D0%BB%D0%B5%D0%B7%D0%BD%D1%8B%D0%B5+%D0%9C%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B+Avito+AI"
    },
    {
      id: "resource-confluence",
      tag: "База знаний",
      title: "Confluence: база знаний Авито",
      text: "Единая база знаний с полезными страницами, инструкциями и рабочими материалами.",
      meta: "Confluence",
      link: "https://cf.avito.ru/spaces/AVITOAI/pages/418550517/Avito+AI+Community"
    },
    {
      id: "resource-external-courses",
      tag: "Подборка",
      title: "Полезные внешние информационные курсы",
      text: "Собранные внешние курсы и материалы для расширения кругозора по теме.",
      meta: "Внешние ресурсы",
      link: "https://docs.google.com/document/d/1eOV5btenGfryy-O-20XaqCY2p9VJe5VLnHt6EpWmZek/edit?tab=t.0"
    },
    {
      id: "resource-n8n-guide",
      tag: "Гайд",
      title: "Внешний гайд по n8n",
      text: "Практический внешний материал, который поможет лучше освоиться в n8n.",
      meta: "Внешний ресурс",
      link: "https://www.youtube.com/watch?v=tUufFo-JTZQ"
    }
  ],
  articles: [
    {
      id: "article-genai-ai-assistant",
      title: "Полезные статьи по GenAI и AI Assistant",
      text: "Когда появятся ссылки на статьи и лонгриды, их можно будет быстро разложить сюда в аккуратные карточки.",
      link: "#"
    }
  ]
};

const storageKey = "vibe-study-progress";

const meetingList = document.getElementById("meetingList");
const resourceList = document.getElementById("resourceList");
const articleList = document.getElementById("articleList");
const progressValue = document.getElementById("progressValue");
const progressCaption = document.getElementById("progressCaption");
const resetButton = document.getElementById("resetProgress");
const progressRing = document.querySelector(".progress-ring");

function loadProgress() {
  const raw = localStorage.getItem(storageKey);
  return raw ? JSON.parse(raw) : {};
}

function saveProgress(progress) {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function createToggle(item, progress) {
  const checked = Boolean(progress[item.id]);
  return `
    <label class="progress-toggle ${checked ? "is-done" : ""}">
      <input type="checkbox" data-item-id="${item.id}" ${checked ? "checked" : ""}>
      <span>${checked ? "Пройдено" : "Отметить"}</span>
    </label>
  `;
}

function createCard(item, progress) {
  const card = document.createElement("article");
  card.className = "content-card";
  const linkLabel = item.link === "#" ? "Скоро добавим" : "Открыть";

  card.innerHTML = `
    <div class="card-top">
      <div class="card-content">
        <p class="card-tag">${item.tag}</p>
        <h3>${item.title}</h3>
        <p class="card-text">${item.text}</p>
        <p class="meta">${item.meta}</p>
      </div>
      ${createToggle(item, progress)}
    </div>
    <a class="card-link ${item.link === "#" ? "is-disabled" : ""}" href="${item.link}" ${item.link === "#" ? 'aria-disabled="true"' : 'target="_blank" rel="noreferrer"'}>${linkLabel}</a>
  `;

  return card;
}

function createArticle(item, progress) {
  const card = document.createElement("article");
  card.className = "article-card";
  const linkLabel = item.link === "#" ? "Ссылка появится позже" : "Читать статью";

  card.innerHTML = `
    <div class="card-top">
      <div class="card-content">
        <h3>${item.title}</h3>
        <p class="article-text">${item.text}</p>
      </div>
      ${createToggle(item, progress)}
    </div>
    <a class="card-link ${item.link === "#" ? "is-disabled" : ""}" href="${item.link}" ${item.link === "#" ? 'aria-disabled="true"' : 'target="_blank" rel="noreferrer"'}>${linkLabel}</a>
  `;

  return card;
}

function updateProgressUi(progress) {
  const allItems = [...courseData.meetings, ...courseData.resources, ...courseData.articles];
  const completedCount = allItems.filter((item) => progress[item.id]).length;
  const percent = allItems.length ? Math.round((completedCount / allItems.length) * 100) : 0;
  const degrees = Math.round((percent / 100) * 360);

  progressValue.textContent = `${percent}%`;
  progressCaption.textContent =
    completedCount === 0
      ? "Пока ничего не отмечено"
      : `Отмечено материалов: ${completedCount} из ${allItems.length}`;

  progressRing.style.background = `conic-gradient(var(--accent) ${degrees}deg, rgba(217, 108, 63, 0.12) ${degrees}deg)`;
}

function renderPage() {
  const progress = loadProgress();

  meetingList.innerHTML = "";
  resourceList.innerHTML = "";
  articleList.innerHTML = "";

  courseData.meetings.forEach((item) => {
    meetingList.appendChild(createCard(item, progress));
  });

  courseData.resources.forEach((item) => {
    resourceList.appendChild(createCard(item, progress));
  });

  courseData.articles.forEach((item) => {
    articleList.appendChild(createArticle(item, progress));
  });

  updateProgressUi(progress);
}

document.addEventListener("change", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLInputElement)) {
    return;
  }

  if (!target.matches("[data-item-id]")) {
    return;
  }

  const progress = loadProgress();
  progress[target.dataset.itemId] = target.checked;
  saveProgress(progress);
  renderPage();
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (target.matches(".is-disabled")) {
    event.preventDefault();
  }
});

resetButton.addEventListener("click", () => {
  localStorage.removeItem(storageKey);
  renderPage();
});

renderPage();
