const ldOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WebStart Studio",
    "url": "https://scintillating-sunshine-94e986.netlify.app/",
    "logo": "https://scintillating-sunshine-94e986.netlify.app/icons/icon-192x192.webp",
    "description": "Створення портфоліо, резюме та лендінгів з адаптивною версткою, дизайном і рекламою.",
    "sameAs": [
        "https://www.facebook.com/profile.php?id=61575866647011",
        "https://www.instagram.com/freelancer_pit_frontend?igsh=dHJrc3BhcHU5bXp6"
    ],
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+380661391932",
        "contactType": "Customer Service",
        "areaServed": "UA, PL",
        "availableLanguage": ["Ukrainian", "Polish"]
    }
};

const ldWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://scintillating-sunshine-94e986.netlify.app/",
    "potentialAction": {
        "@type": "SearchAction",
        "target": "https://scintillating-sunshine-94e986.netlify.app/?q={search_term_string}",
        "query-input": "required name=search_term_string"
    }
};

// Додаємо на сторінку
const scriptOrg = document.createElement('script');
scriptOrg.type = 'application/ld+json';
scriptOrg.textContent = JSON.stringify(ldOrganization);
document.head.appendChild(scriptOrg);

const scriptWeb = document.createElement('script');
scriptWeb.type = 'application/ld+json';
scriptWeb.textContent = JSON.stringify(ldWebSite);
document.head.appendChild(scriptWeb);
