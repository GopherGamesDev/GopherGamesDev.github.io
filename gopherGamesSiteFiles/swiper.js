// Image slider for Home Page
// Last upadted: 11/25/24
// Mike Adams

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    loopPreventsSliding: false,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 7000,
        pauseOnMouseEnter: true,
    },
    speed: 300,
});
