if (document.querySelector('.instructors__slider')) {
    const offerSlider = new Swiper('.instructors__slider', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: ".instructors__slider_next",
            prevEl: ".instructors__slider_prev",
        },
        autoHeight: true,
        pagination: {
            el: '.instructors__slider_pagination',
            clickable: true
        }

    });

    window.addEventListener('DOMContentLoaded', () => {
        offerSlider.update();
    });
}