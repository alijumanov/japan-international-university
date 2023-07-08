var swiper = new Swiper(".abcarousel", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1.5,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        767: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});