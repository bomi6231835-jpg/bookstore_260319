// #slider swiper
var slider_swiper = new Swiper(".sliderSwiper", {
    navigation: {
        nextEl: "#slider .swiper-button-next",
        prevEl: "#slider .swiper-button-prev",
    },
    pagination: {
        el: "#slider .swiper-pagination",
        clickable: true,
       
    },
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
});