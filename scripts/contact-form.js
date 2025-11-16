//  Обробка форми зворотного зв'язку для contact.html

document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedback-form');

    // Перевіряємо, чи існує форма на цій сторінці
    if (!feedbackForm) {
        return;
    }

    feedbackForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Збираємо дані форми
        const formData = {
            name: document.getElementById('name').value.trim(),
            viber: document.getElementById('viber').value.trim(),
            telegram: document.getElementById('telegram').value.trim(),
            email: document.getElementById('email').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        // Валідація обов'язкових полів
        if (!formData.name || !formData.email || !formData.message) {
            alert('Будь ласка, заповніть всі обов\'язкові поля.');
            return;
        }

        // Блокуємо кнопку під час відправки
        const submitButton = feedbackForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Надсилання...';

        try {
            const response = await fetch('https://webstart-feedback.onrender.com/send-feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message || 'Повідомлення успішно надіслано!');
                feedbackForm.reset(); // Очищаємо форму
            } else {
                alert(data.message || 'Помилка при відправці. Спробуйте пізніше.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Щось пішло не так. Перевірте з\'єднання з інтернетом та спробуйте пізніше.');
        } finally {
            // Розблоковуємо кнопку
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
});
