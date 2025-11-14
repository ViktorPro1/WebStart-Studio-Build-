export function initToggleSections() {
    // Кнопка "Показати нашу команду"
    const toggleTeamBtn = document.getElementById('toggleTeam');
    const teamSection = document.getElementById('teamSection');

    if (toggleTeamBtn && teamSection) {
        toggleTeamBtn.addEventListener('click', () => {
            const isHidden = teamSection.style.display === 'none' || teamSection.style.display === '';
            teamSection.style.display = isHidden ? 'block' : 'none';
            toggleTeamBtn.textContent = isHidden ? 'Приховати нашу команду' : 'Показати нашу команду';
        });
    }

    // Кнопка "Показати історію платформи"
    const toggleHistoryBtn = document.getElementById('toggleHistory');
    const historySection = document.getElementById('historySection');

    if (toggleHistoryBtn && historySection) {
        toggleHistoryBtn.addEventListener('click', () => {
            const isHidden = historySection.style.display === 'none' || historySection.style.display === '';
            historySection.style.display = isHidden ? 'block' : 'none';
            toggleHistoryBtn.textContent = isHidden ? 'Приховати історію платформи' : 'Показати історію платформи';
        });
    }

    // Кнопки "Показати результати/приклади"
    const showButtons = document.querySelectorAll('.show-results');

    showButtons.forEach(button => {
        button.addEventListener('click', function () {
            const slider = this.nextElementSibling;
            const arrow = this.querySelector('.arrow');

            if (slider && slider.classList.contains('results-slider')) {
                const isHidden = slider.style.display === 'none' || slider.style.display === '';
                slider.style.display = isHidden ? 'block' : 'none';
                if (arrow) arrow.textContent = isHidden ? '▲' : '▼';
            }
        });
    });
}
