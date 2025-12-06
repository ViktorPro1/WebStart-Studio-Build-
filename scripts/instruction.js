// Функція перемикання табів
function switchTab(tabName) {
    // Видаляємо активний клас з усіх табів
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Видаляємо активний клас з усього контенту
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Додаємо активний клас до обраного табу
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    // Показуємо відповідний контент
    document.getElementById(tabName).classList.add('active');

    // Оновлюємо прогрес бар
    const tabs = ['registration', 'deployment', 'settings'];
    const currentIndex = tabs.indexOf(tabName);
    const progress = ((currentIndex + 1) / tabs.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

// Функція дляToggleCheck чеклисту
function toggleCheck(event, li) {
    event.stopPropagation();
    li.classList.toggle('checked');
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', function () {

    // Додаємо обробники подій для табів
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function () {
            switchTab(this.dataset.tab);
        });
    });

    // Додаємо обробники для розгортання/згортання кроків
    document.querySelectorAll('.step').forEach(step => {
        step.addEventListener('click', function () {
            this.classList.toggle('expanded');
        });
    });

});