document.getElementById('calcForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Отримуємо дані з форми
    const businessType = parseFloat(document.getElementById('businessType').value);
    const clicksPerDay = parseInt(document.getElementById('clicksPerDay').value);
    const campaignDuration = parseInt(document.getElementById('campaignDuration').value);
    const conversionRate = parseFloat(document.getElementById('conversionRate').value);
    const avgOrderValue = parseFloat(document.getElementById('avgOrderValue').value);

    // Розрахунки
    const baseCPC = businessType; // базова ціна кліку в USD
    const cpcUAH = baseCPC * 41; // конвертуємо в гривні (приблизний курс)
    const dailyBudget = clicksPerDay * cpcUAH;
    const monthlyBudget = dailyBudget * 30;
    const totalBudget = dailyBudget * campaignDuration;
    const totalClicks = clicksPerDay * campaignDuration;
    const conversions = (totalClicks * conversionRate) / 100;
    const revenue = conversions * avgOrderValue;
    const roas = revenue / totalBudget;

    // Відображаємо результати
    document.getElementById('cpcValue').textContent = cpcUAH.toFixed(2) + ' грн';
    document.getElementById('dailyBudget').textContent = dailyBudget.toFixed(2) + ' грн';
    document.getElementById('monthlyBudget').textContent = monthlyBudget.toFixed(2) + ' грн';
    document.getElementById('totalBudget').textContent = totalBudget.toFixed(2) + ' грн';
    document.getElementById('totalClicks').textContent = totalClicks.toLocaleString();
    document.getElementById('conversions').textContent = conversions.toFixed(0);
    document.getElementById('revenue').textContent = revenue.toFixed(2) + ' грн';
    document.getElementById('roas').textContent = roas.toFixed(2) + 'x';

    // Рекомендації
    const recommendations = [];

    if (roas < 2) {
        recommendations.push('ROAS нижче 2x - рекомендуємо збільшити коефіцієнт конверсії або середній чек');
    } else if (roas >= 2 && roas < 4) {
        recommendations.push('Хороший ROAS! Кампанія має потенціал бути прибутковою');
    } else {
        recommendations.push('Відмінний ROAS! Це дуже перспективна кампанія');
    }

    if (dailyBudget < 200) {
        recommendations.push('Низький денний бюджет може обмежити охоплення. Рекомендуємо мінімум 300-500 грн/день');
    }

    if (campaignDuration < 30) {
        recommendations.push('Для якісної оптимізації рекомендуємо кампанії від 30 днів');
    } else {
        recommendations.push('Тривалість кампанії оптимальна для збору даних та оптимізації');
    }

    if (conversionRate < 2) {
        recommendations.push('Низький коефіцієнт конверсії. Попрацюйте над якістю посадкової сторінки');
    }

    recommendations.push('Використовуйте A/B тестування оголошень для покращення результатів');
    recommendations.push('Регулярно додавайте мінус-слова для оптимізації витрат');

    // Відображаємо рекомендації
    const recList = document.getElementById('recommendationsList');
    recList.innerHTML = '';
    recommendations.forEach(rec => {
        const li = document.createElement('li');
        li.textContent = rec;
        recList.appendChild(li);
    });

    // Показуємо блок результатів
    document.getElementById('results').style.display = 'block';
    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
