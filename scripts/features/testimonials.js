// Ротація відгуків у стилі месенджерів
export function initTestimonials() {
    const testimonialsData = {
        testimonial1: [
            {
                img: "foto/olena.webp",
                alt: "Олена",
                name: "Олена",
                text: "Портфоліо зробили за три дні, загалом непогано. Спочатку був косяк з кольорами на мобільній версії, але швидко виправили. Тепер виглядає стильно.",
                cite: "маркетолог",
                time: "14:23"
            },
            {
                img: "foto/nadija.webp",
                alt: "Надія",
                name: "Надія",
                text: "Якість добра, хоча довелося пару разів уточнювати деталі. Дизайн сучасний, але я б хотіла трохи більше варіантів на вибір. В цілому задоволена.",
                cite: "фрілансер",
                time: "09:45"
            },
            {
                img: "foto/volodumer.webp",
                alt: "Володимир",
                name: "Володимир",
                text: "Лендінг вийшов професійно, клієнти дзвонять. Єдине — довелося самому додавати пару фото, бо спочатку їх було замало. Але результат того вартий!",
                cite: "будівельник",
                time: "16:12"
            }
        ],
        testimonial2: [
            {
                img: "foto/andriy.webp",
                alt: "Андрій",
                name: "Андрій",
                text: "Сайт зробили швидко, це плюс. Мінус — не все працювало ідеально з першого разу, довелося виправляти форму замовлення. Зараз усе ок, магазин працює.",
                cite: "власник магазину",
                time: "11:30"
            },
            {
                img: "foto/vika.webp",
                alt: "Віка",
                name: "Віка",
                text: "За два дні готовий лендінг — це круто! Правда, шрифт спочатку був занадто дрібний, попросила збільшити. Клієнти кажуть, що сайт зручний, я рада.",
                cite: "власниця перукарні",
                time: "13:18"
            },
            {
                img: "foto/sergey.webp",
                alt: "Сергій",
                name: "Сергій",
                text: "Після запуску заявки пішли, це головне. Хотілося б більше фішок, але як для стартового пакету — нормально. Може потім ще щось додам.",
                cite: "фермер",
                time: "10:05"
            }
        ],
        testimonial3: [
            {
                img: "foto/mariya.webp",
                alt: "Марія",
                name: "Марія",
                text: "Резюме допомогло потрапити на співбесіди, це факт. Хоча довелося самій трохи підправити текст під себе — не все було точно сформульовано. Але загалом дуже корисно!",
                cite: "шукачка роботи",
                time: "15:42"
            },
            {
                img: "foto/bogdan.webp",
                alt: "Богдан",
                name: "Богдан",
                text: "Структура резюме добра, подача професійна. Мінус — затримали на день, але попередили. Зараз працюю на новій посаді, тож дякую!",
                cite: "рекрутер",
                time: "08:55"
            },
            {
                img: "foto/sofia.webp",
                alt: "Софія",
                name: "Софія",
                text: "Портфоліо вийшло креативним, мені подобається. Правда, не з першого разу вловили мій стиль, але після правок — супер. Точно замовлятиму ще.",
                cite: "маркетолог",
                time: "17:20"
            }
        ]
    };

    // ===== Функція безпечного завантаження фото =====
    const loadImageSafely = (imgElement, src, alt) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                imgElement.src = src;
                imgElement.alt = alt;
                resolve(true);
            };
            img.onerror = () => {
                console.warn(`⚠️ Фото не знайдено: ${src}, використано placeholder`);
                imgElement.src = createPlaceholder();
                imgElement.alt = `${alt} (фото недоступне)`;
                resolve(false);
            };
            img.src = src;
        });
    };

    function rotateTestimonials(id) {
        const container = document.getElementById(id);
        if (!container || !testimonialsData[id]) return;

        const imgElement = container.querySelector('.testimonial-photo');
        const headerName = container.querySelector('.testimonial-header-name');
        const contentP = container.querySelector('.testimonial-message p');
        const contentCite = container.querySelector('.testimonial-meta cite');
        const timeElement = container.querySelector('.testimonial-time');

        let index = 0;

        // ===== Функція оновлення контенту =====
        const updateContent = (data) => {
            imgElement.classList.remove('visible');

            setTimeout(() => {
                loadImageSafely(imgElement, data.img, data.alt).then(() => {
                    headerName.textContent = data.name;
                    contentP.textContent = data.text;
                    contentCite.textContent = data.cite;
                    timeElement.textContent = data.time;

                    setTimeout(() => {
                        imgElement.classList.add('visible');
                    }, 100);
                });
            }, 300);
        };

        // ===== Завантаження першого відгуку =====
        const t0 = testimonialsData[id][0];
        updateContent(t0);

        // ===== Ротація кожні 20 секунд =====
        setInterval(() => {
            index = (index + 1) % testimonialsData[id].length;
            const t = testimonialsData[id][index];
            updateContent(t);
        }, 20000);
    }

    ['testimonial1', 'testimonial2', 'testimonial3'].forEach(rotateTestimonials);

    // ===== Попереднє завантаження всіх фото =====
    const allTestimonialImages = Object.values(testimonialsData).flat().map(t => t.img);
    allTestimonialImages.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onerror = () => console.warn(`⚠️ Не вдалося завантажити: ${src}`);
    });
}

// ===== Placeholder =====
function createPlaceholder() {
    return 'foto/placeholder.webp';
}
