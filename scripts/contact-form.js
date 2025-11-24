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

        // URL вашого скрипта
        const scriptURL = 'https://script.google.com/macros/s/AKfycbzJOAOO5ARyGJy5jY6NqSdNgK11hljkD-iX17PqF35eOmw2-jf1hP61sG_5eldI7oz5rQ/exec';

        try {
            console.log('Відправка даних:', formData);

            // Використовуємо URLSearchParams для надійності
            const params = new URLSearchParams();
            params.append('name', formData.name);
            params.append('viber', formData.viber);
            params.append('telegram', formData.telegram);
            params.append('email', formData.email);
            params.append('message', formData.message);

            const response = await fetch(scriptURL + '?' + params.toString(), {
                method: 'GET',
                redirect: 'follow'
            });

            console.log('Response status:', response.status);
            console.log('Response ok:', response.ok);

            // Читаємо відповідь як текст спочатку
            const textResponse = await response.text();
            console.log('Response text:', textResponse);

            // Пробуємо розпарсити JSON
            let data;
            try {
                data = JSON.parse(textResponse);
            } catch (parseError) {
                console.error('JSON parse error:', parseError);
                // Якщо не можемо розпарсити, але статус OK - вважаємо успішним
                if (response.ok) {
                    alert('Повідомлення успішно надіслано!');
                    feedbackForm.reset();
                    return;
                }
                throw new Error('Невалідна відповідь від сервера');
            }

            if (data.status === "success") {
                alert(data.message);
                feedbackForm.reset();
            } else {
                alert(data.message || 'Помилка при відправці. Спробуйте пізніше.');
            }

        } catch (error) {
            console.error('Детальна помилка:', error);
            console.error('Error name:', error.name);
            console.error('Error message:', error.message);
            console.error('Error stack:', error.stack);

            // Показуємо більш детальну помилку
            alert('Помилка: ' + error.message + '\n\nПеревірте консоль для деталей (F12)');
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
});
