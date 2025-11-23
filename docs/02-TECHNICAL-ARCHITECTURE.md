# 🛠️ Технічна Архітектура WebStart Studio

## 📂 Структура Проєкту

```
├── pages/ # Додаткові сторінки
│ ├── google-ads-calc.html # Google Ads калькулятор
│ ├── google-ads-comparison.html # Порівняння платформ
│ ├── google-ads-glossary.html # Глосарій термінів
│ ├── google-ads-generator.html # Генератор оголошень
│ └── google-ads-keywords.html # Підбір ключових слів
│
├── css/ # Стилі
│ ├── google-ads-calc.css
│ ├── google-ads-comparison.css
│ ├── google-ads-glossary.css
│ ├── google-ads-generator.css
│ └── google-ads-keywords.css
│
├── js/ # JavaScript
│ ├── google-ads-calc.js
│ ├── google-ads-comparison.js
│ ├── google-ads-glossary.js
│ ├── google-ads-generator.js
│ └── google-ads-keywords.js


WebStart-Studio-Build-/
├── index.html                 # Головна сторінка
├── djon.html                  # Навігаційний гід
├── cabinet.html               # Кабінет клієнта
├── 404.html                   # Сторінка помилки
│
├── css/                       # Стилі (модульна структура)
│   ├── main.css              # Головний імпорт
│   ├── base/                 # Базові стилі
│   ├── layout/               # Макет
│   ├── components/           # Компоненти
│   ├── sections/             # Секції сторінки
│   ├── features/             # Функціональність
│   ├── themes/               # Теми
│   └── utils/                # Утиліти
│
├── styles/                    # Старі стилі (для сумісності)
│   ├── styles.css
│   └── base.css
│
├── scripts/                   # JavaScript модулі
│   ├── index.js              # Головний файл
│   ├── modules/
│   │   ├── ui/               # UI компоненти
│   │   ├── core/             # Основна логіка
│   │   ├── features/         # Функції
│   │   └── init-modules/     # Ініціалізація
│   └── cabinet.js            # Логіка кабінету
│
├── dist/                      # Збірка (production)
│   └── styles.css            # Об'єднаний CSS
│
├── images/                    # Зображення (WebP)
├── sw.js                      # Service Worker
├── manifest.json              # PWA маніфест
│
├── .cursorrules              # Cursor AI
├── .editorconfig             # Форматування
├── .ai/                      # AI контекст
├── .vscode/                  # VS Code налаштування
├── .github/                  # GitHub конфігурація
│
├── docs/                     # Документація
├── package.json              # NPM конфігурація
├── concat-css.js             # Build скрипт
│
├── CONTRIBUTING.md
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── LICENSE
└── README.md
```

---

## 🎨 CSS Архітектура

### Модульна Система

```
css/
├── main.css                    # Головний імпорт
│
├── base/
│   ├── reset.css              # CSS Reset
│   └── typography.css         # Типографія
│
├── layout/
│   ├── header.css             # Шапка
│   ├── navigation.css         # Навігація
│   └── footer.css             # Футер
│
├── components/
│   ├── buttons.css            # Кнопки
│   ├── cards.css              # Картки
│   ├── modals.css             # Модальні вікна
│   ├── forms.css              # Форми
│   └── tables.css             # Таблиці
│
├── sections/
│   ├── webstart_lab.css       # WebStart Lab
│   ├── marquee.css            # Біжучий рядок
│   ├── gallery.css            # Галерея
│   ├── services.css           # Послуги
│   ├── portfolio.css          # Портфоліо
│   ├── pricing.css            # Ціни
│   ├── testimonials.css       # Відгуки
│   ├── faq.css                # FAQ
│   ├── contact.css            # Контакти
│   └── ...                    # Інші секції
│
├── features/
│   ├── pwa.css                # PWA стилі
│   ├── cookies.css            # Cookie банер
│   ├── dark_mode.css          # Темна тема
│   ├── social_proof.css       # Social Proof
│   └── exit_intent.css        # Exit Intent
│
├── themes/
│   └── dark_mode.css          # Темна тема
│
└── utils/
    ├── animations.css         # Анімації
    └── responsive.css         # Медіа-запити
```

### Стратегія Імпорту

**Для розробки** (main.css):

```css
@import "base/reset.css";
@import "base/typography.css";
@import "layout/header.css";
/* ... всі модулі ... */
```

**Для продакшену** (dist/styles.css):

- Всі файли об'єднані в один
- Мінімізовано
- Готово до деплою

---

## 📜 JavaScript Архітектура

### Модульна Організація

```
scripts/
├── index.js                   # Головний файл, ініціалізація
│
├── modules/
│   ├── ui/                   # UI компоненти
│   │   ├── darkMode.js       # Темна тема
│   │   ├── navigation.js     # Навігація
│   │   ├── modal.js          # Модальні вікна
│   │   └── animations.js     # Анімації
│   │
│   ├── core/                 # Основна логіка
│   │   ├── storage.js        # localStorage
│   │   ├── api.js            # API запити
│   │   └── utils.js          # Утиліти
│   │
│   ├── features/             # Функції
│   │   ├── countdown.js      # Таймер
│   │   ├── socialProof.js    # Social Proof
│   │   ├── exitIntent.js     # Exit Intent
│   │   └── analytics.js      # Аналітика
│   │
│   └── init-modules/         # Ініціалізація
│       ├── initDarkMode.js
│       ├── initCountdown.js
│       └── initScrollReveal.js
│
└── cabinet.js                # Окремий скрипт для кабінету
```

