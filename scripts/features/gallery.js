// Галерея з модальним вікном
export function initGallery() {
    const track = document.getElementById('galleryTrack');
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('galleryModalImg');
    const closeGallery = document.getElementById('galleryClose');
    const slider = document.querySelector('.gallery-marquee-slider');
    const wrapper = document.querySelector('.gallery-marquee-wrapper');

    if (wrapper) wrapper.style.display = 'block';

    if (!track || !modal || !modalImg || !closeGallery) return;

    // Відкриття модального вікна при кліку на зображення
    track.querySelectorAll('.gallery-marquee-image').forEach(img => {
        img.addEventListener('click', () => {
            modalImg.src = img.currentSrc || img.src;
            modal.classList.remove('hidden');
            document.body.classList.add('modal-open');
        });
    });

    // Закриття модального вікна
    closeGallery.addEventListener('click', () => {
        modal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    });

    // Тач-керування для прокрутки
    let startX = 0, lastMove = 0;

    track.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
    });

    track.addEventListener('touchmove', e => {
        const now = Date.now();
        if (now - lastMove < 16) return; // throttle
        lastMove = now;
        const diff = startX - e.touches[0].clientX;
        requestAnimationFrame(() => {
            track.scrollLeft += diff;
        });
        startX = e.touches[0].clientX;
    });

    // Синхронізація слайдера
    if (slider) {
        slider.addEventListener('input', () => {
            track.scrollLeft = (slider.value / 100) * (track.scrollWidth - track.clientWidth);
        });
    }
}
