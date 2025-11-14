# 📈 SEO та Аналітика WebStart Studio

## 🔍 SEO Оптимізація

### Meta Tags

#### Базові Мета-теги

```html
<head>
  <!-- Charset та Viewport -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Title та Description -->
  <title>WebStart Studio - Створення Портфоліо, Резюме та Лендінгів</title>
  <meta
    name="description"
    content="Професійна розробка сучасних сайтів, портфоліо та резюме. PWA, темна тема, AI-сервіси. Від 500 грн."
  />

  <!-- Keywords -->
  <meta
    name="keywords"
    content="створення сайтів, портфоліо, резюме, лендінг, веб-розробка, PWA, AI"
  />

  <!-- Robots -->
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />

  <!-- Author та Copyright -->
  <meta name="author" content="WebStart Studio" />
  <meta name="copyright" content="© 2025 WebStart Studio" />

  <!-- Language -->
  <meta name="language" content="Ukrainian" />
  <meta http-equiv="content-language" content="uk-UA" />
</head>
```

### Open Graph (Facebook/LinkedIn)

```html
<!-- Basic OG Tags -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://webstart.studio/" />
<meta
  property="og:title"
  content="WebStart Studio - Створення Сайтів та Портфоліо"
/>
<meta
  property="og:description"
  content="Професійна розробка сучасних сайтів, портфоліо та резюме"
/>
<meta
  property="og:image"
  content="https://webstart.studio/images/og-image.webp"
/>
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="WebStart Studio" />

<!-- Site Name -->
<meta property="og:site_name" content="WebStart Studio" />

<!-- Locale -->
<meta property="og:locale" content="uk_UA" />
<meta property="og:locale:alternate" content="en_US" />
<meta property="og:locale:alternate" content="pl_PL" />
```

### Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@webstartstudio" />
<meta name="twitter:creator" content="@webstartstudio" />
<meta name="twitter:title" content="WebStart Studio" />
<meta name="twitter:description" content="Професійна розробка сайтів" />
<meta
  name="twitter:image"
  content="https://webstart.studio/images/twitter-card.webp"
/>
<meta name="twitter:image:alt" content="WebStart Studio" />
```

### Canonical URL

```html
<link rel="canonical" href="https://webstart.studio/" />

<!-- Альтернативні мови -->
<link rel="alternate" hreflang="uk" href="https://webstart.studio/uk" />
<link rel="alternate" hreflang="en" href="https://webstart.studio/en" />
<link rel="alternate" hreflang="pl" href="https://webstart.studio/pl" />
<link rel="alternate" hreflang="x-default" href="https://webstart.studio/" />
```

---

## 🏗️ Structured Data (Schema.org)

### Organization Schema

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WebStart Studio",
    "url": "https://webstart.studio",
    "logo": "https://webstart.studio/images/logo.webp",
    "description": "Професійна розробка сайтів, портфоліо та резюме",
    "foundingDate": "2025",
    "founder": {
      "@type": "Person",
      "name": "Viktor"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UA",
      "addressRegion": "Київська область"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+380-XX-XXX-XXXX",
      "contactType": "Customer Service",
      "email": "webstartstudio978@gmail.com",
      "availableLanguage": ["Ukrainian", "English"]
    },
    "sameAs": [
      "https://www.facebook.com/webstartstudio",
      "https://www.instagram.com/webstartstudio",
      "https://www.linkedin.com/company/webstartstudio"
    ]
  }
</script>
```

### WebSite Schema

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "WebStart Studio",
    "url": "https://webstart.studio",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://webstart.studio/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
</script>
```

### Service Schema

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Веб-розробка",
    "provider": {
      "@type": "Organization",
      "name": "WebStart Studio"
    },
    "areaServed": "UA",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "UAH",
      "price": "500",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "500",
        "maxPrice": "5000"
      }
    }
  }
</script>
```

### BreadcrumbList Schema

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Головна",
        "item": "https://webstart.studio"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Послуги",
        "item": "https://webstart.studio/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Портфоліо",
        "item": "https://webstart.studio/#portfolio"
      }
    ]
  }
</script>
```

---

## 🔒 Content Security Policy

### CSP Meta Tag

```html
<meta
  http-equiv="Content-Security-Policy"
  content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' 
    https://www.googletagmanager.com 
    https://www.google-analytics.com 
    https://clarity.microsoft.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https: blob:;
  font-src 'self' data:;
  connect-src 'self' 
    https://www.google-analytics.com 
    https://clarity.microsoft.com;
  frame-src 'self' https://www.youtube.com;
  media-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;
"
/>
```

### Пояснення Директив

| Директива                   | Призначення                             |
| --------------------------- | --------------------------------------- |
| `default-src 'self'`        | За замовчуванням тільки з того ж домену |
| `script-src`                | Дозволені джерела скриптів              |
| `style-src`                 | Дозволені джерела стилів                |
| `img-src`                   | Зображення з будь-яких HTTPS            |
| `connect-src`               | API запити                              |
| `frame-src`                 | Вбудовані iframe                        |
| `upgrade-insecure-requests` | HTTP → HTTPS                            |

---

## 📊 Google Analytics

### gtag.js Імплементація

```html
<!-- Global Site Tag (gtag.js) -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX", {
    anonymize_ip: true,
    cookie_flags: "SameSite=None;Secure",
  });
</script>
```

### Google Tag Manager

```html
<!-- Google Tag Manager -->
<script>
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != "dataLayer" ? "&l=" + l : "";
    j.async = true;
    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, "script", "dataLayer", "GTM-XXXXXXX");
