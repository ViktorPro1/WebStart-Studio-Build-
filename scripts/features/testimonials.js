// Ротація відгуків з безпечним завантаженням фото
export function initTestimonials() {
    const testimonialsData = {
        testimonial1: [
            { img: "foto/olena.webp", alt: "Олена", text: "Всього за три дні отримала повноцінне портфоліо. Стильний дизайн, адаптивність — усе на рівні!", cite: "— Олена, маркетолог" },
            { img: "foto/nadija.webp", alt: "Надія", text: "Робота виконана якісно та швидко. Дизайн мені дуже підійшов. Рекомендую усім фрілансерам!", cite: "— Надія, фрілансер" },
            { img: "foto/volodumer.webp", alt: "Володимир", text: "Мій лендінг виглядає професійно і привабливо — чудове рішення для будівельного бізнесу!", cite: "— Володимир, власник будівельної фірми" }
        ],
        testimonial2: [
            { img: "foto/andriy.webp", alt: "Андрій", text: "Отримав сучасний сайт для магазину за рекордні строки. Робота перевершила очікування!", cite: "— Андрій, власник онлайн-магазину" },
            { img: "foto/vika.webp", alt: "Віка", text: "Лендінг зробили за два дні! Стильно, зрозуміло, і клієнтам подобається. Я задоволена!", cite: "— Віка, власниця перукарні" },
            { img: "foto/sergey.webp", alt: "Сергій", text: "Після запуску сайту заявки почали приходити відразу. Дуже ефективно!", cite: "— Сергій, фермер" }
        ],
        testimonial3: [
            { img: "foto/mariya.webp", alt: "Марія", text: "Після отримання електронного резюме мене запросили одразу на кілька співбесід. Дуже вдячна!", cite: "— Марія, шукачка роботи" },
            { img: "foto/bogdan.webp", alt: "Богдан", text: "Резюме виконане професійно. Подача, структура — все на високому рівні. Отримав нову посаду!", cite: "— Богдан, рекрутер" },
            { img: "foto/sofia.webp", alt: "Софія", text: "Сайт портфоліо зроблений з креативом і смаком. Замовлятиму ще банери й сторінки!", cite: "— Софія, маркетолог" }
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

        const imgElement = container.querySelector('img');
        const contentP = container.querySelector('.testimonial-content p');
        const contentCite = container.querySelector('.testimonial-content cite');

        let index = 0;

        // ===== Завантаження першого фото =====
        const t0 = testimonialsData[id][0];
        imgElement.style.opacity = '0'; // приховати до завантаження
        loadImageSafely(imgElement, t0.img, t0.alt).then(() => {
            contentP.textContent = t0.text;
            contentCite.textContent = t0.cite;
            imgElement.style.opacity = '1'; // показати після завантаження
        });

        setInterval(() => {
            index = (index + 1) % testimonialsData[id].length;
            const t = testimonialsData[id][index];

            imgElement.style.opacity = '0';
            setTimeout(() => {
                loadImageSafely(imgElement, t.img, t.alt).then(() => {
                    contentP.textContent = t.text;
                    contentCite.textContent = t.cite;
                    imgElement.style.opacity = '1';
                });
            }, 300);
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
    return 'foto/placeholder.webp'; // або будь-який ваш локальний placeholder
}
