const fs = require('fs');
const path = require('path');

// Список файлів у правильному порядку (як вони імпортуються в main.css)
const cssFiles = [
    // ===== BASE =====
    'styles/base/reset.css',
    'styles/base/typography.css',

    // ===== LAYOUT =====
    'styles/layout/header.css',
    'styles/layout/navigation.css',
    'styles/layout/footer.css',

    // ===== COMPONENTS =====
    'styles/components/buttons.css',
    'styles/components/cards.css',
    'styles/components/modals.css',
    'styles/components/forms.css',
    'styles/components/tables.css',

    // ===== SECTIONS =====
    'styles/sections/webstart_lab.css',
    'styles/sections/marquee.css',
    'styles/sections/gallery.css',
    'styles/sections/search.css',
    'styles/sections/about_us.css',
    'styles/sections/services.css',
    'styles/sections/portfolio.css',
    'styles/sections/technical.css',
    'styles/sections/advantages.css',
    'styles/sections/comparison.css',
    'styles/sections/pricing.css',
    'styles/sections/promo.css',
    'styles/sections/quiz-section.css',
    'styles/sections/briefs.css',
    'styles/sections/mini_services.css',
    'styles/sections/ai_services.css',
    'styles/sections/extras.css',
    'styles/sections/certificate.css',
    'styles/sections/testimonials.css',
    'styles/sections/faq.css',
    'styles/sections/hosting.css',
    'styles/sections/international.css',
    'styles/sections/blog.css',
    'styles/sections/contact.css',
    'styles/sections/socials.css',

    // ===== FEATURES =====
    'styles/features/pwa.css',
    'styles/features/cookies.css',
    'styles/features/breadcrumbs.css',
    'styles/features/progress_bar.css',
    'styles/features/scroll_top.css',
    'styles/features/social_proof.css',
    'styles/features/exit_intent.css',
    'styles/features/update_banner.css',

    // ===== THEMES =====
    'styles/themes/dark_mode.css',

    // ===== UTILS =====
    'styles/utils/animations.css',
    'styles/utils/responsive.css',
];

let result = '';
let totalFiles = 0;

console.log('🔨 Починаю об\'єднання CSS файлів...\n');

cssFiles.forEach(file => {
    if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        result += `\n/* ========================================\n`;
        result += `   ${file}\n`;
        result += `   ======================================== */\n\n`;
        result += content + '\n';
        totalFiles++;
        console.log(`✅ ${file}`);
    } else {
        console.warn(`⚠️  Файл не знайдено: ${file}`);
    }
});

// Створюємо папку dist, якщо її немає
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

// Зберігаємо об'єднаний файл
fs.writeFileSync('dist/styles.css', result);

console.log(`\n✨ Готово!`);
console.log(`📦 Об'єднано файлів: ${totalFiles}`);
console.log(`📏 Розмір: ${(result.length / 1024).toFixed(2)} KB`);
console.log(`📂 Файл збережено: dist/styles.css\n`);