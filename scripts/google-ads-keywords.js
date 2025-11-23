// Генерація ключових слів
document.getElementById('generateKeywords').addEventListener('click', function () {
    const seedKeyword = document.getElementById('seedKeyword').value.trim();
    const location = document.getElementById('location').value.trim();

    if (!seedKeyword) {
        alert('Будь ласка, введіть основне ключове слово');
        return;
    }

    // Отримуємо обрані модифікатори
    const modifiers = [];
    document.querySelectorAll('.checkbox-group input[type="checkbox"]:checked').forEach(checkbox => {
        modifiers.push(checkbox.value);
    });

    // Генеруємо комбінації
    const keywords = generateKeywordCombinations(seedKeyword, location, modifiers);

    // Відображаємо результати
    displayKeywords(keywords);

    // Показуємо блок результатів
    document.getElementById('keywordsResults').style.display = 'block';
    document.getElementById('keywordsResults').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

function generateKeywordCombinations(seed, location, modifiers) {
    const keywords = {
        broad: [],
        phrase: [],
        exact: []
    };

    // Базове ключове слово
    keywords.broad.push(seed);
    keywords.phrase.push(`"${seed}"`);
    keywords.exact.push(`[${seed}]`);

    // З локацією
    if (location) {
        keywords.broad.push(`${seed} ${location}`);
        keywords.phrase.push(`"${seed} ${location}"`);
        keywords.exact.push(`[${seed} ${location}]`);

        keywords.broad.push(`${location} ${seed}`);
        keywords.phrase.push(`"${location} ${seed}"`);
        keywords.exact.push(`[${location} ${seed}]`);
    }

    // З модифікаторами
    modifiers.forEach(modifier => {
        keywords.broad.push(`${modifier} ${seed}`);
        keywords.phrase.push(`"${modifier} ${seed}"`);
        keywords.exact.push(`[${modifier} ${seed}]`);

        keywords.broad.push(`${seed} ${modifier}`);
        keywords.phrase.push(`"${seed} ${modifier}"`);
        keywords.exact.push(`[${seed} ${modifier}]`);

        // З локацією та модифікатором
        if (location) {
            keywords.broad.push(`${modifier} ${seed} ${location}`);
            keywords.phrase.push(`"${modifier} ${seed} ${location}"`);
            keywords.exact.push(`[${modifier} ${seed} ${location}]`);
        }
    });

    return keywords;
}

function displayKeywords(keywords) {
    const keywordsList = document.getElementById('keywordsList');
    keywordsList.innerHTML = '';

    const allKeywords = [
        ...keywords.broad.map(k => ({ text: k, type: 'broad' })),
        ...keywords.phrase.map(k => ({ text: k, type: 'phrase' })),
        ...keywords.exact.map(k => ({ text: k, type: 'exact' }))
    ];

    allKeywords.forEach(keyword => {
        const item = document.createElement('div');
        item.className = `keyword-item ${keyword.type}`;
        item.dataset.type = keyword.type;
        item.innerHTML = `
            <span class="keyword-text">${keyword.text}</span>
            <span class="keyword-type">${getTypeLabel(keyword.type)}</span>
        `;
        keywordsList.appendChild(item);
    });
}

function getTypeLabel(type) {
    const labels = {
        broad: 'Широка',
        phrase: 'Фразова',
        exact: 'Точна'
    };
    return labels[type] || type;
}

// Фільтрація по табах
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        // Видаляємо active з усіх
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const tab = this.dataset.tab;
        const items = document.querySelectorAll('.keyword-item');

        items.forEach(item => {
            if (tab === 'all') {
                item.classList.remove('hidden');
            } else if (item.dataset.type === tab) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// Копіювання всіх ключових слів
document.getElementById('copyKeywords').addEventListener('click', function () {
    const keywords = [];
    document.querySelectorAll('.keyword-item:not(.hidden) .keyword-text').forEach(el => {
        keywords.push(el.textContent);
    });

    const text = keywords.join('\n');
    copyToClipboard(text);

    this.textContent = '✓ Скопійовано!';
    setTimeout(() => {
        this.textContent = '📋 Копіювати всі';
    }, 2000);
});

// Завантаження CSV
document.getElementById('downloadKeywords').addEventListener('click', function () {
    const keywords = [];
    document.querySelectorAll('.keyword-item .keyword-text').forEach(el => {
        keywords.push(el.textContent);
    });

    const csv = 'Keyword\n' + keywords.join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', 'keywords.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Генерація мінус-слів
document.getElementById('generateNegative').addEventListener('click', function () {
    const businessType = document.getElementById('businessType').value;
    const customNegative = document.getElementById('customNegative').value.trim();

    if (!businessType && !customNegative) {
        alert('Будь ласка, оберіть тип бізнесу або введіть власні мінус-слова');
        return;
    }

    const negativeKeywords = generateNegativeKeywords(businessType, customNegative);
    displayNegativeKeywords(negativeKeywords);

    document.getElementById('negativeOutput').style.display = 'block';
    document.getElementById('negativeOutput').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

function generateNegativeKeywords(businessType, custom) {
    const negatives = [];

    // Загальні мінус-слова
    const common = [
        'безкоштовно', 'безплатно', 'даром', 'free',
        'реферат', 'курсова', 'дипломна', 'скачати',
        'торрент', 'завантажити', 'інструкція',
        'відгуки', 'форум', 'робота', 'вакансія'
    ];

    negatives.push(...common);

    // Специфічні для типу бізнесу
    const specificNegatives = {
        paid: ['безкоштовно', 'безплатно', 'даром', 'халява', 'free', 'trial'],
        new: ['б/в', 'бу', 'вживаний', 'used', 'second hand', 'секонд хенд'],
        professional: ['самостійно', 'своїми руками', 'diy', 'інструкція', 'як зробити'],
        premium: ['дешево', 'недорого', 'cheap', 'бюджетний', 'низька ціна'],
        local: ['москва', 'санкт-петербург', 'мінськ', 'інші_міста']
    };

    if (businessType && specificNegatives[businessType]) {
        negatives.push(...specificNegatives[businessType]);
    }

    // Додаємо кастомні
    if (custom) {
        const customWords = custom.split(',').map(w => w.trim()).filter(w => w);
        negatives.push(...customWords);
    }

    // Видаляємо дублікати
    return [...new Set(negatives)];
}

function displayNegativeKeywords(negatives) {
    const negativeList = document.getElementById('negativeList');
    negativeList.innerHTML = '';

    negatives.forEach(negative => {
        const item = document.createElement('div');
        item.className = 'negative-item';
        item.textContent = `-${negative}`;
        negativeList.appendChild(item);
    });
}

// Копіювання мінус-слів
document.getElementById('copyNegative').addEventListener('click', function () {
    const negatives = [];
    document.querySelectorAll('.negative-item').forEach(el => {
        negatives.push(el.textContent);
    });

    const text = negatives.join('\n');
    copyToClipboard(text);

    this.textContent = '✓ Скопійовано!';
    setTimeout(() => {
        this.textContent = '📋 Копіювати мінус-слова';
    }, 2000);
});

// Аналіз конкурента (симуляція)
document.getElementById('analyzeCompetitor').addEventListener('click', function () {
    const url = document.getElementById('competitorUrl').value.trim();

    if (!url) {
        alert('Будь ласка, введіть URL конкурента');
        return;
    }

    // Симуляція аналізу (в реальності потрібен API)
    const keywords = [
        'купити онлайн', 'доставка по україні', 'знижки та акції',
        'якісні товари', 'офіційний магазин', 'гарантія якості',
        'швидка доставка', 'оплата при отриманні', 'безкоштовна доставка',
        'новинки 2024', 'топ продажів', 'розпродаж',
        'акційні товари', 'преміум якість', 'найкращі ціни'
    ];

    displayCompetitorKeywords(keywords);

    document.getElementById('competitorResults').style.display = 'block';
    document.getElementById('competitorResults').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

function displayCompetitorKeywords(keywords) {
    const container = document.getElementById('competitorKeywords');
    container.innerHTML = '';

    keywords.forEach(keyword => {
        const item = document.createElement('div');
        item.className = 'competitor-keyword';
        item.textContent = keyword;
        container.appendChild(item);
    });
}

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
    } else {
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
