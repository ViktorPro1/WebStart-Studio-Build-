# 🎨 Дизайн та Стилі WebStart Studio

## 🎯 Дизайн-Система

### Колірна Палітра

#### Світла Тема

```css
:root {
  --primary: #2563eb; /* Синій */
  --secondary: #10b981; /* Зелений */
  --accent: #f59e0b; /* Помаранчевий */
  --bg-primary: #ffffff; /* Білий фон */
  --bg-secondary: #f3f4f6; /* Сірий фон */
  --text-primary: #111827; /* Чорний текст */
  --text-secondary: #6b7280; /* Сірий текст */
  --border: #e5e7eb; /* Рамки */
}
```

#### Темна Тема

```css
.dark-mode {
  --primary: #3b82f6; /* Світліший синій */
  --secondary: #34d399; /* Світліший зелений */
  --accent: #fbbf24; /* Світліший помаранчевий */
  --bg-primary: #1a1a1a; /* Темний фон */
  --bg-secondary: #2d2d2d; /* Сірий фон */
  --text-primary: #f9fafb; /* Білий текст */
  --text-secondary: #d1d5db; /* Світло-сірий текст */
  --border: #374151; /* Темні рамки */
}
```

### Типографія

```css
:root {
  /* Шрифти */
  --font-primary: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  --font-mono: "SF Mono", Consolas, "Liberation Mono", Monaco, monospace;

  /* Розміри */
  --text-xs: 0.75rem; /* 12px */
  --text-sm: 0.875rem; /* 14px */
  --text-base: 1rem; /* 16px */
  --text-lg: 1.125rem; /* 18px */
  --text-xl: 1.25rem; /* 20px */
  --text-2xl: 1.5rem; /* 24px */
  --text-3xl: 1.875rem; /* 30px */
  --text-4xl: 2.25rem; /* 36px */
  --text-5xl: 3rem; /* 48px */

  /* Вага */
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

### Відступи та Розміри

```css
:root {
  /* Spacing */
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem; /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem; /* 16px */
  --space-5: 1.25rem; /* 20px */
  --space-6: 1.5rem; /* 24px */
  --space-8: 2rem; /* 32px */
  --space-10: 2.5rem; /* 40px */
  --space-12: 3rem; /* 48px */
  --space-16: 4rem; /* 64px */

  /* Border Radius */
  --radius-sm: 0.25rem; /* 4px */
  --radius-md: 0.5rem; /* 8px */
  --radius-lg: 1rem; /* 16px */
  --radius-xl: 1.5rem; /* 24px */
  --radius-full: 9999px; /* Повне */
}
```

---

## 📂 CSS Архітектура

### Структура Модулів

```
css/
├── main.css                    # Головний імпорт
│
├── base/
│   ├── reset.css              # Скидання стилів
│   └── typography.css         # Базова типографія
│
├── layout/
│   ├── header.css             # Шапка сайту
│   ├── navigation.css         # Головне меню
│   └── footer.css             # Футер з логотипом
│
├── components/
│   ├── buttons.css            # Стилі кнопок
│   ├── cards.css              # Картки
│   ├── modals.css             # Модальні вікна
│   ├── forms.css              # Форми вводу
│   └── tables.css             # Таблиці
│
├── sections/
│   ├── hero.css               # Головний екран
│   ├── services.css           # Секція послуг
│   ├── portfolio.css          # Портфоліо
│   ├── pricing.css            # Ціни
│   ├── testimonials.css       # Відгуки
│   ├── faq.css                # FAQ
│   └── contact.css            # Контакти
│
├── features/
│   ├── pwa.css                # PWA стилі
│   ├── cookies.css            # Cookie банер
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

### Методологія BEM

**Block Element Modifier:**

```css
/* Block */
.card {
}

/* Element */
.card__title {
}
.card__content {
}

/* Modifier */
.card--featured {
}
.card--dark {
}
```

**Приклад:**

```html
<div class="card card--featured">
  <h3 class="card__title">Заголовок</h3>
  <p class="card__content">Контент картки</p>
</div>
```

---

## 🎭 Компоненти

### Кнопки

```css
/* Базова кнопка */
.btn {
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
  transition: all 0.3s ease;
  cursor: pointer;
}

/* Основна кнопка */
.btn--primary {
  background: var(--primary);
  color: white;
}

.btn--primary:hover {
  background: #1e40af;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
}

/* Вторинна кнопка */
.btn--secondary {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
}

/* Повна ширина */
.btn--block {
  width: 100%;
}
```

### Картки

```css
.card {
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--radius-md);
  margin-bottom: var(--space-4);
}

.card__title {
  font-size: var(--text-2xl);
  font-weight: var(--font-bold);
  margin-bottom: var(--space-3);
}

.card__description {
  color: var(--text-secondary);
  line-height: 1.6;
}
```

### Модальні Вікна

```css
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.modal--active {
  opacity: 1;
  pointer-events: all;
}

.modal__content {
  background: var(--bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--space-8);
  max-width: 600px;
  width: 90%;
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.modal--active .modal__content {
  transform: scale(1);
}
```

