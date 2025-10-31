// 🔥 Автоматичне оновлення - не потрібно нічого міняти вручну
const CACHE_NAME = `webstart-cache-${self.registration.scope}`;
const urlsToCache = [
    "/",
    "/index.html",
    '/css/main.css',
    "/scripts/main.js",
    "/scripts/ui-scroll.js",
    "/scripts/analytics.js",
    "/scripts/instruction.js",
    "/scripts/init.js",
    "/scripts/calculator.js",
    "/scripts/pwa-loader.js",
    "/scripts/social-proof.js",
    "/scripts/script.js",
    "/scripts/structured-data.js",
    "/scripts/exit-intent.js",
    "/scripts/footer-year.js",
    "/icons/icon-192x192.webp",
    "/icons/icon-512x512.webp",

    // Фото для відгуків
    "/foto/olena.webp",
    "/foto/andriy.webp",
    "/foto/mariya.webp",
    "/foto/nadija.webp",
    "/foto/volodumer.webp",
    "/foto/vika.webp",
    "/foto/sergey.webp",
    "/foto/bogdan.webp",
    "/foto/sofia.webp",

    // CSS модулі та відповідні HTML
    "/other_styles/404.css", "/pages/404.html",
    "/other_styles/achievement.css", "/pages/achievement.html",
    "/other_styles/adaptive-info.css", "/pages/adaptive-info.html",
    "/other_styles/ai-prompting.css", "/pages/ai-prompting.html",
    "/other_styles/animations-info.css", "/pages/animations-info.html",
    "/other_styles/blog-info.css", "/pages/blog-info.html",
    "/other_styles/blog-landing-trends.css", "/pages/blog-landing-trends.html",
    "/other_styles/blog-portfolio-tips.css", "/pages/blog-portfolio-tips.html",
    "/other_styles/blog-resume-tips.css", "/pages/blog-resume-tips.html",
    "/other_styles/calc.css", "/pages/calc.html",
    "/other_styles/contact.css", "/pages/contact.html",
    "/other_styles/declaration.css", "/pages/declaration.html",
    "/other_styles/djon.css", "/pages/djon.html",
    "/other_styles/ecommerce-info.css", "/pages/ecommerce-info.html",
    "/other_styles/instruction.css", "/pages/instruction.html",
    "/other_styles/offer.css", "/pages/offer.html",
    "/other_styles/pc-service.css", "/pages/pc-service.html",
    "/other_styles/personalized-landing-info.css", "/pages/personalized-landing-info.html",
    "/other_styles/portfolio-info.css", "/pages/portfolio-info.html",
    "/other_styles/portfolio-text-generator.css", "/pages/portfolio-text-generator.html",
    "/other_styles/price.css", "/pages/price.html",
    "/other_styles/privacy.css", "/pages/privacy.html",
    "/other_styles/project-checker.css", "/pages/project-checker.html",
    "/other_styles/prompt-editor.css", "/pages/prompt-editor.html",
    "/other_styles/pwa-info.css", "/pages/pwa-info.html",
    "/other_styles/resume-info.css", "/pages/resume-info.html",
    "/other_styles/resume-structure-generator.css", "/pages/resume-structure-generator.html",
    "/other_styles/service-recommendation.css", "/pages/service-recommendation.html",
    "/other_styles/skills.css", "/pages/skills.html",
    "/other_styles/socialmedia-info.css", "/pages/socialmedia-info.html",
    "/other_styles/target.css", "/pages/target.html",
    "/other_styles/technical-details.css", "/pages/technical-details.html",
    "/other_styles/terms.css", "/pages/terms.html",
    "/other_styles/utm.css", "/pages/utm.html",
    "/other_styles/webapp-info.css", "/pages/webapp-info.html",
    "/other_styles/ai-automatization.css", "/pages/ai-automatization.html"
];

// Встановлення SW - автоматично оновлює кеш
self.addEventListener("install", event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache =>
            Promise.allSettled(
                urlsToCache.map(url =>
                    cache.add(url).catch(err => {
                        console.warn(`⚠️ Не вдалось кешувати: ${url}`, err.message);
                    })
                )
            )
        )
    );
});

// Активація SW - ВИДАЛЯЄ всі старі кеші
self.addEventListener("activate", event => {
    clients.claim();
    event.waitUntil(
        caches.keys().then(names =>
            Promise.all(
                names.map(name => {
                    // Видаляємо ВСІ кеші при кожному оновленні
                    if (name !== CACHE_NAME) {
                        console.log(`🗑️ Видалено старий кеш: ${name}`);
                        return caches.delete(name);
                    }
                })
            )
        ).then(() => {
            // Повідомляємо всі вкладки про оновлення
            return self.clients.matchAll().then(clients => {
                clients.forEach(client => client.postMessage({ type: 'CACHE_UPDATED' }));
            });
        })
    );
});

// Fetch - Network First для фото, Cache First для решти
self.addEventListener("fetch", event => {
    if (event.request.method !== "GET") return;

    const url = new URL(event.request.url);
    if (url.origin !== location.origin) return;

    // Для фото - пріоритет мережі (завжди свіжі)
    if (url.pathname.includes('/foto/')) {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME)
                        .then(cache => cache.put(event.request, responseClone))
                        .catch(err => console.warn('Помилка кешування фото:', err));
                    return response;
                })
                .catch(() =>
                    caches.match(event.request)
                        .then(cached => cached || new Response("📷 Фото недоступне", {
                            status: 503,
                            statusText: "Service Unavailable"
                        }))
                )
        );
        return;
    }

    // Для інших ресурсів - Cache First (швидше)
    event.respondWith(
        caches.match(event.request).then(cached => {
            // Якщо є в кеші - віддаємо, але в фоні оновлюємо
            if (cached) {
                // Оновлення в фоні
                fetch(event.request)
                    .then(response => {
                        if (response && response.status === 200) {
                            const responseClone = response.clone();
                            caches.open(CACHE_NAME)
                                .then(cache => cache.put(event.request, responseClone));
                        }
                    })
                    .catch(() => { });

                return cached;
            }

            // Якщо немає в кеші - завантажуємо
            return fetch(event.request)
                .then(response => {
                    if (!response || response.status !== 200 || response.type === 'error') {
                        return response;
                    }

                    const responseClone = response.clone();
                    caches.open(CACHE_NAME)
                        .then(cache => cache.put(event.request, responseClone))
                        .catch(err => console.warn('Помилка кешування:', err));

                    return response;
                })
                .catch(() =>
                    new Response("⚠️ Немає підключення", {
                        status: 503,
                        statusText: "Service Unavailable"
                    })
                );
        })
    );
});