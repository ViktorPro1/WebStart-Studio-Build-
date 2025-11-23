// Шаблони для різних ніш
const templates = {
    ecommerce: {
        businessName: 'ТехноМаркет',
        keywords: 'ноутбуки, техніка, купити',
        usp: 'Офіційна гарантія 2 роки',
        offer: 'Знижка 15% на перше замовлення',
        location: 'Київ'
    },
    services: {
        businessName: 'МайстерСервіс',
        keywords: 'ремонт, майстер, виклик',
        usp: 'Виїзд майстра за 30 хвилин',
        offer: 'Безкоштовна діагностика',
        location: 'Київ'
    },
    restaurant: {
        businessName: 'Смачна Піца',
        keywords: 'піца, доставка, їжа',
        usp: 'Доставка за 30 хв або безкоштовно',
        offer: 'Друга піца в подарунок',
        location: 'Київ'
    },
    education: {
        businessName: 'Курси Програмування',
        keywords: 'навчання, курси, онлайн',
        usp: 'Працевлаштування після курсу',
        offer: 'Безкоштовний пробний урок',
        location: 'Україна'
    },
    realestate: {
        businessName: 'Квартири Преміум',
        keywords: 'квартири, продаж, оренда',
        usp: 'Понад 5000 варіантів житла',
        offer: 'Безкоштовна консультація',
        location: 'Київ'
    },
    health: {
        businessName: 'Клініка Здоров\'я',
        keywords: 'стоматологія, лікар, консультація',
        usp: 'Сучасне обладнання та досвідчені лікарі',
        offer: 'Знижка 20% на перший прийом',
        location: 'Київ'
    }
};

// Обробка шаблонів
document.querySelectorAll('.use-template-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const templateCard = this.closest('.template-card');
        const templateType = templateCard.dataset.template;
        const template = templates[templateType];

        document.getElementById('businessName').value = template.businessName;
        document.getElementById('keywords').value = template.keywords;
        document.getElementById('usp').value = template.usp;
        document.getElementById('offer').value = template.offer;
        document.getElementById('location').value = template.location;

        // Scroll до форми
        document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });

        // Анімація
        templateCard.style.transform = 'scale(0.95)';
        setTimeout(() => {
            templateCard.style.transform = 'scale(1)';
        }, 200);
    });
});

