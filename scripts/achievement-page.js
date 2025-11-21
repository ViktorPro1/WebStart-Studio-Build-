// ===== СКРИПТ ДЛЯ АНІМАЦІЇ ЛІЧИЛЬНИКІВ ТА ПРОГРЕС-БАРІВ з achievement.html =====

function animateAchievementCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60 FPS

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

const achievementObserverOptions = {
    threshold: 0.3,
    rootMargin: '0px'
};

const achievementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.achievement-stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                counter.textContent = '0'; // ⬅️ ДОДАЙ ЦЕЙ РЯДОК - скидаємо на 0
                animateAchievementCounter(counter, target);
            });

            const cards = entry.target.querySelectorAll('.achievement-stat-card');
            cards.forEach(card => {
                card.classList.add('achievement-animated');
            });

            achievementObserver.unobserve(entry.target);
        }
    });
}, achievementObserverOptions);

document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.achievement-stats-section');
    if (section) {
        achievementObserver.observe(section);
    }
});
