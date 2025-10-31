// scripts/pwa-loader.js

if ('serviceWorker' in navigator && !window.pwaInitialized) {
    window.pwaInitialized = true;

    // Реєструємо Service Worker
    navigator.serviceWorker.register('/sw.js')
        .catch(err => console.error('Помилка реєстрації SW:', err));
}

// Для показу стандартного попапу "Додати на екран" у Chrome/Edge
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    // Блокуємо автоматичне спливаюче вікно
    e.preventDefault();
    deferredPrompt = e;

    // Можна показати власну кнопку або логіку
    const installBtn = document.createElement('button');
    installBtn.innerText = 'Встановити додаток';
    installBtn.style.position = 'fixed';
    installBtn.style.bottom = '20px';
    installBtn.style.right = '20px';
    installBtn.style.zIndex = '9999';
    document.body.appendChild(installBtn);

    installBtn.addEventListener('click', () => {
        installBtn.remove(); // ховаємо кнопку після натискання
        deferredPrompt.prompt(); // показуємо системний попап
        deferredPrompt.userChoice.then((choiceResult) => {
            deferredPrompt = null;
            console.log('Результат вибору користувача:', choiceResult.outcome);
        });
    });
});
