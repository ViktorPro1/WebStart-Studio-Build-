// Поділитися в соцмережах
export function initSocialShare() {
    window.share = function (network) {
        const url = encodeURIComponent('https://scintillating-sunshine-94e986.netlify.app/');
        const text = encodeURIComponent('WebStart Studio!');
        let shareUrl = '';

        switch (network) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case 'telegram':
                shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
                break;
            case 'viber':
                alert('Щоб поділитися у Viber, скопіюйте посилання: ' + decodeURIComponent(url));
                return;
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
                break;
            case 'messenger':
                shareUrl = `fb-messenger://share/?link=${url}`;
                break;
            default:
                alert('Соцмережа не підтримується');
                return;
        }

        window.open(shareUrl, '_blank', 'width=600,height=400');
    };

    console.log('✅ share() готова');
}
