// Бургер-меню
export function initBurgerMenu() {
    const burger = document.getElementById("burger");
    const navMenu = document.getElementById("navMenu");
    const navLinks = navMenu ? navMenu.querySelectorAll("a") : [];

    const closeMenu = () => {
        if (navMenu) navMenu.classList.remove("active");
        if (burger) burger.classList.remove("active");
    };

    if (burger && navMenu) {
        burger.addEventListener("click", (event) => {
            event.preventDefault();
            navMenu.classList.toggle("active");
            burger.classList.toggle("active");
        });

        navLinks.forEach(link => {
            link.addEventListener("click", (event) => {
                if (link.getAttribute('href') === '#') {
                    event.preventDefault();
                }
                closeMenu();
            });
        });

        document.addEventListener("click", (event) => {
            if (!navMenu.contains(event.target) && !burger.contains(event.target)) {
                closeMenu();
            }
        });
    }
}