### Принципи Модулів

**Кожен модуль:**

1. Експортує функцію `init*()`
2. Ізольований від інших
3. Має чіткі залежності
4. Легко тестується

**Приклад модуля:**

```javascript
// modules/ui/darkMode.js
export function initDarkMode() {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  }

  // Event listeners...
}
```

---

## 🗂️ Технологічний Стек

### Frontend

| Технологія     | Версія | Роль                    |
| -------------- | ------ | ----------------------- |
| HTML5          | -      | Семантична розмітка     |
| CSS3           | -      | Стилізація, анімації    |
| JavaScript     | ES6+   | Логіка, інтерактивність |
| Service Worker | -      | PWA, офлайн-режим       |

### Build Tools

| Інструмент    | Призначення       |
| ------------- | ----------------- |
| concat-css.js | Об'єднання CSS    |
| NPM Scripts   | Автоматизація     |
| Live Server   | Локальна розробка |
| Git           | Версіонування     |

### Deployment

| Платформа  | Роль               |
| ---------- | ------------------ |
| Netlify    | Хостинг, CDN       |
| GitHub     | Репозиторій, CI/CD |
| Cloudflare | DNS, безпека       |

---

## 📋 Таблиця Файлів та Відповідальність

### Критичні Файли

| Файл           | Технологія     | Ключова Роль                                       |
| -------------- | -------------- | -------------------------------------------------- |
| `index.html`   | HTML5/SEO/CSP  | Головна сторінка, GTM, PWA-маніфест, Schema Markup |
| `djon.html`    | HTML5/JS       | Інтерактивний навігаційний гід                     |
| `cabinet.html` | HTML5/JS       | Кабінет клієнта, 3 кроки, Viber-інтеграція         |
| `script.js`    | Vanilla JS     | Dark Mode, таймер, scroll reveal, динаміка         |
| `styles.css`   | CSS3           | Основні стилі, адаптивність, Dark Mode             |
| `base.css`     | CSS3           | Службові сторінки (404, UTM)                       |
| `sw.js`        | Service Worker | PWA, cache-first, офлайн-режим                     |

### Допоміжні Файли

| Файл            | Призначення       |
| --------------- | ----------------- |
| `manifest.json` | PWA конфігурація  |
| `.cursorrules`  | Cursor AI правила |
| `.editorconfig` | Форматування коду |
| `package.json`  | NPM скрипти       |
| `concat-css.js` | CSS білдер        |

---

## 🔧 Build Процес

### NPM Scripts

```json
{
  "scripts": {
    "build:css": "node concat-css.js",
    "dev": "npx http-server -p 8000",
    "deploy": "npm run build:css && netlify deploy --prod"
  }
}
```

### Етапи Білду

1. **Розробка:**

   ```bash
   npm run dev
   # Використовується css/main.css з @import
   ```

2. **Білд:**

   ```bash
   npm run build:css
   # Створює dist/styles.css
   ```

3. **Деплой:**
   ```bash
   npm run deploy
   # Білд + публікація на Netlify
   ```

---

## 🗄️ Система Управління Станом

### localStorage

**Ключі:**

- `theme` - темна/світла тема
- `language` - обрана мова
- `cookieConsent` - згода на cookies
- `visitCount` - кількість відвідувань

**Приклад:**

```javascript
// Збереження
localStorage.setItem("theme", "dark");

// Отримання
const theme = localStorage.getItem("theme");

// Видалення
localStorage.removeItem("theme");
```

### sessionStorage

**Використання:**

- Тимчасові дані сесії
- UTM параметри
- Форми (попередній стан)

---

## 🔐 Безпека

### Content Security Policy

```html
<meta
  http-equiv="Content-Security-Policy"
  content="
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
        style-src 'self' 'unsafe-inline';
        img-src 'self' data: https:;
        font-src 'self' data:;
        connect-src 'self' https://www.google-analytics.com;
      "
/>
```

### HTTPS

- SSL/TLS сертифікат від Netlify
- Автоматичне перенаправлення HTTP → HTTPS
- HSTS заголовок

---

## 📊 Моніторинг

### Аналітика

**Google Analytics (gtag.js):**

```javascript
gtag("config", "G-XXXXXXXXXX");
gtag("event", "page_view");
```

**Microsoft Clarity:**

```javascript
clarity("track", "custom_event");
```

### Метрики

- Page views
- User sessions
- Conversion rate
- Core Web Vitals
- Error tracking

---

## 🔄 CI/CD Pipeline

### GitHub Actions (майбутнє)

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm run build:css
      - run: netlify deploy --prod
```

### Netlify Auto Deploy

- Автоматичний деплой з GitHub
- Preview для PR
- Rollback функція

---

## 📚 Подальше Читання

- [Ключові Функції →](03-KEY-FEATURES.md)
- [Дизайн та Стилі →](04-DESIGN-STYLES.md)
- [Швидкий Старт →](07-QUICK-START.md)

---

[⬆ До змісту документації](README.md) | [← Попередній розділ](01-PROJECT-OVERVIEW.md) | [Наступний розділ →](03-KEY-FEATURES.md)
