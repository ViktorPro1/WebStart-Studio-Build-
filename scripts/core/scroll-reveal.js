// Плавна анімація секцій
export function initScrollReveal() {
    const sections = document.querySelectorAll("section");

    const reveal = () => {
        const triggerBottom = window.innerHeight * 0.85;
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            if (top < triggerBottom) section.classList.add("visible");
        });
    };

    window.addEventListener("scroll", reveal);
    reveal();
}
