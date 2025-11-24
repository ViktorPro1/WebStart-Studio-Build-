//  Обробка форми зворотного зв'язку для contact.html

document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedback-form');

    if (!feedbackForm) return;

    feedbackForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value.trim(),
            viber: document.getElementById('viber').value.trim(),
            telegram: document.getElementById('telegram').value.trim(),
            email: document.getElementById('email').value.trim(),
            message: document.getElementById('message').value.trim()
        };

        if (!formData.name || !formData.email || !formData.message) {
            alert('Будь ласка, заповніть всі обов\'язкові поля.');
            return;
        }

        const submitButton = feedbackForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Надсилання...';

        try {
            // Використовуйте метод fetch з правильними заголовками
            const response = await fetch('https://script.google.com/macros/s/AKfycbzJOAOO5ARyGJy5jY6NqSdNgK11hljkD-iX17PqF35eOmw2-jf1hP61sG_5eldI7oz5rQ/exec', {
                method: 'POST',
                mode: 'no-cors', // Додайте цей параметр
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            // З mode: 'no-cors' ви не зможете прочитати відповідь
            // Тому просто показуємо успіх
            alert('Повідомлення успішно надіслано!');
            feedbackForm.reset();

        } catch (error) {
            console.error('Error:', error);
            alert('Щось пішло не так. Перевірте з\'єднання з інтернетом та спробуйте пізніше.');
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
});
