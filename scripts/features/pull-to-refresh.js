// Pull-to-Refresh
export function initPullToRefresh() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) return;

    const ptr = document.getElementById('pullToRefresh');
    if (!ptr) return;

    let startY = 0;
    let currentY = 0;
    let pulling = false;

    window.addEventListener('touchstart', e => {
        if (window.scrollY === 0) {
            startY = e.touches[0].clientY;
            pulling = true;
        }
    });

    window.addEventListener('touchmove', e => {
        if (!pulling) return;
        currentY = e.touches[0].clientY;
        const diff = currentY - startY;

        if (diff > 0 && diff <= 100) {
            ptr.style.transform = `translateY(${diff - 50}px)`;
        }
    });

    window.addEventListener('touchend', () => {
        if (!pulling) return;
        const diff = currentY - startY;
        pulling = false;

        if (diff > 80) {
            ptr.textContent = 'Оновлення...';
            ptr.style.transform = 'translateY(0)';
            setTimeout(() => location.reload(), 300);
        } else {
            ptr.style.transform = 'translateY(-50px)';
        }
    });
}
