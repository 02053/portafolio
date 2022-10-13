const d = document;
const w = window;

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

const responsiveMap = (id, mq, contentMobile, contentDesktop) => {
    const breakpoint = w.matchMedia(mq);

    const responsive = (e) => {
        if (e.matches) {
            d.getElementById(id).innerHTML = contentDesktop;
        } else {
            d.getElementById(id).innerHTML = contentMobile;
        }
    };

    breakpoint.addEventListener('change', responsive);

    responsive(breakpoint);
};

d.addEventListener('DOMContentLoaded', () => {
    hamburgerMenu(
        '.container-btn',
        '#menu',
        '#menu a',
        '.container-btn i:first-of-type',
        '.container-btn i:last-of-type',
    );
    responsiveMap(
        'gmap',
        '(min-width: 1024px)',
        `<a href="https://goo.gl/maps/iUsPKEUWKcppvUN16" target="_blank" rel="noopener noreferrer nofollow">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.
        9156462425626!2d-70.12355963469308!3d-15.542652120955097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
        1!3m3!1m2!1s0x9167f447fbe354b5%3A0xe1c69af1db1141ea!2sL2%2C%20Juliaca%
        2021104!5e0!3m2!1ses-419!2spe!4v1665699296708!5m2!1ses-419!2spe" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    );
});