---

## 🎬 Анімації

### Scroll Reveal

```css
section {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

section.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Hover Ефекти

```css
/* Зум картинки */
.zoom-effect {
  overflow: hidden;
}

.zoom-effect img {
  transition: transform 0.5s ease;
}

.zoom-effect:hover img {
  transform: scale(1.1);
}

/* Неонове світло */
.neon-border {
  border: 2px solid var(--primary);
  box-shadow: 0 0 10px var(--primary);
  transition: all 0.3s ease;
}

.neon-border:hover {
  box-shadow: 0 0 20px var(--primary), 0 0 40px var(--primary);
}
```

### Loading Спінер

```css
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid var(--border);
  border-top-color: var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
```

---

## 📱 Адаптивність

### Mobile-First Підхід

```css
/* Мобільні (за замовчуванням) */
.container {
  padding: var(--space-4);
}

/* Планшети */
@media (min-width: 768px) {
  .container {
    padding: var(--space-6);
  }
}

/* Десктоп */
@media (min-width: 1024px) {
  .container {
    padding: var(--space-8);
    max-width: 1280px;
    margin: 0 auto;
  }
}

/* Великі екрани */
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
```

### Breakpoints

```css
:root {
  --breakpoint-sm: 640px; /* Мобільні ландшафт */
  --breakpoint-md: 768px; /* Планшети */
  --breakpoint-lg: 1024px; /* Невеликі ноутбуки */
  --breakpoint-xl: 1280px; /* Десктоп */
  --breakpoint-2xl: 1536px; /* Великі екрани */
}
```

### Grid System

```css
.grid {
  display: grid;
  gap: var(--space-6);
}

/* Мобільні: 1 колонка */
.grid {
  grid-template-columns: 1fr;
}

/* Планшети: 2 колонки */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Десктоп: 3 колонки */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## 🛠️ Build Процес

### concat-css.js

**Створення файлу:**

```javascript
const fs = require("fs");
const path = require("path");

const cssFiles = [
  "css/base/reset.css",
  "css/base/typography.css",
  "css/layout/header.css",
  "css/layout/navigation.css",
  "css/layout/footer.css",
  // ... всі інші файли
];

let combinedCSS = "";

cssFiles.forEach((file) => {
  const content = fs.readFileSync(file, "utf8");
  combinedCSS += content + "\n\n";
});

const distDir = path.join(__dirname, "dist");
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

fs.writeFileSync(path.join(distDir, "styles.css"), combinedCSS, "utf8");

console.log("✅ CSS скомпільовано в dist/styles.css");
```

### Використання

**Розробка:**

```html
<link rel="stylesheet" href="css/main.css" />
```

**Продакшн:**

```html
<link rel="stylesheet" href="dist/styles.css" />
```

**NPM Scripts:**

```json
{
  "scripts": {
    "build:css": "node concat-css.js",
    "watch:css": "nodemon --watch css -e css --exec npm run build:css"
  }
}
```

---

## 🎨 Спеціальні Ефекти

### Неоновий Футер

```css
.footer-nav {
  border: 2px solid var(--primary);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: 0 0 15px rgba(37, 99, 235, 0.3);
  transition: all 0.3s ease;
}

.footer-nav:hover {
  box-shadow: 0 0 25px rgba(37, 99, 235, 0.5), 0 0 50px rgba(37, 99, 235, 0.3);
}
```

### Градієнтний Текст

```css
.gradient-text {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Український Прапор

```css
.flag-ua {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 30px;
  z-index: 999;
}

.flag-ua::before {
  content: "";
  position: absolute;
  top: 0;
  width: 100%;
  height: 50%;
  background: #0057b7; /* Синій */
}

.flag-ua::after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background: #ffd700; /* Жовтий */
}
```

---

## ♿ Доступність

### Focus Стани

```css
a:focus,
button:focus,
input:focus {
  outline: 3px solid var(--primary);
  outline-offset: 2px;
}

/* Видалити outline для миші */
a:focus:not(:focus-visible),
button:focus:not(:focus-visible) {
  outline: none;
}
```

### Skip Navigation

```css
.skip-nav {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--primary);
  color: white;
  padding: var(--space-2) var(--space-4);
  z-index: 100;
}

.skip-nav:focus {
  top: 0;
}
```

### Контрастність

```css
/* WCAG AA мінімум 4.5:1 */
:root {
  --contrast-ratio: 4.5;
}

/* Перевірка контрасту */
.text-primary {
  color: #111827;
} /* 15:1 на білому */
.text-secondary {
  color: #6b7280;
} /* 5:1 на білому */
```

---

## 📚 Подальше Читання

- [SEO та Аналітика →](05-SEO-ANALYTICS.md)
- [Метрики Продуктивності →](06-PERFORMANCE-METRICS.md)
- [Ключові Функції →](03-KEY-FEATURES.md)

---

[⬆ До змісту документації](README.md) | [← Попередній розділ](03-KEY-FEATURES.md) | [Наступний розділ →](05-SEO-ANALYTICS.md)
