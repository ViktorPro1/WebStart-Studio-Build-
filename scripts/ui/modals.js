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

const popup = document.getElementById('popup');
const closePopupBtn = document.getElementById('close-popup');
const helpButton = document.getElementById('help-button');

// Закриття popup і показ кнопки
closePopupBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    helpButton.style.display = 'block';
});

// Відкриття popup при кліку на кнопку
helpButton.addEventListener('click', () => {
    popup.style.display = 'flex';
    helpButton.style.display = 'none';
});
