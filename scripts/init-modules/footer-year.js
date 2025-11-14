// footer-year.js — модульна версія
export function updateFooterYear() {
    const footerCopy = document.querySelector('.footer p');
    if (!footerCopy) return;
    footerCopy.innerHTML = footerCopy.innerHTML.replace(/\d{4}/, new Date().getFullYear());
}

// Автоматичний запуск при DOMContentLoaded
document.addEventListener('DOMContentLoaded', updateFooterYear);