</script>
<!-- End Google Tag Manager -->

<!-- Google Tag Manager (noscript) -->
<noscript
  ><iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
    height="0"
    width="0"
    style="display:none;visibility:hidden"
  ></iframe
></noscript>
<!-- End Google Tag Manager (noscript) -->
```

### Custom Events

```javascript
// Відстеження кліків на кнопку
document.querySelector(".cta-button").addEventListener("click", () => {
  gtag("event", "button_click", {
    event_category: "engagement",
    event_label: "CTA Button",
    value: 1,
  });
});

// Відстеження скролу
let scrollTracked = false;
window.addEventListener("scroll", () => {
  if (!scrollTracked && window.scrollY > 1000) {
    gtag("event", "scroll_depth", {
      event_category: "engagement",
      event_label: "1000px",
      value: 1000,
    });
    scrollTracked = true;
  }
});

// Відстеження форм
document.querySelector("form").addEventListener("submit", (e) => {
  gtag("event", "form_submit", {
    event_category: "conversion",
    event_label: "Contact Form",
  });
});
```

---

## 📈 Microsoft Clarity

### Інтеграція

```html
<script type="text/javascript">
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", "XXXXXXXXXX");
</script>
```

### Можливості Clarity

- 📹 **Запис сесій** - перегляд поведінки користувачів
- 🔥 **Теплові карти** - де клікають користувачі
- 📊 **Аналітика** - статистика взаємодії
- 🐛 **Виявлення помилок** - автоматичне відстеження JS помилок

---

## 🗺️ Sitemap

### sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <!-- Головна сторінка -->
  <url>
    <loc>https://webstart.studio/</loc>
    <lastmod>2025-11-14</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Послуги -->
  <url>
    <loc>https://webstart.studio/#services</loc>
    <lastmod>2025-11-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Портфоліо -->
  <url>
    <loc>https://webstart.studio/#portfolio</loc>
    <lastmod>2025-11-14</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Ціни -->
  <url>
    <loc>https://webstart.studio/#pricing</loc>
    <lastmod>2025-11-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Контакти -->
  <url>
    <loc>https://webstart.studio/#contact</loc>
    <lastmod>2025-11-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

</urlset>
```

### robots.txt

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: https://webstart.studio/sitemap.xml
```

---

## 🚀 Preload та Prefetch

### Critical Resources

```html
<!-- Preload для критичних ресурсів -->
<link rel="preload" href="dist/styles.css" as="style" />
<link rel="preload" href="scripts/index.js" as="script" />
<link rel="preload" href="images/hero-bg.webp" as="image" />

<!-- Preconnect для зовнішніх доменів -->
<link rel="preconnect" href="https://www.google-analytics.com" />
<link rel="preconnect" href="https://fonts.googleapis.com" />

<!-- DNS-Prefetch -->
<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
```

---

## 📍 Local SEO

### Google My Business

**Structured Data:**

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "WebStart Studio",
    "image": "https://webstart.studio/images/logo.webp",
    "telephone": "+380-XX-XXX-XXXX",
    "email": "webstartstudio978@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UA"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  }
</script>
```

---

## 📊 Динамічна Статистика

### Футер Статистика

```html
<div class="stats-box">
  <div class="stat-item">
    <span class="stat-label">HTML Елементів:</span>
    <span class="stat-value" id="htmlCount">0</span>
  </div>
  <div class="stat-item">
    <span class="stat-label">JS Скриптів:</span>
    <span class="stat-value" id="jsCount">0</span>
  </div>
  <div class="stat-item">
    <span class="stat-label">Відвідувань:</span>
    <span class="stat-value" id="visitCount">0</span>
  </div>
  <div class="stat-item">
    <span class="stat-label">Онлайн:</span>
    <span class="stat-value" id="onlineUsers">0</span>
  </div>
</div>
```

**JavaScript:**

```javascript
// Підрахунок HTML елементів
document.getElementById("htmlCount").textContent =
  document.querySelectorAll("*").length;

// Підрахунок скриптів
document.getElementById("jsCount").textContent =
  document.querySelectorAll("script").length;

// Відвідування (localStorage)
let visits = parseInt(localStorage.getItem("visitCount") || "0");
visits++;
localStorage.setItem("visitCount", visits);
document.getElementById("visitCount").textContent = visits;

// Онлайн користувачі (симуляція)
document.getElementById("onlineUsers").textContent =
  Math.floor(Math.random() * 20) + 5;
```

---

## 🎯 Conversion Tracking

### UTM Parameters

```javascript
// Отримання UTM параметрів
const urlParams = new URLSearchParams(window.location.search);
const utmSource = urlParams.get("utm_source");
const utmMedium = urlParams.get("utm_medium");
const utmCampaign = urlParams.get("utm_campaign");

// Збереження в sessionStorage
if (utmSource) {
  sessionStorage.setItem("utm_source", utmSource);
}

// Відправка в Analytics
if (utmSource) {
  gtag("event", "utm_tracking", {
    source: utmSource,
    medium: utmMedium,
    campaign: utmCampaign,
  });
}
```

---

## 📚 Подальше Читання

- [Метрики Продуктивності →](06-PERFORMANCE-METRICS.md)
- [Технічна Архітектура →](02-TECHNICAL-ARCHITECTURE.md)
- [Дизайн та Стилі →](04-DESIGN-STYLES.md)

---

[⬆ До змісту документації](README.md) | [← Попередній розділ](04-DESIGN-STYLES.md) | [Наступний розділ →](06-PERFORMANCE-METRICS.md)
