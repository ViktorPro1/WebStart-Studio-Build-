//   Cookie Notification Section

const cookieBanner = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('cookie-accept');
const closeBtn = document.getElementById('cookie-close');

// Перевірка чи вже прийнято
if (localStorage.getItem('cookieAccepted') === 'true') {
    cookieBanner.style.display = 'none';
}

acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieAccepted', 'true');
    cookieBanner.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    cookieBanner.style.display = 'none';
});


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('✅ Service Worker зареєстровано', reg.scope))
            .catch(err => console.error('❌ Service Worker помилка:', err));
    });
}

// Цей скрипт ,який був в кінці боді, тепер в init.js
// Це дозволяє краще організувати код і покращити кешування.


// calc.html

function calculate() {
    const days = parseInt(document.getElementById("days").value);
    const adBudget = parseFloat(document.getElementById("ad-budget").value);

    if (isNaN(days) || isNaN(adBudget) || days < 1 || adBudget < 0) {
        alert("Введіть коректні значення.");
        return;
    }

    // Обчислення вартості наших послуг
    let myFee = 500;
    if (days > 5) {
        myFee += (days - 5) * 50;
    }

    const totalAdBudget = days * adBudget;
    const total = myFee + totalAdBudget;

    document.getElementById("my-fee").value = myFee.toFixed(2);
    document.getElementById("total").value = total.toFixed(2);
}

function goBack() {
    window.location.href = "../index.html"; // або твоя головна
}


// Обробка форми зворотного зв'язку (для contact.html)

document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedback-form');

    // Перевіряємо, чи існує форма на цій сторінці
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Запобігаємо стандартному відправленню форми

            const formData = {
                name: document.getElementById('name').value,
                viber: document.getElementById('viber').value,
                telegram: document.getElementById('telegram').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            fetch('https://webstart-feedback.onrender.com/send-feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(response => response.json())
                .then(data => {
                    alert(data.message);
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Щось пішло не так. Спробуйте пізніше.');
                });
        });
    }
});

// UTM Generator Script (for utm.html)
function generateUtmUrl() {
    const url = document.getElementById('url').value.trim();
    const source = document.getElementById('source').value.trim();
    const medium = document.getElementById('medium').value.trim();
    const campaign = document.getElementById('campaign').value.trim();
    const term = document.getElementById('term').value.trim();
    const content = document.getElementById('content').value.trim();
    const copyBtn = document.getElementById('utm-copy-btn');
    const msg = document.getElementById('utm-copy-msg');

    // приховати повідомлення при новому генерації
    msg.classList.remove('show');

    if (!url || !source || !medium || !campaign) {
        document.getElementById('generatedUrl').innerText = "Будь ласка, заповніть усі обов'язкові поля (*).";
        copyBtn.disabled = true;
        return;
    }

    let utmParams = [];
    if (source) utmParams.push(`utm_source=${source}`);
    if (medium) utmParams.push(`utm_medium=${medium}`);
    if (campaign) utmParams.push(`utm_campaign=${campaign}`);
    if (term) utmParams.push(`utm_term=${term}`);
    if (content) utmParams.push(`utm_content=${content}`);

    const separator = url.includes('?') ? '&' : '?';
    const finalUrl = url + separator + utmParams.join('&');

    document.getElementById('generatedUrl').innerText = finalUrl;
    copyBtn.disabled = false;
}

function copyUtmUrl() {
    const text = document.getElementById('generatedUrl').innerText;
    const msg = document.getElementById('utm-copy-msg');

    navigator.clipboard.writeText(text).then(() => {
        msg.classList.add('show');
        setTimeout(() => msg.classList.remove('show'), 2000);
    });
}

// ===== СКРИПТ ДЛЯ АНІМАЦІЇ ЛІЧИЛЬНИКІВ ТА ПРОГРЕС-БАРІВ  з  achievement.html=====

function animateAchievementCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60 FPS

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

const achievementObserverOptions = {
    threshold: 0.3,
    rootMargin: '0px'
};

const achievementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('.achievement-stat-number');
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target'));
                animateAchievementCounter(counter, target);
            });

            const cards = entry.target.querySelectorAll('.achievement-stat-card');
            cards.forEach(card => {
                card.classList.add('achievement-animated');
            });

            achievementObserver.unobserve(entry.target);
        }
    });
}, achievementObserverOptions);

document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.achievement-stats-section');
    if (section) {
        achievementObserver.observe(section);
    }
});