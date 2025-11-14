export function initCookieBanner() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    const closeBtn = document.getElementById('cookie-close');

    if (!cookieBanner) return;

    if (localStorage.getItem('cookieAccepted') === 'true') {
        cookieBanner.style.display = 'none';
    }

    acceptBtn?.addEventListener('click', () => {
        localStorage.setItem('cookieAccepted', 'true');
        cookieBanner.style.display = 'none';
    });

    closeBtn?.addEventListener('click', () => {
        cookieBanner.style.display = 'none';
    });
}
