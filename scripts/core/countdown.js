// Таймер зворотного відліку
export function initCountdown() {
    const countdown = document.getElementById("countdown");
    if (!countdown) return;

    const deadline = new Date(2026, 0, 15, 23, 59, 59);

    const updateCountdown = () => {
        const diff = deadline - new Date();
        if (diff <= 0) {
            countdown.innerHTML = "Час вийшов!";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdown.innerHTML = `До кінця акції: ${days}д ${hours}г ${minutes}хв ${seconds}сек`;
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
}
