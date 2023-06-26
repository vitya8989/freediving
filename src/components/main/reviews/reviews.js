new Swiper('.reviews__slider', {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".reviews__slider_next",
        prevEl: ".reviews__slider_prev",
    },
    pagination: {
        el: '.reviews__slider_pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
    },
});