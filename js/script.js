let menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

let logoHome = document.querySelector('#logo');
logoHome.setAttribute('href', window.location.href);

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});

window.addEventListener('load', function () {
    document.querySelector('nav button').addEventListener('click', function () {
        document.querySelector('nav').classList.toggle('display');
    });
    document.documentElement.addEventListener('click', function (event) {
        if (event.target.closest('header') == null) resetMenu();
    });
});

window.addEventListener('scroll', resetMenu);

window.addEventListener('resize', function () {
    if (window.outerWidth > 767) resetMenu();
});

function resetMenu() {
    document.querySelector('nav').classList.remove('display');
    menuBtn.classList.remove('open');
    menuOpen = false;
}