new Swiper('.why__slider', {
    speed: 400,
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    spaceBetween: 10,
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
            spaceBetween: 10,
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 40,
            slidesPerView: 3,
        },
    },
});