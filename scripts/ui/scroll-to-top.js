// Кнопка "Повернутися нагору"
export function initScrollToTop() {
    const scrollBtn = document.getElementById("scrollTopBtn");

    if (!scrollBtn) return;

    window.addEventListener("scroll", () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
