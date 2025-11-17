// Пошук по секціях
export function initSearch() {
    const searchForm = document.getElementById('simple-search-form');
    const searchInput = document.getElementById('search-input');
    const feedbackDiv = document.getElementById('search-feedback');

    if (!searchForm || !searchInput || !feedbackDiv) return;

    // Мапа ключових слів -> ID секцій
    const sectionMap = {
        'послуги': 'services',
        'створюємо': 'services',
        'верстка': 'services',
        'резюме': 'services',
        'портфоліо': 'portfolio',
        'роботи': 'portfolio',
        'кейси': 'portfolio',
        'лендінг': 'portfolio',
        'техсервіс': 'technical-features',
        'технічні можливості': 'technical-features',
        'переваги': 'advantages',
        'чому ми': 'advantages',
        'порівняння': 'platform-comparison',
        'помилки': 'common-mistakes',
        'часті помилки': 'common-mistakes',
        'для кого': 'for-whom',
        'для кого ми': 'for-whom',
        'аудиторія': 'for-whom',
        'самому': 'diy-vs-us',
        'diy': 'diy-vs-us',
        'з нами': 'diy-vs-us',
        'порівняти': 'diy-vs-us',
        'пакети': 'pricing',
        'ціни': 'pricing',
        'акції': 'promo',
        'отримати': 'briefs',
        'бриф': 'briefs',
        'міні-сервіс': 'mini-services',
        'ai': 'ai-prompting-dynamic',
        'ai сервіс': 'ai-prompting-dynamic',
        'додаткове': 'extras',
        'відгуки': 'testimonials',
        'faq': 'faq',
        'запитання': 'faq',
        'розміщення': 'hosting-help',
        'хостинг': 'hosting-help',
        'international': 'international',
        'блог': 'blog',
        'новини': 'blog',
        'контакти': 'contact-gift-wrapper',
        'зв\'язок': 'contact-gift-wrapper',
        'бонус': 'guide-bonus',
        'путівник': 'guide-bonus',
        'соцмережі': 'social',
        'сертифікат': 'certificate-gift',
        'сувенір': 'certificate-gift',
        'кібербезпека': 'security',
        'security': 'security',
        'захист': 'security',
        'шахрайство': 'security'
    };

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        feedbackDiv.textContent = '';

        // Перевірка на порожній запит
        if (!query) {
            feedbackDiv.textContent = 'Введіть ключове слово для пошуку.';
            return;
        }

        // Пошук відповідної секції
        let foundId = null;
        for (const key in sectionMap) {
            if (query.includes(key)) {
                foundId = sectionMap[key];
                break;
            }
        }

        // Якщо знайдено - прокручуємо
        if (foundId) {
            const target = document.getElementById(foundId);
            if (target) {
                const topOffset = target.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: topOffset, behavior: 'smooth' });

                // Підсвічування секції
                target.classList.add('highlight-search');
                setTimeout(() => target.classList.remove('highlight-search'), 2000);

                // Очищення форми
                searchInput.value = '';
                feedbackDiv.textContent = '';
                return;
            }
        }

        // Якщо не знайдено
        feedbackDiv.textContent = `Секція за запитом "${query}" не знайдена. Спробуйте: Портфоліо, Послуги, Контакти.`;
    });
}
