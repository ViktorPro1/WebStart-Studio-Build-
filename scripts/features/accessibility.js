// JAVASCRIPT ДЛЯ ПОКРАЩЕННЯ ДОСТУПНОСТІ


// 1. Управління aria-expanded для toggle кнопок та бургер-меню
// function setupToggleButtons() {
//     const burger = document.getElementById('burger');
//     const navMenu = document.getElementById('navMenu');

//     if (burger && navMenu) {
//         // Функція закриття меню
//         const closeMenu = () => {
//             navMenu.classList.remove('active');
//             burger.classList.remove('active');
//             burger.setAttribute('aria-expanded', 'false');
//         };

//         // Клік по бургеру
//         burger.addEventListener('click', (e) => {
//             e.stopPropagation(); // Важливо, щоб document click не закрив меню відразу
//             const isActive = navMenu.classList.toggle('active');
//             burger.classList.toggle('active');
//             burger.setAttribute('aria-expanded', isActive ? 'true' : 'false');

//             if (isActive) {
//                 const firstLink = navMenu.querySelector('a');
//                 if (firstLink) firstLink.focus();
//             }
//         });

//         // Клавіатурне відкриття бургер-меню
//         burger.addEventListener('keydown', (e) => {
//             if (e.key === 'Enter' || e.key === ' ') {
//                 e.preventDefault();
//                 burger.click();
//             }
//         });

//         // Клік поза меню закриває його
//         document.addEventListener('click', (e) => {
//             if (!navMenu.contains(e.target) && !burger.contains(e.target)) {
//                 closeMenu();
//             }
//         });

//         // Клік по будь-якому пункту меню закриває меню
//         const navLinks = navMenu.querySelectorAll('a');
//         navLinks.forEach(link => {
//             link.addEventListener('click', closeMenu);
//         });
//     }

//     // Toggle для інших секцій (як було)
//     const togglePricing = document.getElementById('togglePricing');
//     const pricingTable = document.getElementById('pricingTable');
//     if (togglePricing && pricingTable) {
//         togglePricing.addEventListener('click', () => {
//             const isExpanded = togglePricing.getAttribute('aria-expanded') === 'true';
//             togglePricing.setAttribute('aria-expanded', !isExpanded);
//             pricingTable.style.display = isExpanded ? 'none' : 'table';
//         });
//     }

//     const toggleHistory = document.getElementById('toggleHistory');
//     const historySection = document.getElementById('historySection');
//     if (toggleHistory && historySection) {
//         toggleHistory.addEventListener('click', () => {
//             const isExpanded = toggleHistory.getAttribute('aria-expanded') === 'true';
//             toggleHistory.setAttribute('aria-expanded', !isExpanded);
//             historySection.style.display = isExpanded ? 'none' : 'block';
//         });
//     }
// }



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

// 4. Покращення пошуку з анонсами
function setupAccessibleSearch() {
    const searchForm = document.getElementById('simple-search-form');
    const searchInput = document.getElementById('search-input');
    const searchFeedback = document.getElementById('search-feedback');

    if (searchForm && searchInput && searchFeedback) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchInput.value.trim().toLowerCase();

            if (!query) {
                searchFeedback.textContent = 'Будь ласка, введіть запит для пошуку';
                announceToScreenReader('Помилка: порожній запит пошуку', 'assertive');
                searchInput.focus();
                return;
            }

            const sections = document.querySelectorAll('section[id]');
            let found = false;

            sections.forEach(section => {
                const text = section.textContent.toLowerCase();
                if (text.includes(query)) {
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    section.classList.add('highlight-search');
                    found = true;
                    const sectionTitle = section.querySelector('h2')?.textContent || 'Секція';
                    announceToScreenReader(`Знайдено: ${sectionTitle}`, 'polite');
                    searchFeedback.textContent = `Знайдено: ${sectionTitle}`;
                    setTimeout(() => section.classList.remove('highlight-search'), 2000);
                    return;
                }
            });

            if (!found) {
                searchFeedback.textContent = 'Нічого не знайдено';
                announceToScreenReader('Нічого не знайдено за вашим запитом', 'polite');
            }
        });
    }
}

// 5. Слайдери
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

// 6. Галерея
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

// 7. Клавіатурна навігація слайдерів
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

// 8. Доступність форм
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

// 9. Динамічний контент
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

// 10. Skip link
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

// 11. Loading indicator
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

// 12. Ініціалізація всіх функцій доступності
export function initAccessibility() {
    setupToggleButtons();
    setupAccessibleSearch();
    setupAccessibleSliders();
    addAccessibleGalleryDescriptions();
    setupKeyboardNavigation();
    setupAccessibleForms();
    observeDynamicContent();
    setupSkipLinks();

    window.addEventListener('load', () => {
        announceToScreenReader('Сторінка повністю завантажена', 'polite');
    });

    console.log('✅ Accessibility module initialized');
}
