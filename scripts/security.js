// FAQ accordion functionality
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Закриваємо інші відкриті FAQ
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Тоглимо поточний FAQ
            item.classList.toggle('active');
        });
    });
});

// Smooth scroll для якірних посилань
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Анімація появи елементів при скролі
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Додаємо анімацію для карток
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.example-card, .sign-card, .protection-item, .resource-card'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Функція для відображення toast повідомлень (опціонально)
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#2563eb'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// CSS для анімацій toast
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Додаємо обробник для кнопок контактів
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Якщо це не зовнішнє посилання, показуємо повідомлення
        if (!btn.href.includes('http') && !btn.href.includes('viber')) {
            e.preventDefault();
            showToast('Функція в розробці', 'info');
        }
    });
});

// Підрахунок часу на сторінці для аналітики (опціонально)
let timeOnPage = 0;
const timeInterval = setInterval(() => {
    timeOnPage++;
}, 1000);

window.addEventListener('beforeunload', () => {
    clearInterval(timeInterval);
    // Тут можна відправити дані на сервер для аналітики
    console.log(`Користувач провів на сторінці: ${timeOnPage} секунд`);
});

// Функція для копіювання посилань (якщо додасте кнопки "Поділитися")
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Посилання скопійовано!', 'success');
    }).catch(() => {
        showToast('Помилка копіювання', 'error');
    });
}

// Детекція темної теми системи (для майбутнього розширення)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    console.log('Користувач використовує темну тему');
    // Можна додати автоматичне перемикання на темну тему
}

// Захист від копіювання конфіденційної інформації (опціонально)
document.addEventListener('copy', (e) => {
    const selection = window.getSelection().toString();
    if (selection.length > 500) {
        console.log('Користувач скопіював великий текст');
        // Можна додати watermark або логування
    }
});
