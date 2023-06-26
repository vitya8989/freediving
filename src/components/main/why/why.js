new Swiper('.why__slider', {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    spaceBetween: 40,
    navigation: {
        nextEl: ".why__slider_next",
        prevEl: ".why__slider_prev",
    },
    pagination: {
        el: '.why__slider_pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
    },
});