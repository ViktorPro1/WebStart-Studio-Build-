// Бургер-Меню
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    // Використовуємо тернарний оператор для безпечного доступу до navLinks
    const navMenu = document.getElementById("navMenu");
    const navLinks = navMenu ? navMenu.querySelectorAll("a") : [];

    // Функція для коректного закриття меню (видаляє клас 'active' з обох елементів)
    const closeMenu = () => {
        if (navMenu) navMenu.classList.remove("active");
        if (burger) burger.classList.remove("active");
    };

    if (burger && navMenu) {
        // 1. Обробник кліку на бургері
        burger.addEventListener("click", (event) => { // ⬅️ Додаємо event
            event.preventDefault(); // ⭐️ ВИПРАВЛЕННЯ: Блокуємо перехід за посиланням #

            // КЛЮЧОВА ЗМІНА: Перемикаємо клас 'active' на обох елементах
            navMenu.classList.toggle("active");
            burger.classList.toggle("active");
        });

        // 2. Обробник кліку на пункті меню (закриває меню)
        navLinks.forEach(link => {
            link.addEventListener("click", (event) => {
                // Якщо посилання веде до якоря (#), також блокуємо нативний перехід
                if (link.getAttribute('href') === '#') {
                    event.preventDefault();
                }
                closeMenu();
            });
        });

        // 3. Обробник кліку поза межами меню (закриває меню)
        document.addEventListener("click", (event) => {
            // Перевіряємо, чи клік не був зроблений ні на меню, ні на бургері
            if (!navMenu.contains(event.target) && !burger.contains(event.target)) {
                closeMenu();
            }
        });
    } else {
        console.error("❌ Не знайдено елементів #burger або #navMenu. Перевірте HTML.");
    }
});

console.log('JavaScript файл підключено');



// Повернутися нагору (Показ кнопки при прокрутці вниз і плавний скрол)

const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// Для відеоплеєра

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggle-video');
    const videoContainer = document.getElementById('video-container');

    if (toggleBtn && videoContainer) {
        toggleBtn.addEventListener('click', () => {
            const isVisible = videoContainer.style.display === 'block';
            videoContainer.style.display = isVisible ? 'none' : 'block';
            toggleBtn.textContent = isVisible
                ? '🎬 Переглянути відео про нас'
                : '❌ Закрити відео';
        });
    }
});


// ФУНКЦІОНАЛ PULL-TO-REFRESH (ПЕРЕНЕСЕНО З ІНЛАЙН-СКРИПТА)

(function () {
    // Перевірка мобільного пристрою
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (!isMobile) return; // Якщо не мобільний - нічого не робимо

    const ptr = document.getElementById('pullToRefresh');
    if (!ptr) return; // Додатковий захист

    let startY = 0;
    let currentY = 0;
    let pulling = false;

    window.addEventListener('touchstart', e => {
        if (window.scrollY === 0) {
            startY = e.touches[0].clientY;
            pulling = true;
        }
    });

    window.addEventListener('touchmove', e => {
        if (!pulling) return;
        currentY = e.touches[0].clientY;
        const diff = currentY - startY;

        if (diff > 0 && diff <= 100) {
            // Динамічна зміна трансформації для плавного drag-and-drop
            ptr.style.transform = `translateY(${diff - 50}px)`;
        }
    });

    window.addEventListener('touchend', e => {
        if (!pulling) return;
        const diff = currentY - startY;
        pulling = false;

        if (diff > 80) { // Якщо потягнули достатньо
            ptr.textContent = 'Оновлення...';
            // Анімація завершення: повне відображення
            ptr.style.transform = 'translateY(0)';

            setTimeout(() => {
                location.reload(); // Оновити сторінку
            }, 300); // Невелика затримка для завершення анімації
        } else {
            // ПОВЕРНЕННЯ НАЗАД: приховати повідомлення
            ptr.style.transform = 'translateY(-50px)';
        }
    });
})();

// Реєстрація Service Worker та обробка оновлень

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(reg => {
        reg.onupdatefound = () => {
            const newSW = reg.installing;
            newSW.onstatechange = () => {
                if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
                    showUpdateBanner();
                }
            };
        };
    });
}

function showUpdateBanner() {
    const banner = document.createElement('div');
    banner.className = 'update-banner';
    banner.innerHTML = `
    <div>🔄 Доступне оновлення</div>
    <button>Оновити</button>
  `;

    // Кнопка оновлення
    banner.querySelector('button').onclick = () => {
        window.location.reload();
    };

    // Анімація появи
    banner.style.opacity = '0';
    banner.style.transform = 'translateY(-100%)';
    banner.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    document.body.appendChild(banner);
    requestAnimationFrame(() => {
        banner.style.opacity = '1';
        banner.style.transform = 'translateY(0)';
    });

    // Автоматичне приховування через 10 секунд
    setTimeout(() => {
        banner.style.opacity = '0';
        banner.style.transform = 'translateY(-100%)';
        setTimeout(() => banner.remove(), 600); // після завершення анімації
    }, 10000);
}

// Обробник для кнопки "Показати нашу команду"
document.addEventListener('DOMContentLoaded', () => {
    const toggleTeamBtn = document.getElementById('toggleTeam');
    const teamSection = document.getElementById('teamSection');

    if (toggleTeamBtn && teamSection) {
        toggleTeamBtn.addEventListener('click', () => {
            if (teamSection.style.display === 'none' || teamSection.style.display === '') {
                teamSection.style.display = 'block';
                toggleTeamBtn.textContent = 'Приховати нашу команду';
            } else {
                teamSection.style.display = 'none';
                toggleTeamBtn.textContent = 'Показати нашу команду';
            }
        });
    }
});

// Обробник для кнопки "Показати історію платформи"
document.addEventListener('DOMContentLoaded', () => {
    const toggleHistoryBtn = document.getElementById('toggleHistory');
    const historySection = document.getElementById('historySection');

    if (toggleHistoryBtn && historySection) {
        toggleHistoryBtn.addEventListener('click', () => {
            if (historySection.style.display === 'none' || historySection.style.display === '') {
                historySection.style.display = 'block';
                toggleHistoryBtn.textContent = 'Приховати історію платформи';
            } else {
                historySection.style.display = 'none';
                toggleHistoryBtn.textContent = 'Показати історію платформи';
            }
        });
    }
});

// ✅ НОВИЙ КОД: Обробник для всіх кнопок "Показати результати/приклади"
document.addEventListener('DOMContentLoaded', () => {
    const showButtons = document.querySelectorAll('.show-results');

    showButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Знаходимо наступний елемент після кнопки
            const slider = this.nextElementSibling;
            const arrow = this.querySelector('.arrow');

            // Перевіряємо, чи це потрібний елемент
            if (slider && slider.classList.contains('results-slider')) {
                // Перемикаємо видимість
                if (slider.style.display === 'none' || slider.style.display === '') {
                    slider.style.display = 'block';
                    if (arrow) arrow.textContent = '▲';
                } else {
                    slider.style.display = 'none';
                    if (arrow) arrow.textContent = '▼';
                }
            }
        });
    });
});