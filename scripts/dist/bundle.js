(()=>{function v(){let e=document.getElementById("burger"),t=document.getElementById("navMenu"),o=t?t.querySelectorAll("a"):[],n=()=>{t&&t.classList.remove("active"),e&&e.classList.remove("active")};e&&t&&(e.addEventListener("click",r=>{r.preventDefault(),t.classList.toggle("active"),e.classList.toggle("active")}),o.forEach(r=>{r.addEventListener("click",a=>{r.getAttribute("href")==="#"&&a.preventDefault(),n()})}),document.addEventListener("click",r=>{!t.contains(r.target)&&!e.contains(r.target)&&n()}))}function w(){let e=document.getElementById("scrollTopBtn");e&&(window.addEventListener("scroll",()=>{document.body.scrollTop>300||document.documentElement.scrollTop>300?e.style.display="block":e.style.display="none"}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}))}function E(){let e=document.getElementById("toggle-video"),t=document.getElementById("video-container");e&&t&&e.addEventListener("click",()=>{let o=t.style.display==="block";t.style.display=o?"none":"block",e.textContent=o?"\u{1F3AC} \u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u0432\u0456\u0434\u0435\u043E \u043F\u0440\u043E \u043D\u0430\u0441":"\u274C \u0417\u0430\u043A\u0440\u0438\u0442\u0438 \u0432\u0456\u0434\u0435\u043E"})}function x(){G(),U()}function G(){let e=document.getElementById("welcome-modal"),t=document.getElementById("close-btn");!e||!t||(setTimeout(()=>{e.style.display="none"},5e3),t.addEventListener("click",()=>{e.style.display="none"}))}function U(){let e=document.getElementById("popup"),t=document.getElementById("close-popup");!e||!t||(setTimeout(()=>{e.style.display="block"},8e3),t.addEventListener("click",()=>{e.style.display="none"}),e.addEventListener("click",o=>{o.target===e&&(e.style.display="none")}))}var S=document.getElementById("popup"),_=document.getElementById("close-popup"),f=document.getElementById("help-button");_.addEventListener("click",()=>{S.style.display="none",f.style.display="block"});f.addEventListener("click",()=>{S.style.display="flex",f.style.display="none"});function L(){let e=document.getElementById("darkModeToggle"),t=document.body;function o(a){a?(t.classList.add("dark-mode"),document.documentElement.style.setProperty("--bg-color","#1a1a1a"),document.documentElement.style.setProperty("--text-color","#e0e0e0"),document.documentElement.style.setProperty("--card-bg","#2a2a2a"),document.documentElement.style.setProperty("--border-color","#404040")):(t.classList.remove("dark-mode"),document.documentElement.style.setProperty("--bg-color","#cff3f3"),document.documentElement.style.setProperty("--text-color","#333"),document.documentElement.style.setProperty("--card-bg","#ffffff"),document.documentElement.style.setProperty("--border-color","#ccc"))}let r=localStorage.getItem("theme")==="dark";o(r),e&&(e.checked=r),e&&e.addEventListener("change",()=>{let a=e.checked;o(a),localStorage.setItem("theme",a?"dark":"light")}),V()}function V(){let e="dark-mode-styles";if(document.getElementById(e))return;let t=document.createElement("style");t.id=e,t.textContent=`
        /* \u041E\u0441\u043D\u043E\u0432\u043D\u0456 \u0437\u043C\u0456\u043D\u043D\u0456 */
        :root {
            --bg-color: #cff3f3;
            --text-color: #333;
            --card-bg: #ffffff;
            --border-color: #ccc;
            --header-bg: rgba(0, 0, 0, 0.5);
        }

        /* \u0422\u0435\u043C\u043D\u0430 \u0442\u0435\u043C\u0430 */
        body.dark-mode {
            background: #1a1a1a !important;
            color: #e0e0e0 !important;
        }

        /* \u0421\u0435\u043A\u0446\u0456\u0457 */
        body.dark-mode section {
            background: #2a2a2a;
            color: #e0e0e0;
        }

        /* \u041A\u0430\u0440\u0442\u043A\u0438 */
        body.dark-mode .service-card,
        body.dark-mode .project-card,
        body.dark-mode .extra-card,
        body.dark-mode .testimonial,
        body.dark-mode .blog-card,
        body.dark-mode .ai-dynamic-card,
        body.dark-mode .lang-card {
            background: #2a2a2a;
            color: #e0e0e0;
            border-color: #404040;
        }

        /* \u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0438 */
        body.dark-mode h1,
        body.dark-mode h2,
        body.dark-mode h3,
        body.dark-mode h4 {
            color: #ffffff;
        }

        /* \u041F\u0430\u0440\u0430\u0433\u0440\u0430\u0444\u0438 */
        body.dark-mode p,
        body.dark-mode li {
            color: #d0d0d0;
        }

        /* \u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F */
        body.dark-mode a {
            color: #64b5f6;
        }

        body.dark-mode a:hover {
            color: #90caf9;
        }

        /* \u041A\u043D\u043E\u043F\u043A\u0438 */
        body.dark-mode button,
        body.dark-mode .btn,
        body.dark-mode .cta-button {
            background: #3a3a3a;
            color: #ffffff;
            border-color: #505050;
        }

        body.dark-mode button:hover,
        body.dark-mode .btn:hover {
            background: #505050;
        }

        /* \u0424\u043E\u0440\u043C\u0438 */
        body.dark-mode input,
        body.dark-mode textarea,
        body.dark-mode select {
            background: #2a2a2a;
            color: #e0e0e0;
            border-color: #404040;
        }

        body.dark-mode input::placeholder,
        body.dark-mode textarea::placeholder {
            color: #808080;
        }

        /* \u0422\u0430\u0431\u043B\u0438\u0446\u0456 */
        body.dark-mode table {
            background: #2a2a2a;
            color: #e0e0e0;
        }

        body.dark-mode th,
        body.dark-mode td {
            border-color: #404040;
        }

        body.dark-mode tr:hover {
            background: #353535;
        }

        /* Header */
        body.dark-mode header {
            background-color: #1a1a1a;
        }

        body.dark-mode header::after {
            background: rgba(0, 0, 0, 0.7);
        }

        body.dark-mode nav a {
            color: #e0e0e0;
        }

        body.dark-mode nav a:hover {
            color: #ff6b6b;
        }

        /* Footer */
        body.dark-mode footer {
            background: #1a1a1a;
            color: #e0e0e0;
            border-top: 1px solid #404040;
        }

        /* \u041C\u043E\u0434\u0430\u043B\u044C\u043D\u0456 \u0432\u0456\u043A\u043D\u0430 */
        body.dark-mode .modal-content,
        body.dark-mode .popup-content {
            background: #2a2a2a;
            color: #e0e0e0;
            border-color: #404040;
        }

        /* Dropdown \u043C\u0435\u043D\u044E */
        body.dark-mode details {
            background: #2a2a2a;
            border-color: #404040;
        }

        body.dark-mode summary {
            color: #e0e0e0;
        }

        /* Breadcrumbs */
        body.dark-mode .breadcrumbs-wrapper {
            background: #2a2a2a;
            color: #e0e0e0;
        }

        /* Progress bar */
        body.dark-mode #progressBar {
            background: #404040;
        }

        /* Slider */
        body.dark-mode .slider-wrapper {
            background: #2a2a2a;
        }

        /* \u0421\u0435\u0440\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u0438 */
        body.dark-mode .certificate-gift-section {
            background: #1a1a1a;
        }

        /* \u0421\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u0456 \u043C\u0435\u0440\u0435\u0436\u0456 */
        body.dark-mode .social-list a,
        body.dark-mode .share-btn {
            background: #3a3a3a;
            color: #ffffff;
        }

        /* \u0410\u043A\u0446\u0456\u0457 */
        body.dark-mode .promo-container {
            background: #2a2a2a;
            border-color: #404040;
        }

        /* Cookie banner */
        body.dark-mode #cookie-banner {
            background: #2a2a2a;
            color: #e0e0e0;
            border-color: #404040;
        }

        /* \u0413\u0430\u043B\u0435\u0440\u0435\u044F */
        body.dark-mode .gallery-marquee-wrapper {
            background: #2a2a2a;
        }

        /* \u041F\u043E\u0448\u0443\u043A */
        body.dark-mode .search-form input {
            background: #2a2a2a;
            color: #e0e0e0;
            border-color: #404040;
        }

        /* Lab strip */
        body.dark-mode .lab-strip {
            background: #2a2a2a;
        }

        body.dark-mode .lab-strip a {
            color: #64b5f6;
        }

        /* Marquee */
        body.dark-mode .marquee-container {
            background: #2a2a2a;
        }

        /* Team section */
        body.dark-mode .team-member {
            background: #2a2a2a;
            border-color: #404040;
        }

        /* Security section */
        body.dark-mode .security-home {
            background: #2a2a2a;
        }

        /* Contact and Gift Section */
        body.dark-mode #contact-gift-wrapper {
            background: #1a1a1a;
        }

        body.dark-mode .contact-block,
        body.dark-mode .gift-block {
            background: #2a2a2a;
            color: #e0e0e0;
            border-color: #404040;
        }

        body.dark-mode .contact-block h2,
        body.dark-mode .gift-block h3 {
            color: #ffffff;
        }

        body.dark-mode .contact-block p,
        body.dark-mode .gift-block p {
            color: #d0d0d0;
        }

        body.dark-mode .contact-block a,
        body.dark-mode .gift-block a:not(.btn-primary) {
            color: #64b5f6;
        }

        body.dark-mode .viber-button,
        body.dark-mode .btn-primary {
            background: #3a3a3a;
            color: #ffffff;
            border-color: #505050;
        }

        body.dark-mode .viber-button:hover,
        body.dark-mode .btn-primary:hover {
            background: #505050;
        }

        /* FAQ Section */
        body.dark-mode .faq-section {
            background: #1a1a1a;
        }

        body.dark-mode .faq-section h2 {
            color: #ffffff;
        }

        body.dark-mode .faq-section details {
            background: #2a2a2a;
            border: 1px solid #404040;
            margin-bottom: 1rem;
        }

        body.dark-mode .faq-section summary {
            background: #2a2a2a;
            color: #e0e0e0;
            padding: 1rem;
            cursor: pointer;
            font-weight: 600;
        }

        body.dark-mode .faq-section summary:hover {
            background: #353535;
        }

        body.dark-mode .faq-section details[open] summary {
            border-bottom: 1px solid #404040;
        }

        body.dark-mode .faq-section p {
            color: #d0d0d0;
            background: #2a2a2a;
            padding: 1rem;
        }

        body.dark-mode .faq-section a {
            color: #64b5f6;
        }

        body.dark-mode .faq-section .nav-btn {
            background: #3a3a3a;
            color: #ffffff;
            border-color: #505050;
            padding: 0.3rem 0.8rem;
            border-radius: 4px;
            text-decoration: none;
        }

        body.dark-mode .faq-section .nav-btn:hover {
            background: #505050;
        }

        /* Advantages Section */
        body.dark-mode .advantages {
            background: #1a1a1a;
        }

        body.dark-mode .advantages h2 {
            color: #ffffff;
        }

        body.dark-mode .advantages .highlight {
            color: #ff6b6b;
        }

        body.dark-mode .advantages-grid {
            display: grid;
            gap: 2rem;
        }

        body.dark-mode .adv-item {
            background: #2a2a2a;
            padding: 2rem;
            border-radius: 12px;
            border: 1px solid #404040;
            text-align: center;
            transition: transform 0.3s ease, background 0.3s ease;
        }

        body.dark-mode .adv-item:hover {
            background: #353535;
            transform: translateY(-5px);
        }

        body.dark-mode .adv-item .emoji {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        body.dark-mode .adv-item h3 {
            color: #ffffff;
            margin-bottom: 0.5rem;
        }

        body.dark-mode .adv-item p {
            color: #d0d0d0;
        }

        /* ======\u274C \u0427\u0430\u0441\u0442\u0456 \u043F\u043E\u043C\u0438\u043B\u043A\u0438====== */
        body.dark-mode .mistakes-section {
            background: #1a1a1a;
        }

        body.dark-mode .mistakes-section h2 {
            color: #ff6b6b;
        }

        body.dark-mode .mistakes-list {
            background: transparent;
        }

        body.dark-mode .mistake-item {
            background: #2a2a2a;
            border: 1px solid #404040;
            color: #e0e0e0;
        }

        body.dark-mode .mistake-item:hover {
            background: #353535;
            border-color: #505050;
        }

        body.dark-mode .mistake-icon {
            filter: brightness(1.2);
        }

        body.dark-mode .mistake-item h3 {
            color: #ffffff;
        }

        body.dark-mode .mistake-item p {
            color: #d0d0d0;
        }

        body.dark-mode .mistakes-section .btn-primary {
            background: #c41e3a;
            color: #ffffff;
        }

        body.dark-mode .mistakes-section .btn-primary:hover {
            background: #a01729;
        }


        body.dark-mode .mistakes-intro {
            color: #b0b0b0;
        }

        body.dark-mode .mistake-item summary {
            color: #ffffff;
        }

        body.dark-mode .mistake-item summary::after {
            color: #ff6b6b;
        }

        body.dark-mode .mistake-content {
            border-top-color: #404040;
        }

        body.dark-mode .mistake-content p {
            color: #d0d0d0;
        }

        body.dark-mode .mistake-content strong {
            color: #ff6b6b;
        }

        body.dark-mode .mistake-content a {
            color: #ff6b6b;
        }

        body.dark-mode .mistake-content a:hover {
            color: #ff9090;
        }

        /* ======\u{1F465} \u0414\u043B\u044F \u043A\u043E\u0433\u043E \u043C\u0438====== */
        body.dark-mode .audience-section {
            background: #1a1a1a;
        }

        body.dark-mode .audience-section h2 {
            color: #64b5f6;
        }

        body.dark-mode .audience-grid {
            background: transparent;
        }

        body.dark-mode .audience-card {
            background: #2a2a2a;
            border: 1px solid #404040;
            color: #e0e0e0;
        }

        body.dark-mode .audience-card:hover {
            background: #353535;
            border-color: #505050;
        }

        body.dark-mode .audience-emoji {
            filter: brightness(1.2);
        }

        body.dark-mode .audience-card h3 {
            color: #64b5f6;
        }

        body.dark-mode .audience-card p {
            color: #d0d0d0;
        }

        /* ======\u{1F19A} DIY vs \u0417 \u043D\u0430\u043C\u0438====== */
        body.dark-mode .comparison-table-section {
            background: #1a1a1a;
        }

        body.dark-mode .comparison-table-section h2 {
            color: #64b5f6;
        }

        body.dark-mode .vs-table {
            background: #2a2a2a;
            border: 1px solid #404040;
        }

        body.dark-mode .vs-table thead {
            background: linear-gradient(135deg, #1e3a5f 0%, #2563a8 100%);
        }

        body.dark-mode .vs-table th {
            color: #ffffff;
            border-bottom: 1px solid #404040;
        }

        body.dark-mode .vs-table tbody tr {
            border-bottom: 1px solid #404040;
        }

        body.dark-mode .vs-table tbody tr:hover {
            background: #353535;
        }

        body.dark-mode .vs-table td {
            color: #d0d0d0;
        }

        body.dark-mode .vs-table td:first-child {
            color: #64b5f6;
        }

        body.dark-mode .vs-cta {
            color: #64b5f6;
        }

        /* \u041F\u043B\u0430\u0432\u043D\u0438\u0439 \u043F\u0435\u0440\u0435\u0445\u0456\u0434 */
        body,
        section,
        .service-card,
        .project-card,
        button,
        input,
        a {
            transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }

        /* \u0421\u043A\u0440\u043E\u043B\u0431\u0430\u0440 \u0434\u043B\u044F \u0442\u0435\u043C\u043D\u043E\u0457 \u0442\u0435\u043C\u0438 */
        body.dark-mode::-webkit-scrollbar {
            width: 12px;
        }

        body.dark-mode::-webkit-scrollbar-track {
            background: #1a1a1a;
        }

        body.dark-mode::-webkit-scrollbar-thumb {
            background: #404040;
            border-radius: 6px;
        }

        body.dark-mode::-webkit-scrollbar-thumb:hover {
            background: #505050;
        }
    `,document.head.appendChild(t)}function D(){let e=document.getElementById("countdown");if(!e)return;let t=new Date(2025,10,30,23,59,59),o=()=>{let n=t-new Date;if(n<=0){e.innerHTML="\u0427\u0430\u0441 \u0432\u0438\u0439\u0448\u043E\u0432!";return}let r=Math.floor(n/(1e3*60*60*24)),a=Math.floor(n/(1e3*60*60)%24),i=Math.floor(n/(1e3*60)%60),d=Math.floor(n/1e3%60);e.innerHTML=`\u0414\u043E \u043A\u0456\u043D\u0446\u044F \u0430\u043A\u0446\u0456\u0457: ${r}\u0434 ${a}\u0433 ${i}\u0445\u0432 ${d}\u0441\u0435\u043A`};o(),setInterval(o,1e3)}function I(){let e=document.querySelectorAll("section"),t=()=>{let o=window.innerHeight*.85;e.forEach(n=>{n.getBoundingClientRect().top<o&&n.classList.add("visible")})};window.addEventListener("scroll",t),t()}function C(){let e=document.getElementById("simple-search-form"),t=document.getElementById("search-input"),o=document.getElementById("search-feedback");if(!e||!t||!o)return;let n={\u043F\u043E\u0441\u043B\u0443\u0433\u0438:"services",\u0441\u0442\u0432\u043E\u0440\u044E\u0454\u043C\u043E:"services",\u0432\u0435\u0440\u0441\u0442\u043A\u0430:"services",\u0440\u0435\u0437\u044E\u043C\u0435:"services",\u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E:"portfolio",\u0440\u043E\u0431\u043E\u0442\u0438:"portfolio",\u043A\u0435\u0439\u0441\u0438:"portfolio",\u043B\u0435\u043D\u0434\u0456\u043D\u0433:"portfolio",\u0442\u0435\u0445\u0441\u0435\u0440\u0432\u0456\u0441:"technical-features","\u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0456 \u043C\u043E\u0436\u043B\u0438\u0432\u043E\u0441\u0442\u0456":"technical-features",\u043F\u0435\u0440\u0435\u0432\u0430\u0433\u0438:"advantages","\u0447\u043E\u043C\u0443 \u043C\u0438":"advantages",\u043F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F:"platform-comparison",\u043F\u043E\u043C\u0438\u043B\u043A\u0438:"common-mistakes","\u0447\u0430\u0441\u0442\u0456 \u043F\u043E\u043C\u0438\u043B\u043A\u0438":"common-mistakes","\u0434\u043B\u044F \u043A\u043E\u0433\u043E":"for-whom","\u0434\u043B\u044F \u043A\u043E\u0433\u043E \u043C\u0438":"for-whom",\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0456\u044F:"for-whom",\u0441\u0430\u043C\u043E\u043C\u0443:"diy-vs-us",diy:"diy-vs-us","\u0437 \u043D\u0430\u043C\u0438":"diy-vs-us",\u043F\u043E\u0440\u0456\u0432\u043D\u044F\u0442\u0438:"diy-vs-us",\u043F\u0430\u043A\u0435\u0442\u0438:"pricing",\u0446\u0456\u043D\u0438:"pricing",\u0430\u043A\u0446\u0456\u0457:"promo",\u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438:"briefs",\u0431\u0440\u0438\u0444:"briefs","\u043C\u0456\u043D\u0456-\u0441\u0435\u0440\u0432\u0456\u0441":"mini-services",ai:"ai-prompting-dynamic","ai \u0441\u0435\u0440\u0432\u0456\u0441":"ai-prompting-dynamic",\u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0435:"extras",\u0432\u0456\u0434\u0433\u0443\u043A\u0438:"testimonials",faq:"faq",\u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F:"faq",\u0440\u043E\u0437\u043C\u0456\u0449\u0435\u043D\u043D\u044F:"hosting-help",\u0445\u043E\u0441\u0442\u0438\u043D\u0433:"hosting-help",international:"international",\u0431\u043B\u043E\u0433:"blog",\u043D\u043E\u0432\u0438\u043D\u0438:"blog",\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0438:"contact-gift-wrapper","\u0437\u0432'\u044F\u0437\u043E\u043A":"contact-gift-wrapper",\u0431\u043E\u043D\u0443\u0441:"guide-bonus",\u043F\u0443\u0442\u0456\u0432\u043D\u0438\u043A:"guide-bonus",\u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436\u0456:"social",\u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043A\u0430\u0442:"certificate-gift",\u0441\u0443\u0432\u0435\u043D\u0456\u0440:"certificate-gift",\u043A\u0456\u0431\u0435\u0440\u0431\u0435\u0437\u043F\u0435\u043A\u0430:"security",security:"security",\u0437\u0430\u0445\u0438\u0441\u0442:"security",\u0448\u0430\u0445\u0440\u0430\u0439\u0441\u0442\u0432\u043E:"security"};e.addEventListener("submit",r=>{r.preventDefault();let a=t.value.trim().toLowerCase();if(o.textContent="",!a){o.textContent="\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043B\u044E\u0447\u043E\u0432\u0435 \u0441\u043B\u043E\u0432\u043E \u0434\u043B\u044F \u043F\u043E\u0448\u0443\u043A\u0443.";return}let i=null;for(let d in n)if(a.includes(d)){i=n[d];break}if(i){let d=document.getElementById(i);if(d){let c=d.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:c,behavior:"smooth"}),d.classList.add("highlight-search"),setTimeout(()=>d.classList.remove("highlight-search"),2e3),t.value="",o.textContent="";return}}o.textContent=`\u0421\u0435\u043A\u0446\u0456\u044F \u0437\u0430 \u0437\u0430\u043F\u0438\u0442\u043E\u043C "${a}" \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0430. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435: \u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E, \u041F\u043E\u0441\u043B\u0443\u0433\u0438, \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438.`})}function B(){let e={services:"\u0421\u0442\u0432\u043E\u0440\u044E\u0454\u043C\u043E",portfolio:"\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E","technical-features":"\u0422\u0435\u0445\u0421\u0435\u0440\u0432\u0456\u0441",advantages:"\u0427\u043E\u043C\u0443 \u043C\u0438?","platform-comparison":"\u041F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F","common-mistakes":"\u0427\u0430\u0441\u0442\u0456 \u043F\u043E\u043C\u0438\u043B\u043A\u0438","for-whom":"\u0414\u043B\u044F \u043A\u043E\u0433\u043E \u043C\u0438","diy-vs-us":"\u0421\u0430\u043C\u043E\u043C\u0443 vs \u0417 \u043D\u0430\u043C\u0438",pricing:"\u041F\u0430\u043A\u0435\u0442\u0438",promo:"\u0410\u043A\u0446\u0456\u0457",briefs:"\u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438","mini-services":"\u041C\u0456\u043D\u0456-\u0441\u0435\u0440\u0432\u0456\u0441","ai-prompting-dynamic":"AI \u0421\u0435\u0440\u0432\u0456\u0441",extras:"\u0414\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0435","certificate-gift":"\u0421\u0443\u0432\u0435\u043D\u0456\u0440",testimonials:"\u0412\u0456\u0434\u0433\u0443\u043A\u0438",faq:"FAQ","hosting-help":"\u0420\u043E\u0437\u043C\u0456\u0449\u0435\u043D\u043D\u044F",blog:"\u0414\u0430\u0439\u0434\u0436\u0435\u0441\u0442",international:"International","contact-gift-wrapper":"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438","guide-bonus":"\u0411\u043E\u043D\u0443\u0441+",social:"\u0421\u043E\u0446\u043C\u0435\u0440\u0435\u0436\u0456",security:"\u041A\u0456\u0431\u0435\u0440\u0431\u0435\u0437\u043F\u0435\u043A\u0430"},t=document.querySelectorAll("section[id]"),o=document.getElementById("current-section"),n=document.getElementById("breadcrumbs"),r=document.getElementById("progressBar");!t.length||!o||!r||(window.addEventListener("scroll",()=>{let a=window.scrollY,i=document.body.scrollHeight-window.innerHeight,d=a/i*100;r.style.width=d+"%";let c="\u0413\u043E\u043B\u043E\u0432\u043D\u0430";t.forEach(m=>{let l=m.offsetTop-20;a>=l&&(c=m.getAttribute("id"))}),o.textContent=e[c]||"\u0413\u043E\u043B\u043E\u0432\u043D\u0430"}),window.addEventListener("DOMContentLoaded",()=>{window.innerWidth<=768&&n&&(n.style.transition="top 0.25s ease",n.style.top="1cm",setTimeout(()=>n.style.top="0.5cm",6e3))}))}function T(){let e={testimonial1:[{img:"foto/olena.webp",alt:"\u041E\u043B\u0435\u043D\u0430",name:"\u041E\u043B\u0435\u043D\u0430",text:"\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u0437\u0440\u043E\u0431\u0438\u043B\u0438 \u0437\u0430 \u0442\u0440\u0438 \u0434\u043D\u0456, \u0437\u0430\u0433\u0430\u043B\u043E\u043C \u043D\u0435\u043F\u043E\u0433\u0430\u043D\u043E. \u0421\u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u0431\u0443\u0432 \u043A\u043E\u0441\u044F\u043A \u0437 \u043A\u043E\u043B\u044C\u043E\u0440\u0430\u043C\u0438 \u043D\u0430 \u043C\u043E\u0431\u0456\u043B\u044C\u043D\u0456\u0439 \u0432\u0435\u0440\u0441\u0456\u0457, \u0430\u043B\u0435 \u0448\u0432\u0438\u0434\u043A\u043E \u0432\u0438\u043F\u0440\u0430\u0432\u0438\u043B\u0438. \u0422\u0435\u043F\u0435\u0440 \u0432\u0438\u0433\u043B\u044F\u0434\u0430\u0454 \u0441\u0442\u0438\u043B\u044C\u043D\u043E.",cite:"\u043C\u0430\u0440\u043A\u0435\u0442\u043E\u043B\u043E\u0433",time:"14:23"},{img:"foto/nadija.webp",alt:"\u041D\u0430\u0434\u0456\u044F",name:"\u041D\u0430\u0434\u0456\u044F",text:"\u042F\u043A\u0456\u0441\u0442\u044C \u0434\u043E\u0431\u0440\u0430, \u0445\u043E\u0447\u0430 \u0434\u043E\u0432\u0435\u043B\u043E\u0441\u044F \u043F\u0430\u0440\u0443 \u0440\u0430\u0437\u0456\u0432 \u0443\u0442\u043E\u0447\u043D\u044E\u0432\u0430\u0442\u0438 \u0434\u0435\u0442\u0430\u043B\u0456. \u0414\u0438\u0437\u0430\u0439\u043D \u0441\u0443\u0447\u0430\u0441\u043D\u0438\u0439, \u0430\u043B\u0435 \u044F \u0431 \u0445\u043E\u0442\u0456\u043B\u0430 \u0442\u0440\u043E\u0445\u0438 \u0431\u0456\u043B\u044C\u0448\u0435 \u0432\u0430\u0440\u0456\u0430\u043D\u0442\u0456\u0432 \u043D\u0430 \u0432\u0438\u0431\u0456\u0440. \u0412 \u0446\u0456\u043B\u043E\u043C\u0443 \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u0430.",cite:"\u0444\u0440\u0456\u043B\u0430\u043D\u0441\u0435\u0440",time:"09:45"},{img:"foto/volodumer.webp",alt:"\u0412\u043E\u043B\u043E\u0434\u0438\u043C\u0438\u0440",name:"\u0412\u043E\u043B\u043E\u0434\u0438\u043C\u0438\u0440",text:"\u041B\u0435\u043D\u0434\u0456\u043D\u0433 \u0432\u0438\u0439\u0448\u043E\u0432 \u043F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u043E, \u043A\u043B\u0456\u0454\u043D\u0442\u0438 \u0434\u0437\u0432\u043E\u043D\u044F\u0442\u044C. \u0404\u0434\u0438\u043D\u0435 \u2014 \u0434\u043E\u0432\u0435\u043B\u043E\u0441\u044F \u0441\u0430\u043C\u043E\u043C\u0443 \u0434\u043E\u0434\u0430\u0432\u0430\u0442\u0438 \u043F\u0430\u0440\u0443 \u0444\u043E\u0442\u043E, \u0431\u043E \u0441\u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u0457\u0445 \u0431\u0443\u043B\u043E \u0437\u0430\u043C\u0430\u043B\u043E. \u0410\u043B\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0442\u043E\u0433\u043E \u0432\u0430\u0440\u0442\u0438\u0439!",cite:"\u0431\u0443\u0434\u0456\u0432\u0435\u043B\u044C\u043D\u0438\u043A",time:"16:12"}],testimonial2:[{img:"foto/andriy.webp",alt:"\u0410\u043D\u0434\u0440\u0456\u0439",name:"\u0410\u043D\u0434\u0440\u0456\u0439",text:"\u0421\u0430\u0439\u0442 \u0437\u0440\u043E\u0431\u0438\u043B\u0438 \u0448\u0432\u0438\u0434\u043A\u043E, \u0446\u0435 \u043F\u043B\u044E\u0441. \u041C\u0456\u043D\u0443\u0441 \u2014 \u043D\u0435 \u0432\u0441\u0435 \u043F\u0440\u0430\u0446\u044E\u0432\u0430\u043B\u043E \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u0437 \u043F\u0435\u0440\u0448\u043E\u0433\u043E \u0440\u0430\u0437\u0443, \u0434\u043E\u0432\u0435\u043B\u043E\u0441\u044F \u0432\u0438\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u0438 \u0444\u043E\u0440\u043C\u0443 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F. \u0417\u0430\u0440\u0430\u0437 \u0443\u0441\u0435 \u043E\u043A, \u043C\u0430\u0433\u0430\u0437\u0438\u043D \u043F\u0440\u0430\u0446\u044E\u0454.",cite:"\u0432\u043B\u0430\u0441\u043D\u0438\u043A \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0443",time:"11:30"},{img:"foto/vika.webp",alt:"\u0412\u0456\u043A\u0430",name:"\u0412\u0456\u043A\u0430",text:"\u0417\u0430 \u0434\u0432\u0430 \u0434\u043D\u0456 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u043B\u0435\u043D\u0434\u0456\u043D\u0433 \u2014 \u0446\u0435 \u043A\u0440\u0443\u0442\u043E! \u041F\u0440\u0430\u0432\u0434\u0430, \u0448\u0440\u0438\u0444\u0442 \u0441\u043F\u043E\u0447\u0430\u0442\u043A\u0443 \u0431\u0443\u0432 \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u0434\u0440\u0456\u0431\u043D\u0438\u0439, \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u043B\u0430 \u0437\u0431\u0456\u043B\u044C\u0448\u0438\u0442\u0438. \u041A\u043B\u0456\u0454\u043D\u0442\u0438 \u043A\u0430\u0436\u0443\u0442\u044C, \u0449\u043E \u0441\u0430\u0439\u0442 \u0437\u0440\u0443\u0447\u043D\u0438\u0439, \u044F \u0440\u0430\u0434\u0430.",cite:"\u0432\u043B\u0430\u0441\u043D\u0438\u0446\u044F \u043F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u0456",time:"13:18"},{img:"foto/sergey.webp",alt:"\u0421\u0435\u0440\u0433\u0456\u0439",name:"\u0421\u0435\u0440\u0433\u0456\u0439",text:"\u041F\u0456\u0441\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0443 \u0437\u0430\u044F\u0432\u043A\u0438 \u043F\u0456\u0448\u043B\u0438, \u0446\u0435 \u0433\u043E\u043B\u043E\u0432\u043D\u0435. \u0425\u043E\u0442\u0456\u043B\u043E\u0441\u044F \u0431 \u0431\u0456\u043B\u044C\u0448\u0435 \u0444\u0456\u0448\u043E\u043A, \u0430\u043B\u0435 \u044F\u043A \u0434\u043B\u044F \u0441\u0442\u0430\u0440\u0442\u043E\u0432\u043E\u0433\u043E \u043F\u0430\u043A\u0435\u0442\u0443 \u2014 \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u043E. \u041C\u043E\u0436\u0435 \u043F\u043E\u0442\u0456\u043C \u0449\u0435 \u0449\u043E\u0441\u044C \u0434\u043E\u0434\u0430\u043C.",cite:"\u0444\u0435\u0440\u043C\u0435\u0440",time:"10:05"}],testimonial3:[{img:"foto/mariya.webp",alt:"\u041C\u0430\u0440\u0456\u044F",name:"\u041C\u0430\u0440\u0456\u044F",text:"\u0420\u0435\u0437\u044E\u043C\u0435 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043B\u043E \u043F\u043E\u0442\u0440\u0430\u043F\u0438\u0442\u0438 \u043D\u0430 \u0441\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0438, \u0446\u0435 \u0444\u0430\u043A\u0442. \u0425\u043E\u0447\u0430 \u0434\u043E\u0432\u0435\u043B\u043E\u0441\u044F \u0441\u0430\u043C\u0456\u0439 \u0442\u0440\u043E\u0445\u0438 \u043F\u0456\u0434\u043F\u0440\u0430\u0432\u0438\u0442\u0438 \u0442\u0435\u043A\u0441\u0442 \u043F\u0456\u0434 \u0441\u0435\u0431\u0435 \u2014 \u043D\u0435 \u0432\u0441\u0435 \u0431\u0443\u043B\u043E \u0442\u043E\u0447\u043D\u043E \u0441\u0444\u043E\u0440\u043C\u0443\u043B\u044C\u043E\u0432\u0430\u043D\u043E. \u0410\u043B\u0435 \u0437\u0430\u0433\u0430\u043B\u043E\u043C \u0434\u0443\u0436\u0435 \u043A\u043E\u0440\u0438\u0441\u043D\u043E!",cite:"\u0448\u0443\u043A\u0430\u0447\u043A\u0430 \u0440\u043E\u0431\u043E\u0442\u0438",time:"15:42"},{img:"foto/bogdan.webp",alt:"\u0411\u043E\u0433\u0434\u0430\u043D",name:"\u0411\u043E\u0433\u0434\u0430\u043D",text:"\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u0440\u0435\u0437\u044E\u043C\u0435 \u0434\u043E\u0431\u0440\u0430, \u043F\u043E\u0434\u0430\u0447\u0430 \u043F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u0430. \u041C\u0456\u043D\u0443\u0441 \u2014 \u0437\u0430\u0442\u0440\u0438\u043C\u0430\u043B\u0438 \u043D\u0430 \u0434\u0435\u043D\u044C, \u0430\u043B\u0435 \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u0438\u043B\u0438. \u0417\u0430\u0440\u0430\u0437 \u043F\u0440\u0430\u0446\u044E\u044E \u043D\u0430 \u043D\u043E\u0432\u0456\u0439 \u043F\u043E\u0441\u0430\u0434\u0456, \u0442\u043E\u0436 \u0434\u044F\u043A\u0443\u044E!",cite:"\u0440\u0435\u043A\u0440\u0443\u0442\u0435\u0440",time:"08:55"},{img:"foto/sofia.webp",alt:"\u0421\u043E\u0444\u0456\u044F",name:"\u0421\u043E\u0444\u0456\u044F",text:"\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u0432\u0438\u0439\u0448\u043B\u043E \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043D\u0438\u043C, \u043C\u0435\u043D\u0456 \u043F\u043E\u0434\u043E\u0431\u0430\u0454\u0442\u044C\u0441\u044F. \u041F\u0440\u0430\u0432\u0434\u0430, \u043D\u0435 \u0437 \u043F\u0435\u0440\u0448\u043E\u0433\u043E \u0440\u0430\u0437\u0443 \u0432\u043B\u043E\u0432\u0438\u043B\u0438 \u043C\u0456\u0439 \u0441\u0442\u0438\u043B\u044C, \u0430\u043B\u0435 \u043F\u0456\u0441\u043B\u044F \u043F\u0440\u0430\u0432\u043E\u043A \u2014 \u0441\u0443\u043F\u0435\u0440. \u0422\u043E\u0447\u043D\u043E \u0437\u0430\u043C\u043E\u0432\u043B\u044F\u0442\u0438\u043C\u0443 \u0449\u0435.",cite:"\u043C\u0430\u0440\u043A\u0435\u0442\u043E\u043B\u043E\u0433",time:"17:20"}]},t=(r,a,i)=>new Promise(d=>{let c=new Image;c.onload=()=>{r.src=a,r.alt=i,d(!0)},c.onerror=()=>{console.warn(`\u26A0\uFE0F \u0424\u043E\u0442\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E: ${a}, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043E placeholder`),r.src=J(),r.alt=`${i} (\u0444\u043E\u0442\u043E \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0435)`,d(!1)},c.src=a});function o(r){let a=document.getElementById(r);if(!a||!e[r])return;let i=a.querySelector(".testimonial-photo"),d=a.querySelector(".testimonial-header-name"),c=a.querySelector(".testimonial-message p"),m=a.querySelector(".testimonial-meta cite"),l=a.querySelector(".testimonial-time"),s=0,b=u=>{i.classList.remove("visible"),setTimeout(()=>{t(i,u.img,u.alt).then(()=>{d.textContent=u.name,c.textContent=u.text,m.textContent=u.cite,l.textContent=u.time,setTimeout(()=>{i.classList.add("visible")},100)})},300)},p=e[r][0];b(p),setInterval(()=>{s=(s+1)%e[r].length;let u=e[r][s];b(u)},2e4)}["testimonial1","testimonial2","testimonial3"].forEach(o),Object.values(e).flat().map(r=>r.img).forEach(r=>{let a=new Image;a.src=r,a.onerror=()=>console.warn(`\u26A0\uFE0F \u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438: ${r}`)})}function J(){return"foto/placeholder.webp"}function j(){let e=document.getElementById("galleryTrack"),t=document.getElementById("galleryModal"),o=document.getElementById("galleryModalImg"),n=document.getElementById("galleryClose"),r=document.querySelector(".gallery-marquee-slider"),a=document.querySelector(".gallery-marquee-wrapper");if(a&&(a.style.display="block"),!e||!t||!o||!n)return;e.querySelectorAll(".gallery-marquee-image").forEach(c=>{c.addEventListener("click",()=>{o.src=c.currentSrc||c.src,t.classList.remove("hidden"),document.body.classList.add("modal-open")})}),n.addEventListener("click",()=>{t.classList.add("hidden"),document.body.classList.remove("modal-open")});let i=0,d=0;e.addEventListener("touchstart",c=>{i=c.touches[0].clientX}),e.addEventListener("touchmove",c=>{let m=Date.now();if(m-d<16)return;d=m;let l=i-c.touches[0].clientX;requestAnimationFrame(()=>{e.scrollLeft+=l}),i=c.touches[0].clientX}),r&&r.addEventListener("input",()=>{e.scrollLeft=r.value/100*(e.scrollWidth-e.clientWidth)})}function M(){window.share=function(e){let t=encodeURIComponent("https://scintillating-sunshine-94e986.netlify.app/"),o=encodeURIComponent("WebStart Studio!"),n="";switch(e){case"facebook":n=`https://www.facebook.com/sharer/sharer.php?u=${t}`;break;case"telegram":n=`https://t.me/share/url?url=${t}&text=${o}`;break;case"viber":alert("\u0429\u043E\u0431 \u043F\u043E\u0434\u0456\u043B\u0438\u0442\u0438\u0441\u044F \u0443 Viber, \u0441\u043A\u043E\u043F\u0456\u044E\u0439\u0442\u0435 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F: "+decodeURIComponent(t));return;case"linkedin":n=`https://www.linkedin.com/sharing/share-offsite/?url=${t}`;break;case"messenger":n=`fb-messenger://share/?link=${t}`;break;default:alert("\u0421\u043E\u0446\u043C\u0435\u0440\u0435\u0436\u0430 \u043D\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u044C\u0441\u044F");return}window.open(n,"_blank","width=600,height=400")},console.log("\u2705 share() \u0433\u043E\u0442\u043E\u0432\u0430")}function q(){window.share=function(e){let t=encodeURIComponent("https://scintillating-sunshine-94e986.netlify.app/"),o=encodeURIComponent("WebStart Studio!"),n="";switch(e){case"facebook":n=`https://www.facebook.com/sharer/sharer.php?u=${t}`;break;case"telegram":n=`https://t.me/share/url?url=${t}&text=${o}`;break;case"viber":alert("\u0429\u043E\u0431 \u043F\u043E\u0434\u0456\u043B\u0438\u0442\u0438\u0441\u044F \u0443 Viber, \u0441\u043A\u043E\u043F\u0456\u044E\u0439\u0442\u0435 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F: "+decodeURIComponent(t));return;case"linkedin":n=`https://www.linkedin.com/sharing/share-offsite/?url=${t}`;break;case"messenger":n=`fb-messenger://share/?link=${t}`;break;case"twitter":n=`https://twitter.com/intent/tweet?url=${t}&text=${o}`;break;case"whatsapp":n=`https://wa.me/?text=${o}%20${t}`;break;default:alert("\u0421\u043E\u0446\u043C\u0435\u0440\u0435\u0436\u0430 \u043D\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u044C\u0441\u044F");return}window.open(n,"_blank","width=600,height=400")},console.log("\u2705 \u0424\u0443\u043D\u043A\u0446\u0456\u044F share() \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E")}function P(){if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))return;let t=document.getElementById("pullToRefresh");if(!t)return;let o=0,n=0,r=!1;window.addEventListener("touchstart",a=>{window.scrollY===0&&(o=a.touches[0].clientY,r=!0)}),window.addEventListener("touchmove",a=>{if(!r)return;n=a.touches[0].clientY;let i=n-o;i>0&&i<=100&&(t.style.transform=`translateY(${i-50}px)`)}),window.addEventListener("touchend",()=>{if(!r)return;let a=n-o;r=!1,a>80?(t.textContent="\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F...",t.style.transform="translateY(0)",setTimeout(()=>location.reload(),300)):t.style.transform="translateY(-50px)"})}function A(){let e=document.getElementById("cookie-banner"),t=document.getElementById("cookie-accept"),o=document.getElementById("cookie-close");e&&(localStorage.getItem("cookieAccepted")==="true"&&(e.style.display="none"),t==null||t.addEventListener("click",()=>{localStorage.setItem("cookieAccepted","true"),e.style.display="none"}),o==null||o.addEventListener("click",()=>{e.style.display="none"}))}function $(){let e=document.getElementById("toggleTeam"),t=document.getElementById("teamSection");e&&t&&e.addEventListener("click",()=>{let a=t.style.display==="none"||t.style.display==="";t.style.display=a?"block":"none",e.textContent=a?"\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u043D\u0430\u0448\u0443 \u043A\u043E\u043C\u0430\u043D\u0434\u0443":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u043D\u0430\u0448\u0443 \u043A\u043E\u043C\u0430\u043D\u0434\u0443"});let o=document.getElementById("toggleHistory"),n=document.getElementById("historySection");o&&n&&o.addEventListener("click",()=>{let a=n.style.display==="none"||n.style.display==="";n.style.display=a?"block":"none",o.textContent=a?"\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u0456\u0441\u0442\u043E\u0440\u0456\u044E \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0438":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0456\u0441\u0442\u043E\u0440\u0456\u044E \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0438"}),document.querySelectorAll(".show-results").forEach(a=>{a.addEventListener("click",function(){let i=this.nextElementSibling,d=this.querySelector(".arrow");if(i&&i.classList.contains("results-slider")){let c=i.style.display==="none"||i.style.display==="";i.style.display=c?"block":"none",d&&(d.textContent=c?"\u25B2":"\u25BC")}})})}function W(){let e=document.getElementById("togglePricing"),t=document.getElementById("pricingTable"),o=document.getElementById("linkWrapper");e&&t&&o&&e.addEventListener("click",()=>{let n=t.style.display==="table";t.style.display=n?"none":"table",o.style.display=n?"none":"block",e.setAttribute("aria-expanded",!n),e.textContent=n?"\u0417\u043D\u0430\u0439\u0442\u0438 \u043D\u0430\u0439\u0432\u0438\u0433\u0456\u0434\u043D\u0456\u0448\u0438\u0439 \u043F\u0430\u043A\u0435\u0442":"\u043F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438"})}function X(){if(!document.getElementById("snow-container")){console.warn("\u2744\uFE0F Snow container \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E");return}let t={snowflakeCount:50,snowflakeChars:["\u2744","\u2745","\u2746","\u2022","\u25E6"],minSize:.5,maxSize:1.2,minDuration:10,maxDuration:20,maxDelay:5};function o(){let n=document.getElementById("snow-container");if(!n)return;let r=document.createElement("div");r.className="snowflake";let a=t.snowflakeChars[Math.floor(Math.random()*t.snowflakeChars.length)];r.textContent=a,r.style.left=`${Math.random()*100}%`;let i=Math.random()*(t.maxSize-t.minSize)+t.minSize;r.style.fontSize=`${i}em`;let d=Math.random()*(t.maxDuration-t.minDuration)+t.minDuration;r.style.animationDuration=`${d}s`;let c=Math.random()*t.maxDelay;r.style.animationDelay=`${c}s`,n.appendChild(r);let m=(d+c)*1e3;setTimeout(()=>{r.parentNode&&r.remove(),o()},m)}for(let n=0;n<t.snowflakeCount;n++)setTimeout(()=>{o()},n*100);console.log(`\u2744\uFE0F \u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E ${t.snowflakeCount} \u0441\u043D\u0456\u0436\u0438\u043D\u043E\u043A`)}function K(){if(!document.querySelector(".tree-star")){console.warn("\u2B50 \u0417\u0456\u0440\u043A\u0430 \u043D\u0430 \u044F\u043B\u0438\u043D\u0446\u0456 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0430");return}console.log("\u2B50 \u0410\u043D\u0456\u043C\u0430\u0446\u0456\u044F \u0437\u0456\u0440\u043A\u0438 \u0430\u043A\u0442\u0438\u0432\u043E\u0432\u0430\u043D\u0430")}function Q(){let e=[{selector:"#snow-container",name:"Snow container"},{selector:".logo-header-main",name:"\u041B\u043E\u0433\u043E\u0442\u0438\u043F"},{selector:".santa-hat",name:"\u0428\u0430\u043F\u043A\u0430 \u0421\u0430\u043D\u0442\u0438"},{selector:".christmas-tree-header",name:"\u042F\u043B\u0438\u043D\u043A\u0430"}],t=!0;return e.forEach(({selector:o,name:n})=>{document.querySelector(o)||(console.warn(`\u{1F384} \u0415\u043B\u0435\u043C\u0435\u043D\u0442 "${n}" (${o}) \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E`),t=!1)}),t}function H(){console.log("\u{1F384} \u0406\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F \u043D\u043E\u0432\u043E\u0440\u0456\u0447\u043D\u0438\u0445 \u0435\u0444\u0435\u043A\u0442\u0456\u0432..."),Q()||console.warn("\u26A0\uFE0F \u0414\u0435\u044F\u043A\u0456 \u043D\u043E\u0432\u043E\u0440\u0456\u0447\u043D\u0456 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438 \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456. \u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435 HTML \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443."),X(),K(),console.log("\u2705 \u041D\u043E\u0432\u043E\u0440\u0456\u0447\u043D\u0456 \u0435\u0444\u0435\u043A\u0442\u0438 \u0430\u043A\u0442\u0438\u0432\u043E\u0432\u0430\u043D\u043E!")}function O(){function e(){window.dataLayer=window.dataLayer||[];function r(){dataLayer.push(arguments)}window.gtag=r,r("js",new Date),r("config","G-PNL84GTKES")}function t({name:r,delta:a,id:i}){typeof gtag=="function"&&gtag("event",r,{event_category:"Web Vitals",event_label:i,value:Math.round(r==="CLS"?a*1e3:a),non_interaction:!0})}function o(){typeof getCLS=="function"&&getCLS(t),typeof getFID=="function"&&getFID(t),typeof getLCP=="function"&&getLCP(t),typeof getFCP=="function"&&getFCP(t),typeof getTTFB=="function"&&getTTFB(t)}function n(){let r=document.createElement("script");r.src="https://www.googletagmanager.com/gtag/js?id=G-PNL84GTKES",r.async=!0,r.onload=()=>{if(e(),!window.webVitalsLoaded){let a=document.createElement("script");a.src="scripts/vendor/web-vitals.iife.js",a.onload=o,a.onerror=()=>{console.warn("\u26A0\uFE0F Web Vitals \u043D\u0435 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E")},document.head.appendChild(a),window.webVitalsLoaded=!0}},r.onerror=()=>{console.warn("\u26A0\uFE0F Google Tag Manager \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439")},document.head.appendChild(r);try{(function(a,i,d,c,m,l,s){a[d]=a[d]||function(){(a[d].q=a[d].q||[]).push(arguments)},l=document.createElement(c),l.async=1,l.src="https://www.clarity.ms/tag/"+m,l.onerror=function(){console.warn("\u26A0\uFE0F Clarity \u043E\u0441\u043D\u043E\u0432\u043D\u0438\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439. \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0437 CDN...");let b=document.createElement(c);b.async=1,b.src="https://cdn.jsdelivr.net/gh/microsoft/clarity@latest/clarity.js",b.onerror=function(){console.warn("\u274C Clarity CDN \u0442\u0430\u043A\u043E\u0436 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439 (ad blocker)")},b.onload=function(){console.log("\u2705 Clarity \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E \u0437 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0433\u043E CDN")},document.head.appendChild(b)},l.onload=function(){console.log("\u2705 Clarity \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E")},s=document.getElementsByTagName(c)[0],s.parentNode.insertBefore(l,s)})(window,document,"clarity","script","slktbp5ngx")}catch(a){console.warn("\u274C Clarity \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438:",a)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()}function Y(){let e={portfolio:[{name:"\u0411\u0430\u0437\u043E\u0432\u0438\u0439 (5 \u0441\u0442\u043E\u0440\u0456\u043D\u043E\u043A)",price:500},{name:"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442 (+ \u0434\u0438\u0437\u0430\u0439\u043D \u0442\u0430 \u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0456\u044F)",price:600},{name:"\u041F\u0440\u0435\u043C\u0456\u0443\u043C (+ \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0457 \u0442\u0430 SEO)",price:700}],resume:[{name:"Classic",price:300},{name:"Creative",price:400},{name:"Minimal",price:450},{name:"Premium",price:550}],sites:[{name:"Landing page",price:800},{name:"\u0421\u0430\u0439\u0442 \u0434\u043B\u044F \u0440\u0435\u043A\u0440\u0443\u0442\u0435\u0440\u0430",price:1200},{name:'Instagram "Taplink"',price:500},{name:"\u0421\u0430\u0439\u0442 \u0434\u043B\u044F \u043C\u0456\u043A\u0440\u043E\u043A\u0440\u0435\u0434\u0438\u0442\u0443\u0432\u0430\u043D\u043D\u044F",price:1e3},{name:"\u0421\u0430\u0439\u0442 \u043F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u044C \u0404\u0421",price:1500}],adaptive:[{name:"\u0411\u0430\u0437\u043E\u0432\u0430",price:300},{name:"\u0420\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u0430",price:450},{name:"\u041F\u0440\u0435\u043C\u0456\u0443\u043C",price:600}]},t=document.getElementById("service-type"),o=document.getElementById("service-option"),n=document.getElementById("service-options"),r=document.getElementById("additional-options"),a=document.getElementById("result"),i=document.getElementById("total-price"),d=document.getElementById("reset-calculator");if(!t||!o)return;let c=0;function m(){document.querySelectorAll('#additional-options input[type="checkbox"]').forEach(s=>{s.checked=!1})}function l(){let s=c;document.querySelectorAll('#additional-options input[type="checkbox"]:checked').forEach(b=>{s+=parseInt(b.value)}),i.textContent=`${s} \u0433\u0440\u043D`}t.addEventListener("change",function(){let s=this.value;s?(o.innerHTML='<option value="">-- \u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0432\u0430\u0440\u0456\u0430\u043D\u0442 --</option>',e[s].forEach(p=>{let u=document.createElement("option");u.value=p.price,u.textContent=`${p.name} \u2014 ${p.price} \u0433\u0440\u043D`,o.appendChild(u)}),n.style.display="block",r.style.display="none",a.style.display="none",d.style.display="none",m()):(n.style.display="none",r.style.display="none",a.style.display="none",d.style.display="none")}),o.addEventListener("change",function(){let s=parseInt(this.value);s?(c=s,r.style.display="block",a.style.display="block",d.style.display="block",l()):(c=0,r.style.display="none",a.style.display="none",d.style.display="none")}),document.querySelectorAll('#additional-options input[type="checkbox"]').forEach(s=>{s.addEventListener("change",l)}),d.addEventListener("click",function(){t.value="",o.innerHTML='<option value="">-- \u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0432\u0430\u0440\u0456\u0430\u043D\u0442 --</option>',n.style.display="none",r.style.display="none",a.style.display="none",d.style.display="none",c=0,m()})}function y(){let e=document.querySelector(".footer p");e&&(e.innerHTML=e.innerHTML.replace(/\d{4}/,new Date().getFullYear()))}document.addEventListener("DOMContentLoaded",y);function Z(e){var r,a;document.querySelectorAll(".tab").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".tab-content").forEach(i=>i.classList.remove("active")),(r=document.querySelector(`[data-tab="${e}"]`))==null||r.classList.add("active"),(a=document.getElementById(e))==null||a.classList.add("active");let t=["registration","deployment","settings"],n=(t.indexOf(e)+1)/t.length*100;document.getElementById("progressBar").style.width=n+"%"}function g(){document.querySelectorAll(".tab").forEach(e=>{e.addEventListener("click",()=>Z(e.dataset.tab))}),document.querySelectorAll(".step").forEach(e=>{e.addEventListener("click",()=>e.classList.toggle("expanded"))})}document.addEventListener("DOMContentLoaded",g);function k(){"serviceWorker"in navigator&&!window.pwaInitialized&&(window.pwaInitialized=!0,navigator.serviceWorker.register("/sw.js").catch(t=>console.error("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457 SW:",t)));let e;window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),e=t;let o=document.createElement("button");o.innerText="\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u0434\u043E\u0434\u0430\u0442\u043E\u043A",o.style.position="fixed",o.style.bottom="20px",o.style.right="20px",o.style.zIndex="9999",document.body.appendChild(o),o.addEventListener("click",()=>{o.remove(),e.prompt(),e.userChoice.then(n=>{e=null,console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432\u0438\u0431\u043E\u0440\u0443 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430:",n.outcome)})})})}document.addEventListener("DOMContentLoaded",k);var h=class{constructor(t,o="social-proof",n="proof-text"){this.messages=t||[],this.box=document.getElementById(o),this.text=document.getElementById(n),this.lastIndex=-1,this.showDuration=5e3,this.initialDelay=12e4,this.intervalDelay=72e4,this.intervalId=null}init(){!this.box||!this.text||!this.messages.length||setTimeout(()=>{this.showRandomMessage(),this.intervalId=setInterval(()=>this.showRandomMessage(),this.intervalDelay)},this.initialDelay)}showRandomMessage(){if(!this.messages.length)return;let t;do t=Math.floor(Math.random()*this.messages.length);while(t===this.lastIndex);this.lastIndex=t,this.text.innerHTML=this.messages[t],this.box.classList.remove("hidden"),setTimeout(()=>this.box.classList.add("hidden"),this.showDuration)}stop(){this.intervalId&&clearInterval(this.intervalId)}};function R(e,t,o){let n=new h(e,t,o);return n.init(),n}var F=["\u{1F916} Djon<br>- \u041C\u0430\u0440\u0456\u044F \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043B\u0430\u0441\u044C \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F\u043C \u0440\u0435\u0437\u044E\u043C\u0435 \u{1F4C4}","\u{1F916} Djon<br>- \u041E\u043B\u0435\u0433 \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u043B\u0435\u043D\u0434\u0456\u043D\u0433 \u{1F310}","\u{1F916} Djon<br>- \u0410\u043D\u043D\u0430 \u043C\u0430\u0454 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u{1F3A8}","\u{1F916} Djon<br>- \u0406\u0433\u043E\u0440 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0432 \u043B\u0435\u043D\u0434\u0456\u043D\u0433 \u2705","\u{1F916} Djon<br>- \u041A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u043F\u0440\u043E\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043B\u0430 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0442\u0435\u043A\u0441\u0442\u0456\u0432 \u0434\u043B\u044F \u0440\u0435\u0437\u044E\u043C\u0435 \u270D\uFE0F","\u{1F916} Djon<br>- \u0414\u043C\u0438\u0442\u0440\u043E \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0431\u0430\u043D\u0435\u0440 \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F5BC}\uFE0F","\u{1F916} Djon<br>- \u0412\u0456\u043A\u0442\u043E\u0440\u0456\u044F \u043C\u0430\u0454 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F4F1}","\u{1F916} Djon<br>- \u0421\u0435\u0440\u0433\u0456\u0439 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0432\u0441\u044F \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u043E\u044E \u043B\u0435\u043D\u0434\u0456\u043D\u0433\u0443 \u2705","\u{1F916} Djon<br>- \u041E\u043B\u0435\u043D\u0430 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u043B\u0430 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F58C}\uFE0F","\u{1F916} Djon<br>- \u0422\u0430\u0440\u0430\u0441 \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0431\u0430\u043D\u0435\u0440 \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F58C}\uFE0F","\u{1F916} Djon<br>- \u041D\u0430\u0442\u0430\u043B\u044F \u043F\u0440\u043E\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043B\u0430 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0442\u0435\u043A\u0441\u0442\u0456\u0432 \u0434\u043B\u044F \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u270D\uFE0F","\u{1F916} Djon<br>- \u0412\u0430\u0434\u0438\u043C \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0432 \u043B\u0435\u043D\u0434\u0456\u043D\u0433 \u0434\u043B\u044F \u043C\u043E\u0431\u0456\u043B\u044C\u043D\u043E\u0457 \u0432\u0435\u0440\u0441\u0456\u0457 \u{1F4F1}","\u{1F916} Djon<br>- \u0406\u043D\u043D\u0430 \u043C\u0430\u0454 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F5BC}\uFE0F","\u{1F916} Djon<br>- \u042E\u0440\u0456\u0439 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0432\u0441\u044F \u043C\u0456\u043D\u0456-\u0441\u0435\u0440\u0432\u0456\u0441\u043E\u043C \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0456\u0457 \u0442\u0435\u043A\u0441\u0442\u0456\u0432 \u270D\uFE0F","\u{1F916} Djon<br>- \u041B\u044E\u0434\u043C\u0438\u043B\u0430 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u043B\u0430 \u0441\u0432\u0456\u0439 \u043B\u0435\u043D\u0434\u0456\u043D\u0433 \u2705","\u{1F916} Djon<br>- \u041C\u0430\u043A\u0441\u0438\u043C \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0431\u0430\u043D\u0435\u0440 \u0434\u043B\u044F \u0440\u0435\u043A\u043B\u0430\u043C\u0438 \u0443 \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436\u0430\u0445 \u{1F4E2}","\u{1F916} Djon<br>- \u0410\u043D\u044F \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u043B\u0430 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F58C}\uFE0F","\u{1F916} Djon<br>- \u0414\u0435\u043D\u0438\u0441 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0432\u0441\u044F \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u043E\u044E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u2705","\u{1F916} Djon<br>- \u0421\u0432\u0456\u0442\u043B\u0430\u043D\u0430 \u043C\u0430\u0454 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F58C}\uFE0F","\u{1F916} Djon<br>- \u0420\u043E\u043C\u0430\u043D \u043F\u0440\u043E\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0432 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0442\u0435\u043A\u0441\u0442\u0456\u0432 \u0434\u043B\u044F \u0440\u0435\u0437\u044E\u043C\u0435 \u270D\uFE0F","\u{1F916} Djon<br>- \u0406\u0440\u0438\u043D\u0430 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043B\u0430\u0441\u044C \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F\u043C \u0440\u0435\u0437\u044E\u043C\u0435 \u{1F4C4}","\u{1F916} Djon<br>- \u0412\u043E\u043B\u043E\u0434\u0438\u043C\u0438\u0440 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0432 \u043B\u0435\u043D\u0434\u0456\u043D\u0433 \u2705","\u{1F916} Djon<br>- \u0422\u0435\u0442\u044F\u043D\u0430 \u043C\u0430\u0454 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u{1F3A8}","\u{1F916} Djon<br>- \u0410\u043D\u0434\u0440\u0456\u0439 \u043F\u0440\u043E\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0432 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0442\u0435\u043A\u0441\u0442\u0456\u0432 \u0434\u043B\u044F \u0440\u0435\u0437\u044E\u043C\u0435 \u270D\uFE0F","\u{1F916} Djon<br>- \u041E\u043A\u0441\u0430\u043D\u0430 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0430 \u0431\u0430\u043D\u0435\u0440 \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F5BC}\uFE0F","\u{1F916} Djon<br>- \u0404\u0432\u0433\u0435\u043D \u043C\u0430\u0454 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F4F1}","\u{1F916} Djon<br>- \u041D\u0430\u0437\u0430\u0440 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0432\u0441\u044F \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u043E\u044E \u043B\u0435\u043D\u0434\u0456\u043D\u0433\u0443 \u2705","\u{1F916} Djon<br>- \u041C\u0430\u0440\u0438\u043D\u0430 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u043B\u0430 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F58C}\uFE0F","\u{1F916} Djon<br>- \u0406\u043B\u043B\u044F \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0431\u0430\u043D\u0435\u0440 \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F58C}\uFE0F","\u{1F916} Djon<br>- \u0421\u043E\u0444\u0456\u044F \u043F\u0440\u043E\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043B\u0430 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0442\u0435\u043A\u0441\u0442\u0456\u0432 \u0434\u043B\u044F \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u270D\uFE0F","\u{1F916} Djon<br>- \u041F\u0430\u0432\u043B\u043E \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0432 \u043B\u0435\u043D\u0434\u0456\u043D\u0433 \u0434\u043B\u044F \u043C\u043E\u0431\u0456\u043B\u044C\u043D\u043E\u0457 \u0432\u0435\u0440\u0441\u0456\u0457 \u{1F4F1}","\u{1F916} Djon<br>- \u041E\u043B\u044F \u043C\u0430\u0454 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F5BC}\uFE0F","\u{1F916} Djon<br>- \u042F\u0440\u043E\u0441\u043B\u0430\u0432 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0432\u0441\u044F \u043C\u0456\u043D\u0456-\u0441\u0435\u0440\u0432\u0456\u0441\u043E\u043C \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0456\u0457 \u0442\u0435\u043A\u0441\u0442\u0456\u0432 \u270D\uFE0F","\u{1F916} Djon<br>- \u0412\u0456\u0440\u0430 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u043B\u0430 \u0441\u0432\u0456\u0439 \u043B\u0435\u043D\u0434\u0456\u043D\u0433 \u2705","\u{1F916} Djon<br>- \u041A\u043E\u0441\u0442\u044F\u043D\u0442\u0438\u043D \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0431\u0430\u043D\u0435\u0440 \u0434\u043B\u044F \u0440\u0435\u043A\u043B\u0430\u043C\u0438 \u0443 \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436\u0430\u0445 \u{1F4E2}","\u{1F916} Djon<br>- \u041B\u0456\u0437\u0430 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u043B\u0430 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F58C}\uFE0F","\u{1F916} Djon<br>- \u041C\u0438\u043A\u0438\u0442\u0430 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0432\u0441\u044F \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u043E\u044E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u2705","\u{1F916} Djon<br>- \u041D\u0430\u0442\u0430\u043B\u0456\u044F \u043C\u0430\u0454 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F58C}\uFE0F","\u{1F916} Djon<br>- \u041E\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u043F\u0440\u043E\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0432 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0442\u0435\u043A\u0441\u0442\u0456\u0432 \u0434\u043B\u044F \u0440\u0435\u0437\u044E\u043C\u0435 \u270D\uFE0F","\u{1F916} Djon<br>- \u0421\u0432\u0456\u0442\u043B\u0430\u043D\u0430 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043B\u0430\u0441\u044C \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F\u043C \u0440\u0435\u0437\u044E\u043C\u0435 \u{1F4C4}","\u{1F916} Djon<br>- \u0406\u0433\u043E\u0440 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0432 \u043B\u0435\u043D\u0434\u0456\u043D\u0433 \u2705","\u{1F916} Djon<br>- \u0410\u043D\u0430\u0441\u0442\u0430\u0441\u0456\u044F \u043C\u0430\u0454 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u{1F3A8}","\u{1F916} Djon<br>- \u0412\u0430\u0434\u0438\u043C \u043F\u0440\u043E\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0432 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0442\u0435\u043A\u0441\u0442\u0456\u0432 \u0434\u043B\u044F \u0440\u0435\u0437\u044E\u043C\u0435 \u270D\uFE0F","\u{1F916} Djon<br>- \u0414\u0430\u0440\u0438\u043D\u0430 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0430 \u0431\u0430\u043D\u0435\u0440 \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F5BC}\uFE0F","\u{1F916} Djon<br>- \u0420\u043E\u043C\u0430\u043D \u043C\u0430\u0454 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F4F1}","\u{1F916} Djon<br>- \u0422\u0435\u0442\u044F\u043D\u0430 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043B\u0430\u0441\u044C \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u043E\u044E \u043B\u0435\u043D\u0434\u0456\u043D\u0433\u0443 \u2705","\u{1F916} Djon<br>- \u041E\u043B\u0435\u0433 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0432 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F58C}\uFE0F","\u{1F916} Djon<br>- \u0406\u043D\u043D\u0430 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0430 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0431\u0430\u043D\u0435\u0440 \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F58C}\uFE0F","\u{1F916} Djon<br>- \u0421\u0435\u0440\u0433\u0456\u0439 \u043F\u0440\u043E\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0432 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0442\u0435\u043A\u0441\u0442\u0456\u0432 \u0434\u043B\u044F \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u270D\uFE0F","\u{1F916} Djon<br>- \u041C\u0430\u0440\u0456\u044F \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u043B\u0430 \u043B\u0435\u043D\u0434\u0456\u043D\u0433 \u0434\u043B\u044F \u043C\u043E\u0431\u0456\u043B\u044C\u043D\u043E\u0457 \u0432\u0435\u0440\u0441\u0456\u0457 \u{1F4F1}","\u{1F916} Djon<br>- \u0410\u043D\u0434\u0440\u0456\u0439 \u043C\u0430\u0454 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F5BC}\uFE0F"];function N(){let e={"@context":"https://schema.org","@type":"Organization",name:"WebStart Studio",url:"https://scintillating-sunshine-94e986.netlify.app/",logo:"https://scintillating-sunshine-94e986.netlify.app/icons/icon-192x192.webp",description:"\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E, \u0440\u0435\u0437\u044E\u043C\u0435 \u0442\u0430 \u043B\u0435\u043D\u0434\u0456\u043D\u0433\u0456\u0432 \u0437 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u044E \u0432\u0435\u0440\u0441\u0442\u043A\u043E\u044E, \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u043C \u0456 \u0440\u0435\u043A\u043B\u0430\u043C\u043E\u044E.",sameAs:["https://www.facebook.com/profile.php?id=61575866647011","https://www.instagram.com/freelancer_pit_frontend?igsh=dHJrc3BhcHU5bXp6"],contactPoint:{"@type":"ContactPoint",telephone:"+380661391932",contactType:"Customer Service",areaServed:"UA, PL",availableLanguage:["Ukrainian","Polish"]}},t={"@context":"https://schema.org","@type":"WebSite",url:"https://scintillating-sunshine-94e986.netlify.app/",potentialAction:{"@type":"SearchAction",target:"https://scintillating-sunshine-94e986.netlify.app/?q={search_term_string}","query-input":"required name=search_term_string"}},o=document.createElement("script");o.type="application/ld+json",o.textContent=JSON.stringify(e),document.head.appendChild(o);let n=document.createElement("script");n.type="application/ld+json",n.textContent=JSON.stringify(t),document.head.appendChild(n)}function z(){"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(e=>{e.onupdatefound=()=>{let t=e.installing;t.onstatechange=()=>{t.state==="installed"&&navigator.serviceWorker.controller&&ee()}}})}function ee(){let e=document.createElement("div");e.className="update-banner",e.innerHTML=`
        <div>\u{1F504} \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0435 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F</div>
        <button>\u041E\u043D\u043E\u0432\u0438\u0442\u0438</button>
    `,e.querySelector("button").onclick=()=>window.location.reload(),e.style.opacity="0",e.style.transform="translateY(-100%)",e.style.transition="opacity 0.6s ease-out, transform 0.6s ease-out",document.body.appendChild(e),requestAnimationFrame(()=>{e.style.opacity="1",e.style.transform="translateY(0)"}),setTimeout(()=>{e.style.opacity="0",e.style.transform="translateY(-100%)",setTimeout(()=>e.remove(),600)},1e4)}document.addEventListener("DOMContentLoaded",()=>{console.log("\u{1F680} WebStart Studio - \u0406\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F..."),v(),w(),E(),x(),L(),D(),I(),C(),B(),T(),j(),q(),M(),P(),A(),$(),W(),H(),O(),Y(),y(),g(),k(),R(F),N(),z(),console.log("\u2705 \u0412\u0441\u0456 \u043C\u043E\u0434\u0443\u043B\u0456 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E")});})();
//# sourceMappingURL=bundle.js.map
