document.addEventListener("DOMContentLoaded", () => {
    const url = new URL(window.location.href);

    // Функція для безпечної санітизації
    function sanitize(str) {
        if (!str) return '';
        return str.replace(/[<>'"]/g, '');
    }

    // Отримання параметрів з URL
    const name = sanitize(url.searchParams.get('name')) || 'Клієнт';
    const template = sanitize(url.searchParams.get('template')) || 'Лендінг';
    const step = url.searchParams.get('step') || '1';
    const zip = url.searchParams.get('zip');
    const link = url.searchParams.get('link');

    // Заповнення даних
    document.getElementById('name').textContent = name;
    document.getElementById('template').textContent = template;

    // Збереження в localStorage для історії
    saveToLocalStorage({ name, template, step, timestamp: Date.now() });

    // Показ відповідного кроку
    if (step === '1') {
        showStep('step1', 'Бриф отримано', 'status-waiting', 1);
    } else if (step === '2') {
        showStep('step2', 'ZIP готовий', 'status-progress', 2);

        // Якщо є параметр zip - показуємо кнопку завантаження
        if (zip) {
            const zipLink = document.getElementById('zip-link');
            zipLink.href = zip;
            zipLink.style.display = 'inline-block';
            zipLink.target = '_blank';
        }
    } else if (step === '3') {
        showStep('step3', 'Очікуємо оплату', 'status-progress', 2);
    } else if (step === 'done' && link) {
        document.getElementById('done').style.display = 'block';
        document.getElementById('live-link').href = link;
        updateStatus('Готово!', 'status-done');
        updateProgressBar(3);
    }

    // Функція показу кроку
    function showStep(id, statusText, statusClass, progressStep) {
        document.getElementById(id).style.display = 'block';
        updateStatus(statusText, statusClass);
        updateProgressBar(progressStep);
    }

    // Оновлення статусу
    function updateStatus(text, className) {
        const statusEl = document.getElementById('status');
        statusEl.textContent = text;
        statusEl.className = 'status-badge ' + className;
    }

    // Оновлення прогрес-бару
    function updateProgressBar(currentStep) {
        const steps = [1, 2, 3];
        const progressFill = document.getElementById('progressFill');

        steps.forEach(stepNum => {
            const stepEl = document.getElementById(`progress-step-${stepNum}`);
            if (stepNum < currentStep) {
                stepEl.classList.add('completed');
                stepEl.classList.remove('active');
            } else if (stepNum === currentStep) {
                stepEl.classList.add('active');
                stepEl.classList.remove('completed');
            } else {
                stepEl.classList.remove('active', 'completed');
            }
        });

        // Оновлення лінії прогресу
        const percentage = ((currentStep - 1) / (steps.length - 1)) * 100;
        progressFill.style.width = percentage + '%';
    }

    // Збереження в localStorage
    function saveToLocalStorage(data) {
        try {
            localStorage.setItem('cabinetData', JSON.stringify(data));
        } catch (e) {
            console.log('localStorage недоступний');
        }
    }

    // === ВИБІР ОПЦІЇ === 
    window.chooseOption = function (num) {
        const clientName = document.getElementById('name').textContent;
        const clientTemplate = document.getElementById('template').textContent;

        let text = '';

        if (num === 2) {
            // Клієнт хоче ZIP
            text = `ВИБРАВ ZIP-ПАПКУ\n\nІм'я: ${clientName}\nШаблон: ${clientTemplate}\n\nПрошу надіслати ZIP-архів!`;
        } else if (num === 3) {
            // Клієнт хоче розміщення
            text = `ВИБРАВ РОЗМІЩЕННЯ ВІД ПЛАТФОРМИ\n\nІм'я: ${clientName}\nШаблон: ${clientTemplate}\n\nГотовий оплатити 500 грн та отримати готовий сайт!`;
        }

        openViberWithFallback(text);
    };

    // === VIBER з FALLBACK === 
    window.sendViber = function () {
        const clientName = document.getElementById('name').textContent;
        const clientTemplate = document.getElementById('template').textContent;
        const text = `ОПЛАТА РОЗМІЩЕННЯ\n\nІм'я: ${clientName}\nШаблон: ${clientTemplate}\n\nГотовий оплатити 500 грн за розміщення на Netlify!`;

        openViberWithFallback(text);
    };

    // Функція відкриття Viber з fallback
    function openViberWithFallback(text) {
        const viberUrl = `viber://chat?number=+380661391932&text=${encodeURIComponent(text)}`;
        const phoneNumber = '+380661391932';

        // Спроба відкрити Viber
        window.location.href = viberUrl;

        // Fallback через 2 секунди
        setTimeout(() => {
            const userChoice = confirm(
                'Viber не відкрився автоматично.\n\n' +
                'Натисни OK, щоб скопіювати повідомлення та номер телефону.\n' +
                'Потім відкрий Viber вручну.'
            );

            if (userChoice) {
                // Копіювання в буфер обміну
                const fullText = `Номер: ${phoneNumber}\n\nПовідомлення:\n${text}`;

                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(fullText).then(() => {
                        alert('✅ Скопійовано!\n\nТепер відкрий Viber і відправ це повідомлення на номер: ' + phoneNumber);
                    }).catch(() => {
                        // Якщо не вдалося скопіювати
                        fallbackCopy(fullText);
                    });
                } else {
                    // Для старих браузерів
                    fallbackCopy(fullText);
                }
            }
        }, 2000);
    }

    // Альтернативний метод копіювання для старих браузерів
    function fallbackCopy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();

        try {
            document.execCommand('copy');
            alert('✅ Скопійовано!\n\nТепер відкрий Viber і відправ це повідомлення на номер: +380661391932');
        } catch (err) {
            alert('❌ Не вдалося скопіювати автоматично.\n\nНомер: +380661391932\n\nПовідомлення:\n' + text);
        }

        document.body.removeChild(textarea);
    }

    // Ініціалізація прогрес-бару при завантаженні
    updateProgressBar(parseInt(step) || 1);
});