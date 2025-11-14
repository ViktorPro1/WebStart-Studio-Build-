export function initUtmGenerator() {
    const generateBtn = document.getElementById('utm-generate-btn');
    const copyBtn = document.getElementById('utm-copy-btn');

    generateBtn?.addEventListener('click', generateUtmUrl);
    copyBtn?.addEventListener('click', copyUtmUrl);

    function generateUtmUrl() {
        const url = document.getElementById('url').value.trim();
        const source = document.getElementById('source').value.trim();
        const medium = document.getElementById('medium').value.trim();
        const campaign = document.getElementById('campaign').value.trim();
        const term = document.getElementById('term').value.trim();
        const content = document.getElementById('content').value.trim();
        const msg = document.getElementById('utm-copy-msg');

        msg?.classList.remove('show');

        if (!url || !source || !medium || !campaign) {
            document.getElementById('generatedUrl').innerText =
                "Будь ласка, заповніть усі обов'язкові поля (*).";
            copyBtn.disabled = true;
            return;
        }

        const utmParams = [];
        if (source) utmParams.push(`utm_source=${source}`);
        if (medium) utmParams.push(`utm_medium=${medium}`);
        if (campaign) utmParams.push(`utm_campaign=${campaign}`);
        if (term) utmParams.push(`utm_term=${term}`);
        if (content) utmParams.push(`utm_content=${content}`);

        const separator = url.includes('?') ? '&' : '?';
        const finalUrl = url + separator + utmParams.join('&');

        document.getElementById('generatedUrl').innerText = finalUrl;
        copyBtn.disabled = false;
    }

    function copyUtmUrl() {
        const text = document.getElementById('generatedUrl').innerText;
        const msg = document.getElementById('utm-copy-msg');
        navigator.clipboard.writeText(text).then(() => {
            msg?.classList.add('show');
            setTimeout(() => msg?.classList.remove('show'), 2000);
        });
    }
}
