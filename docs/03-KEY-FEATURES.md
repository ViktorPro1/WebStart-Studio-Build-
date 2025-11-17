# ✨ Ключові Функції WebStart Studio

## 🌍 Міжнародність (Hreflang)

### 7.1. Підтримувані Мови

- 🇬🇧 English (EN)
- 🇺🇦 Українська (UK) - основна
- 🇵🇱 Polski (PL)
- 🇩🇪 Deutsch (DE)
- 🇫🇷 Français (FR)
- 🇨🇿 Čeština (CZ)
- 🇸🇪 Svenska (SE)

### 7.2. Hreflang Імплементація

**Для Кожної Сторінки:**

```html
<link rel="alternate" hreflang="uk" href="https://webstart.studio/" />
<link
  rel="alternate"
  hreflang="en"
  href="https://webstart.studio/international/en.html"
/>
<link
  rel="alternate"
  hreflang="pl"
  href="https://webstart.studio/international/pl.html"
/>
<link
  rel="alternate"
  hreflang="de"
  href="https://webstart.studio/international/de.html"
/>
<link
  rel="alternate"
  hreflang="fr"
  href="https://webstart.studio/international/fr.html"
/>
<link
  rel="alternate"
  hreflang="cs"
  href="https://webstart.studio/international/cz.html"
/>
<link
  rel="alternate"
  hreflang="sv"
  href="https://webstart.studio/international/se.html"
/>
<link rel="alternate" hreflang="x-default" href="https://webstart.studio/" />
```

**Canonical URL:**

```html
<!-- Українська версія -->
<link rel="canonical" href="https://webstart.studio/" />

<!-- Англійська версія -->
<link rel="canonical" href="https://webstart.studio/international/en.html" />
```

### 7.3. Open Graph Локалізація

Кожна мовна версія має правильний `og:locale`:

```html
<!-- Українська -->
<meta property="og:locale" content="uk_UA" />

<!-- Англійська -->
<meta property="og:locale" content="en_US" />

<!-- Польська -->
<meta property="og:locale" content="pl_PL" />
```

### 7.4. Переваги

✅ **SEO:**

- Google показує правильну мову користувачу
- Краще ранжування в локальних пошуках
- Відсутність дублікатів контенту

✅ **UX:**

- Користувач бачить сайт своєю мовою
- Автоматичне визначення локалі браузера
- Швидке перемикання між мовами

---

## 🎨 Нові Секції

### 8.1. Часті Помилки

**Концепція:**
Інтерактивна секція з топ-5 помилок при створенні резюме/портфоліо.

**Технічна Реалізація:**

```html
<details class="mistake-item">
  <summary>
    <span class="mistake-icon">🚫</span>
    <span class="mistake-title">Занадто багато тексту</span>
  </summary>
  <div class="mistake-content">
    <p>Детальне пояснення...</p>
  </div>
</details>
```

**Переваги `<details>`:**

- ✅ Контент на сторінці (SEO)
- ✅ Користувач сам вибирає що читати
- ✅ Нативна підтримка браузерами
- ✅ Доступність (keyboard navigation)

### 8.2. Для Кого Ми

**Структура:**
Grid з 6 карток для різних типів користувачів:

```css
.audience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}
```

**Картки:**

- Фрілансери
- Випускники
- Стартапи
- Малий бізнес
- Креативники
- Майстри

### 8.3. Самому vs З Нами

**Порівняльна Таблиця:**

| Критерій        | Самому       | З Нами        |
| --------------- | ------------ | ------------- |
| Час             | ❌ 2-4 тижні | ✅ 1-3 дні    |
| Дизайн          | ❌ Шаблонний | ✅ Унікальний |
| Технічні знання | ❌ Потрібні  | ✅ Не треба   |

**Градієнтний Header:**

```css
.vs-table thead {
  background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
}
```

## 📱 Progressive Web App (PWA)

### 1.1. Концепція PWA

PWA забезпечує три основні характеристики:

- **Reliable** - працює офлайн
- **Fast** - миттєве завантаження
- **Engaging** - можна встановити

### 1.2. Service Worker (`sw.js`)

#### Стратегія Кешування

**Cache-First Strategy:**

```javascript
// 1. Спроба з кешу
// 2. Якщо немає - мережа
// 3. Оновлення кешу у фоні
```

