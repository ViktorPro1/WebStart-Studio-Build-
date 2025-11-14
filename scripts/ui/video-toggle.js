// Перемикач відео
export function initVideoToggle() {
    const toggleBtn = document.getElementById('toggle-video');
    const videoContainer = document.getElementById('video-container');

    if (toggleBtn && videoContainer) {
        toggleBtn.addEventListener('click', () => {
            const isVisible = videoContainer.style.display === 'block';
            videoContainer.style.display = isVisible ? 'none' : 'block';
            toggleBtn.textContent = isVisible
                ? '🎬 Переглянути відео про нас'
                : '❌ Закрити відео';
        });
    }
}
