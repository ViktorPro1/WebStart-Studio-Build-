// scripts/init-modules/pwa-loader.js

export function initPWA() {
    if ('serviceWorker' in navigator && !window.pwaInitialized) {
        window.pwaInitialized = true;

        // Реєструємо Service Worker
        navigator.serviceWorker.register('/sw.js')
            .catch(err => console.error('Помилка реєстрації SW:', err));
    }

    // Стандартний попап "Додати на екран"
    let deferredPrompt;
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;

        const installBtn = document.createElement('button');
        installBtn.innerText = 'Встановити додаток';
        installBtn.style.position = 'fixed';
        installBtn.style.bottom = '20px';
        installBtn.style.right = '20px';
        installBtn.style.zIndex = '9999';
        document.body.appendChild(installBtn);

        installBtn.addEventListener('click', () => {
            installBtn.remove();
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(choiceResult => {
                deferredPrompt = null;
                console.log('Результат вибору користувача:', choiceResult.outcome);
            });
        });
    });
}

// Автоініціалізація
document.addEventListener('DOMContentLoaded', initPWA);
