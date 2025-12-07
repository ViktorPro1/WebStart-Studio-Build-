// Дані послуг з цінами
const servicesData = {
    portfolio: [
        { name: 'Базовий (5 сторінок)', price: 500 },
        { name: 'Стандарт (+ дизайн та адаптація)', price: 600 },
        { name: 'Преміум (+ анімації та SEO)', price: 700 }
    ],
    resume: [
        { name: 'Classic', price: 300 },
        { name: 'Creative', price: 400 },
        { name: 'Minimal', price: 450 },
        { name: 'Premium', price: 550 }
    ],
    sites: [
        { name: 'Landing page', price: 800 },
        { name: 'Сайт для рекрутера', price: 1200 },
        { name: 'Instagram "Taplink"', price: 500 },
        { name: 'Сайт для мікрокредитування', price: 1000 },
        { name: 'Сайт перевезень ЄС', price: 1500 }
    ],
    adaptive: [
        { name: 'Базова', price: 300 },
        { name: 'Розширена', price: 450 },
        { name: 'Преміум', price: 600 }
    ]
};

// Елементи DOM
const serviceTypeSelect = document.getElementById('service-type');
const serviceOptionSelect = document.getElementById('service-option');
const serviceOptionsGroup = document.getElementById('service-options');
const additionalOptionsGroup = document.getElementById('additional-options');
const resultDiv = document.getElementById('result');
const totalPriceDiv = document.getElementById('total-price');
const resetBtn = document.getElementById('reset-calculator');

// Змінна для базової ціни
let basePrice = 0;

// Обробник зміни типу послуги
serviceTypeSelect.addEventListener('change', function () {
    const selectedType = this.value;

    if (selectedType) {
        // Очищаємо попередні опції
        serviceOptionSelect.innerHTML = '<option value="">-- Оберіть варіант --</option>';

        // Додаємо нові опції
        const options = servicesData[selectedType];
        options.forEach((option, index) => {
            const optionElement = document.createElement('option');
            optionElement.value = option.price;
            optionElement.textContent = `${option.name} — ${option.price} грн`;
            serviceOptionSelect.appendChild(optionElement);
        });

        // Показуємо блок з варіантами
        serviceOptionsGroup.style.display = 'block';

        // Ховаємо додаткові опції та результат
        additionalOptionsGroup.style.display = 'none';
        resultDiv.style.display = 'none';
        resetBtn.style.display = 'none';

        // Скидаємо чекбокси
        resetCheckboxes();
    } else {
        serviceOptionsGroup.style.display = 'none';
        additionalOptionsGroup.style.display = 'none';
        resultDiv.style.display = 'none';
        resetBtn.style.display = 'none';
    }
});

// Обробник зміни варіанту послуги
serviceOptionSelect.addEventListener('change', function () {
    const selectedPrice = parseInt(this.value);

    if (selectedPrice) {
        basePrice = selectedPrice;

        // Показуємо додаткові опції та результат
        additionalOptionsGroup.style.display = 'block';
        resultDiv.style.display = 'block';
        resetBtn.style.display = 'block';

        // Розраховуємо та відображаємо ціну
        calculateTotal();
    } else {
        basePrice = 0;
        additionalOptionsGroup.style.display = 'none';
        resultDiv.style.display = 'none';
        resetBtn.style.display = 'none';
    }
});

// Обробники для чекбоксів
document.querySelectorAll('#additional-options input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', calculateTotal);
});

// Функція розрахунку загальної вартості
function calculateTotal() {
    let total = basePrice;

    // Додаємо вартість додаткових опцій
    document.querySelectorAll('#additional-options input[type="checkbox"]:checked').forEach(checkbox => {
        total += parseInt(checkbox.value);
    });

    // Відображаємо результат
    totalPriceDiv.textContent = `${total} грн`;
}

// Функція скидання чекбоксів
function resetCheckboxes() {
    document.querySelectorAll('#additional-options input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
}

// Обробник кнопки скидання
resetBtn.addEventListener('click', function () {
    serviceTypeSelect.value = '';
    serviceOptionSelect.innerHTML = '<option value="">-- Оберіть варіант --</option>';
    serviceOptionsGroup.style.display = 'none';
    additionalOptionsGroup.style.display = 'none';
    resultDiv.style.display = 'none';
    resetBtn.style.display = 'none';
    basePrice = 0;
    resetCheckboxes();
});