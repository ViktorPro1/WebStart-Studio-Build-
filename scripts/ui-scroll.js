// Scroll + Breadcrumbs

const sectionNames = {
    'services': 'Створюємо',
    'portfolio': 'Портфоліо',
    'technical-features': 'ТехСервіс',
    'advantages': 'Чому ми?',
    'platform-comparison': 'Порівняння',
    'pricing': 'Пакети',
    'promo': 'Акції',
    'briefs': 'Отримати',
    'mini-services': 'Міні-сервіс',
    'ai-prompting-dynamic': 'AI Сервіс',
    'extras': 'Додаткове',
    'certificate-gift': 'Сувенір',
    'testimonials': 'Відгуки',
    'faq': 'FAQ',
    'hosting-help': 'Розміщення',
    'blog': 'Дайджест',
    'international': 'International',
    'contact-gift-wrapper': 'Контакти',
    'guide-bonus': 'Бонус+',
    'social': 'Соцмережі'
};

const sections = document.querySelectorAll('section[id]');
const currentSection = document.getElementById('current-section');
const breadcrumbs = document.getElementById('breadcrumbs');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progressBar').style.width = scrollPercent + '%';

    let current = 'Головна';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 20;
        if (scrollTop >= sectionTop) current = section.getAttribute('id');
    });
    currentSection.textContent = sectionNames[current] || 'Головна';
});

window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768 && breadcrumbs) {
        breadcrumbs.style.transition = 'top 0.25s ease';
        breadcrumbs.style.top = '1cm';
        setTimeout(() => breadcrumbs.style.top = '0.5cm', 6000);
    }
});
