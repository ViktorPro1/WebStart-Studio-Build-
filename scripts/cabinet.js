document.addEventListener("DOMContentLoaded", () => {
    const url = new URL(window.location.href);
    const name = url.searchParams.get('name') || 'Клієнт';
    const template = url.searchParams.get('template') || 'Лендінг';
    const step = url.searchParams.get('step') || '1';
    const zip = url.searchParams.get('zip');
    const link = url.searchParams.get('link');

    // Заповнення даних
    document.getElementById('name').textContent = name;
    document.getElementById('template').textContent = template;

    // Показ кроку
    if (step === '1') showStep('step1', 'Бриф отримано');
    if (step === '2') showStep('step2', 'ZIP готовий');
    if (step === '3') showStep('step3', 'Очікуємо оплату');
    if (step === 'done' && link) {
        document.getElementById('done').style.display = 'block';
        document.getElementById('live-link').href = link;
        document.getElementById('live-link').style.display = 'inline-block';
        document.getElementById('status').textContent = 'Готово!';
        document.getElementById('status').className = 'status-done';
    }

    function showStep(id, statusText) {
        document.getElementById(id).style.display = 'block';
        document.getElementById('status').textContent = statusText;
        if (id === 'step2' && zip) {
            document.getElementById('zip-link').href = zip;
        }
    }

    // === ВИБІР ОПЦІЇ — пише тобі в Viber ===
    window.chooseOption = function (num) {
        const clientName = document.getElementById('name').textContent;
        const clientTemplate = document.getElementById('template').textContent;

        if (num === 2) {
            // Клієнт хоче ZIP
            const text = `ВИБРАВ ZIP-ПАПКУ\nІм'я: ${clientName}\nШаблон: ${clientTemplate}\n\nНадішли ZIP!`;
            window.open(`viber://chat?number=+380661391932&text=${encodeURIComponent(text)}`);
        }

        if (num === 3) {
            // Клієнт хоче розміщення
            const text = `ВИБРАВ РОЗМІЩЕННЯ ВІД ПЛАТФОРМИ\nІм'я: ${clientName}\nШаблон: ${clientTemplate}\n\nГотовий оплатити та отримати сайт!`;
            window.open(`viber://chat?number=+380661391932&text=${encodeURIComponent(text)}`);
        }
    };

    // === Viber для кроку 3 (оплата) ===
    window.sendViber = function () {
        const clientName = document.getElementById('name').textContent;
        const clientTemplate = document.getElementById('template').textContent;
        const text = `ОПЛАТА РОЗМІЩЕННЯ\nІм'я: ${clientName}\nШаблон: ${clientTemplate}\n\nОплата 500 грн. Готовий!`;
        window.open(`viber://chat?number=+380661391932&text=${encodeURIComponent(text)}`);
    };
});