// Генерація оголошень
document.getElementById('generateBtn').addEventListener('click', function () {
    const businessName = document.getElementById('businessName').value.trim();
    const keywords = document.getElementById('keywords').value.trim();
    const usp = document.getElementById('usp').value.trim();
    const offer = document.getElementById('offer').value.trim();
    const cta = document.getElementById('cta').value;
    const location = document.getElementById('location').value.trim();

    if (!businessName || !keywords) {
        alert('Будь ласка, заповніть назву бізнесу та ключові слова');
        return;
    }

    // Розділяємо ключові слова
    const keywordsList = keywords.split(',').map(k => k.trim()).filter(k => k);
    const mainKeyword = keywordsList[0] || '';

    // Генеруємо заголовки
    const headlines = [];

    // Заголовок 1: Назва + головне ключове слово
    if (mainKeyword) {
        headlines.push(`${businessName} - ${mainKeyword.charAt(0).toUpperCase() + mainKeyword.slice(1)}`);
    } else {
        headlines.push(businessName);
    }

    // Заголовок 2: УТП або пропозиція
    if (offer) {
        headlines.push(offer.substring(0, 30));
    } else if (usp) {
        headlines.push(usp.substring(0, 30));
    } else {
        headlines.push(`${cta} | ${businessName}`);
    }

    // Заголовок 3: Локація + CTA або ключ
    if (location && mainKeyword) {
        headlines.push(`${mainKeyword.charAt(0).toUpperCase() + mainKeyword.slice(1)} ${location}`);
    } else if (location) {
        headlines.push(`${businessName} у ${location}`);
    } else {
        headlines.push(`${cta} зараз`);
    }

    // Обрізаємо заголовки до 30 символів
    const finalHeadlines = headlines.map(h => h.substring(0, 30));

    // Генеруємо описи
    const descriptions = [];

    // Опис 1: УТП + CTA
    if (usp) {
        let desc1 = `${usp}. ${cta}!`;
        descriptions.push(desc1.substring(0, 90));
    } else {
        descriptions.push(`${businessName}. ${cta} вже сьогодні!`.substring(0, 90));
    }

    // Опис 2: Пропозиція + ключові слова
    if (offer) {
        let desc2 = `${offer}. ${keywordsList.slice(0, 2).join(', ')}`;
        if (location) desc2 += ` ${location}`;
        descriptions.push(desc2.substring(0, 90));
    } else {
        let desc2 = `Якісні ${mainKeyword}`;
        if (location) desc2 += ` у ${location}`;
        desc2 += `. ${cta}!`;
        descriptions.push(desc2.substring(0, 90));
    }

    // Відображаємо в превью
    document.getElementById('headline1').textContent = finalHeadlines[0];
    document.getElementById('headline2').textContent = finalHeadlines[1];
    document.getElementById('headline3').textContent = finalHeadlines[2];

    document.getElementById('description1').textContent = descriptions[0];
    document.getElementById('description2').textContent = descriptions[1];

    // Оновлюємо лічильники
    updateCharCount('headline1', finalHeadlines[0], 30);
    updateCharCount('headline2', finalHeadlines[1], 30);
    updateCharCount('headline3', finalHeadlines[2], 30);
    updateCharCount('description1', descriptions[0], 90);
    updateCharCount('description2', descriptions[1], 90);

    // Показуємо результати
    displayResults(finalHeadlines, descriptions, businessName, usp, offer);

    // Scroll до результатів
    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

function updateCharCount(elementId, text, maxLength) {
    const wrapper = document.getElementById(elementId).closest('.headline-wrapper, .description-wrapper');
    const charCountEl = wrapper.querySelector('.char-count');
    const currentEl = charCountEl.querySelector('.current');

    currentEl.textContent = text.length;

    // Кольорова індикація
    charCountEl.classList.remove('warning', 'error');
    if (text.length > maxLength) {
        charCountEl.classList.add('error');
    } else if (text.length > maxLength * 0.9) {
        charCountEl.classList.add('warning');
    }
}

function displayResults(headlines, descriptions, businessName, usp, offer) {
    const resultsDiv = document.getElementById('results');
    const headlinesResult = document.getElementById('headlinesResult');
    const descriptionsResult = document.getElementById('descriptionsResult');
    const tipsList = document.getElementById('tipsList');

    // Очищаємо попередні результати
    headlinesResult.innerHTML = '';
    descriptionsResult.innerHTML = '';
    tipsList.innerHTML = '';

    // Додаємо заголовки
    headlines.forEach((headline, index) => {
        const item = document.createElement('div');
        item.className = 'result-item';
        item.innerHTML = `
            <span class="result-text">${headline}</span>
            <button class="copy-btn" data-text="${headline}">Копіювати</button>
        `;
        headlinesResult.appendChild(item);
    });

    // Додаємо описи
    descriptions.forEach((description, index) => {
        const item = document.createElement('div');
        item.className = 'result-item';
        item.innerHTML = `
            <span class="result-text">${description}</span>
            <button class="copy-btn" data-text="${description}">Копіювати</button>
        `;
        descriptionsResult.appendChild(item);
    });

    // Генеруємо поради
    const tips = [];

    if (headlines.some(h => h.length > 28)) {
        tips.push('Деякі заголовки близькі до ліміту - спробуйте скоротити для кращої читабельності');
    }

    if (!headlines.some(h => /\d/.test(h))) {
        tips.push('Додайте числа в заголовки для підвищення CTR (наприклад: "Знижка 20%", "За 30 хвилин")');
    }

    if (!offer) {
        tips.push('Додайте спеціальну пропозицію або знижку для підвищення конверсії');
    }

    if (headlines.every(h => h.toLowerCase() === h)) {
        tips.push('Використовуйте великі літери на початку важливих слів');
    }

    tips.push('Створіть 3-5 варіантів оголошень та проведіть A/B тестування');
    tips.push('Використовуйте розширення оголошень (номер телефону, адреса, додаткові посилання)');
    tips.push('Регулярно оновлюйте оголошення на основі статистики ефективності');

    // Відображаємо поради
    tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });

    // Показуємо блок результатів
    resultsDiv.style.display = 'block';

    // Додаємо обробники для кнопок копіювання
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const text = this.dataset.text;
            copyToClipboard(text);

            this.textContent = 'Скопійовано!';
            this.classList.add('copied');

            setTimeout(() => {
                this.textContent = 'Копіювати';
                this.classList.remove('copied');
            }, 2000);
        });
    });
}

// Копіювання всього
document.getElementById('copyAllBtn').addEventListener('click', function () {
    const headlines = [];
    const descriptions = [];

    document.querySelectorAll('#headlinesResult .result-text').forEach(el => {
        headlines.push(el.textContent);
    });

    document.querySelectorAll('#descriptionsResult .result-text').forEach(el => {
        descriptions.push(el.textContent);
    });

    const allText = `
ЗАГОЛОВКИ:
1. ${headlines[0]}
2. ${headlines[1]}
3. ${headlines[2]}

ОПИСИ:
1. ${descriptions[0]}
2. ${descriptions[1]}
    `.trim();

    copyToClipboard(allText);

    this.textContent = '✓ Скопійовано!';
    setTimeout(() => {
        this.textContent = '📋 Копіювати все';
    }, 2000);
});

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback для старих браузерів
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
}
