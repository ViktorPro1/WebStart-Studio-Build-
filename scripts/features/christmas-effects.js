/**
 * Модуль новорічних ефектів для WebStart Studio
 * Створює падаючий сніг та додає святкові елементи до логотипу
 * @module features/christmas-effects
 */

/**
 * Створює та анімує падаючі сніжинки
 */
function createSnowfall() {
    const snowContainer = document.getElementById('snow-container');

    if (!snowContainer) {
        console.warn('❄️ Snow container не знайдено');
        return;
    }

    const config = {
        snowflakeCount: 50,
        snowflakeChars: ['❄', '❅', '❆', '•', '◦'],
        minSize: 0.5,
        maxSize: 1.2,
        minDuration: 10,
        maxDuration: 20,
        maxDelay: 5
    };

    /**
     * Створює одну сніжинку з випадковими параметрами
     */
    function createSnowflake() {
        const container = document.getElementById('snow-container');
        if (!container) return;

        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';

        // Випадковий символ
        const randomChar = config.snowflakeChars[
            Math.floor(Math.random() * config.snowflakeChars.length)
        ];
        snowflake.textContent = randomChar;

        // Випадкова позиція
        snowflake.style.left = `${Math.random() * 100}%`;

        // Випадковий розмір
        const size = Math.random() * (config.maxSize - config.minSize) + config.minSize;
        snowflake.style.fontSize = `${size}em`;

        // Випадкова тривалість анімації
        const duration = Math.random() * (config.maxDuration - config.minDuration) + config.minDuration;
        snowflake.style.animationDuration = `${duration}s`;

        // Випадкова затримка
        const delay = Math.random() * config.maxDelay;
        snowflake.style.animationDelay = `${delay}s`;

        // Додаємо до DOM
        container.appendChild(snowflake);

        // Видаляємо після завершення і створюємо нову
        const totalTime = (duration + delay) * 1000;
        setTimeout(() => {
            if (snowflake.parentNode) {
                snowflake.remove();
            }
            createSnowflake();
        }, totalTime);
    }

    // Створюємо початкову партію сніжинок
    for (let i = 0; i < config.snowflakeCount; i++) {
        setTimeout(() => {
            createSnowflake();
        }, i * 100);
    }

    console.log(`❄️ Створено ${config.snowflakeCount} сніжинок`);
}

/**
 * Додає анімацію мерехтіння зірці на ялинці
 */
function animateTreeStar() {
    const star = document.querySelector('.tree-star');
    if (!star) {
        console.warn('⭐ Зірка на ялинці не знайдена');
        return;
    }

    console.log('⭐ Анімація зірки активована');
}

/**
 * Перевіряє наявність необхідних елементів у DOM
 * @returns {boolean} true якщо всі елементи присутні
 */
function checkRequiredElements() {
    const requiredElements = [
        { selector: '#snow-container', name: 'Snow container' },
        { selector: '.logo-header-main', name: 'Логотип' },
        { selector: '.santa-hat', name: 'Шапка Санти' },
        { selector: '.christmas-tree-header', name: 'Ялинка' }
    ];

    let allPresent = true;

    requiredElements.forEach(({ selector, name }) => {
        const element = document.querySelector(selector);
        if (!element) {
            console.warn(`🎄 Елемент "${name}" (${selector}) не знайдено`);
            allPresent = false;
        }
    });

    return allPresent;
}

/**
 * Ініціалізує всі новорічні ефекти
 * @export
 */
export function initChristmasEffects() {
    console.log('🎄 Ініціалізація новорічних ефектів...');

    // Перевіряємо наявність елементів
    const elementsPresent = checkRequiredElements();

    if (!elementsPresent) {
        console.warn('⚠️ Деякі новорічні елементи відсутні. Перевірте HTML структуру.');
    }

    // Запускаємо сніг
    createSnowfall();

    // Анімуємо зірку
    animateTreeStar();

    console.log('✅ Новорічні ефекти активовано!');
}

/**
 * Експортуємо також окрему функцію для створення снігу
 * на випадок якщо потрібно буде запустити його окремо
 */
export { createSnowfall };
