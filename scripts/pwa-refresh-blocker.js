// Блокування pull-to-refresh
let touchStartY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchmove', (e) => {
    const touchY = e.touches[0].clientY;
    const touchDelta = touchY - touchStartY;

    // Блокуємо свайп вниз на верху сторінки
    if (touchDelta > 0 && window.scrollY === 0) {
        e.preventDefault();
    }
}, { passive: false });