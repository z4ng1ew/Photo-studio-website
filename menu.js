document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-burger__header').addEventListener('click', function() {
        document.querySelector('.menu-burger__header').classList.toggle('open-menu');
    });

    document.querySelector('.menu-burger__header').addEventListener('click', function() {
        document.querySelector('.menu-burger__header').classList.toggle('open-menu');
        document.querySelector('.header__nav').classList.toggle('open-menu');
    });

    document.querySelector('.header__burger').addEventListener('click', function(event) {
        document.querySelector('.header__burger').classList.toggle('active');
        document.querySelector('.header__menu').classList.toggle('active');
        document.body.classList.toggle('fixed-page');
    });
});