(()=>{function v(){let e=document.getElementById("burger"),t=document.getElementById("navMenu"),n=t?t.querySelectorAll("a"):[],r=()=>{t&&t.classList.remove("active"),e&&e.classList.remove("active")};e&&t&&(e.addEventListener("click",a=>{a.preventDefault(),t.classList.toggle("active"),e.classList.toggle("active")}),n.forEach(a=>{a.addEventListener("click",o=>{a.getAttribute("href")==="#"&&o.preventDefault(),r()})}),document.addEventListener("click",a=>{!t.contains(a.target)&&!e.contains(a.target)&&r()}))}function w(){let e=document.getElementById("scrollTopBtn");e&&(window.addEventListener("scroll",()=>{document.body.scrollTop>300||document.documentElement.scrollTop>300?e.style.display="block":e.style.display="none"}),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}))}function E(){let e=document.getElementById("toggle-video"),t=document.getElementById("video-container");e&&t&&e.addEventListener("click",()=>{let n=t.style.display==="block";t.style.display=n?"none":"block",e.textContent=n?"\u{1F3AC} \u041F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 \u0432\u0456\u0434\u0435\u043E \u043F\u0440\u043E \u043D\u0430\u0441":"\u274C \u0417\u0430\u043A\u0440\u0438\u0442\u0438 \u0432\u0456\u0434\u0435\u043E"})}function x(){N(),V()}function N(){let e=document.getElementById("welcome-modal"),t=document.getElementById("close-btn");!e||!t||(setTimeout(()=>{e.style.display="none"},5e3),t.addEventListener("click",()=>{e.style.display="none"}))}function V(){let e=document.getElementById("popup"),t=document.getElementById("close-popup");!e||!t||(setTimeout(()=>{e.style.display="block"},8e3),t.addEventListener("click",()=>{e.style.display="none"}),e.addEventListener("click",n=>{n.target===e&&(e.style.display="none")}))}var I=document.getElementById("popup"),z=document.getElementById("close-popup"),y=document.getElementById("help-button");z.addEventListener("click",()=>{I.style.display="none",y.style.display="block"});y.addEventListener("click",()=>{I.style.display="flex",y.style.display="none"});function L(){let e=document.getElementById("darkModeToggle"),t=document.body;function n(o){o?(t.classList.add("dark-mode"),document.documentElement.style.setProperty("--bg-color","#1a1a1a"),document.documentElement.style.setProperty("--text-color","#e0e0e0"),document.documentElement.style.setProperty("--card-bg","#2a2a2a"),document.documentElement.style.setProperty("--border-color","#404040")):(t.classList.remove("dark-mode"),document.documentElement.style.setProperty("--bg-color","#cff3f3"),document.documentElement.style.setProperty("--text-color","#333"),document.documentElement.style.setProperty("--card-bg","#ffffff"),document.documentElement.style.setProperty("--border-color","#ccc"))}let a=localStorage.getItem("theme")==="dark";n(a),e&&(e.checked=a),e&&e.addEventListener("change",()=>{let o=e.checked;n(o),localStorage.setItem("theme",o?"dark":"light")}),J()}function J(){let e="dark-mode-styles";if(document.getElementById(e))return;let t=document.createElement("style");t.id=e,t.textContent=`
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
    `,document.head.appendChild(t)}function B(){let e=document.getElementById("countdown");if(!e)return;let t=new Date(2025,10,30,23,59,59),n=()=>{let r=t-new Date;if(r<=0){e.innerHTML="\u0427\u0430\u0441 \u0432\u0438\u0439\u0448\u043E\u0432!";return}let a=Math.floor(r/(1e3*60*60*24)),o=Math.floor(r/(1e3*60*60)%24),i=Math.floor(r/(1e3*60)%60),d=Math.floor(r/1e3%60);e.innerHTML=`\u0414\u043E \u043A\u0456\u043D\u0446\u044F \u0430\u043A\u0446\u0456\u0457: ${a}\u0434 ${o}\u0433 ${i}\u0445\u0432 ${d}\u0441\u0435\u043A`};n(),setInterval(n,1e3)}function S(){let e=document.querySelectorAll("section"),t=()=>{let n=window.innerHeight*.85;e.forEach(r=>{r.getBoundingClientRect().top<n&&r.classList.add("visible")})};window.addEventListener("scroll",t),t()}function D(){let e=document.getElementById("simple-search-form"),t=document.getElementById("search-input"),n=document.getElementById("search-feedback");if(!e||!t||!n)return;let r={\u043F\u043E\u0441\u043B\u0443\u0433\u0438:"services",\u0441\u0442\u0432\u043E\u0440\u044E\u0454\u043C\u043E:"services",\u0432\u0435\u0440\u0441\u0442\u043A\u0430:"services",\u0440\u0435\u0437\u044E\u043C\u0435:"services",\u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E:"portfolio",\u0440\u043E\u0431\u043E\u0442\u0438:"portfolio",\u043A\u0435\u0439\u0441\u0438:"portfolio",\u043B\u0435\u043D\u0434\u0456\u043D\u0433:"portfolio",\u0442\u0435\u0445\u0441\u0435\u0440\u0432\u0456\u0441:"technical-features","\u0442\u0435\u0445\u043D\u0456\u0447\u043D\u0456 \u043C\u043E\u0436\u043B\u0438\u0432\u043E\u0441\u0442\u0456":"technical-features",\u043F\u0435\u0440\u0435\u0432\u0430\u0433\u0438:"advantages","\u0447\u043E\u043C\u0443 \u043C\u0438":"advantages",\u043F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F:"platform-comparison",\u043F\u043E\u043C\u0438\u043B\u043A\u0438:"common-mistakes","\u0447\u0430\u0441\u0442\u0456 \u043F\u043E\u043C\u0438\u043B\u043A\u0438":"common-mistakes","\u0434\u043B\u044F \u043A\u043E\u0433\u043E":"for-whom","\u0434\u043B\u044F \u043A\u043E\u0433\u043E \u043C\u0438":"for-whom",\u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0456\u044F:"for-whom",\u0441\u0430\u043C\u043E\u043C\u0443:"diy-vs-us",diy:"diy-vs-us","\u0437 \u043D\u0430\u043C\u0438":"diy-vs-us",\u043F\u043E\u0440\u0456\u0432\u043D\u044F\u0442\u0438:"diy-vs-us",\u043F\u0430\u043A\u0435\u0442\u0438:"pricing",\u0446\u0456\u043D\u0438:"pricing",\u0430\u043A\u0446\u0456\u0457:"promo",\u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438:"briefs",\u0431\u0440\u0438\u0444:"briefs","\u043C\u0456\u043D\u0456-\u0441\u0435\u0440\u0432\u0456\u0441":"mini-services",ai:"ai-prompting-dynamic","ai \u0441\u0435\u0440\u0432\u0456\u0441":"ai-prompting-dynamic",\u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0435:"extras",\u0432\u0456\u0434\u0433\u0443\u043A\u0438:"testimonials",faq:"faq",\u0437\u0430\u043F\u0438\u0442\u0430\u043D\u043D\u044F:"faq",\u0440\u043E\u0437\u043C\u0456\u0449\u0435\u043D\u043D\u044F:"hosting-help",\u0445\u043E\u0441\u0442\u0438\u043D\u0433:"hosting-help",international:"international",\u0431\u043B\u043E\u0433:"blog",\u043D\u043E\u0432\u0438\u043D\u0438:"blog",\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0438:"contact-gift-wrapper","\u0437\u0432'\u044F\u0437\u043E\u043A":"contact-gift-wrapper",\u0431\u043E\u043D\u0443\u0441:"guide-bonus",\u043F\u0443\u0442\u0456\u0432\u043D\u0438\u043A:"guide-bonus",\u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436\u0456:"social",\u0441\u0435\u0440\u0442\u0438\u0444\u0456\u043A\u0430\u0442:"certificate-gift",\u0441\u0443\u0432\u0435\u043D\u0456\u0440:"certificate-gift",\u043A\u0456\u0431\u0435\u0440\u0431\u0435\u0437\u043F\u0435\u043A\u0430:"security",security:"security",\u0437\u0430\u0445\u0438\u0441\u0442:"security",\u0448\u0430\u0445\u0440\u0430\u0439\u0441\u0442\u0432\u043E:"security"};e.addEventListener("submit",a=>{a.preventDefault();let o=t.value.trim().toLowerCase();if(n.textContent="",!o){n.textContent="\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043A\u043B\u044E\u0447\u043E\u0432\u0435 \u0441\u043B\u043E\u0432\u043E \u0434\u043B\u044F \u043F\u043E\u0448\u0443\u043A\u0443.";return}let i=null;for(let d in r)if(o.includes(d)){i=r[d];break}if(i){let d=document.getElementById(i);if(d){let c=d.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:c,behavior:"smooth"}),d.classList.add("highlight-search"),setTimeout(()=>d.classList.remove("highlight-search"),2e3),t.value="",n.textContent="";return}}n.textContent=`\u0421\u0435\u043A\u0446\u0456\u044F \u0437\u0430 \u0437\u0430\u043F\u0438\u0442\u043E\u043C "${o}" \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0430. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435: \u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E, \u041F\u043E\u0441\u043B\u0443\u0433\u0438, \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438.`})}function C(){let e={services:"\u0421\u0442\u0432\u043E\u0440\u044E\u0454\u043C\u043E",portfolio:"\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E","technical-features":"\u0422\u0435\u0445\u0421\u0435\u0440\u0432\u0456\u0441",advantages:"\u0427\u043E\u043C\u0443 \u043C\u0438?","platform-comparison":"\u041F\u043E\u0440\u0456\u0432\u043D\u044F\u043D\u043D\u044F","common-mistakes":"\u0427\u0430\u0441\u0442\u0456 \u043F\u043E\u043C\u0438\u043B\u043A\u0438","for-whom":"\u0414\u043B\u044F \u043A\u043E\u0433\u043E \u043C\u0438","diy-vs-us":"\u0421\u0430\u043C\u043E\u043C\u0443 vs \u0417 \u043D\u0430\u043C\u0438",pricing:"\u041F\u0430\u043A\u0435\u0442\u0438",promo:"\u0410\u043A\u0446\u0456\u0457",briefs:"\u041E\u0442\u0440\u0438\u043C\u0430\u0442\u0438","mini-services":"\u041C\u0456\u043D\u0456-\u0441\u0435\u0440\u0432\u0456\u0441","ai-prompting-dynamic":"AI \u0421\u0435\u0440\u0432\u0456\u0441",extras:"\u0414\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0435","certificate-gift":"\u0421\u0443\u0432\u0435\u043D\u0456\u0440",testimonials:"\u0412\u0456\u0434\u0433\u0443\u043A\u0438",faq:"FAQ","hosting-help":"\u0420\u043E\u0437\u043C\u0456\u0449\u0435\u043D\u043D\u044F",blog:"\u0414\u0430\u0439\u0434\u0436\u0435\u0441\u0442",international:"International","contact-gift-wrapper":"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438","guide-bonus":"\u0411\u043E\u043D\u0443\u0441+",social:"\u0421\u043E\u0446\u043C\u0435\u0440\u0435\u0436\u0456",security:"\u041A\u0456\u0431\u0435\u0440\u0431\u0435\u0437\u043F\u0435\u043A\u0430"},t=document.querySelectorAll("section[id]"),n=document.getElementById("current-section"),r=document.getElementById("breadcrumbs"),a=document.getElementById("progressBar");!t.length||!n||!a||(window.addEventListener("scroll",()=>{let o=window.scrollY,i=document.body.scrollHeight-window.innerHeight,d=o/i*100;a.style.width=d+"%";let c="\u0413\u043E\u043B\u043E\u0432\u043D\u0430";t.forEach(m=>{let l=m.offsetTop-20;o>=l&&(c=m.getAttribute("id"))}),n.textContent=e[c]||"\u0413\u043E\u043B\u043E\u0432\u043D\u0430"}),window.addEventListener("DOMContentLoaded",()=>{window.innerWidth<=768&&r&&(r.style.transition="top 0.25s ease",r.style.top="1cm",setTimeout(()=>r.style.top="0.5cm",6e3))}))}function T(){let e={testimonial1:[{img:"foto/olena.webp",alt:"\u041E\u043B\u0435\u043D\u0430",text:"\u0412\u0441\u044C\u043E\u0433\u043E \u0437\u0430 \u0442\u0440\u0438 \u0434\u043D\u0456 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0430 \u043F\u043E\u0432\u043D\u043E\u0446\u0456\u043D\u043D\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E. \u0421\u0442\u0438\u043B\u044C\u043D\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D, \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u0456\u0441\u0442\u044C \u2014 \u0443\u0441\u0435 \u043D\u0430 \u0440\u0456\u0432\u043D\u0456!",cite:"\u2014 \u041E\u043B\u0435\u043D\u0430, \u043C\u0430\u0440\u043A\u0435\u0442\u043E\u043B\u043E\u0433"},{img:"foto/nadija.webp",alt:"\u041D\u0430\u0434\u0456\u044F",text:"\u0420\u043E\u0431\u043E\u0442\u0430 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u0430 \u044F\u043A\u0456\u0441\u043D\u043E \u0442\u0430 \u0448\u0432\u0438\u0434\u043A\u043E. \u0414\u0438\u0437\u0430\u0439\u043D \u043C\u0435\u043D\u0456 \u0434\u0443\u0436\u0435 \u043F\u0456\u0434\u0456\u0439\u0448\u043E\u0432. \u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u044E \u0443\u0441\u0456\u043C \u0444\u0440\u0456\u043B\u0430\u043D\u0441\u0435\u0440\u0430\u043C!",cite:"\u2014 \u041D\u0430\u0434\u0456\u044F, \u0444\u0440\u0456\u043B\u0430\u043D\u0441\u0435\u0440"},{img:"foto/volodumer.webp",alt:"\u0412\u043E\u043B\u043E\u0434\u0438\u043C\u0438\u0440",text:"\u041C\u0456\u0439 \u043B\u0435\u043D\u0434\u0456\u043D\u0433 \u0432\u0438\u0433\u043B\u044F\u0434\u0430\u0454 \u043F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u043E \u0456 \u043F\u0440\u0438\u0432\u0430\u0431\u043B\u0438\u0432\u043E \u2014 \u0447\u0443\u0434\u043E\u0432\u0435 \u0440\u0456\u0448\u0435\u043D\u043D\u044F \u0434\u043B\u044F \u0431\u0443\u0434\u0456\u0432\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0431\u0456\u0437\u043D\u0435\u0441\u0443!",cite:"\u2014 \u0412\u043E\u043B\u043E\u0434\u0438\u043C\u0438\u0440, \u0432\u043B\u0430\u0441\u043D\u0438\u043A \u0431\u0443\u0434\u0456\u0432\u0435\u043B\u044C\u043D\u043E\u0457 \u0444\u0456\u0440\u043C\u0438"}],testimonial2:[{img:"foto/andriy.webp",alt:"\u0410\u043D\u0434\u0440\u0456\u0439",text:"\u041E\u0442\u0440\u0438\u043C\u0430\u0432 \u0441\u0443\u0447\u0430\u0441\u043D\u0438\u0439 \u0441\u0430\u0439\u0442 \u0434\u043B\u044F \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0443 \u0437\u0430 \u0440\u0435\u043A\u043E\u0440\u0434\u043D\u0456 \u0441\u0442\u0440\u043E\u043A\u0438. \u0420\u043E\u0431\u043E\u0442\u0430 \u043F\u0435\u0440\u0435\u0432\u0435\u0440\u0448\u0438\u043B\u0430 \u043E\u0447\u0456\u043A\u0443\u0432\u0430\u043D\u043D\u044F!",cite:"\u2014 \u0410\u043D\u0434\u0440\u0456\u0439, \u0432\u043B\u0430\u0441\u043D\u0438\u043A \u043E\u043D\u043B\u0430\u0439\u043D-\u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0443"},{img:"foto/vika.webp",alt:"\u0412\u0456\u043A\u0430",text:"\u041B\u0435\u043D\u0434\u0456\u043D\u0433 \u0437\u0440\u043E\u0431\u0438\u043B\u0438 \u0437\u0430 \u0434\u0432\u0430 \u0434\u043D\u0456! \u0421\u0442\u0438\u043B\u044C\u043D\u043E, \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u043B\u043E, \u0456 \u043A\u043B\u0456\u0454\u043D\u0442\u0430\u043C \u043F\u043E\u0434\u043E\u0431\u0430\u0454\u0442\u044C\u0441\u044F. \u042F \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u0430!",cite:"\u2014 \u0412\u0456\u043A\u0430, \u0432\u043B\u0430\u0441\u043D\u0438\u0446\u044F \u043F\u0435\u0440\u0443\u043A\u0430\u0440\u043D\u0456"},{img:"foto/sergey.webp",alt:"\u0421\u0435\u0440\u0433\u0456\u0439",text:"\u041F\u0456\u0441\u043B\u044F \u0437\u0430\u043F\u0443\u0441\u043A\u0443 \u0441\u0430\u0439\u0442\u0443 \u0437\u0430\u044F\u0432\u043A\u0438 \u043F\u043E\u0447\u0430\u043B\u0438 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0438 \u0432\u0456\u0434\u0440\u0430\u0437\u0443. \u0414\u0443\u0436\u0435 \u0435\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E!",cite:"\u2014 \u0421\u0435\u0440\u0433\u0456\u0439, \u0444\u0435\u0440\u043C\u0435\u0440"}],testimonial3:[{img:"foto/mariya.webp",alt:"\u041C\u0430\u0440\u0456\u044F",text:"\u041F\u0456\u0441\u043B\u044F \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0437\u044E\u043C\u0435 \u043C\u0435\u043D\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u043B\u0438 \u043E\u0434\u0440\u0430\u0437\u0443 \u043D\u0430 \u043A\u0456\u043B\u044C\u043A\u0430 \u0441\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434. \u0414\u0443\u0436\u0435 \u0432\u0434\u044F\u0447\u043D\u0430!",cite:"\u2014 \u041C\u0430\u0440\u0456\u044F, \u0448\u0443\u043A\u0430\u0447\u043A\u0430 \u0440\u043E\u0431\u043E\u0442\u0438"},{img:"foto/bogdan.webp",alt:"\u0411\u043E\u0433\u0434\u0430\u043D",text:"\u0420\u0435\u0437\u044E\u043C\u0435 \u0432\u0438\u043A\u043E\u043D\u0430\u043D\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0456\u0439\u043D\u043E. \u041F\u043E\u0434\u0430\u0447\u0430, \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u2014 \u0432\u0441\u0435 \u043D\u0430 \u0432\u0438\u0441\u043E\u043A\u043E\u043C\u0443 \u0440\u0456\u0432\u043D\u0456. \u041E\u0442\u0440\u0438\u043C\u0430\u0432 \u043D\u043E\u0432\u0443 \u043F\u043E\u0441\u0430\u0434\u0443!",cite:"\u2014 \u0411\u043E\u0433\u0434\u0430\u043D, \u0440\u0435\u043A\u0440\u0443\u0442\u0435\u0440"},{img:"foto/sofia.webp",alt:"\u0421\u043E\u0444\u0456\u044F",text:"\u0421\u0430\u0439\u0442 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u0437\u0440\u043E\u0431\u043B\u0435\u043D\u0438\u0439 \u0437 \u043A\u0440\u0435\u0430\u0442\u0438\u0432\u043E\u043C \u0456 \u0441\u043C\u0430\u043A\u043E\u043C. \u0417\u0430\u043C\u043E\u0432\u043B\u044F\u0442\u0438\u043C\u0443 \u0449\u0435 \u0431\u0430\u043D\u0435\u0440\u0438 \u0439 \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438!",cite:"\u2014 \u0421\u043E\u0444\u0456\u044F, \u043C\u0430\u0440\u043A\u0435\u0442\u043E\u043B\u043E\u0433"}]},t=(a,o,i)=>new Promise(d=>{let c=new Image;c.onload=()=>{a.src=o,a.alt=i,d(!0)},c.onerror=()=>{console.warn(`\u26A0\uFE0F \u0424\u043E\u0442\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E: ${o}, \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043E placeholder`),a.src=X(),a.alt=`${i} (\u0444\u043E\u0442\u043E \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0435)`,d(!1)},c.src=o});function n(a){let o=document.getElementById(a);if(!o||!e[a])return;let i=o.querySelector("img"),d=o.querySelector(".testimonial-content p"),c=o.querySelector(".testimonial-content cite"),m=0,l=e[a][0];i.style.opacity="0",t(i,l.img,l.alt).then(()=>{d.textContent=l.text,c.textContent=l.cite,i.style.opacity="1"}),setInterval(()=>{m=(m+1)%e[a].length;let s=e[a][m];i.style.opacity="0",setTimeout(()=>{t(i,s.img,s.alt).then(()=>{d.textContent=s.text,c.textContent=s.cite,i.style.opacity="1"})},300)},2e4)}["testimonial1","testimonial2","testimonial3"].forEach(n),Object.values(e).flat().map(a=>a.img).forEach(a=>{let o=new Image;o.src=a,o.onerror=()=>console.warn(`\u26A0\uFE0F \u041D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438: ${a}`)})}function X(){return"foto/placeholder.webp"}function j(){let e=document.getElementById("galleryTrack"),t=document.getElementById("galleryModal"),n=document.getElementById("galleryModalImg"),r=document.getElementById("galleryClose"),a=document.querySelector(".gallery-marquee-slider"),o=document.querySelector(".gallery-marquee-wrapper");if(o&&(o.style.display="block"),!e||!t||!n||!r)return;e.querySelectorAll(".gallery-marquee-image").forEach(c=>{c.addEventListener("click",()=>{n.src=c.currentSrc||c.src,t.classList.remove("hidden"),document.body.classList.add("modal-open")})}),r.addEventListener("click",()=>{t.classList.add("hidden"),document.body.classList.remove("modal-open")});let i=0,d=0;e.addEventListener("touchstart",c=>{i=c.touches[0].clientX}),e.addEventListener("touchmove",c=>{let m=Date.now();if(m-d<16)return;d=m;let l=i-c.touches[0].clientX;requestAnimationFrame(()=>{e.scrollLeft+=l}),i=c.touches[0].clientX}),a&&a.addEventListener("input",()=>{e.scrollLeft=a.value/100*(e.scrollWidth-e.clientWidth)})}function M(){window.share=function(e){let t=encodeURIComponent("https://scintillating-sunshine-94e986.netlify.app/"),n=encodeURIComponent("WebStart Studio!"),r="";switch(e){case"facebook":r=`https://www.facebook.com/sharer/sharer.php?u=${t}`;break;case"telegram":r=`https://t.me/share/url?url=${t}&text=${n}`;break;case"viber":alert("\u0429\u043E\u0431 \u043F\u043E\u0434\u0456\u043B\u0438\u0442\u0438\u0441\u044F \u0443 Viber, \u0441\u043A\u043E\u043F\u0456\u044E\u0439\u0442\u0435 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F: "+decodeURIComponent(t));return;case"linkedin":r=`https://www.linkedin.com/sharing/share-offsite/?url=${t}`;break;case"messenger":r=`fb-messenger://share/?link=${t}`;break;default:alert("\u0421\u043E\u0446\u043C\u0435\u0440\u0435\u0436\u0430 \u043D\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u044C\u0441\u044F");return}window.open(r,"_blank","width=600,height=400")},console.log("\u2705 share() \u0433\u043E\u0442\u043E\u0432\u0430")}function q(){window.share=function(e){let t=encodeURIComponent("https://scintillating-sunshine-94e986.netlify.app/"),n=encodeURIComponent("WebStart Studio!"),r="";switch(e){case"facebook":r=`https://www.facebook.com/sharer/sharer.php?u=${t}`;break;case"telegram":r=`https://t.me/share/url?url=${t}&text=${n}`;break;case"viber":alert("\u0429\u043E\u0431 \u043F\u043E\u0434\u0456\u043B\u0438\u0442\u0438\u0441\u044F \u0443 Viber, \u0441\u043A\u043E\u043F\u0456\u044E\u0439\u0442\u0435 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F: "+decodeURIComponent(t));return;case"linkedin":r=`https://www.linkedin.com/sharing/share-offsite/?url=${t}`;break;case"messenger":r=`fb-messenger://share/?link=${t}`;break;case"twitter":r=`https://twitter.com/intent/tweet?url=${t}&text=${n}`;break;case"whatsapp":r=`https://wa.me/?text=${n}%20${t}`;break;default:alert("\u0421\u043E\u0446\u043C\u0435\u0440\u0435\u0436\u0430 \u043D\u0435 \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u044C\u0441\u044F");return}window.open(r,"_blank","width=600,height=400")},console.log("\u2705 \u0424\u0443\u043D\u043A\u0446\u0456\u044F share() \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0433\u043B\u043E\u0431\u0430\u043B\u044C\u043D\u043E")}function P(){if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))return;let t=document.getElementById("pullToRefresh");if(!t)return;let n=0,r=0,a=!1;window.addEventListener("touchstart",o=>{window.scrollY===0&&(n=o.touches[0].clientY,a=!0)}),window.addEventListener("touchmove",o=>{if(!a)return;r=o.touches[0].clientY;let i=r-n;i>0&&i<=100&&(t.style.transform=`translateY(${i-50}px)`)}),window.addEventListener("touchend",()=>{if(!a)return;let o=r-n;a=!1,o>80?(t.textContent="\u041E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F...",t.style.transform="translateY(0)",setTimeout(()=>location.reload(),300)):t.style.transform="translateY(-50px)"})}function A(){let e=document.getElementById("cookie-banner"),t=document.getElementById("cookie-accept"),n=document.getElementById("cookie-close");e&&(localStorage.getItem("cookieAccepted")==="true"&&(e.style.display="none"),t==null||t.addEventListener("click",()=>{localStorage.setItem("cookieAccepted","true"),e.style.display="none"}),n==null||n.addEventListener("click",()=>{e.style.display="none"}))}function $(){let e=document.getElementById("utm-generate-btn"),t=document.getElementById("utm-copy-btn");e==null||e.addEventListener("click",n),t==null||t.addEventListener("click",r);function n(){let a=document.getElementById("url").value.trim(),o=document.getElementById("source").value.trim(),i=document.getElementById("medium").value.trim(),d=document.getElementById("campaign").value.trim(),c=document.getElementById("term").value.trim(),m=document.getElementById("content").value.trim(),l=document.getElementById("utm-copy-msg");if(l==null||l.classList.remove("show"),!a||!o||!i||!d){document.getElementById("generatedUrl").innerText="\u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430, \u0437\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u0443\u0441\u0456 \u043E\u0431\u043E\u0432'\u044F\u0437\u043A\u043E\u0432\u0456 \u043F\u043E\u043B\u044F (*).",t.disabled=!0;return}let s=[];o&&s.push(`utm_source=${o}`),i&&s.push(`utm_medium=${i}`),d&&s.push(`utm_campaign=${d}`),c&&s.push(`utm_term=${c}`),m&&s.push(`utm_content=${m}`);let u=a.includes("?")?"&":"?",b=a+u+s.join("&");document.getElementById("generatedUrl").innerText=b,t.disabled=!1}function r(){let a=document.getElementById("generatedUrl").innerText,o=document.getElementById("utm-copy-msg");navigator.clipboard.writeText(a).then(()=>{o==null||o.classList.add("show"),setTimeout(()=>o==null?void 0:o.classList.remove("show"),2e3)})}}function W(){function e(r,a,o=2e3){let i=0,d=a/(o/16),c=setInterval(()=>{i+=d,i>=a?(r.textContent=a,clearInterval(c)):r.textContent=Math.floor(i)},16)}let t=new IntersectionObserver((r,a)=>{r.forEach(o=>{o.isIntersecting&&(o.target.querySelectorAll(".achievement-stat-number").forEach(d=>e(d,parseInt(d.dataset.target))),o.target.querySelectorAll(".achievement-stat-card").forEach(d=>d.classList.add("achievement-animated")),a.unobserve(o.target))})},{threshold:.3,rootMargin:"0px"}),n=document.querySelector(".achievement-stats-section");n&&t.observe(n)}function O(){let e=document.getElementById("toggleTeam"),t=document.getElementById("teamSection");e&&t&&e.addEventListener("click",()=>{let o=t.style.display==="none"||t.style.display==="";t.style.display=o?"block":"none",e.textContent=o?"\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u043D\u0430\u0448\u0443 \u043A\u043E\u043C\u0430\u043D\u0434\u0443":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u043D\u0430\u0448\u0443 \u043A\u043E\u043C\u0430\u043D\u0434\u0443"});let n=document.getElementById("toggleHistory"),r=document.getElementById("historySection");n&&r&&n.addEventListener("click",()=>{let o=r.style.display==="none"||r.style.display==="";r.style.display=o?"block":"none",n.textContent=o?"\u041F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438 \u0456\u0441\u0442\u043E\u0440\u0456\u044E \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0438":"\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0456\u0441\u0442\u043E\u0440\u0456\u044E \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0438"}),document.querySelectorAll(".show-results").forEach(o=>{o.addEventListener("click",function(){let i=this.nextElementSibling,d=this.querySelector(".arrow");if(i&&i.classList.contains("results-slider")){let c=i.style.display==="none"||i.style.display==="";i.style.display=c?"block":"none",d&&(d.textContent=c?"\u25B2":"\u25BC")}})})}function U(){let e=document.getElementById("togglePricing"),t=document.getElementById("pricingTable"),n=document.getElementById("linkWrapper");e&&t&&n&&e.addEventListener("click",()=>{let r=t.style.display==="table";t.style.display=r?"none":"table",n.style.display=r?"none":"block",e.setAttribute("aria-expanded",!r),e.textContent=r?"\u0417\u043D\u0430\u0439\u0442\u0438 \u043D\u0430\u0439\u0432\u0438\u0433\u0456\u0434\u043D\u0456\u0448\u0438\u0439 \u043F\u0430\u043A\u0435\u0442":"\u043F\u0440\u0438\u0445\u043E\u0432\u0430\u0442\u0438"})}function H(){function e(){window.dataLayer=window.dataLayer||[];function a(){dataLayer.push(arguments)}window.gtag=a,a("js",new Date),a("config","G-PNL84GTKES")}function t({name:a,delta:o,id:i}){typeof gtag=="function"&&gtag("event",a,{event_category:"Web Vitals",event_label:i,value:Math.round(a==="CLS"?o*1e3:o),non_interaction:!0})}function n(){typeof getCLS=="function"&&getCLS(t),typeof getFID=="function"&&getFID(t),typeof getLCP=="function"&&getLCP(t),typeof getFCP=="function"&&getFCP(t),typeof getTTFB=="function"&&getTTFB(t)}function r(){let a=document.createElement("script");a.src="https://www.googletagmanager.com/gtag/js?id=G-PNL84GTKES",a.async=!0,a.onload=()=>{if(e(),!window.webVitalsLoaded){let o=document.createElement("script");o.src="scripts/vendor/web-vitals.iife.js",o.onload=n,o.onerror=()=>{console.warn("\u26A0\uFE0F Web Vitals \u043D\u0435 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E")},document.head.appendChild(o),window.webVitalsLoaded=!0}},a.onerror=()=>{console.warn("\u26A0\uFE0F Google Tag Manager \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439")},document.head.appendChild(a);try{(function(o,i,d,c,m,l,s){o[d]=o[d]||function(){(o[d].q=o[d].q||[]).push(arguments)},l=document.createElement(c),l.async=1,l.src="https://www.clarity.ms/tag/"+m,l.onerror=function(){console.warn("\u26A0\uFE0F Clarity \u043E\u0441\u043D\u043E\u0432\u043D\u0438\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439. \u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0437 CDN...");let u=document.createElement(c);u.async=1,u.src="https://cdn.jsdelivr.net/gh/microsoft/clarity@latest/clarity.js",u.onerror=function(){console.warn("\u274C Clarity CDN \u0442\u0430\u043A\u043E\u0436 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0438\u0439 (ad blocker)")},u.onload=function(){console.log("\u2705 Clarity \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E \u0437 \u0440\u0435\u0437\u0435\u0440\u0432\u043D\u043E\u0433\u043E CDN")},document.head.appendChild(u)},l.onload=function(){console.log("\u2705 Clarity \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E \u0443\u0441\u043F\u0456\u0448\u043D\u043E")},s=document.getElementsByTagName(c)[0],s.parentNode.insertBefore(l,s)})(window,document,"clarity","script","slktbp5ngx")}catch(o){console.warn("\u274C Clarity \u043D\u0435 \u0432\u0434\u0430\u043B\u043E\u0441\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438:",o)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()}function Y(){let e={portfolio:[{name:"\u0411\u0430\u0437\u043E\u0432\u0438\u0439 (5 \u0441\u0442\u043E\u0440\u0456\u043D\u043E\u043A)",price:500},{name:"\u0421\u0442\u0430\u043D\u0434\u0430\u0440\u0442 (+ \u0434\u0438\u0437\u0430\u0439\u043D \u0442\u0430 \u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0456\u044F)",price:600},{name:"\u041F\u0440\u0435\u043C\u0456\u0443\u043C (+ \u0430\u043D\u0456\u043C\u0430\u0446\u0456\u0457 \u0442\u0430 SEO)",price:700}],resume:[{name:"Classic",price:300},{name:"Creative",price:400},{name:"Minimal",price:450},{name:"Premium",price:550}],sites:[{name:"Landing page",price:800},{name:"\u0421\u0430\u0439\u0442 \u0434\u043B\u044F \u0440\u0435\u043A\u0440\u0443\u0442\u0435\u0440\u0430",price:1200},{name:'Instagram "Taplink"',price:500},{name:"\u0421\u0430\u0439\u0442 \u0434\u043B\u044F \u043C\u0456\u043A\u0440\u043E\u043A\u0440\u0435\u0434\u0438\u0442\u0443\u0432\u0430\u043D\u043D\u044F",price:1e3},{name:"\u0421\u0430\u0439\u0442 \u043F\u0435\u0440\u0435\u0432\u0435\u0437\u0435\u043D\u044C \u0404\u0421",price:1500}],adaptive:[{name:"\u0411\u0430\u0437\u043E\u0432\u0430",price:300},{name:"\u0420\u043E\u0437\u0448\u0438\u0440\u0435\u043D\u0430",price:450},{name:"\u041F\u0440\u0435\u043C\u0456\u0443\u043C",price:600}]},t=document.getElementById("service-type"),n=document.getElementById("service-option"),r=document.getElementById("service-options"),a=document.getElementById("additional-options"),o=document.getElementById("result"),i=document.getElementById("total-price"),d=document.getElementById("reset-calculator");if(!t||!n)return;let c=0;function m(){document.querySelectorAll('#additional-options input[type="checkbox"]').forEach(s=>{s.checked=!1})}function l(){let s=c;document.querySelectorAll('#additional-options input[type="checkbox"]:checked').forEach(u=>{s+=parseInt(u.value)}),i.textContent=`${s} \u0433\u0440\u043D`}t.addEventListener("change",function(){let s=this.value;s?(n.innerHTML='<option value="">-- \u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0432\u0430\u0440\u0456\u0430\u043D\u0442 --</option>',e[s].forEach(b=>{let p=document.createElement("option");p.value=b.price,p.textContent=`${b.name} \u2014 ${b.price} \u0433\u0440\u043D`,n.appendChild(p)}),r.style.display="block",a.style.display="none",o.style.display="none",d.style.display="none",m()):(r.style.display="none",a.style.display="none",o.style.display="none",d.style.display="none")}),n.addEventListener("change",function(){let s=parseInt(this.value);s?(c=s,a.style.display="block",o.style.display="block",d.style.display="block",l()):(c=0,a.style.display="none",o.style.display="none",d.style.display="none")}),document.querySelectorAll('#additional-options input[type="checkbox"]').forEach(s=>{s.addEventListener("change",l)}),d.addEventListener("click",function(){t.value="",n.innerHTML='<option value="">-- \u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0432\u0430\u0440\u0456\u0430\u043D\u0442 --</option>',r.style.display="none",a.style.display="none",o.style.display="none",d.style.display="none",c=0,m()})}function f(){let e=document.querySelector(".footer p");e&&(e.innerHTML=e.innerHTML.replace(/\d{4}/,new Date().getFullYear()))}document.addEventListener("DOMContentLoaded",f);function K(e){var a,o;document.querySelectorAll(".tab").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".tab-content").forEach(i=>i.classList.remove("active")),(a=document.querySelector(`[data-tab="${e}"]`))==null||a.classList.add("active"),(o=document.getElementById(e))==null||o.classList.add("active");let t=["registration","deployment","settings"],r=(t.indexOf(e)+1)/t.length*100;document.getElementById("progressBar").style.width=r+"%"}function g(){document.querySelectorAll(".tab").forEach(e=>{e.addEventListener("click",()=>K(e.dataset.tab))}),document.querySelectorAll(".step").forEach(e=>{e.addEventListener("click",()=>e.classList.toggle("expanded"))})}document.addEventListener("DOMContentLoaded",g);function k(){"serviceWorker"in navigator&&!window.pwaInitialized&&(window.pwaInitialized=!0,navigator.serviceWorker.register("/sw.js").catch(t=>console.error("\u041F\u043E\u043C\u0438\u043B\u043A\u0430 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457 SW:",t)));let e;window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),e=t;let n=document.createElement("button");n.innerText="\u0412\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u0434\u043E\u0434\u0430\u0442\u043E\u043A",n.style.position="fixed",n.style.bottom="20px",n.style.right="20px",n.style.zIndex="9999",document.body.appendChild(n),n.addEventListener("click",()=>{n.remove(),e.prompt(),e.userChoice.then(r=>{e=null,console.log("\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432\u0438\u0431\u043E\u0440\u0443 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430:",r.outcome)})})})}document.addEventListener("DOMContentLoaded",k);var h=class{constructor(t,n="social-proof",r="proof-text"){this.messages=t||[],this.box=document.getElementById(n),this.text=document.getElementById(r),this.lastIndex=-1,this.showDuration=5e3,this.initialDelay=12e4,this.intervalDelay=72e4,this.intervalId=null}init(){!this.box||!this.text||!this.messages.length||setTimeout(()=>{this.showRandomMessage(),this.intervalId=setInterval(()=>this.showRandomMessage(),this.intervalDelay)},this.initialDelay)}showRandomMessage(){if(!this.messages.length)return;let t;do t=Math.floor(Math.random()*this.messages.length);while(t===this.lastIndex);this.lastIndex=t,this.text.innerHTML=this.messages[t],this.box.classList.remove("hidden"),setTimeout(()=>this.box.classList.add("hidden"),this.showDuration)}stop(){this.intervalId&&clearInterval(this.intervalId)}};function R(e,t,n){let r=new h(e,t,n);return r.init(),r}var _=["\u{1F916} Djon<br>- \u041C\u0430\u0440\u0456\u044F \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043B\u0430\u0441\u044C \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F\u043C \u0440\u0435\u0437\u044E\u043C\u0435 \u{1F4C4}","\u{1F916} Djon<br>- \u041E\u043B\u0435\u0433 \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u043B\u0435\u043D\u0434\u0456\u043D\u0433 \u{1F310}","\u{1F916} Djon<br>- \u0410\u043D\u043D\u0430 \u043C\u0430\u0454 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u{1F3A8}","\u{1F916} Djon<br>- \u0406\u0433\u043E\u0440 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0432 \u043B\u0435\u043D\u0434\u0456\u043D\u0433 \u2705","\u{1F916} Djon<br>- \u041A\u0430\u0442\u0435\u0440\u0438\u043D\u0430 \u043F\u0440\u043E\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043B\u0430 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0442\u0435\u043A\u0441\u0442\u0456\u0432 \u0434\u043B\u044F \u0440\u0435\u0437\u044E\u043C\u0435 \u270D\uFE0F","\u{1F916} Djon<br>- \u0414\u043C\u0438\u0442\u0440\u043E \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0431\u0430\u043D\u0435\u0440 \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F5BC}\uFE0F","\u{1F916} Djon<br>- \u0412\u0456\u043A\u0442\u043E\u0440\u0456\u044F \u043C\u0430\u0454 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F4F1}","\u{1F916} Djon<br>- \u0421\u0435\u0440\u0433\u0456\u0439 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0432\u0441\u044F \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u043E\u044E \u043B\u0435\u043D\u0434\u0456\u043D\u0433\u0443 \u2705","\u{1F916} Djon<br>- \u041E\u043B\u0435\u043D\u0430 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u043B\u0430 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F58C}\uFE0F","\u{1F916} Djon<br>- \u0422\u0430\u0440\u0430\u0441 \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0431\u0430\u043D\u0435\u0440 \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F58C}\uFE0F","\u{1F916} Djon<br>- \u041D\u0430\u0442\u0430\u043B\u044F \u043F\u0440\u043E\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043B\u0430 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0442\u0435\u043A\u0441\u0442\u0456\u0432 \u0434\u043B\u044F \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u270D\uFE0F","\u{1F916} Djon<br>- \u0412\u0430\u0434\u0438\u043C \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0432 \u043B\u0435\u043D\u0434\u0456\u043D\u0433 \u0434\u043B\u044F \u043C\u043E\u0431\u0456\u043B\u044C\u043D\u043E\u0457 \u0432\u0435\u0440\u0441\u0456\u0457 \u{1F4F1}","\u{1F916} Djon<br>- \u0406\u043D\u043D\u0430 \u043C\u0430\u0454 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F5BC}\uFE0F","\u{1F916} Djon<br>- \u042E\u0440\u0456\u0439 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0432\u0441\u044F \u043C\u0456\u043D\u0456-\u0441\u0435\u0440\u0432\u0456\u0441\u043E\u043C \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0456\u0457 \u0442\u0435\u043A\u0441\u0442\u0456\u0432 \u270D\uFE0F","\u{1F916} Djon<br>- \u041B\u044E\u0434\u043C\u0438\u043B\u0430 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u043B\u0430 \u0441\u0432\u0456\u0439 \u043B\u0435\u043D\u0434\u0456\u043D\u0433 \u2705","\u{1F916} Djon<br>- \u041C\u0430\u043A\u0441\u0438\u043C \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0431\u0430\u043D\u0435\u0440 \u0434\u043B\u044F \u0440\u0435\u043A\u043B\u0430\u043C\u0438 \u0443 \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436\u0430\u0445 \u{1F4E2}","\u{1F916} Djon<br>- \u0410\u043D\u044F \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u043B\u0430 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F58C}\uFE0F","\u{1F916} Djon<br>- \u0414\u0435\u043D\u0438\u0441 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0432\u0441\u044F \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u043E\u044E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u2705","\u{1F916} Djon<br>- \u0421\u0432\u0456\u0442\u043B\u0430\u043D\u0430 \u043C\u0430\u0454 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F58C}\uFE0F","\u{1F916} Djon<br>- \u0420\u043E\u043C\u0430\u043D \u043F\u0440\u043E\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0432 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0442\u0435\u043A\u0441\u0442\u0456\u0432 \u0434\u043B\u044F \u0440\u0435\u0437\u044E\u043C\u0435 \u270D\uFE0F","\u{1F916} Djon<br>- \u0406\u0440\u0438\u043D\u0430 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043B\u0430\u0441\u044C \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F\u043C \u0440\u0435\u0437\u044E\u043C\u0435 \u{1F4C4}","\u{1F916} Djon<br>- \u0412\u043E\u043B\u043E\u0434\u0438\u043C\u0438\u0440 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0432 \u043B\u0435\u043D\u0434\u0456\u043D\u0433 \u2705","\u{1F916} Djon<br>- \u0422\u0435\u0442\u044F\u043D\u0430 \u043C\u0430\u0454 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u{1F3A8}","\u{1F916} Djon<br>- \u0410\u043D\u0434\u0440\u0456\u0439 \u043F\u0440\u043E\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0432 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0442\u0435\u043A\u0441\u0442\u0456\u0432 \u0434\u043B\u044F \u0440\u0435\u0437\u044E\u043C\u0435 \u270D\uFE0F","\u{1F916} Djon<br>- \u041E\u043A\u0441\u0430\u043D\u0430 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0430 \u0431\u0430\u043D\u0435\u0440 \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F5BC}\uFE0F","\u{1F916} Djon<br>- \u0404\u0432\u0433\u0435\u043D \u043C\u0430\u0454 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F4F1}","\u{1F916} Djon<br>- \u041D\u0430\u0437\u0430\u0440 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0432\u0441\u044F \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u043E\u044E \u043B\u0435\u043D\u0434\u0456\u043D\u0433\u0443 \u2705","\u{1F916} Djon<br>- \u041C\u0430\u0440\u0438\u043D\u0430 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u043B\u0430 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F58C}\uFE0F","\u{1F916} Djon<br>- \u0406\u043B\u043B\u044F \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0431\u0430\u043D\u0435\u0440 \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F58C}\uFE0F","\u{1F916} Djon<br>- \u0421\u043E\u0444\u0456\u044F \u043F\u0440\u043E\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043B\u0430 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0442\u0435\u043A\u0441\u0442\u0456\u0432 \u0434\u043B\u044F \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u270D\uFE0F","\u{1F916} Djon<br>- \u041F\u0430\u0432\u043B\u043E \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0432 \u043B\u0435\u043D\u0434\u0456\u043D\u0433 \u0434\u043B\u044F \u043C\u043E\u0431\u0456\u043B\u044C\u043D\u043E\u0457 \u0432\u0435\u0440\u0441\u0456\u0457 \u{1F4F1}","\u{1F916} Djon<br>- \u041E\u043B\u044F \u043C\u0430\u0454 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F5BC}\uFE0F","\u{1F916} Djon<br>- \u042F\u0440\u043E\u0441\u043B\u0430\u0432 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0432\u0441\u044F \u043C\u0456\u043D\u0456-\u0441\u0435\u0440\u0432\u0456\u0441\u043E\u043C \u0433\u0435\u043D\u0435\u0440\u0430\u0446\u0456\u0457 \u0442\u0435\u043A\u0441\u0442\u0456\u0432 \u270D\uFE0F","\u{1F916} Djon<br>- \u0412\u0456\u0440\u0430 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u043B\u0430 \u0441\u0432\u0456\u0439 \u043B\u0435\u043D\u0434\u0456\u043D\u0433 \u2705","\u{1F916} Djon<br>- \u041A\u043E\u0441\u0442\u044F\u043D\u0442\u0438\u043D \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0431\u0430\u043D\u0435\u0440 \u0434\u043B\u044F \u0440\u0435\u043A\u043B\u0430\u043C\u0438 \u0443 \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436\u0430\u0445 \u{1F4E2}","\u{1F916} Djon<br>- \u041B\u0456\u0437\u0430 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u043B\u0430 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F58C}\uFE0F","\u{1F916} Djon<br>- \u041C\u0438\u043A\u0438\u0442\u0430 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u0432\u0441\u044F \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u043E\u044E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u2705","\u{1F916} Djon<br>- \u041D\u0430\u0442\u0430\u043B\u0456\u044F \u043C\u0430\u0454 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F58C}\uFE0F","\u{1F916} Djon<br>- \u041E\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u043F\u0440\u043E\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0432 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0442\u0435\u043A\u0441\u0442\u0456\u0432 \u0434\u043B\u044F \u0440\u0435\u0437\u044E\u043C\u0435 \u270D\uFE0F","\u{1F916} Djon<br>- \u0421\u0432\u0456\u0442\u043B\u0430\u043D\u0430 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043B\u0430\u0441\u044C \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F\u043C \u0440\u0435\u0437\u044E\u043C\u0435 \u{1F4C4}","\u{1F916} Djon<br>- \u0406\u0433\u043E\u0440 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0432 \u043B\u0435\u043D\u0434\u0456\u043D\u0433 \u2705","\u{1F916} Djon<br>- \u0410\u043D\u0430\u0441\u0442\u0430\u0441\u0456\u044F \u043C\u0430\u0454 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u{1F3A8}","\u{1F916} Djon<br>- \u0412\u0430\u0434\u0438\u043C \u043F\u0440\u043E\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0432 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0442\u0435\u043A\u0441\u0442\u0456\u0432 \u0434\u043B\u044F \u0440\u0435\u0437\u044E\u043C\u0435 \u270D\uFE0F","\u{1F916} Djon<br>- \u0414\u0430\u0440\u0438\u043D\u0430 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0430 \u0431\u0430\u043D\u0435\u0440 \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F5BC}\uFE0F","\u{1F916} Djon<br>- \u0420\u043E\u043C\u0430\u043D \u043C\u0430\u0454 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F4F1}","\u{1F916} Djon<br>- \u0422\u0435\u0442\u044F\u043D\u0430 \u0441\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043B\u0430\u0441\u044C \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u043E\u044E \u043B\u0435\u043D\u0434\u0456\u043D\u0433\u0443 \u2705","\u{1F916} Djon<br>- \u041E\u043B\u0435\u0433 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0432 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F58C}\uFE0F","\u{1F916} Djon<br>- \u0406\u043D\u043D\u0430 \u043E\u0442\u0440\u0438\u043C\u0430\u043B\u0430 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0431\u0430\u043D\u0435\u0440 \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F58C}\uFE0F","\u{1F916} Djon<br>- \u0421\u0435\u0440\u0433\u0456\u0439 \u043F\u0440\u043E\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0432 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0442\u0435\u043A\u0441\u0442\u0456\u0432 \u0434\u043B\u044F \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E \u270D\uFE0F","\u{1F916} Djon<br>- \u041C\u0430\u0440\u0456\u044F \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u043B\u0430 \u043B\u0435\u043D\u0434\u0456\u043D\u0433 \u0434\u043B\u044F \u043C\u043E\u0431\u0456\u043B\u044C\u043D\u043E\u0457 \u0432\u0435\u0440\u0441\u0456\u0457 \u{1F4F1}","\u{1F916} Djon<br>- \u0410\u043D\u0434\u0440\u0456\u0439 \u043C\u0430\u0454 \u0433\u043E\u0442\u043E\u0432\u0438\u0439 \u0448\u0430\u0431\u043B\u043E\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u043C\u0435\u0440\u0435\u0436 \u{1F5BC}\uFE0F"];function F(){let e={"@context":"https://schema.org","@type":"Organization",name:"WebStart Studio",url:"https://scintillating-sunshine-94e986.netlify.app/",logo:"https://scintillating-sunshine-94e986.netlify.app/icons/icon-192x192.webp",description:"\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0456\u043E, \u0440\u0435\u0437\u044E\u043C\u0435 \u0442\u0430 \u043B\u0435\u043D\u0434\u0456\u043D\u0433\u0456\u0432 \u0437 \u0430\u0434\u0430\u043F\u0442\u0438\u0432\u043D\u043E\u044E \u0432\u0435\u0440\u0441\u0442\u043A\u043E\u044E, \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u043C \u0456 \u0440\u0435\u043A\u043B\u0430\u043C\u043E\u044E.",sameAs:["https://www.facebook.com/profile.php?id=61575866647011","https://www.instagram.com/freelancer_pit_frontend?igsh=dHJrc3BhcHU5bXp6"],contactPoint:{"@type":"ContactPoint",telephone:"+380661391932",contactType:"Customer Service",areaServed:"UA, PL",availableLanguage:["Ukrainian","Polish"]}},t={"@context":"https://schema.org","@type":"WebSite",url:"https://scintillating-sunshine-94e986.netlify.app/",potentialAction:{"@type":"SearchAction",target:"https://scintillating-sunshine-94e986.netlify.app/?q={search_term_string}","query-input":"required name=search_term_string"}},n=document.createElement("script");n.type="application/ld+json",n.textContent=JSON.stringify(e),document.head.appendChild(n);let r=document.createElement("script");r.type="application/ld+json",r.textContent=JSON.stringify(t),document.head.appendChild(r)}function G(){"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(e=>{e.onupdatefound=()=>{let t=e.installing;t.onstatechange=()=>{t.state==="installed"&&navigator.serviceWorker.controller&&Q()}}})}function Q(){let e=document.createElement("div");e.className="update-banner",e.innerHTML=`
        <div>\u{1F504} \u0414\u043E\u0441\u0442\u0443\u043F\u043D\u0435 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F</div>
        <button>\u041E\u043D\u043E\u0432\u0438\u0442\u0438</button>
    `,e.querySelector("button").onclick=()=>window.location.reload(),e.style.opacity="0",e.style.transform="translateY(-100%)",e.style.transition="opacity 0.6s ease-out, transform 0.6s ease-out",document.body.appendChild(e),requestAnimationFrame(()=>{e.style.opacity="1",e.style.transform="translateY(0)"}),setTimeout(()=>{e.style.opacity="0",e.style.transform="translateY(-100%)",setTimeout(()=>e.remove(),600)},1e4)}document.addEventListener("DOMContentLoaded",()=>{console.log("\u{1F680} WebStart Studio - \u0406\u043D\u0456\u0446\u0456\u0430\u043B\u0456\u0437\u0430\u0446\u0456\u044F..."),v(),w(),E(),x(),L(),B(),S(),D(),C(),T(),j(),q(),M(),P(),A(),$(),W(),O(),U(),H(),Y(),f(),g(),k(),R(_),F(),G(),console.log("\u2705 \u0412\u0441\u0456 \u043C\u043E\u0434\u0443\u043B\u0456 \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043E")});})();
//# sourceMappingURL=bundle.js.map
