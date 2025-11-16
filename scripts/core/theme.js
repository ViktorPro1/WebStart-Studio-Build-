// Темна тема з повним покриттям всіх елементів
export function initDarkMode() {
    const toggle = document.getElementById("darkModeToggle");
    const body = document.body;

    // Функція застосування теми
    function applyTheme(isDark) {
        if (isDark) {
            body.classList.add("dark-mode");
            document.documentElement.style.setProperty('--bg-color', '#1a1a1a');
            document.documentElement.style.setProperty('--text-color', '#e0e0e0');
            document.documentElement.style.setProperty('--card-bg', '#2a2a2a');
            document.documentElement.style.setProperty('--border-color', '#404040');
        } else {
            body.classList.remove("dark-mode");
            document.documentElement.style.setProperty('--bg-color', '#cff3f3');
            document.documentElement.style.setProperty('--text-color', '#333');
            document.documentElement.style.setProperty('--card-bg', '#ffffff');
            document.documentElement.style.setProperty('--border-color', '#ccc');
        }
    }

    // Перевірка збереженої теми
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";

    applyTheme(isDark);
    if (toggle) toggle.checked = isDark;

    // Обробка переключення
    if (toggle) {
        toggle.addEventListener("change", () => {
            const isDarkMode = toggle.checked;
            applyTheme(isDarkMode);
            localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        });
    }

    // Додаткові стилі для темної теми
    addDarkModeStyles();
}

