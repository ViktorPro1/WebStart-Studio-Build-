// Слухач оновлень від Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'CACHE_UPDATED') {
            showUpdateNotification();
        }
    });

    // Перевірка оновлень при завантаженні
    navigator.serviceWorker.ready.then(registration => {
        registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;

            newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    showUpdateNotification();
                }
            });
        });
    });
}

function showUpdateNotification() {
    // Перевіряємо чи вже показане
    if (sessionStorage.getItem('update-shown')) return;
    sessionStorage.setItem('update-shown', 'true');

    // Створюємо попап
    const popup = document.createElement('div');
    popup.id = 'pwa-update-popup';
    popup.innerHTML = `
    <div style="
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #000;
      color: #fff;
      padding: 15px 25px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      z-index: 9999;
      display: flex;
      align-items: center;
      gap: 15px;
      animation: slideUp 0.3s ease;
      max-width: 90%;
    ">
      <span>🎉 Доступна нова версія!</span>
      <button onclick="location.reload()" style="
        background: #fff;
        color: #000;
        border: none;
        padding: 8px 16px;
        border-radius: 8px;
        font-weight: bold;
        cursor: pointer;
      ">Оновити</button>
      <button onclick="this.parentElement.parentElement.remove()" style="
        background: transparent;
        color: #fff;
        border: 1px solid #fff;
        padding: 8px 16px;
        border-radius: 8px;
        cursor: pointer;
      ">Пізніше</button>
    </div>
  `;

    document.body.appendChild(popup);

    // Автоматично приховати через 10 секунд
    setTimeout(() => {
        if (popup.parentElement) {
            popup.remove();
        }
    }, 10000);
}

// CSS анімація
const style = document.createElement('style');
style.textContent = `
  @keyframes slideUp {
    from { transform: translateX(-50%) translateY(100px); opacity: 0; }
    to { transform: translateX(-50%) translateY(0); opacity: 1; }
  }
`;
document.head.appendChild(style);