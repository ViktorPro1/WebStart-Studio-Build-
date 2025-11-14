// 🔹 Калькулятор послуг
export function initCalculator() {

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

    if (!serviceTypeSelect || !serviceOptionSelect) return;

    let basePrice = 0;

    // Функції
    function resetCheckboxes() {
        document.querySelectorAll('#additional-options input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
    }

    function calculateTotal() {
        let total = basePrice;
        document.querySelectorAll('#additional-options input[type="checkbox"]:checked').forEach(checkbox => {
            total += parseInt(checkbox.value);
        });
        totalPriceDiv.textContent = `${total} грн`;
    }

    // Обробники
    serviceTypeSelect.addEventListener('change', function () {
        const selectedType = this.value;
        if (selectedType) {
            serviceOptionSelect.innerHTML = '<option value="">-- Оберіть варіант --</option>';
            const options = servicesData[selectedType];
            options.forEach(option => {
                const optionElement = document.createElement('option');
                optionElement.value = option.price;
                optionElement.textContent = `${option.name} — ${option.price} грн`;
                serviceOptionSelect.appendChild(optionElement);
            });
            serviceOptionsGroup.style.display = 'block';
            additionalOptionsGroup.style.display = 'none';
            resultDiv.style.display = 'none';
            resetBtn.style.display = 'none';
            resetCheckboxes();
        } else {
            serviceOptionsGroup.style.display = 'none';
            additionalOptionsGroup.style.display = 'none';
            resultDiv.style.display = 'none';
            resetBtn.style.display = 'none';
        }
    });

    serviceOptionSelect.addEventListener('change', function () {
        const selectedPrice = parseInt(this.value);
        if (selectedPrice) {
            basePrice = selectedPrice;
            additionalOptionsGroup.style.display = 'block';
            resultDiv.style.display = 'block';
            resetBtn.style.display = 'block';
            calculateTotal();
        } else {
            basePrice = 0;
            additionalOptionsGroup.style.display = 'none';
            resultDiv.style.display = 'none';
            resetBtn.style.display = 'none';
        }
    });

    document.querySelectorAll('#additional-options input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotal);
    });

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
}
