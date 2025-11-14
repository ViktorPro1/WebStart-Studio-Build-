// ===== Показ/приховування таблиці цін =====
export function initPricingTableToggle() {
    const toggleBtn = document.getElementById('togglePricing');
    const pricingTable = document.getElementById('pricingTable');
    const linkWrapper = document.getElementById('linkWrapper');
    if (toggleBtn && pricingTable && linkWrapper) {
        toggleBtn.addEventListener('click', () => {
            const visible = pricingTable.style.display === 'table';
            pricingTable.style.display = visible ? 'none' : 'table';
            linkWrapper.style.display = visible ? 'none' : 'block';
            toggleBtn.setAttribute('aria-expanded', !visible);
            toggleBtn.textContent = visible ? 'Знайти найвигідніший пакет' : 'приховати';
        });
    }
}
