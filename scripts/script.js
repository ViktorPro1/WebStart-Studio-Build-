document.addEventListener('DOMContentLoaded', () => {

    // ===== Плавна анімація секцій =====
    const sections = document.querySelectorAll("section");
    const reveal = () => {
        const triggerBottom = window.innerHeight * 0.85;
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            if (top < triggerBottom) section.classList.add("visible");
        });
    };
    window.addEventListener("scroll", reveal);
    reveal();

    // ===== Темна тема =====
    const toggle = document.getElementById("darkModeToggle");
    const body = document.body;
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        if (toggle) toggle.checked = true;
    }
    if (toggle) {
        toggle.addEventListener("change", () => {
            body.classList.toggle("dark-mode");
            localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
        });
    }

    // ===== Акція (зворотній відлік) =====
    const countdown = document.getElementById("countdown");
    if (countdown) {
        const deadline = new Date(2025, 9, 30, 23, 59, 59);
        const updateCountdown = () => {
            const diff = deadline - new Date();
            if (diff <= 0) {
                countdown.innerHTML = "Час вийшов!";
                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
            countdown.innerHTML = `До кінця акції: ${days}д ${hours}г ${minutes}хв ${seconds}сек`;
        };
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }

    // ===== Привітальне модальне вікно =====
    const welcomeModal = document.getElementById('welcome-modal');
    const closeWelcomeBtn = document.getElementById('close-btn');
    if (welcomeModal && closeWelcomeBtn) {
        setTimeout(() => { welcomeModal.style.display = 'none'; }, 5000);
        closeWelcomeBtn.addEventListener('click', () => { welcomeModal.style.display = 'none'; });
    }

    // ===== Вікно допомоги =====
    const helpPopup = document.getElementById('popup');
    const closePopupBtn = document.getElementById('close-popup');
    if (helpPopup && closePopupBtn) {
        setTimeout(() => { helpPopup.style.display = 'block'; }, 8000);
        closePopupBtn.addEventListener('click', () => { helpPopup.style.display = 'none'; });
    }

    // ===== 🔥 НОВИЙ КОД: Placeholder SVG для відсутніх фото =====
    const createPlaceholder = () => {
        return 'data:image/svg+xml,' + encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
                <rect fill="#e0e0e0" width="200" height="200"/>
                <circle cx="100" cy="80" r="30" fill="#999"/>
                <path d="M60 130 Q100 110 140 130 L140 200 L60 200 Z" fill="#999"/>
                <text x="100" y="190" font-family="Arial" font-size="12" fill="#666" text-anchor="middle">Фото недоступне</text>
            </svg>
        `);
    };

    // ===== 🔥 НОВИЙ КОД: Функція безпечного завантаження фото =====
    const loadImageSafely = (imgElement, src, alt) => {
        return new Promise((resolve) => {
            const img = new Image();

            img.onload = () => {
                imgElement.src = src;
                imgElement.alt = alt;
                resolve(true);
            };

            img.onerror = () => {
                console.warn(`⚠️ Фото не знайдено: ${src}, використано placeholder`);
                imgElement.src = createPlaceholder();
                imgElement.alt = `${alt} (фото недоступне)`;
                resolve(false);
            };

            img.src = src;
        });
    };

    // ===== 🔥 ВИПРАВЛЕНО: Відгуки клієнтів з обробкою помилок =====
    const photos = document.querySelectorAll('.testimonial-photo');
    if (photos.length > 0) {
        photos.forEach(photo => {
            const originalSrc = photo.src;
            const originalAlt = photo.alt;

            // Завантажуємо фото безпечно
            loadImageSafely(photo, originalSrc, originalAlt).then(() => {
                photo.classList.add('visible');
                photo.style.opacity = '1';
                photo.style.transform = 'scale(1)';
            });
        });
    }

    // ===== 🔥 ВИПРАВЛЕНО: Попереднє завантаження з обробкою помилок =====
    const allTestimonialImages = [
        'foto/olena.webp', 'foto/nadija.webp', 'foto/volodumer.webp',
        'foto/andriy.webp', 'foto/vika.webp', 'foto/sergey.webp',
        'foto/mariya.webp', 'foto/bogdan.webp', 'foto/sofia.webp'
    ];

    const preloadedImages = {};
    allTestimonialImages.forEach(src => {
        const img = new Image();
        img.onload = () => {
            preloadedImages[src] = src; // Фото завантажено успішно
        };
        img.onerror = () => {
            console.warn(`⚠️ Не вдалося завантажити: ${src}`);
            preloadedImages[src] = createPlaceholder(); // Зберігаємо placeholder
        };
        img.src = src;
    });

    // ===== 🔥 ВИПРАВЛЕНО: Відгуки (автоперемикання з безпечним завантаженням) =====
    const testimonialsData = {
        testimonial1: [
            { img: "foto/olena.webp", alt: "Олена", text: "Всього за три дні отримала повноцінне портфоліо. Стильний дизайн, адаптивність — усе на рівні!", cite: "— Олена, маркетолог" },
            { img: "foto/nadija.webp", alt: "Надія", text: "Робота виконана якісно та швидко. Дизайн мені дуже підійшов. Рекомендую усім фрілансерам!", cite: "— Надія, фрілансер" },
            { img: "foto/volodumer.webp", alt: "Володимир", text: "Мій лендінг виглядає професійно і привабливо — чудове рішення для будівельного бізнесу!", cite: "— Володимир, власник будівельної фірми" }
        ],
        testimonial2: [
            { img: "foto/andriy.webp", alt: "Андрій", text: "Отримав сучасний сайт для магазину за рекордні строки. Робота перевершила очікування!", cite: "— Андрій, власник онлайн-магазину" },
            { img: "foto/vika.webp", alt: "Віка", text: "Лендінг зробили за два дні! Стильно, зрозуміло, і клієнтам подобається. Я задоволена!", cite: "— Віка, власниця перукарні" },
            { img: "foto/sergey.webp", alt: "Сергій", text: "Після запуску сайту заявки почали приходити відразу. Дуже ефективно!", cite: "— Сергій, фермер" }
        ],
        testimonial3: [
            { img: "foto/mariya.webp", alt: "Марія", text: "Після отримання електронного резюме мене запросили одразу на кілька співбесід. Дуже вдячна!", cite: "— Марія, шукачка роботи" },
            { img: "foto/bogdan.webp", alt: "Богдан", text: "Резюме виконане професійно. Подача, структура — все на високому рівні. Отримав нову посаду!", cite: "— Богдан, рекрутер" },
            { img: "foto/sofia.webp", alt: "Софія", text: "Сайт портфоліо зроблений з креативом і смаком. Замовлятиму ще банери й сторінки!", cite: "— Софія, маркетолог" }
        ]
    };

    function rotateTestimonials(id) {
        const container = document.getElementById(id);
        if (!container || !testimonialsData[id]) return;

        let index = 0;
        setInterval(() => {
            index = (index + 1) % testimonialsData[id].length;
            const t = testimonialsData[id][index];

            const imgElement = container.querySelector('img');
            const contentP = container.querySelector('.testimonial-content p');
            const contentCite = container.querySelector('.testimonial-content cite');

            // Плавне зникнення
            imgElement.style.opacity = '0';
            imgElement.style.transform = 'scale(0.8)';

            setTimeout(() => {
                // 🔥 НОВИЙ КОД: Безпечне завантаження фото
                const finalSrc = preloadedImages[t.img] || createPlaceholder();

                imgElement.src = finalSrc;
                imgElement.alt = t.alt;
                contentP.textContent = t.text;
                contentCite.textContent = t.cite;

                // Примусово показуємо
                imgElement.classList.add('visible');
                imgElement.style.opacity = '1';
                imgElement.style.transform = 'scale(1)';
            }, 300);
        }, 20000);
    }

    ['testimonial1', 'testimonial2', 'testimonial3'].forEach(rotateTestimonials);

    // ===== Поділитись платформою =====
    window.share = function (network) {
        const url = encodeURIComponent('https://scintillating-sunshine-94e986.netlify.app/');
        const text = encodeURIComponent('WebStart Studio!');
        let shareUrl = '';
        switch (network) {
            case 'facebook': shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`; break;
            case 'telegram': shareUrl = `https://t.me/share/url?url=${url}&text=${text}`; break;
            case 'viber': return alert('Щоб поділитись у Viber, скопіюйте посилання: ' + decodeURIComponent(url));
            case 'linkedin': shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`; break;
            case 'messenger': shareUrl = `fb-messenger://share/?link=${url}`; break;
            default: return alert('Соцмережа не підтримується');
        }
        window.open(shareUrl, '_blank', 'width=600,height=400');
    };

    // ===== Показ/приховування таблиці цін =====
    const toggleBtn = document.getElementById('togglePricing');
    const pricingTable = document.getElementById('pricingTable');
    const linkWrapper = document.getElementById('linkWrapper');
    if (toggleBtn && pricingTable && linkWrapper) {
        toggleBtn.addEventListener('click', () => {
            const visible = pricingTable.style.display === 'table';
            pricingTable.style.display = visible ? 'none' : 'table';
            linkWrapper.style.display = visible ? 'none' : 'block';
            toggleBtn.setAttribute('aria-expanded', !visible);
            toggleBtn.textContent = visible ? 'Знайти найвигідніший пакет' : 'приховати';
        });
    }

    // ===== Галерея =====
    const track = document.getElementById('galleryTrack');
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('galleryModalImg');
    const closeGallery = document.getElementById('galleryClose');
    const slider = document.querySelector('.gallery-marquee-slider');
    const wrapper = document.querySelector('.gallery-marquee-wrapper');
    if (wrapper) wrapper.style.display = 'block';
    if (track && modal && modalImg && closeGallery) {
        track.querySelectorAll('.gallery-marquee-image').forEach(img => {
            img.addEventListener('click', () => {
                modalImg.src = img.currentSrc || img.src;
                modal.classList.remove('hidden');
                document.body.classList.add('modal-open');
            });
        });
        closeGallery.addEventListener('click', () => {
            modal.classList.add('hidden');
            document.body.classList.remove('modal-open');
        });
        let startX = 0, lastMove = 0;
        track.addEventListener('touchstart', e => startX = e.touches[0].clientX);
        track.addEventListener('touchmove', e => {
            const now = Date.now();
            if (now - lastMove < 16) return;
            lastMove = now;
            const diff = startX - e.touches[0].clientX;
            track.scrollLeft += diff;
            startX = e.touches[0].clientX;
        });
        if (slider) slider.addEventListener('input', () => {
            track.scrollLeft = (slider.value / 100) * (track.scrollWidth - track.clientWidth);
        });
    }

    // ===== Пошук по секціях =====
    const searchForm = document.getElementById('simple-search-form');
    const searchInput = document.getElementById('search-input');
    const feedbackDiv = document.getElementById('search-feedback');

    if (searchForm && searchInput && feedbackDiv) {
        const sectionMap = {
            'послуги': 'services', 'створюємо': 'services', 'верстка': 'services', 'резюме': 'services',
            'портфоліо': 'portfolio', 'роботи': 'portfolio', 'кейси': 'portfolio', 'лендінг': 'portfolio',
            'техсервіс': 'technical-features', 'технічні можливості': 'technical-features',
            'переваги': 'advantages', 'чому ми': 'advantages', 'порівняння': 'platform-comparison',
            'пакети': 'pricing', 'ціни': 'pricing', 'акції': 'promo', 'отримати': 'briefs', 'бриф': 'briefs',
            'міні-сервіс': 'mini-services', 'ai': 'ai-prompting-dynamic', 'ai сервіс': 'ai-prompting-dynamic',
            'додаткове': 'extras', 'відгуки': 'testimonials', 'faq': 'faq', 'запитання': 'faq',
            'розміщення': 'hosting-help', 'хостинг': 'hosting-help', 'international': 'international',
            'блог': 'blog', 'новини': 'blog', 'контакти': 'contact-gift-wrapper', 'зв\'язок': 'contact-gift-wrapper',
            'бонус': 'guide-bonus', 'путівник': 'guide-bonus', 'соцмережі': 'social',
            'сертифікат': 'certificate-gift', 'сувенір': 'certificate-gift'
        };


        searchForm.addEventListener('submit', e => {
            e.preventDefault();
            const query = searchInput.value.trim().toLowerCase();
            feedbackDiv.textContent = '';

            if (!query) {
                feedbackDiv.textContent = 'Введіть ключове слово для пошуку.';
                return;
            }

            let foundId = null;
            for (const key in sectionMap) {
                if (query.includes(key)) {
                    foundId = sectionMap[key];
                    break;
                }
            }

            if (foundId) {
                const target = document.getElementById(foundId);
                if (target) {
                    const topOffset = target.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: topOffset, behavior: 'smooth' });

                    target.classList.add('highlight-search');
                    setTimeout(() => target.classList.remove('highlight-search'), 2000);

                    searchInput.value = '';
                    feedbackDiv.textContent = '';
                    return;
                }
            }

            feedbackDiv.textContent = `Секція за запитом "${query}" не знайдена. Спробуйте: Портфоліо, Послуги, Контакти.`;
        });
    }
});