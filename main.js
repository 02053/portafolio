const d = document;

const hamburgerMenu = (menuBtn, menu, menuLink, btnOpen, btnClose) => {
    d.addEventListener('click', (e) => {
        if (e.target.matches(menuBtn) || e.target.matches(`${menuBtn} *`)) {
            d.querySelector(menu).classList.toggle('is-active');
            d.querySelector(btnOpen).classList.toggle('none');
            d.querySelector(btnClose).classList.toggle('none');
        }

        if (e.target.matches(menuLink)) {
            d.querySelector(menu).classList.remove('is-active');
            d.querySelector(btnOpen).classList.toggle('none');
            d.querySelector(btnClose).classList.toggle('none');
        }
    });
};

d.addEventListener('DOMContentLoaded', () => {
    hamburgerMenu(
        '.container-btn',
        '#menu',
        '#menu a',
        '.container-btn i:first-of-type',
        '.container-btn i:last-of-type',
    );
});
