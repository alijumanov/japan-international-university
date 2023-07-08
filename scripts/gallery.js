
var swiper = new Swiper(".gal", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'fraction',
    },
});