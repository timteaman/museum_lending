function createSlider(selector, options = {}) {
  const defaultOptions = {
    direction: 'horizontal',
    loop: true,
    lazyLoading: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.slider-actions__dots',
      bulletClass: 'slider-actions__dot',
      bulletActiveClass: 'slider-actions__dot--active',
      clickable: true,
    },
    navigation: {
      nextEl: '.slider-btn--next',
      prevEl: '.slider-btn--prev',
    },
    spaceBetween: 0,
    centeredSlides: true,
  };

  const mergedOptions = { ...defaultOptions, ...options };

  return new Swiper(selector, mergedOptions);
}

const reviewSlider = createSlider('.events-slider', {
  pagination: {
    el: '.events-slider__dots',
  },
  navigation: {
    nextEl: '.events-slider__btn--next',
    prevEl: '.events-slider__btn--prev',
  },
  speed: 1000,
  slidesPerView: 1,
});
