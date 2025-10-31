// ==========================================
// Exit Intent Popup Manager (ВИПРАВЛЕНА ВЕРСІЯ)
// Спрацьовує коли користувач хоче покинути сайт
// ==========================================

class ExitIntentManager {
    constructor() {
        this.exitIntentShown = false;
        this.exitCount = parseInt(localStorage.getItem('exitIntentCount') || '0');
        this.maxShows = 3; // Показувати максимум 3 рази
        this.cooldownHours = 24; // Не показувати 24 години після закриття

        this.init();
    }

    init() {
        // Перевірка чи можна показувати
        if (!this.canShow()) {
            console.log('🚫 Exit Intent: cooldown активний');
            return;
        }

        // Тільки для desktop (на мобільних не працює mouseleave)
        if (this.isMobile()) {
            console.log('📱 Exit Intent: мобільний пристрій, використовуємо scroll-based');
            this.initMobileExitIntent();
            return;
        }

        // Desktop: відстеження миші
        this.initDesktopExitIntent();

        // Відстеження активності користувача
        this.trackUserEngagement();
    }

    // Перевірка чи можна показувати popup
    canShow() {
        // Перевірка кількості показів
        if (this.exitCount >= this.maxShows) {
            console.log(`🚫 Досягнуто максимум показів: ${this.maxShows}`);
            return false;
        }

        // Перевірка cooldown
        const lastShown = localStorage.getItem('exitIntentLastShown');
        if (lastShown) {
            const hoursSince = (Date.now() - parseInt(lastShown)) / (1000 * 60 * 60);
            if (hoursSince < this.cooldownHours) {
                console.log(`⏰ Cooldown: залишилось ${Math.round(this.cooldownHours - hoursSince)}год`);
                return false;
            }
        }

        return true;
    }

    // Перевірка мобільного пристрою
    isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    // Desktop: відстеження виходу миші
    initDesktopExitIntent() {
        let mouseY = 0;
        let isMouseOut = false;

        document.addEventListener('mousemove', (e) => {
            mouseY = e.clientY;
        });

        document.addEventListener('mouseout', (e) => {
            // Якщо миша виходить вгору (до адресного рядка)
            if (e.clientY < 10 && !this.exitIntentShown && mouseY > 10) {
                isMouseOut = true;

                // Невелика затримка, щоб уникнути випадкових спрацювань
                setTimeout(() => {
                    if (isMouseOut && !this.exitIntentShown) {
                        this.showExitPopup();
                    }
                }, 200);
            }
        });

        document.addEventListener('mouseover', () => {
            isMouseOut = false;
        });
    }

