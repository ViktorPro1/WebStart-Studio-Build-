const fs = require('fs');
const path = require('path');

// Список файлів у правильному порядку (як вони імпортуються в main.css)
const cssFiles = [
    // ===== BASE =====
    'css/base/reset.css',
    'css/base/typography.css',

    // ===== LAYOUT =====
    'css/layout/header.css',
    'css/layout/navigation.css',
    'css/layout/footer.css',

    // ===== COMPONENTS =====
    'css/components/buttons.css',
    'css/components/cards.css',
    'css/components/modals.css',
    'css/components/forms.css',
    'css/components/tables.css',

    // ===== SECTIONS =====
    'css/sections/webstart_lab.css',
    'css/sections/marquee.css',
    'css/sections/gallery.css',
    'css/sections/search.css',
    'css/sections/about_us.css',
    'css/sections/services.css',
    'css/sections/portfolio.css',
    'css/sections/technical.css',
    'css/sections/advantages.css',
    'css/sections/comparison.css',
    'css/sections/pricing.css',
    'css/sections/promo.css',
    'css/sections/quiz-section.css',
    'css/sections/briefs.css',
    'css/sections/mini_services.css',
    'css/sections/ai_services.css',
    'css/sections/extras.css',
    'css/sections/certificate.css',
    'css/sections/testimonials.css',
    'css/sections/faq.css',
    'css/sections/hosting.css',
    'css/sections/international.css',
    'css/sections/blog.css',
    'css/sections/contact.css',
    'css/sections/simple-security.css',
    'css/sections/socials.css',
    'css/sections/mistakes.css',
    'css/sections/audience.css',
    'css/sections/diy-comparison.css',
    'css/sections/evolution.css',

    // ===== FEATURES =====
    'css/features/pwa.css',
    'css/features/cookies.css',
    'css/features/breadcrumbs.css',
    'css/features/progress_bar.css',
    'css/features/scroll_top.css',
    'css/features/social_proof.css',
    'css/features/exit_intent.css',
    'css/features/update_banner.css',
    'css/features/migration_notice.css',

    // ===== THEMES =====
    'css/themes/dark_mode.css',

    // ===== UTILS =====
    'css/utils/animations.css',
    'css/utils/responsive.css',
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