**Реалізація:**

```javascript
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
```

#### Життєвий Цикл

```
Install → Activate → Fetch
   ↓         ↓         ↓
 Кеш    Очистка   Cache-First
```

**Install Event:**

```javascript
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("webstart-v1").then((cache) => cache.addAll(CACHE_URLS))
  );
  self.skipWaiting();
});
```

**Activate Event:**

```javascript
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== "webstart-v1")
            .map((key) => caches.delete(key))
        )
      )
  );
});
```

### 1.3. Manifest.json

```json
{
  "name": "WebStart Studio",
  "short_name": "WebStart",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2563eb",
  "icons": [
    {
      "src": "images/icon-192x192.webp",
      "sizes": "192x192",
      "type": "image/webp"
    },
    {
      "src": "images/icon-512x512.webp",
      "sizes": "512x512",
      "type": "image/webp"
    }
  ]
}
```

### 1.4. Банер Оновлень

**HTML:**

```html
<div class="update-banner" id="updateBanner" style="display:none;">
  <p>
    Доступна нова версія! <button onclick="location.reload()">Оновити</button>
  </p>
</div>
```

**Логіка:**

```javascript
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then((reg) => {
    reg.addEventListener("updatefound", () => {
      document.getElementById("updateBanner").style.display = "block";
    });
  });
}
```

---

## 🎨 Динаміка та Інтерактивність

### 2.1. Темна Тема (Dark Mode)

#### Механізм Роботи

**localStorage API:**

```javascript
// Збереження
localStorage.setItem("theme", "dark");

// Отримання
const theme = localStorage.getItem("theme");

// Застосування
if (theme === "dark") {
  document.body.classList.add("dark-mode");
}
```

#### CSS Змінні

```css
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
}

.dark-mode {
  --bg-color: #1a1a1a;
  --text-color: #ffffff;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

#### Toggle Кнопка

```javascript
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
```

### 2.2. Таймер Зворотного Відліку (FOMO)

#### Дата Дедлайну

**30 вересня 2025, 23:59:59**

#### Функція

```javascript
function startCountdown() {
  const deadline = new Date("2025-09-30T23:59:59").getTime();

  setInterval(() => {
    const now = new Date().getTime();
    const distance = deadline - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }, 1000);
}
```

### 2.3. Анімації та Управління Контентом

#### Scroll Reveal

**Концепція:**

- Секції приховані на завантаженні
- Показуються при прокрутці
- Тригер: 85% висоти вікна

**Реалізація:**

```javascript
function reveal() {
  const sections = document.querySelectorAll("section");
  const windowHeight = window.innerHeight;
  const revealPoint = 0.85 * windowHeight;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < revealPoint) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", reveal);
```

**CSS:**

```css
section {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s ease;
}

section.visible {
  opacity: 1;
  transform: translateY(0);
}
```

#### Горизонтальна Прокрутка Галереї

```javascript
const gallery = document.querySelector(".portfolio-gallery");

gallery.addEventListener("wheel", (e) => {
  e.preventDefault();
  gallery.scrollLeft += e.deltaY;
});
```

#### Toggle Секції

```javascript
document.getElementById("toggleTeam").addEventListener("click", () => {
  const teamSection = document.getElementById("teamSection");
  teamSection.style.display =
    teamSection.style.display === "none" ? "block" : "none";
});
```

---

## 🤖 Навігаційний Гід Djon

### 3.1. Концепція

Простий чат-бот для навігації по сайту, що працює на основі **аналізу ключових слів**.

### 3.2. Логіка

```javascript
function handleUserInput() {
  const input = userInput.toLowerCase();

  const responses = {
    контакт: "index.html#contacts",
    послуг: "index.html#services",
    ціни: "index.html#pricing",
    портфоліо: "index.html#portfolio",
  };

  for (let [keyword, link] of Object.entries(responses)) {
    if (input.includes(keyword)) {
      return `Ось посилання: <a href="${link}">${link}</a>`;
    }
  }

  return "Вибачте, не знайдено відповіді.";
}
```

### 3.3. Ключові Слова

| Категорія | Ключові Слова                    |
| --------- | -------------------------------- |
| Контакти  | контакт, зв'язок, email, телефон |
| Послуги   | послуг, сервіс, що ви робите     |
| Ціни      | ціни, вартість, скільки коштує   |
| Портфоліо | портфоліо, роботи, приклади      |

---

## 🧩 Соціальне Підтвердження (Social Proof)

### 4.1. Концепція

Динамічні повідомлення про дії користувачів для підвищення довіри.

### 4.2. Реалізація

**Масив Повідомлень:**

```javascript
const messages = [
  "Андрій щойно створив резюме<br>📍 Київ",
  "Марія перевірила свій лендінг<br>📍 Львів",
  "Олег отримав шаблон для Instagram<br>📍 Одеса",
];
```

**Функція Показу:**

```javascript
function showRandomMessage() {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  const popup = document.getElementById("socialProof");

  popup.innerHTML = msg;
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 5000);
}

