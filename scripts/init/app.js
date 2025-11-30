// Імпорти
// UI
import { initBurgerMenu } from '../ui/burger-menu.js';
import { initScrollToTop } from '../ui/scroll-to-top.js';
import { initVideoToggle } from '../ui/video-toggle.js';
import { initModals } from '../ui/modals.js';

// Core
import { initDarkMode } from '../core/theme.js';
import { initCountdown } from '../core/countdown.js';
import { initScrollReveal } from '../core/scroll-reveal.js';
import { initSearch } from '../core/search.js';
import { initScroll } from '../core/ui-scroll.js';

// Features
import { initTestimonials } from '../features/testimonials.js';
import { initGallery } from '../features/gallery.js';
import { initSocialShare } from '../features/share.js';          // ← ОДИН коректний імпорт
import { initPricingToggle } from '../features/pricing-toggle.js'; // ← Додаємо імпорт
import { initPullToRefresh } from '../features/pull-to-refresh.js';
import { initCookieBanner } from '../features/cookie.js';
import { initToggleSections } from '../features/toggle-sections.js';
import { initPricingTableToggle } from '../features/pricing-table-toggle.js';
import { initChristmasEffects } from '../features/christmas-effects.js';
import { initAccessibility } from '../features/accessibility.js';

// Init-Modules
import { initAnalytics } from '../init-modules/analytics.js';
import { initCalculator } from '../init-modules/calculator.js';
import { updateFooterYear } from '../init-modules/footer-year.js';
import { initTabs } from '../init-modules/tabs.js';
import { initPWA } from '../init-modules/pwa-loader.js';
import { initSocialProof, socialProofMessages } from '../init-modules/social-proof.js';
import { initJSONLDSchema } from '../init-modules/json-ld-schema.js';

// PWA
import { initServiceWorker } from '../pwa/service-worker-handler.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 WebStart Studio - Ініціалізація...');

    // UI
    initBurgerMenu();
    initScrollToTop();
    initVideoToggle();
    initModals();

    // Core
    initDarkMode();
    initCountdown();
    initScrollReveal();
    initSearch();
    initScroll();

    // Features
    initTestimonials();
    initGallery();
    initPricingToggle();   // ← Коректний виклик
    initSocialShare();     // ← Коректний виклик
    initPullToRefresh();
    initCookieBanner();
    initToggleSections();
    initPricingTableToggle();
    initChristmasEffects();
    initAccessibility();

    // Init-Modules
    initAnalytics()
    initCalculator()
    updateFooterYear()
    initTabs()
    initPWA()
    initSocialProof(socialProofMessages);
    initJSONLDSchema();

    // PWA
    initServiceWorker();

    console.log('✅ Всі модулі завантажено');
});
