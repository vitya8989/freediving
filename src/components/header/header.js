// const langHead = document.querySelector('.js_lang_head');
// const langBody = document.querySelector('.js_lang_body');
//
// langHead.addEventListener('click', () => {
//     langHead.classList.toggle('active');
//     langBody.classList.toggle('open');
// });

document.body.addEventListener('click', (e) => {
   if (!e.target.closest('.js_langs_select')) {
       langHead.classList.remove('active');
       langBody.classList.remove('open');
   }
});

const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');

headerBurger.addEventListener('click', () => {
    headerNav.classList.toggle('show');
    headerBurger.classList.toggle('active');
    document.body.classList.toggle('this--overflow');
});

const header = document.querySelector('.header');

if (window.pageYOffset > 0 && !header.classList.contains('scroll')) {
    header.classList.add('scroll');
} else if (window.pageYOffset === 0) {
    header.classList.remove('scroll');
}
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0 && !header.classList.contains('scroll')) {
        header.classList.add('scroll');
    } else if (window.pageYOffset === 0) {
        header.classList.remove('scroll');
    }
});

const headeMenuLinks = header.querySelectorAll('.header__menu_link');

headeMenuLinks.forEach(link => {

    link.addEventListener('click', function (e) {
        e.preventDefault();
        headerNav.classList.remove('show');
        headerBurger.classList.remove('active');
        document.body.classList.remove('this--overflow');
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        let topOffset = header.offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});