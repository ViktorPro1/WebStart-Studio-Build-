// Знаходимо елемент футера з копірайтом
const footerCopy = document.querySelector('.footer p');

// Якщо елемент знайдено
if (footerCopy) {
    // Замінюємо будь-який рік у тексті на поточний рік
    footerCopy.innerHTML = footerCopy.innerHTML.replace(/\d{4}/, new Date().getFullYear());
}
