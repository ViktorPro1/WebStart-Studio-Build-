export function initMigrationNotice() {
    const noticeClose = document.querySelector('.notice-close');
    const notice = document.querySelector('.platform-migration-notice');

    if (noticeClose && notice) {
        noticeClose.addEventListener('click', () => {
            notice.classList.add('hidden');
            // 👇 sessionStorage замість localStorage
            sessionStorage.setItem('migration-notice-closed', 'true');
        });

        // 👇 sessionStorage замість localStorage
        if (sessionStorage.getItem('migration-notice-closed') === 'true') {
            notice.classList.add('hidden');
        }
    }
}
