var swiper = new Swiper(".AboutSlider", {
    loop: true,
    spaceBetween: 15,
    slidesPerView: 1.8,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        767: {
            slidesPerView: 1.8,
            spaceBetween: 60,
        },
    },
});