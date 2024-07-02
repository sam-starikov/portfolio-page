/* swiper */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // centeredSlides: true,
    slidesPerView: 1,
    /* end */

    /* effects */
    // effect: 'coverflow',
    // coverflowEffect: {
    //     rotate: 30,
    //     slideShadows: true,
    // },
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    /* end */

    // Navigation arrows
    navigation: {
        nextEl: '.section__slider-btn--next',
        prevEl: '.section__slider-btn--prev',
    },
})
