// tabs.js — модульна версія

// Перемикання табів
export function switchTab(tabName) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    document.querySelector(`[data-tab="${tabName}"]`)?.classList.add('active');
    document.getElementById(tabName)?.classList.add('active');

    // Прогрес бар
    const tabs = ['registration', 'deployment', 'settings'];
    const currentIndex = tabs.indexOf(tabName);
    const progress = ((currentIndex + 1) / tabs.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

// Toggle чеклисту
export function toggleCheck(event, li) {
    event.stopPropagation();
    li.classList.toggle('checked');
}

// Автоініціалізація при DOMContentLoaded
export function initTabs() {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    document.querySelectorAll('.step').forEach(step => {
        step.addEventListener('click', () => step.classList.toggle('expanded'));
    });
}

// Ініціалізація
document.addEventListener('DOMContentLoaded', initTabs);
