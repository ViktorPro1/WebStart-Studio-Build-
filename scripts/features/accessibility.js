// JAVASCRIPT ДЛЯ ПОКРАЩЕННЯ ДОСТУПНОСТІ

// 1. Toggle для історії (pricing видалено, щоб уникнути конфлікту)
function setupOtherToggles() {
    const toggleHistory = document.getElementById('toggleHistory');
    const historySection = document.getElementById('historySection');
    if (toggleHistory && historySection) {
        toggleHistory.addEventListener('click', () => {
            const isExpanded = toggleHistory.getAttribute('aria-expanded') === 'true';
            toggleHistory.setAttribute('aria-expanded', !isExpanded);
            historySection.style.display = isExpanded ? 'none' : 'block';
        });
    }
}

// 2. Управління фокусом в модальних вікнах
export function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    element.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
            } else if (!e.shiftKey && document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
            }
        }

        if (e.key === 'Escape') {
            closeModal?.(element); // закриття модального
        }
    });
}

// 3. Анонси для скрін-рідерів
export function announceToScreenReader(message, priority = 'polite') {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'visually-hidden';
    announcement.textContent = message;
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
}

// 4. Слайдери
function setupAccessibleSliders() {
    const sliderButtons = document.querySelectorAll('.show-results');
    sliderButtons.forEach(button => {
        button.addEventListener('click', () => {
            const slider = button.nextElementSibling;
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);
            slider.style.display = isExpanded ? 'none' : 'block';
            const arrow = button.querySelector('.arrow');
            if (arrow) arrow.textContent = isExpanded ? '▼' : '▲';
            announceToScreenReader(isExpanded ? 'Слайдер згорнуто' : 'Слайдер розгорнуто', 'polite');
        });
    });
}

// 5. Галереї
function addAccessibleGalleryDescriptions() {
    const galleryImages = document.querySelectorAll('.gallery-marquee-image');
    galleryImages.forEach((img, index) => {
        if (!img.alt || img.alt === '') {
            img.alt = `Зображення проекту ${index + 1} - приклад роботи студії`;
        }
        img.addEventListener('click', () => {
            announceToScreenReader(`Відкрито збільшене зображення: ${img.alt}`, 'polite');
        });
    });
}

// 6. Клавіатурна навігація слайдерів
function setupKeyboardNavigation() {
    const sliders = document.querySelectorAll('.slider-wrapper');
    sliders.forEach(slider => {
        slider.addEventListener('keydown', (e) => {
            const items = slider.querySelectorAll('.slider-item');
            const currentIndex = Array.from(items).findIndex(
                item => item === document.activeElement.closest('.slider-item')
            );
            let nextIndex;

            if (e.key === 'ArrowRight') {
                e.preventDefault();
                nextIndex = (currentIndex + 1) % items.length;
                items[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                items[nextIndex].querySelector('img')?.focus();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                nextIndex = (currentIndex - 1 + items.length) % items.length;
                items[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                items[nextIndex].querySelector('img')?.focus();
            }
        });
    });
}

// 7. Доступність форм
function setupAccessibleForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('invalid', () => {
                input.setAttribute('aria-invalid', 'true');
                announceToScreenReader(`Помилка валідації: ${input.validationMessage}`, 'assertive');
            });
            input.addEventListener('input', () => {
                if (input.validity.valid) input.setAttribute('aria-invalid', 'false');
            });
        });
    });
}

// 8. Динамічний контент
function observeDynamicContent() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && (node.classList.contains('update-message') || node.id === 'social-proof')) {
                        const text = node.textContent.trim();
                        if (text) announceToScreenReader(text, 'polite');
                    }
                });
            }
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

// 9. Skip link
function setupSkipLinks() {
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(skipLink.getAttribute('href'));
            if (target) {
                target.setAttribute('tabindex', '-1');
                target.focus();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
}

// 10. Loading indicator
export function showLoadingIndicator(message = 'Завантаження...') {
    const loader = document.createElement('div');
    loader.id = 'loading-indicator';
    loader.setAttribute('role', 'status');
    loader.setAttribute('aria-live', 'polite');
    loader.innerHTML = `
        <span class="visually-hidden">${message}</span>
        <div class="spinner" aria-hidden="true"></div>
    `;
    document.body.appendChild(loader);
    announceToScreenReader(message, 'polite');
}

export function hideLoadingIndicator() {
    const loader = document.getElementById('loading-indicator');
    if (loader) {
        announceToScreenReader('Завантаження завершено', 'polite');
        loader.remove();
    }
}

// 11. Ініціалізація всіх функцій доступності
export function initAccessibility() {
    setupOtherToggles();
    // setupAccessibleSearch() - ВИДАЛЕНО! Використовується окремий модуль search.js
    setupAccessibleSliders();
    addAccessibleGalleryDescriptions();
    setupKeyboardNavigation();
    setupAccessibleForms();
    observeDynamicContent();
    setupSkipLinks();

    window.addEventListener('load', () => {
        announceToScreenReader('Сторінка повністю завантажена', 'polite');
    });

    console.log('✅ Accessibility module initialized (without search - handled by search.js)');
}
