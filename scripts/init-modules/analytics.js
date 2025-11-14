// 🔹 Відкладена аналітика: GTM (GA4), Clarity, Web Vitals
export function initAnalytics() {

    // 🔹 Ініціалізація GTM
    function initGTM() {
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        window.gtag = gtag; // глобальна доступність
        gtag("js", new Date());
        gtag("config", "G-PNL84GTKES"); // заміни на свій ID
    }

    // 🔹 Відправка Web Vitals у GA
    function sendToAnalytics({ name, delta, id }) {
        if (typeof gtag !== 'function') return;
        gtag('event', name, {
            event_category: 'Web Vitals',
            event_label: id,
            value: Math.round(name === 'CLS' ? delta * 1000 : delta),
            non_interaction: true
        });
    }

    // 🔹 Запуск Web Vitals після завантаження GTM
    function runVitals() {
        if (typeof getCLS === 'function') getCLS(sendToAnalytics);
        if (typeof getFID === 'function') getFID(sendToAnalytics);
        if (typeof getLCP === 'function') getLCP(sendToAnalytics);
        if (typeof getFCP === 'function') getFCP(sendToAnalytics);
        if (typeof getTTFB === 'function') getTTFB(sendToAnalytics);
    }

    // 🔹 Завантаження сторонніх скриптів
    function loadScripts() {

        // --- GTM (GA4)
        const gtmScript = document.createElement('script');
        gtmScript.src = "https://www.googletagmanager.com/gtag/js?id=G-PNL84GTKES";
        gtmScript.async = true;
        gtmScript.onload = () => {
            initGTM();

            // --- Web Vitals після GTM
            if (!window.webVitalsLoaded) {
                const vitalsScript = document.createElement('script');
                vitalsScript.src = "scripts/vendor/web-vitals.iife.js";
                vitalsScript.onload = runVitals;
                vitalsScript.onerror = () => {
                    console.warn('⚠️ Web Vitals не завантажено');
                };
                document.head.appendChild(vitalsScript);
                window.webVitalsLoaded = true;
            }
        };
        gtmScript.onerror = () => {
            console.warn('⚠️ Google Tag Manager недоступний');
        };
        document.head.appendChild(gtmScript);

        // --- Microsoft Clarity з резервним CDN
        try {
            (function (c, l, a, r, i, t, y) {
                c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
                t = document.createElement(r);
                t.async = 1;
                t.src = "https://www.clarity.ms/tag/" + i;

                // Якщо основне джерело недоступне → підключаємо CDN
                t.onerror = function () {
                    console.warn('⚠️ Clarity основний сервер недоступний. Завантаження з CDN...');

                    const fallback = document.createElement(r);
                    fallback.async = 1;
                    fallback.src = "https://cdn.jsdelivr.net/gh/microsoft/clarity@latest/clarity.js";
                    fallback.onerror = function () {
                        console.warn('❌ Clarity CDN також недоступний (ad blocker)');
                    };
                    fallback.onload = function () {
                        console.log('✅ Clarity завантажено з резервного CDN');
                    };
                    document.head.appendChild(fallback);
                };

                t.onload = function () {
                    console.log('✅ Clarity завантажено успішно');
                };

                y = document.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", "slktbp5ngx");
        } catch (e) {
            console.warn('❌ Clarity не вдалося завантажити:', e);
        }

    }

    // 🔹 Запуск після DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadScripts);
    } else {
        loadScripts();
    }
}
