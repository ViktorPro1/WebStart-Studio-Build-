// Модальні вікна (привітальне і допомоги)
export function initModals() {
    initWelcomeModal();
    initHelpPopup();
}

// Привітальне модальне вікно
function initWelcomeModal() {
    const welcomeModal = document.getElementById('welcome-modal');
    const closeWelcomeBtn = document.getElementById('close-btn');

    if (!welcomeModal || !closeWelcomeBtn) return;

    // Автоматичне закриття через 5 секунд
    setTimeout(() => {
        welcomeModal.style.display = 'none';
    }, 5000);

    // Закриття при кліку на кнопку
    closeWelcomeBtn.addEventListener('click', () => {
        welcomeModal.style.display = 'none';
    });
}

// Вікно допомоги
function initHelpPopup() {
    const helpPopup = document.getElementById('popup');
    const closePopupBtn = document.getElementById('close-popup');

    if (!helpPopup || !closePopupBtn) return;

    // Показ через 8 секунд
    setTimeout(() => {
        helpPopup.style.display = 'block';
    }, 8000);

    // Закриття при кліку
    closePopupBtn.addEventListener('click', () => {
        helpPopup.style.display = 'none';
    });

    // Закриття при кліку поза модальним вікном
    helpPopup.addEventListener('click', (e) => {
        if (e.target === helpPopup) {
            helpPopup.style.display = 'none';
        }
    });
}
