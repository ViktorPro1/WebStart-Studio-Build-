export function initAchievementCounters() {
    function animateAchievementCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
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

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.achievement-stat-number');
                counters.forEach(counter => animateAchievementCounter(counter, parseInt(counter.dataset.target)));

                entry.target.querySelectorAll('.achievement-stat-card')
                    .forEach(card => card.classList.add('achievement-animated'));

                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3, rootMargin: '0px' });

    const section = document.querySelector('.achievement-stats-section');
    if (section) observer.observe(section);
}
