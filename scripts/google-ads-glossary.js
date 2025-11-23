// Пошук по термінах
const searchInput = document.getElementById('searchInput');
const termCards = document.querySelectorAll('.term-card');
const resultsCount = document.getElementById('resultsCount');

function updateResultsCount() {
    const visibleCards = document.querySelectorAll('.term-card:not(.hidden)');
    resultsCount.textContent = visibleCards.length;
}

searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase().trim();

    termCards.forEach(card => {
        const title = card.querySelector('.term-title').textContent.toLowerCase();
        const definition = card.querySelector('.term-definition').textContent.toLowerCase();

        if (title.includes(searchTerm) || definition.includes(searchTerm)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });

    updateResultsCount();
});

// Фільтр по категоріях
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Видаляємо active з усіх кнопок
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Додаємо active до поточної
        this.classList.add('active');

        const category = this.dataset.category;

        termCards.forEach(card => {
            if (category === 'all') {
                card.classList.remove('hidden');
            } else if (card.dataset.category === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });

        // Очищаємо пошук при зміні фільтра
        searchInput.value = '';

        updateResultsCount();
    });
});

// Ініціалізація лічильника
updateResultsCount();

// Підсвітка при скролі
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.5s ease-in-out';
        }
    });
}, { threshold: 0.1 });

termCards.forEach(card => {
    observer.observe(card);
});

// Анімація появи
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