// Функція для додавання глобальних стилів темної теми
function addDarkModeStyles() {
    const styleId = 'dark-mode-styles';

    // Перевіряємо, чи стилі вже додані
    if (document.getElementById(styleId)) return;

    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        /* Основні змінні */
        :root {
            --bg-color: #cff3f3;
            --text-color: #333;
            --card-bg: #ffffff;
            --border-color: #ccc;
            --header-bg: rgba(0, 0, 0, 0.5);
        }

        /* Темна тема */
        body.dark-mode {
            background: #1a1a1a !important;
            color: #e0e0e0 !important;
        }

        /* Секції */
        body.dark-mode section {
            background: #2a2a2a;
            color: #e0e0e0;
        }

        /* Картки */
        body.dark-mode .service-card,
        body.dark-mode .project-card,
        body.dark-mode .extra-card,
        body.dark-mode .testimonial,
        body.dark-mode .blog-card,
        body.dark-mode .ai-dynamic-card,
        body.dark-mode .lang-card {
            background: #2a2a2a;
            color: #e0e0e0;
            border-color: #404040;
        }

        /* Заголовки */
        body.dark-mode h1,
        body.dark-mode h2,
        body.dark-mode h3,
        body.dark-mode h4 {
            color: #ffffff;
        }

        /* Параграфи */
        body.dark-mode p,
        body.dark-mode li {
            color: #d0d0d0;
        }

        /* Посилання */
        body.dark-mode a {
            color: #64b5f6;
        }

        body.dark-mode a:hover {
            color: #90caf9;
        }

        /* Кнопки */
        body.dark-mode button,
        body.dark-mode .btn,
        body.dark-mode .cta-button {
            background: #3a3a3a;
            color: #ffffff;
            border-color: #505050;
        }

        body.dark-mode button:hover,
        body.dark-mode .btn:hover {
            background: #505050;
        }

        /* Форми */
        body.dark-mode input,
        body.dark-mode textarea,
        body.dark-mode select {
            background: #2a2a2a;
            color: #e0e0e0;
            border-color: #404040;
        }

        body.dark-mode input::placeholder,
        body.dark-mode textarea::placeholder {
            color: #808080;
        }

        /* Таблиці */
        body.dark-mode table {
            background: #2a2a2a;
            color: #e0e0e0;
        }

        body.dark-mode th,
        body.dark-mode td {
            border-color: #404040;
        }

        body.dark-mode tr:hover {
            background: #353535;
        }

        /* Header */
        body.dark-mode header {
            background-color: #1a1a1a;
        }

        body.dark-mode header::after {
            background: rgba(0, 0, 0, 0.7);
        }

        body.dark-mode nav a {
            color: #e0e0e0;
        }

        body.dark-mode nav a:hover {
            color: #ff6b6b;
        }

        /* Footer */
        body.dark-mode footer {
            background: #1a1a1a;
            color: #e0e0e0;
            border-top: 1px solid #404040;
        }

        /* Модальні вікна */
        body.dark-mode .modal-content,
        body.dark-mode .popup-content {
            background: #2a2a2a;
            color: #e0e0e0;
            border-color: #404040;
        }

        /* Dropdown меню */
        body.dark-mode details {
            background: #2a2a2a;
            border-color: #404040;
        }

        body.dark-mode summary {
            color: #e0e0e0;
        }

        /* Breadcrumbs */
        body.dark-mode .breadcrumbs-wrapper {
            background: #2a2a2a;
            color: #e0e0e0;
        }

        /* Progress bar */
        body.dark-mode #progressBar {
            background: #404040;
        }

        /* Slider */
        body.dark-mode .slider-wrapper {
            background: #2a2a2a;
        }

        /* Сертифікати */
        body.dark-mode .certificate-gift-section {
            background: #1a1a1a;
        }

        /* Соціальні мережі */
        body.dark-mode .social-list a,
        body.dark-mode .share-btn {
            background: #3a3a3a;
            color: #ffffff;
        }

        /* Акції */
        body.dark-mode .promo-container {
            background: #2a2a2a;
            border-color: #404040;
        }

        /* Cookie banner */
        body.dark-mode #cookie-banner {
            background: #2a2a2a;
            color: #e0e0e0;
            border-color: #404040;
        }

        /* Галерея */
        body.dark-mode .gallery-marquee-wrapper {
            background: #2a2a2a;
        }

        /* Пошук */
        body.dark-mode .search-form input {
            background: #2a2a2a;
            color: #e0e0e0;
            border-color: #404040;
        }

        /* Lab strip */
        body.dark-mode .lab-strip {
            background: #2a2a2a;
        }

        body.dark-mode .lab-strip a {
            color: #64b5f6;
        }

        /* Marquee */
        body.dark-mode .marquee-container {
            background: #2a2a2a;
        }

        /* Team section */
        body.dark-mode .team-member {
            background: #2a2a2a;
            border-color: #404040;
        }

        /* Security section */
        body.dark-mode .security-home {
            background: #2a2a2a;
        }

        /* Contact and Gift Section */
        body.dark-mode #contact-gift-wrapper {
            background: #1a1a1a;
        }

        body.dark-mode .contact-block,
        body.dark-mode .gift-block {
            background: #2a2a2a;
            color: #e0e0e0;
            border-color: #404040;
        }

        body.dark-mode .contact-block h2,
        body.dark-mode .gift-block h3 {
            color: #ffffff;
        }

        body.dark-mode .contact-block p,
        body.dark-mode .gift-block p {
            color: #d0d0d0;
        }

        body.dark-mode .contact-block a,
        body.dark-mode .gift-block a:not(.btn-primary) {
            color: #64b5f6;
        }

        body.dark-mode .viber-button,
        body.dark-mode .btn-primary {
            background: #3a3a3a;
            color: #ffffff;
            border-color: #505050;
        }

        body.dark-mode .viber-button:hover,
        body.dark-mode .btn-primary:hover {
            background: #505050;
        }

        /* FAQ Section */
        body.dark-mode .faq-section {
            background: #1a1a1a;
        }

        body.dark-mode .faq-section h2 {
            color: #ffffff;
        }

        body.dark-mode .faq-section details {
            background: #2a2a2a;
            border: 1px solid #404040;
            margin-bottom: 1rem;
        }

        body.dark-mode .faq-section summary {
            background: #2a2a2a;
            color: #e0e0e0;
            padding: 1rem;
            cursor: pointer;
            font-weight: 600;
        }

        body.dark-mode .faq-section summary:hover {
            background: #353535;
        }

        body.dark-mode .faq-section details[open] summary {
            border-bottom: 1px solid #404040;
        }

        body.dark-mode .faq-section p {
            color: #d0d0d0;
            background: #2a2a2a;
            padding: 1rem;
        }

        body.dark-mode .faq-section a {
            color: #64b5f6;
        }

        body.dark-mode .faq-section .nav-btn {
            background: #3a3a3a;
            color: #ffffff;
            border-color: #505050;
            padding: 0.3rem 0.8rem;
            border-radius: 4px;
            text-decoration: none;
        }

        body.dark-mode .faq-section .nav-btn:hover {
            background: #505050;
        }

        /* Advantages Section */
        body.dark-mode .advantages {
            background: #1a1a1a;
        }

        body.dark-mode .advantages h2 {
            color: #ffffff;
        }

        body.dark-mode .advantages .highlight {
            color: #ff6b6b;
        }

        body.dark-mode .advantages-grid {
            display: grid;
            gap: 2rem;
        }

        body.dark-mode .adv-item {
            background: #2a2a2a;
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid #404040;
            text-align: center;
            transition: transform 0.3s ease, background 0.3s ease;
        }

        body.dark-mode .adv-item:hover {
            background: #353535;
            transform: translateY(-5px);
        }

        body.dark-mode .adv-item .emoji {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        body.dark-mode .adv-item h3 {
            color: #ffffff;
            margin-bottom: 0.5rem;
        }

        body.dark-mode .adv-item p {
            color: #d0d0d0;
        }

        /* Плавний перехід */
        body,
        section,
        .service-card,
        .project-card,
        button,
        input,
        a {
            transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }

        /* Скролбар для темної теми */
        body.dark-mode::-webkit-scrollbar {
            width: 12px;
        }

        body.dark-mode::-webkit-scrollbar-track {
            background: #1a1a1a;
        }

        body.dark-mode::-webkit-scrollbar-thumb {
            background: #404040;
            border-radius: 6px;
        }

        body.dark-mode::-webkit-scrollbar-thumb:hover {
            background: #505050;
        }
    `;

    document.head.appendChild(style);
}
