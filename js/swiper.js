// #slider swiper
const slider_swiper = new Swiper(".sliderSwiper", {
    loop:true,
    navigation: {
        nextEl: "#slider .swiper-button-next",
        prevEl: "#slider .swiper-button-prev",
    },
    pagination: {
        el: "#slider .swiper-pagination",
        clickable: true,
       
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});