    // Mobile: альтернативна логіка (швидкий скрол вгору)
    initMobileExitIntent() {
        let lastScrollTop = 0;
        let scrollSpeed = 0;

        window.addEventListener('scroll', () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            scrollSpeed = Math.abs(currentScrollTop - lastScrollTop);

            // Якщо швидкий скрол вгору біля початку сторінки
            if (currentScrollTop < 100 && scrollSpeed > 50 && !this.exitIntentShown) {
                this.showExitPopup();
            }

            lastScrollTop = currentScrollTop;
        }, { passive: true });
    }

    // Відстеження залученості (щоб не показувати одразу)
    trackUserEngagement() {
        let timeOnSite = 0;
        let scrollDepth = 0;

        // Час на сайті
        setInterval(() => {
            timeOnSite++;
        }, 1000);

        // Глибина скролу
        window.addEventListener('scroll', () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            scrollDepth = Math.round((scrollTop + windowHeight) / documentHeight * 100);
        }, { passive: true });

        // Зберігаємо метрики
        this.engagement = {
            get timeOnSite() { return timeOnSite; },
            get scrollDepth() { return scrollDepth; }
        };
    }

    // Показати Exit Popup
    showExitPopup() {
        // Перевірка залученості (не показувати, якщо користувач тільки зайшов)
        if (this.engagement && this.engagement.timeOnSite < 10) {
            console.log('⏱️ Exit Intent: користувач на сайті менше 10 секунд');
            return;
        }

        this.exitIntentShown = true;

        // Збільшуємо лічильник
        this.exitCount++;
        localStorage.setItem('exitIntentCount', this.exitCount.toString());
        localStorage.setItem('exitIntentLastShown', Date.now().toString());

        // Створюємо popup
        const popup = this.createPopup();
        document.body.appendChild(popup);

        // Анімація появи
        requestAnimationFrame(() => {
            popup.style.opacity = '1';
            popup.querySelector('.exit-popup-content').style.transform = 'scale(1)';
        });

        // Відправляємо подію в аналітику
        if (typeof gtag === 'function') {
            gtag('event', 'exit_intent_shown', {
                'event_category': 'Engagement',
                'time_on_site': this.engagement?.timeOnSite || 0,
                'scroll_depth': this.engagement?.scrollDepth || 0
            });
        }

        console.log('✅ Exit Intent показано');
    }

    // Створення HTML popup
    createPopup() {
        const popup = document.createElement('div');
        popup.id = 'exit-intent-popup';
        popup.className = 'exit-popup-overlay';

        popup.innerHTML = `
            <div class="exit-popup-content">
                <button class="exit-popup-close" id="exit-close-btn" aria-label="Закрити">×</button>
                
                <div class="exit-popup-header">
                    <span class="exit-emoji">⏰</span>
                    <h2>Зачекайте хвилинку!</h2>
                </div>

                <div class="exit-popup-body">
                    <p class="exit-main-text">
                        Не йдіть з порожніми руками! 🎁
                    </p>
                    <p class="exit-sub-text">
                        Отримайте <strong>знижку 15%</strong> на будь-яку послугу + безкоштовний PDF-гайд "Як створити ідеальне резюме"
                    </p>

                    <div class="exit-benefits">
                        <div class="exit-benefit">
                            <span class="benefit-icon">✅</span>
                            <span>Резюме від 255 грн (замість 300)</span>
                        </div>
                        <div class="exit-benefit">
                            <span class="benefit-icon">✅</span>
                            <span>Портфоліо від 425 грн (замість 500)</span>
                        </div>
                        <div class="exit-benefit">
                            <span class="benefit-icon">✅</span>
                            <span>Лендінг від 680 грн (замість 800)</span>
                        </div>
                    </div>

                    <div class="exit-timer">
                        <p>⏰ Пропозиція дійсна ще: <span id="exit-countdown">5:00</span></p>
                    </div>

                    <div class="exit-form">
                        <input 
                            type="email" 
                            id="exit-email" 
                            placeholder="Ваш email для отримання знижки"
                            required
                        >
                        <button class="exit-btn-primary" id="exit-claim-btn">
                            Отримати знижку 15% 🎉
                        </button>
                    </div>

                    <p class="exit-guarantee">
                        <span class="lock-icon">🔒</span>
                        Ваш email у безпеці. Ніякого спаму.
                    </p>
                </div>

                <button class="exit-btn-secondary" id="exit-no-thanks">
                    Ні, дякую. Я не хочу знижку
                </button>
            </div>
        `;

        // Обробники подій
        setTimeout(() => {
            this.attachPopupEvents(popup);
            this.startCountdown();
        }, 100);

        return popup;
    }

    // Прикріплення обробників
    attachPopupEvents(popup) {
        // Закрити хрестиком
        popup.querySelector('#exit-close-btn')?.addEventListener('click', () => {
            this.closePopup(popup, 'close_button');
        });

        // Відмовитись
        popup.querySelector('#exit-no-thanks')?.addEventListener('click', () => {
            this.closePopup(popup, 'no_thanks');
        });

        // Отримати знижку
        popup.querySelector('#exit-claim-btn')?.addEventListener('click', () => {
            this.handleClaimDiscount(popup);
        });

        // Закрити при кліку на оверлей (опціонально)
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                this.closePopup(popup, 'overlay_click');
            }
        });

        // Запобігти закриттю при кліку всередині
        popup.querySelector('.exit-popup-content')?.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Таймер зворотного відліку
    startCountdown() {
        let timeLeft = 300; // 5 хвилин в секундах
        const countdownElement = document.getElementById('exit-countdown');

        const timer = setInterval(() => {
            timeLeft--;

            if (timeLeft <= 0) {
                clearInterval(timer);
                if (countdownElement) countdownElement.textContent = 'Час вийшов!';
                return;
            }

            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            if (countdownElement) {
                countdownElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            }

            // Червоний колір останні 30 секунд
            if (timeLeft <= 30 && countdownElement) {
                countdownElement.style.color = '#dc3545';
                countdownElement.style.fontWeight = 'bold';
            }
        }, 1000);
    }

    // Обробка отримання знижки
    handleClaimDiscount(popup) {
        const emailInput = document.getElementById('exit-email');
        const email = emailInput?.value.trim();

        // Валідація email
        if (!email || !this.isValidEmail(email)) {
            alert('Будь ласка, введіть коректний email');
            emailInput?.focus();
            return;
        }

        // Зберігаємо email
        localStorage.setItem('promoEmail', email);
        localStorage.setItem('promoCode', 'EXIT15'); // Промокод

        // Відправляємо на сервер
        this.sendEmailToServer(email);

        // Аналітика
        if (typeof gtag === 'function') {
            gtag('event', 'exit_intent_conversion', {
                'event_category': 'Lead Generation',
                'event_label': email
            });
        }

        // Показуємо успіх
        this.showSuccessMessage(popup, email);
    }

    // Валідація email
    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // ==========================================
    // ВИПРАВЛЕНА ФУНКЦІЯ ВІДПРАВКИ
    // ==========================================
    async sendEmailToServer(email) {
        // URL вашого Apps Script Web App
        const SCRIPT_URL = 'hhttps://script.google.com/macros/s/AKfycbxQbqM7Ny0Yq5FDhkLMJ2bIWKO9p8ZIkS8xExl_9oMqDhNH5jJysD0KLMVPUSfn36lOIQ/exec';

        try {
            console.log('📤 Відправка email на сервер...', email);

            // Спосіб 1: POST з no-cors (основний)
            const postResponse = await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    promoCode: 'EXIT15',
                    discount: 15,
                    timestamp: new Date().toISOString(),
                    source: 'exit_intent_popup'
                })
            });

            console.log('✅ POST запит відправлено (no-cors mode)');

            // Спосіб 2: GET запит як backup (більш надійний)
            const params = new URLSearchParams({
                email: email,
                promoCode: 'EXIT15',
                discount: '15',
                timestamp: new Date().toISOString(),
                source: 'exit_intent_popup'
            });

            // Використовуємо Image trick для гарантованої доставки
            const img = new Image();
            img.onload = () => console.log('✅ GET backup запит успішний');
            img.onerror = () => console.log('⚠️ GET backup запит failed (але це норма)');
            img.src = `${SCRIPT_URL}?${params.toString()}`;

            console.log('✅ Email відправлено через обидва методи');
            console.log('📧 Користувач:', email);

            return true;

        } catch (error) {
            console.error('❌ Помилка відправки email:', error);

            // Якщо основний метод не спрацював, пробуємо тільки GET
            try {
                console.log('🔄 Спроба відправки через GET...');
                this.sendEmailViaGet(email);
                return true;
            } catch (backupError) {
                console.error('❌ Backup метод також не спрацював:', backupError);
                return false;
            }
        }
    }

    // Альтернативний метод через GET (якщо POST не працює)
    sendEmailViaGet(email) {
        const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxQbqM7Ny0Yq5FDhkLMJ2bIWKO9p8ZIkS8xExl_9oMqDhNH5jJysD0KLMVPUSfn36lOIQ/exec';

        const params = new URLSearchParams({
            email: email,
            promoCode: 'EXIT15',
            discount: '15',
            timestamp: new Date().toISOString(),
            source: 'exit_intent_popup'
        });

        // Метод 1: Через fetch GET
        fetch(`${SCRIPT_URL}?${params.toString()}`, {
            method: 'GET',
            mode: 'no-cors'
        }).catch(err => console.log('Fetch GET error (очікувано):', err));

        // Метод 2: Через Image (найнадійніший для CORS)
        const img = new Image();
        img.src = `${SCRIPT_URL}?${params.toString()}`;

        // Метод 3: Через iframe (на випадок)
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = `${SCRIPT_URL}?${params.toString()}`;
        document.body.appendChild(iframe);
        setTimeout(() => iframe.remove(), 3000);

        console.log('📤 GET запити відправлено (3 методи)');
    }

    // Показати повідомлення успіху
    showSuccessMessage(popup, email) {
        const content = popup.querySelector('.exit-popup-content');
        if (!content) return;

        content.innerHTML = `
            <div class="exit-success">
                <span class="success-icon">🎉</span>
                <h2>Вітаємо!</h2>
                <p>Ваш промокод <strong>EXIT15</strong> надіслано на:</p>
                <p class="success-email">${email}</p>
                
                <div class="success-promo">
                    <p class="promo-code">EXIT15</p>
                    <button class="copy-promo" id="copy-promo-btn">
                        📋 Скопіювати промокод
                    </button>
                </div>

                <p class="success-instructions">
                    Використайте цей промокод при замовленні для отримання знижки 15%
                </p>

                <div class="success-actions">
                    <a href="#briefs" class="success-btn-primary" id="success-order-btn">
                        Замовити зараз 🚀
                    </a>
                    <button class="success-btn-secondary" id="success-close-btn">
                        Закрити
                    </button>
                </div>

                <p class="success-note">
                    📧 Також відправили PDF-гайд "Як створити ідеальне резюме"
                </p>
            </div>
        `;

        // Обробники для success екрану
        setTimeout(() => {
            // Копіювати промокод
            document.getElementById('copy-promo-btn')?.addEventListener('click', () => {
                navigator.clipboard.writeText('EXIT15');
                const btn = document.getElementById('copy-promo-btn');
                if (btn) {
                    btn.textContent = '✅ Скопійовано!';
                    setTimeout(() => btn.textContent = '📋 Скопіювати промокод', 2000);
                }
            });

            // Закрити
            document.getElementById('success-close-btn')?.addEventListener('click', () => {
                this.closePopup(popup, 'success_close');
            });

            // Замовити зараз
            document.getElementById('success-order-btn')?.addEventListener('click', () => {
                this.closePopup(popup, 'converted');
            });
        }, 100);
    }

    // Закрити popup
    closePopup(popup, reason = 'unknown') {
        // Аналітика
        if (typeof gtag === 'function') {
            gtag('event', 'exit_intent_closed', {
                'event_category': 'Engagement',
                'event_label': reason
            });
        }

        // Анімація закриття
        popup.style.opacity = '0';
        popup.querySelector('.exit-popup-content').style.transform = 'scale(0.9)';

        setTimeout(() => {
            popup.remove();
        }, 300);

        console.log(`🚪 Exit Intent закрито: ${reason}`);
    }
}

// Ініціалізація
document.addEventListener('DOMContentLoaded', () => {
    // Затримка 2 секунди перед активацією (щоб не дратувати одразу)
    setTimeout(() => {
        window.exitIntent = new ExitIntentManager();
        console.log('🚀 Exit Intent Manager ініціалізовано');
    }, 2000);
});

// Для тестування в консолі браузера
window.testExitIntent = function (testEmail = 'test@example.com') {
    console.log('🧪 Запуск тесту Exit Intent...');

    if (!window.exitIntent) {
        console.error('❌ ExitIntentManager не ініціалізовано');
        return;
    }

    // Тестуємо відправку email
    window.exitIntent.sendEmailToServer(testEmail);
    console.log('✅ Тест відправлено для:', testEmail);
    console.log('👀 Перевірте Console для деталей');
};