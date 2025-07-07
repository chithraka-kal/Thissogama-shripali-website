var swiper = new Swiper(".slide-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1, // Corrected from sliderPerGroup
  loop: true,
  centeredSlides: true, // Corrected from centerSlide
  fade: true, // Corrected from fade
  grabCursor: true, // Corrected from grabCursor
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
