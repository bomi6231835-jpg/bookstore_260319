 //head_slider
 var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: "#slider.swiper-pagination",
        type: "fraction",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: "#slider.swiper-button-next",
        prevEl: "#slider.swiper-button-prev",
      },
    });
 
 // bestSeller swiper
 
 var swiper = new Swiper(".bestSeller", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: "#bestSeller.swiper-pagination",
        clickable: true,
      },
      slidesPerGroup: 3  //한번에 3개씩 넘어가는 효과
    });