// Перше через 2 хв, далі кожні 12 хв
setTimeout(showRandomMessage, 120000);
setInterval(showRandomMessage, 720000);
```

**Стилі:**

```css
#socialProof {
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease;
}

#socialProof.show {
  opacity: 1;
  transform: translateY(0);
}
```

---

## 🚪 Exit Intent Handler

### 5.1. Концепція

Спіймати користувача перед виходом та запропонувати промокод.

### 5.2. Визначення Exit Intent

```javascript
document.addEventListener("mouseleave", (e) => {
  if (e.clientY <= 0) {
    showExitPopup();
  }
});
```

### 5.3. Popup з Промокодом

```javascript
function showExitPopup() {
  const email = prompt("Отримайте знижку 15%! Введіть email:");

  if (email) {
    fetch("YOUR_APPS_SCRIPT_URL", {
      method: "POST",
      body: JSON.stringify({ email, promo: "EXIT15" }),
    });

    alert("Промокод надіслано на " + email);
  }
}
```

### 5.4. Google Apps Script Інтеграція

```javascript
function doPost(e) {
  const data = JSON.parse(e.postData.contents);

  // Email користувачу
  MailApp.sendEmail({
    to: data.email,
    subject: "Ваш промокод -15%",
    body: "Код: EXIT15",
  });

  // Повідомлення адміну
  MailApp.sendEmail({
    to: "admin@webstart.com",
    subject: "Новий лід",
    body: `Email: ${data.email}`,
  });

  return ContentService.createTextOutput("OK");
}
```

---

## 🎓 Сертифікати-Сувеніри

### 6.1. Концепція

Персоналізовані сертифікати після проходження міні-курсів.

### 6.2. Процес Отримання

1. Користувач переглядає курс
2. Пише у Telegram/Viber
3. Отримує PDF-сертифікат

### 6.3. Можливості

- Додати до портфоліо
- Поділитися в соцмережах
- Роздрукувати

---

## 🌍 Міжнародність (i18n)

### 7.1. Підтримувані Мови

- 🇬🇧 English (EN)
- 🇺🇦 Українська (UK)
- 🇵🇱 Polski (PL)
- 🇩🇪 Deutsch (DE)
- 🇫🇷 Français (FR)
- 🇨🇿 Čeština (CZ)
- 🇸🇪 Svenska (SE)

### 7.2. Автоматичне Визначення

```javascript
const userLang = navigator.language || navigator.userLanguage;
const lang = userLang.split("-")[0]; // 'uk-UA' → 'uk'

if (["en", "uk", "pl", "de", "fr", "cz", "se"].includes(lang)) {
  loadLanguage(lang);
} else {
  loadLanguage("en"); // fallback
}
```

---

## 🤖 AI Інтеграція

### 8.1. AI Сервіси

**Розділ на сайті:**

- Гайд по промптингу
- Приклади застосування
- Безкоштовні інструменти

**Інструменти:**

- ChatGPT
- Claude
- Midjourney
- DALL-E

### 8.2. Workflow Автоматизація

**Платформи:**

- n8n
- Zapier
- Make.com

---

## 📚 Подальше Читання

- [Дизайн та Стилі →](04-DESIGN-STYLES.md)
- [SEO та Аналітика →](05-SEO-ANALYTICS.md)
- [Технічна Архітектура →](02-TECHNICAL-ARCHITECTURE.md)

---

[⬆ До змісту документації](README.md) | [← Попередній розділ](02-TECHNICAL-ARCHITECTURE.md) | [Наступний розділ →](04-DESIGN-STYLES.md)
