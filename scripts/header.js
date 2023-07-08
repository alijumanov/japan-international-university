var swiper = new Swiper(".Header", {
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination-custom",
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return '0' + current + '/' + '0' + (total);
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let pag = document.querySelector(".swiper-pagination-custom");

window.addEventListener("load", () => {
    pag.classList.remove("swiper-pagination-fraction")
    pag.classList.remove("swiper-pagination-horizontal")
})