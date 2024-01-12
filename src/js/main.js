// swiper js

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

const eventsSlider = createSlider('.events-slider', {
  scrollbar: {
    el: '.events-slider__bar',
    draggable: true,
  },
  navigation: {
    nextEl: '.events-slider__btn--next',
    prevEl: '.events-slider__btn--prev',
  },
  speed: 1000,
  slidesPerView: 1,
});

const gallerySlider = createSlider('.gallery-slider', {
  scrollbar: {
    el: '.gallery-slider__bar',
    draggable: true,
  },
  navigation: {
    nextEl: '.gallery-slider__btn--next',
    prevEl: '.gallery-slider__btn--prev',
  },
  speed: 1000,
  slidesPerView: 3,
});

// show and hide info block- content

document.querySelectorAll('.info__item').forEach(function (item) {
  item.addEventListener('click', function () {
    this.classList.toggle('show-content');
  });
});

// header fixed

document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  const headerHeight = header.offsetHeight;

  window.addEventListener('scroll', function () {
    if (window.pageYOffset >= headerHeight) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });
});
